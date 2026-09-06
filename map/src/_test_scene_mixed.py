"""一時検証: Trimesh + Path3D を1つのSceneに含めてGLB出力できるか。

- メッシュ (mode 4) とライン (mode 1) が両方出力されるか
- ラインの COLOR_0 が頂点単位に展開され、エンティティごとに色が正しく付くか
"""
import io
import json
import struct

import numpy as np
import trimesh
from trimesh.path.entities import Line

print("trimesh", trimesh.__version__)

# --- メッシュ: 1x1x1 の箱 (z=0 基準) ---
box = trimesh.creation.box(extents=[2, 2, 1])
box.apply_translation([0, 0, 0.5])
box.visual.vertex_colors = np.tile(np.array([255, 255, 255, 255], dtype=np.uint8), (len(box.vertices), 1))

# --- ライン: 2 エンティティ (赤の2点線 + 緑の3点ポリライン) ---
vertices = np.array(
    [
        [0.0, 0.0, 1.05],
        [2.0, 0.0, 1.05],
        [0.0, 0.0, 1.05],
        [1.0, 1.0, 1.05],
        [0.0, 2.0, 1.05],
    ],
    dtype=float,
)
entities = [Line(points=[0, 1]), Line(points=[2, 3, 4])]
colors = np.array([[255, 0, 0, 255], [0, 255, 0, 255]], dtype=np.uint8)
path = trimesh.path.Path3D(entities=entities, vertices=vertices, colors=colors)
path.name = "test_lines"

# --- Scene に両方を入れる ---
scene = trimesh.Scene()
scene.add_geometry(box, node_name="fill")
scene.add_geometry(path, node_name="lines")

glb = scene.export(file_type="glb")
print("glb bytes:", len(glb))

# GLB JSON チャンクから primitive を確認
_, _, _ = struct.unpack_from("<4sII", glb, 0)
chunk_len, chunk_type = struct.unpack_from("<I4s", glb, 12)
assert chunk_type == b"JSON"
gltf_json = json.loads(glb[20 : 20 + chunk_len])
for mi, m in enumerate(gltf_json.get("meshes", [])):
    for pi, prim in enumerate(m.get("primitives", [])):
        print(f"mesh[{mi}] prim[{pi}]: mode={prim.get('mode')} attrs={list(prim.get('attributes', {}).keys())}")

# COLOR_0 の中身を確認 (バッファから読み出し)
def read_accessor(gltf_json, buf, idx):
    acc = gltf_json["accessors"][idx]
    bv = gltf_json["bufferViews"][acc["bufferView"]]
    off = bv.get("byteOffset", 0) + acc.get("byteOffset", 0)
    n = acc["count"]
    t = acc["type"]
    comp = {"SCALAR": 1, "VEC2": 2, "VEC3": 3, "VEC4": 4}[t]
    dt = {5120: np.uint8, 5121: np.int8, 5122: np.uint16, 5123: np.int16, 5125: np.uint32, 5126: np.float32}[acc["componentType"]]
    arr = np.frombuffer(buf, dtype=dt, count=n * comp, offset=off).reshape(n, comp)
    return arr

# BIN チャンク
pos = 20 + chunk_len
if pos % 4:
    pos += 4 - (pos % 4)
bin_len, bin_type = struct.unpack_from("<I4s", glb, pos)
assert bin_type == b"BIN\0"
buf = glb[pos + 8 : pos + 8 + bin_len]

for mi, m in enumerate(gltf_json.get("meshes", [])):
    for pi, prim in enumerate(m.get("primitives", [])):
        attrs = prim.get("attributes", {})
        if "COLOR_0" in attrs:
            c = read_accessor(gltf_json, buf, attrs["COLOR_0"])
            print(f"mesh[{mi}] prim[{pi}] COLOR_0 ({len(c)} rows):")
            for row in c:
                print("   ", row.tolist())

# 読み戻し
back = trimesh.load(io.BytesIO(glb), file_type="glb")
print("loaded type:", type(back).__name__)
for name, geom in back.geometry.items():
    print("geom:", name, type(geom).__name__)
    if isinstance(geom, trimesh.path.Path3D):
        print("  entities:", [(type(e).__name__, e.points.tolist()) for e in geom.entities])
        cols = getattr(geom, "colors", None)
        print("  colors:", None if cols is None else cols.tolist())