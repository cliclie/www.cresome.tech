"""改訂内容の検証:
1. roads.glb に面メッシュ（塗りつぶし）が含まれないこと（白地図）
2. 道路境界線の高さが地形高さと一致すること
3. 地形頂点が公園・水部表面より高い頂点が 0 件であること
"""
import sys
from pathlib import Path

import numpy as np
import trimesh

sys.path.insert(0, str(Path(__file__).resolve().parent))
import terrain as terrain_mod  # noqa: E402

OUT = Path(__file__).resolve().parent.parent / "out_white"

print("== terrain ==")
terr = terrain_mod.Terrain()
terr.build()


def terrain_triangle_z(x, y, terrain):
    """地形メッシュの三角形補間で (x, y) の z を計算（build_mesh と同一の対角分割）。"""
    h = terrain.h
    cell = terrain.cell
    min_x, min_y = terrain.min_x, terrain.min_y
    nx, ny = terrain.nx, terrain.ny
    fx = (np.asarray(x, dtype=float) - min_x) / cell
    fy = (np.asarray(y, dtype=float) - min_y) / cell
    i = np.clip(np.floor(fx).astype(int), 0, nx - 2)
    j = np.clip(np.floor(fy).astype(int), 0, ny - 2)
    tx = np.clip(fx - i, 0.0, 1.0)
    ty = np.clip(fy - j, 0.0, 1.0)
    z00 = h[j, i]
    z10 = h[j, i + 1]
    z01 = h[j + 1, i]
    z11 = h[j + 1, i + 1]
    # 対角線 (x0,y0)-(x1,y1): tx == ty
    # tx >= ty: 三角形1 (x0,y0,z00),(x1,y0,z10),(x1,y1,z11) → z=(1-tx)z00+(tx-ty)z10+ty*z11
    # tx <  ty: 三角形2 (x0,y0,z00),(x1,y1,z11),(x0,y1,z01) → z=(1-ty)z00+tx*z11+(ty-tx)z01
    z1 = (1 - tx) * z00 + (tx - ty) * z10 + ty * z11
    z2 = (1 - ty) * z00 + tx * z11 + (ty - tx) * z01
    return np.where(tx >= ty, z1, z2)

# --- 1. roads.glb に面メッシュ（塗りつぶし）が含まれないこと ---
print("\n== 1. roads.glb のジオメトリ種別 ==")
roads = trimesh.load(OUT / "roads.glb", force="scene")
has_trimesh = False
has_path = False
for name, geom in roads.geometry.items():
    kind = type(geom).__name__
    print(f"  {name}: {kind} verts={len(geom.vertices)}")
    if isinstance(geom, trimesh.Trimesh):
        has_trimesh = True
    if isinstance(geom, trimesh.path.Path3D):
        has_path = True
print(f"  -> Trimesh(塗りつぶし)あり: {has_trimesh} / Path3D(線)あり: {has_path}")
assert not has_trimesh, "FAIL: roads.glb に面メッシュ（塗りつぶし）が含まれています"
assert has_path, "FAIL: roads.glb に線（境界線）が含まれていません"
print("  PASS: roads.glb は線のみ（塗りつぶしなし）")

# --- 2. 道路境界線の高さが地形高さと一致すること ---
print("\n== 2. 道路境界線の高さ vs 地形 ==")
for name, geom in roads.geometry.items():
    if not isinstance(geom, trimesh.path.Path3D):
        continue
    v = geom.vertices
    h_terr = terr.height(v[:, 0], v[:, 1])
    diff = v[:, 2] - h_terr
    print(f"  {name}: n={len(v)} diff_min={diff.min():.4f} diff_max={diff.max():.4f} diff_abs_max={np.abs(diff).max():.4f}")
    assert np.abs(diff).max() < 1e-3, f"FAIL: 道路境界線の高さが地形と一致しません (max diff={np.abs(diff).max()})"
print("  PASS: 道路境界線は地形高さに一致")

# --- 3. 地形頂点が公園・水部表面より高い頂点が 0 件であること ---
print("\n== 3. 公園・水部表面 vs 地形（突き抜けチェック） ==")
for fname in ("parks.glb", "water.glb"):
    scene = trimesh.load(OUT / fname, force="scene")
    for name, geom in scene.geometry.items():
        if not isinstance(geom, trimesh.Trimesh):
            continue
        v = geom.vertices
        h_terr = terrain_triangle_z(v[:, 0], v[:, 1], terr)
        diff = v[:, 2] - h_terr
        n_bad = int((np.abs(diff) > 1e-3).sum())
        print(f"  {fname}/{name}: n={len(v)} |diff|>1mmの頂点={n_bad} diff_max={diff.max():.4f} diff_min={diff.min():.4f}")
        assert n_bad == 0, f"FAIL: {fname} の {n_bad} 頂点が地形メッシュと一致しません（突き抜けの可能性）"
print("  PASS: 公園・水部表面は地形と一致（突き抜けなし）")

print("\n== 全検証 PASS ==")