"""OSM駅座標（WGS84）とmanifestの駅位置（当地平面m）を照合する検査スクリプト。"""
from __future__ import annotations

import json
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from pipeline import wgs_to_local  # noqa: E402

ROOT = Path(__file__).resolve().parent.parent


def main() -> None:
    manifest = json.loads((ROOT / "out" / "manifest.json").read_text(encoding="utf-8"))
    mp = {s["name"]: (s["position"][0], s["position"][1]) for s in manifest["stations"]}

    print("== OSM rail_stations vs manifest ==")
    rail = json.loads((ROOT / "data" / "osm" / "rail_stations.json").read_text(encoding="utf-8"))
    for el in rail.get("elements", []):
        t = el.get("tags", {})
        name = t.get("name")
        if name not in ("大塚", "新大塚", "東池袋", "護国寺"):
            continue
        x, y = wgs_to_local(el["lat"], el["lon"])
        mx, my = mp.get(name, (float("nan"), float("nan")))
        print(f"  {name} [{t.get('line', '?')}]: OSM=({float(x):8.1f},{float(y):8.1f})  manifest=({mx:8.1f},{my:8.1f})")

    print("== OSM tram_stops vs manifest ==")
    tram = json.loads((ROOT / "data" / "osm" / "tram_stops.json").read_text(encoding="utf-8"))
    for el in tram.get("elements", []):
        t = el.get("tags", {})
        name = t.get("name")
        if name not in ("大塚駅前", "向原", "東池袋四丁目"):
            continue
        x, y = wgs_to_local(el["lat"], el["lon"])
        mx, my = mp.get(name, (float("nan"), float("nan")))
        print(f"  {name} [都電]: OSM=({float(x):8.1f},{float(y):8.1f})  manifest=({mx:8.1f},{my:8.1f})")

    cr = manifest["cresome"]
    loc = json.loads((ROOT / "data" / "osm" / "cresome_loc.json").read_text(encoding="utf-8"))
    x, y = wgs_to_local(loc["lat"], loc["lon"])
    print(f"== cresome: json=({loc['lat']},{loc['lon']}) local=({float(x):.1f},{float(y):.1f}) manifest=({cr['position'][0]:.1f},{cr['position'][1]:.1f})")


if __name__ == "__main__":
    main()
