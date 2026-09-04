"""out/ のGLBファイルの整合性を検証する（頂点数・三角面数・bbox・カラー属性）。
使い方: python src/verify_glb.py
"""
from __future__ import annotations

import sys
from pathlib import Path

import trimesh

ROOT = Path(__file__).resolve().parent.parent
FILES = ["terrain.glb", "buildings.glb", "cresome_building.glb", "roads.glb", "parks.glb", "water.glb", "stations.glb", "lines.glb", "cresome.glb"]


def main() -> None:
    ok = True
    for name in FILES:
        path = ROOT / "out" / name
        try:
            m = trimesh.load(path, force="mesh")
            b0 = [round(v) for v in m.bounds[0]]
            b1 = [round(v) for v in m.bounds[1]]
            vc = getattr(m.visual, "vertex_colors", None)
            ncol = len(vc) if vc is not None else 0
            print(f"{name:15} v={len(m.vertices):>8} t={len(m.faces):>8} bbox={b0}-{b1} vertex_colors={ncol}")
        except Exception as e:  # noqa: BLE001
            ok = False
            print(f"{name:15} FAILED: {e}")
    sys.exit(0 if ok else 1)


if __name__ == "__main__":
    main()
