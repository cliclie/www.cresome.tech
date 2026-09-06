"""検証: 白地図 roads.glb の境界線が道路面より約0.1m浮いていることを確認する。

背景: 境界線は従来 Z_ROAD+0.5 で生成され、面(Z_ROAD)から0.4m浮いていた。
修正: Z_ROAD+0.1 に変更。境界線の頂点は面の角頂点とXY一致するため、
      最近傍頂点のZ差がそのまま「線-面」オフセットになる。
併せて parks/water の線オフセット(従来どおり+0.3)も地形基準で確認する。
"""
from __future__ import annotations

import sys
from pathlib import Path

import numpy as np
import trimesh
from scipy.spatial import cKDTree
from trimesh.path import Path3D

ROOT = Path(__file__).resolve().parent.parent
fail = False


def load_parts(name: str):
    scene = trimesh.load(str(ROOT / "out_white" / f"{name}.glb"), force="scene")
    line_verts = mesh = None
    for geom in scene.geometry.values():
        if isinstance(geom, Path3D):
            line_verts = np.asarray(geom.vertices, dtype=float)
        elif isinstance(geom, trimesh.Trimesh):
            mesh = geom
    return line_verts, mesh


# --- 地形グリッドを terrain.glb から復元（規則グリッド、双線形補間） ---
tscene = trimesh.load(str(ROOT / "out_white" / "terrain.glb"), force="scene")
tgeom = next(g for g in tscene.geometry.values() if isinstance(g, trimesh.Trimesh))
tv = np.asarray(tgeom.vertices, dtype=float)
xs = np.unique(np.round(tv[:, 0], 3))
ys = np.unique(np.round(tv[:, 1], 3))
xi = {x: i for i, x in enumerate(xs)}
yi = {y: i for i, y in enumerate(ys)}
zg = np.full((len(ys), len(xs)), np.nan)
for x, y, z in tv:
    zg[yi[round(y, 3)], xi[round(x, 3)]] = z


def terrain_h(pts):
    fx = (pts[:, 0] - xs[0]) / (xs[1] - xs[0])
    fy = (pts[:, 1] - ys[0]) / (ys[1] - ys[0])
    i0 = np.clip(np.floor(fx), 0, len(xs) - 2).astype(int)
    j0 = np.clip(np.floor(fy), 0, len(ys) - 2).astype(int)
    tx = np.clip(fx - i0, 0.0, 1.0)
    ty = np.clip(fy - j0, 0.0, 1.0)
    v00 = zg[j0, i0]
    v10 = zg[j0, i0 + 1]
    v01 = zg[j0 + 1, i0]
    v11 = zg[j0 + 1, i0 + 1]
    return (v00 * (1 - tx) + v10 * tx) * (1 - ty) + (v01 * (1 - tx) + v11 * tx) * ty


# --- roads: 境界線頂点 vs 面の角頂点（XY一致）のZ差 ---
lv, mv = load_parts("roads")
mv = np.asarray(mv.vertices, dtype=float)
tree = cKDTree(mv[:, :2])
dist, idx = tree.query(lv[:, :2], k=1)
on_corner = dist < 0.01
dz = lv[on_corner, 2] - mv[idx[on_corner], 2]
print(f"roads : 線頂点={len(lv)} XY一致={on_corner.sum()} "
      f"Z差(線-面) min={dz.min():.4f} max={dz.max():.4f} mean={dz.mean():.4f} m (期待 0.10)")
if not (on_corner.sum() > 0 and np.all(np.abs(dz - 0.1) < 0.02)):
    fail = True

# --- parks / water: 線頂点のZ - 地形Z（オフセット確認） ---
for name, expect in (("parks", 0.10 + 0.3), ("water", 0.03 + 0.3)):
    lv, _ = load_parts(name)
    dz = lv[:, 2] - terrain_h(lv[:, :2])
    print(f"{name}: 線頂点={len(lv)} Z差(線-地形) min={dz.min():.4f} max={dz.max():.4f} "
          f"mean={dz.mean():.4f} m (期待 {expect:.2f})")
    if not np.all(np.abs(dz - expect) < 0.02):
        fail = True

print("FAIL" if fail else "PASS: 道路境界線は面より0.1m浮き、parks/water線は従来どおり")
sys.exit(1 if fail else 0)