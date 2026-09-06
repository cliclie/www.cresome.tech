"""一時検証: 大量エンティティの Path3D 生成・GLB エクスポートコスト（合成データ）。"""
import time

import numpy as np
import trimesh
from trimesh.path import Path3D
from trimesh.path.entities import Line

# 建物 17810 件相当: 平均 6 角 → 屋根 6 点 + 垂直線 5 本
n_bld = 17810
rng = np.random.default_rng(0)
verts = []
entities = []
offset = 0
t0 = time.time()
for i in range(n_bld):
    n = 6
    z_base = rng.uniform(0, 30)
    z_roof = z_base + rng.uniform(3, 20)
    roof = rng.uniform(-1000, 1000, size=(n, 2))
    roof = np.column_stack([roof, np.full(n, z_roof)])
    verts.append(roof)
    entities.append(Line(points=list(range(offset, offset + n))))
    offset += n
    for j in range(n - 1):
        x, y = roof[j, :2]
        seg = np.array([[x, y, z_base + 0.05], [x, y, z_roof]])
        verts.append(seg)
        entities.append(Line(points=[offset, offset + 1]))
        offset += 2
print(f"build parts: {time.time() - t0:.1f}s verts={offset} entities={len(entities)}")

t0 = time.time()
path = Path3D(entities=entities, vertices=np.vstack(verts), process=False)
c = np.array([[153, 153, 153, 255]], dtype=np.uint8)
path.colors = np.tile(c, (len(entities), 1))
print(f"Path3D(process=False)+colors: {time.time() - t0:.1f}s")

t0 = time.time()
scene = trimesh.Scene(path)
glb = scene.export(file_type="glb")
print(f"export glb: {time.time() - t0:.1f}s size={len(glb) / 1e6:.2f} MB")