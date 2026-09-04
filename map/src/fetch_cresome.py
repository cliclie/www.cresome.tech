"""クリサム株式会社（文京区大塚6-22-2）の位置を特定する。

1) Nominatim で住所検索
2) 失敗時は OSM の「大塚六丁目」境界(relation 18155906)の外周ポリゴン重心を使用
結果は data/osm/cresome_loc.json に保存（出典を記録）。
"""
from __future__ import annotations

import json
import sys
import time
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from fetch_osm import ENDPOINTS, HEADERS, run_query  # noqa: E402

import requests  # noqa: E402
from shapely.geometry import Polygon, mapping  # noqa: E402
from shapely.ops import unary_union  # noqa: E402

OUT = Path(__file__).resolve().parent.parent / "data" / "osm" / "cresome_loc.json"


def try_nominatim() -> dict | None:
    url = "https://nominatim.openstreetmap.org/search"
    params = {
        "format": "json",
        "limit": 5,
        "countrycodes": "jp",
        "q": "東京都文京区大塚6-22-2",
    }
    r = requests.get(url, params=params, headers=HEADERS, timeout=30)
    r.raise_for_status()
    results = r.json()
    for item in results:
        typ = item.get("type", "")
        if typ in ("house", "building") or "22" in item.get("display_name", "")[:40]:
            return {
                "lat": float(item["lat"]),
                "lon": float(item["lon"]),
                "source": f"Nominatim: {item['display_name']}",
            }
    if results:
        top = results[0]
        if top.get("type") in ("neighbourhood", "suburb"):
            return None  # 丁目レベルのみの場合は不十分
    return None


def try_osm_centroid() -> dict | None:
    query = """[out:json][timeout:60];
(
  relation(18155906);
);
out body;
(._; >;);
out geom;"""
    data = run_query(query)
    outer_ways = []
    for el in data["elements"]:
        if el.get("type") == "way" and el.get("geometry"):
            ring = [(g["lon"], g["lat"]) for g in el["geometry"]]
            if len(ring) >= 4:
                outer_ways.append(Polygon(ring))
    if not outer_ways:
        return None
    poly = unary_union(outer_ways)
    c = poly.centroid
    return {
        "lat": round(c.y, 7),
        "lon": round(c.x, 7),
        "source": "OSM relation 18155906 (大塚六丁目) centroid — 丁目レベルの概算位置",
        "polygon_area_m2": int(poly.area * (111320 ** 2)),
    }


def main() -> None:
    result = None
    try:
        result = try_nominatim()
        if result:
            print("Nominatim hit:", result)
    except Exception as e:  # noqa: BLE001
        print(f"Nominatim failed: {e}")
    time.sleep(3)
    if not result:
        try:
            result = try_osm_centroid()
            if result:
                print("OSM centroid:", result)
        except Exception as e:  # noqa: BLE001
            print(f"OSM centroid failed: {e}")
    if not result:
        print("FAILED to locate Cresome HQ")
        sys.exit(1)
    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(json.dumps(result, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"saved -> {OUT}")


if __name__ == "__main__":
    main()
