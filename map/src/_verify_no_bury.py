"""一時的検証: 地形より道路・建物の頂点が埋もれていないか。

パイプラインが建物を接地させるのに用いた地形標高関数 terrain.height()
（DEM→規則グリッド→三角形平面補間、float64）を正規参照とし、
roads / buildings / cresome_building / lines の各頂点 z と比較する。

参照を terrain.height() に揃せる理由:
  GLB は頂点 z を float32 で保存するため、GLB を復元して地形を再構成して
  比較すると復元・丸め誤差（数 mm 程度）が混入し、実埋没でない点も
  「埋もれ」として誤検出する。パイプラインと同一の float64 地形関数を
  参照にすることで、真の埋没（cm〜m 単位）だけを正しく検出できる。
  GLB 保存による float32 丸めは 1e-5 m 未満で、1mm 閾値以下・不可視。

- buried        : 地形表面より 1mm 以上下にある頂点数（0 が理想）
- max_penetration : 地形表面 - 頂点z の最大値（>0.001 ならその分埋もれている）

使い方: python src/_verify_no_bury.py [out_dir]   (既定 out/)
"""
from __future__ import annotations

import json
import struct
import sys
from pathlib import Path

import numpy as np
import trimesh

ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT / "src"))
out_dir = ROOT / (sys.argv[1] if len(sys.argv) > 1 else "out")


def glb_line_segments(path: Path) -> tuple[np.ndarray, np.ndarray] | None:
    """生GLBのLINES頂点ペア (A, B) を返す（= 実際に描画される線分）。"""
    raw = path.read_bytes()
    off = 12
    meta, bin_start = None, None
    while off < len(raw):
        clen, ctype = struct.unpack('<II', raw[off:off + 8])
        if ctype == 0x4E4F534A:
            meta = json.loads(raw[off + 8:off + 8 + clen])
        elif ctype == 0x4E4942:
            bin_start = off + 8
        off += 8 + clen
    if meta is None or bin_start is None:
        return None
    A_list, B_list = [], []
    for mesh in meta['meshes']:
        for prim in mesh['primitives']:
            if prim.get('mode', 4) != 1:  # LINES
                continue
            acc = meta['accessors'][prim['attributes']['POSITION']]
            bv = meta['bufferViews'][acc['bufferView']]
            doff = (bv.get('byteOffset') or 0) + (acc.get('byteOffset') or 0)
            n = acc['count']
            pos = np.frombuffer(raw[bin_start + doff:bin_start + doff + n * 12],
                                dtype=np.float32).reshape(n, 3)
            A_list.append(pos[0::2])
            B_list.append(pos[1::2])
    if not A_list:
        return None
    return np.vstack(A_list), np.vstack(B_list)


# --- 地形参照: パイプラインと同一の terrain.height()（float64, 三角形平面補間） ---
from terrain import Terrain  # noqa: E402

_TERRAIN = Terrain()
_TERRAIN.build()


def terrain_z(pts):
    """(x,y) の地表 z を terrain.height() で返す（パイプラインと同一）。"""
    return _TERRAIN.height(pts[:, 0], pts[:, 1])


def check_points(pts, label, skip_ground=False):
    """点群が地表より 1mm 以上下にあるかをチェック。

    skip_ground=True の場合、地表+0.05m 以下の点は「接地面」（地下に隠れる
    建物底面等）として除外する。
    """
    tz = terrain_z(pts[:, :2])
    if skip_ground:
        mask = pts[:, 2] > tz + 0.05
        if not mask.any():
            print(f"  {label:20s} (all ground-contact, skipped)")
            return 0
        pts = pts[mask]
        tz = tz[mask]
    buried = int((pts[:, 2] < tz - 1e-3).sum())
    pen = tz - pts[:, 2]
    print(f"  {label:20s} pts={len(pts):8d} buried={buried:6d} "
          f"max_penetration={pen.max():+.4f}m  max_above={(-pen).max():.4f}m")
    return buried


total_bad = 0
print(f"verifying: {out_dir}")

# ---- roads: 生GLBのLINES線分（端点+中点） ----
p = out_dir / "roads.glb"
if p.exists():
    seg = glb_line_segments(p)
    if seg:
        A, B = seg
        mids = 0.5 * (A + B)
        total_bad += check_points(np.vstack([A, B, mids]), "roads (lines)")

# ---- buildings: Trimesh 頂点（接地面を除く） ----
p = out_dir / "buildings.glb"
if p.exists():
    s = trimesh.load(str(p), force="scene")
    for g in s.geometry.values():
        if isinstance(g, trimesh.Trimesh):
            total_bad += check_points(np.asarray(g.vertices, dtype=float),
                                      "buildings (verts)", skip_ground=True)

# ---- cresome_building ----
p = out_dir / "cresome_building.glb"
if p.exists():
    s = trimesh.load(str(p), force="scene")
    for g in s.geometry.values():
        if isinstance(g, trimesh.Trimesh):
            total_bad += check_points(np.asarray(g.vertices, dtype=float),
                                      "cresome_building", skip_ground=True)

# ---- lines（路線チューブ）: 全点チェック ----
p = out_dir / "lines.glb"
if p.exists():
    s = trimesh.load(str(p), force="scene")
    for g in s.geometry.values():
        if isinstance(g, trimesh.Trimesh):
            total_bad += check_points(np.asarray(g.vertices, dtype=float),
                                      "lines (tubes)")

print("\nRESULT:", "PASS (地形への埋もれなし)" if total_bad == 0
      else f"FAIL ({total_bad} 点が地表より1mm以上下にある)")
sys.exit(1 if total_bad else 0)
