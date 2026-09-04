"""DEM（TINRelief GML）→ 地形グリッド・高さサンプラー・地形メッシュ。

PLATEAU CityGML の udx/dem/*.gml は dem:ReliefFeature → dem:TINRelief →
gml:TriangulatedSurface（gml:Triangle > gml:posList "lat lon z ..."、JGD2011/EPSG:6697）。

lxml ではなくチャンク単位バイトスキャン＋正規表現で posList を高速抽出し、
当地平面座標の規則グリッド（TERRAIN_CELL m）に平均集約する。
"""
from __future__ import annotations

import re
import time
from pathlib import Path

import numpy as np
import trimesh
from shapely.geometry import box

import config
import geo

ROOT = Path(__file__).resolve().parent.parent
POS_RE = re.compile(rb"<gml:posList[^>]*>([0-9eE\.\- ]+)</gml:posList>")


class Terrain:
    """DEM TIN を規則グリッドに集約した地形データ。"""

    def __init__(self) -> None:
        lcb = geo.local_clip_box()
        self.min_x, self.min_y, self.max_x, self.max_y = (float(v) for v in lcb.bounds)
        cell = config.TERRAIN_CELL
        self.nx = int(round((self.max_x - self.min_x) / cell)) + 1
        self.ny = int(round((self.max_y - self.min_y) / cell)) + 1
        self.cell = (self.max_x - self.min_x) / (self.nx - 1)
        self.sum_z = np.zeros((self.ny, self.nx), dtype=np.float64)
        self.count = np.zeros((self.ny, self.nx), dtype=np.int32)
        b = config.BBOX
        m = config.BBOX_MARGIN
        self.lat_lo, self.lat_hi = b["south"] - m, b["north"] + m
        self.lon_lo, self.lon_hi = b["west"] - m, b["east"] + m

    # ------------------------------------------------------------- スキャン
    def _scan_file(self, path: Path) -> None:
        head = path.read_bytes()[:8192].decode("utf-8", "replace")
        m_low = re.search(r"<gml:lowerCorner>([\d.]+) ([\d.]+)", head)
        m_up = re.search(r"<gml:upperCorner>([\d.]+) ([\d.]+)", head)
        if m_low and m_up:
            s, w = (float(v) for v in m_low.groups())
            n, e = (float(v) for v in m_up.groups())
            cb = box(self.lon_lo, self.lat_lo, self.lon_hi, self.lat_hi)
            if not box(w, s, e, n).intersects(cb):
                print(f"  dem: {path.name} envelope外 → スキップ")
                return
        tail = b""
        n_pts = 0
        with open(path, "rb") as f:
            while True:
                chunk = f.read(32 << 20)
                if not chunk:
                    break
                buf = tail + chunk
                for m in POS_RE.finditer(buf):
                    vals = np.array(m.group(1).split(), dtype=float)
                    if len(vals) < 6:
                        continue
                    n3 = (len(vals) // 3) * 3
                    lat, lon, z = vals[0:n3:3], vals[1:n3:3], vals[2:n3:3]
                    mask = (lat >= self.lat_lo) & (lat <= self.lat_hi) & (lon >= self.lon_lo) & (lon <= self.lon_hi)
                    if not mask.any():
                        continue
                    lat, lon, z = lat[mask], lon[mask], z[mask]
                    x, y = geo.jgd_to_local(lat, lon)
                    ix = np.clip(np.round((x - self.min_x) / self.cell).astype(int), 0, self.nx - 1)
                    iy = np.clip(np.round((y - self.min_y) / self.cell).astype(int), 0, self.ny - 1)
                    np.add.at(self.sum_z, (iy, ix), z)
                    np.add.at(self.count, (iy, ix), 1)
                    n_pts += len(z)
                tail = buf[-4096:]
        print(f"  dem: {path.name} -> 採用点 {n_pts}")

    def build(self) -> None:
        """全DEMファイルをスキャンし、高さグリッド h (ny, nx) を構築する。"""
        t0 = time.time()
        files = sorted((ROOT / "data" / "plateau").glob("*/dem/*.gml"))
        if not files:
            raise RuntimeError("DEM GML が見つかりません（src/extract_plateau.py を実行してください）")
        for path in files:
            self._scan_file(path)
        h = np.full((self.ny, self.nx), np.nan)
        filled = self.count > 0
        if not filled.any():
            raise RuntimeError("DEM: bbox内にデータなし")
        h[filled] = self.sum_z[filled] / self.count[filled]
        # 空ノード（境界ギャップ等）を近傍平均の反復で補間
        for _ in range(96):
            empty = ~np.isfinite(h)
            if not empty.any():
                break
            nb_sum = np.zeros_like(h)
            nb_cnt = np.zeros_like(h)
            for dy, dx in ((-1, 0), (1, 0), (0, -1), (0, 1)):
                s = np.roll(np.where(np.isfinite(h), h, 0.0), (dy, dx), axis=(0, 1))
                c = np.roll(np.where(np.isfinite(h), 1.0, 0.0), (dy, dx), axis=(0, 1))
                nb_sum += s
                nb_cnt += c
            ok = empty & (nb_cnt > 0)
            h[ok] = nb_sum[ok] / nb_cnt[ok]
        if np.isnan(h).any():
            raise RuntimeError("DEM: 補間後も空ノードが残存")
        self.h = h
        self.min_elev = float(h.min())
        self.max_elev = float(h.max())
        print(
            f"terrain grid: {self.nx}x{self.ny} nodes ({self.cell:.1f}m), "
            f"elev [{self.min_elev:.1f}, {self.max_elev:.1f}] m, 所要 {time.time() - t0:.0f}s"
        )

    # ------------------------------------------------------------- サンプル
    def height(self, x, y):
        """地面標高(m)を双線形補間で取得。スカラー/配列対応。"""
        fx = (np.asarray(x, dtype=float) - self.min_x) / self.cell
        fy = (np.asarray(y, dtype=float) - self.min_y) / self.cell
        i0 = np.clip(np.floor(fx).astype(int), 0, self.nx - 2)
        j0 = np.clip(np.floor(fy).astype(int), 0, self.ny - 2)
        tx = np.clip(fx - i0, 0.0, 1.0)
        ty = np.clip(fy - j0, 0.0, 1.0)
        h = self.h
        v00 = h[j0, i0]
        v10 = h[j0, i0 + 1]
        v01 = h[j0 + 1, i0]
        v11 = h[j0 + 1, i0 + 1]
        return (v00 * (1 - tx) + v10 * tx) * (1 - ty) + (v01 * (1 - tx) + v11 * tx) * ty

    # ------------------------------------------------------------- メッシュ
    def build_mesh(self) -> trimesh.Trimesh:
        """グリッド → 地形メッシュ（標高に応じた頂点色、法線は上向き）。"""
        h = self.h
        xs = self.min_x + np.arange(self.nx) * self.cell
        ys = self.min_y + np.arange(self.ny) * self.cell
        X, Y = np.meshgrid(xs, ys)  # (ny, nx)
        verts = np.column_stack([X.ravel(), Y.ravel(), h.ravel()])
        i = np.arange(self.nx - 1)
        j = np.arange(self.ny - 1)
        a = j[:, None] * self.nx + i[None, :]      # (j, i)     左下
        b_ = a + 1                                  # (j, i+1)   右下
        c_ = a + self.nx                            # (j+1, i)   左上
        d_ = a + self.nx + 1                        # (j+1, i+1) 右上
        faces = np.vstack(
            [
                np.column_stack([a.ravel(), b_.ravel(), d_.ravel()]),
                np.column_stack([a.ravel(), d_.ravel(), c_.ravel()]),
            ]
        )
        m = trimesh.Trimesh(vertices=verts, faces=faces, process=False)
        lo = config.TERRAIN_COLORS[0]
        hi = config.TERRAIN_COLORS[1]
        lo_rgb = np.array([int(lo[k : k + 2], 16) for k in (1, 3, 5)], dtype=float)
        hi_rgb = np.array([int(hi[k : k + 2], 16) for k in (1, 3, 5)], dtype=float)
        tt = np.clip((h.ravel() - self.min_elev) / max(self.max_elev - self.min_elev, 1e-6), 0.0, 1.0)
        rgb = np.round(lo_rgb[None, :] + (hi_rgb - lo_rgb)[None, :] * tt[:, None]).astype(np.uint8)
        m.visual.vertex_colors = np.column_stack([rgb, np.full(len(rgb), 255, dtype=np.uint8)])
        m.name = "terrain"
        return m

