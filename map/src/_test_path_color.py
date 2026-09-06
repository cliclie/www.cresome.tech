"""一時検証: Path3D の GLB エクスポートで COLOR_0 が頂点単位に展開されるか。"""
import io

import numpy as np
import trimesh
from trimesh.path.entities import Line

print("trimesh", trimesh.__version__)

# 2 エンティティ: 2点セグメント(赤) + 3点ポリライン(緑)
vertices = np.array(
    [
        [0.0, 0.0, 0.0],
        [10.0, 0.0, 0.0],
        [0.0, 0.0, 0.0],
        [5.0, 5.0, 0.0],
        [0.0, 10.0, 0.0],
    ],
    dtype=float,
)
entities = [Line(points=[0, 1]), Line(points=[2, 3, 4])]
colors = np.array([[255, 0, 0, 255], [0, 255, 0, 255]], dtype=np.uint8)
path = trimesh.path.Path3D(entities=entities, vertices=vertices, colors=colors)
print("entities:", len(path.entities))
print("path.colors:", None if path.colors is None else path.colors.tolist())

scene = trimesh.Scene(path)
print("scene.geometry before export:", list(scene.geometry.keys()))
glb = scene.export(file_type="glb")
print("glb bytes:", len(glb))

# GLB の JSON チャンクから primitive attributes を確認
import json as _json

import struct

_, _, _ = struct.unpack_from("<4sII", glb, 0)
chunk_len, chunk_type = struct.unpack_from("<I4s", glb, 12)
assert chunk_type == b"JSON"
gltf_json = _json.loads(glb[20 : 20 + chunk_len])
for m in gltf_json.get("meshes", []):
    for prim in m.get("primitives", []):
        print("primitive:", prim.get("mode"), "attributes:", list(prim.get("attributes", {}).keys()))

# 読み戻して COLOR_0 を確認
back = trimesh.load(io.BytesIO(glb), file_type="glb")
print("loaded type:", type(back).__name__)
for name, geom in back.geometry.items():
    print("geom:", name, type(geom).__name__)
    cols = getattr(geom, "colors", None)
    print("  colors:", None if cols is None else cols.tolist())
    print("  vertices:", None if geom.vertices is None else geom.vertices.tolist())
    print("  entities:", [(type(e).__name__, e.points.tolist()) for e in geom.entities])