"""OSM Overpass API から都電荒川線・駅・クリサム住所のデータを取得して data/osm/ に保存する。

PLATEAU の関連データセットに路面電車（都電荒川線）が含まれないため補完する。
使い方:
    python src/fetch_osm.py [bbox]   # bbox は "south,west,north,east" （省略時は既定値）
"""
from __future__ import annotations

import json
import sys
import time
from pathlib import Path

import requests

ENDPOINTS = [
    "https://maps.mail.ru/osm/tools/overpass/api/interpreter",
    "https://overpass-api.de/api/interpreter",
    "https://overpass.kumi.systems/api/interpreter",
]

HEADERS = {"User-Agent": "cresome-map-pipeline/1.0 (local project; contact: dev@cresome.tech)"}

DEFAULT_BBOX = "35.705,139.695,35.735,139.740"


def build_queries(bbox: str) -> dict[str, str]:
    return {
        # 都電荒川線のルート（bbox内の railway=tram way をすべて取得＝この範囲は荒川線のみ）
        "tram_lines": f'''[out:json][timeout:90];
(
  way["railway"="tram"]({bbox});
);
out geom;''',
        # README にある都電停留所（名前で完全一致、種別はコード側で絞る）
        "tram_stops": f'''[out:json][timeout:90];
(
  node["name"~"^(大塚駅前|向原|東池袋四丁目)$"]({bbox});
);
out;''',
        # 鉄道駅（JR大塚・有楽町線大塚/東池袋/護国寺・丸ノ内線新大塚）
        "rail_stations": f'''[out:json][timeout:90];
(
  node["railway"="station"]["name"~"^(大塚|新大塚|東池袋|護国寺)$"]({bbox});
);
out;''',
        # クリサム住所（文京区大塚6-22-2）のジオコーディング試行
        "cresome_addr": f'''[out:json][timeout:90];
(
  node["addr:housenumber"="22"]["addr:postcode"="1120004"]({bbox});
  way["addr:housenumber"="22"]["addr:postcode"="1120004"]({bbox});
);
out;''',
        # 大塚6丁目（住所の地域確認用）
        "otsuka_6chome": f'''[out:json][timeout:90];
(
  relation["name"~"大塚六丁目|大塚6丁目"]({bbox});
);
out;''',
        # 公園ポリゴン（緑地面表示用）
        "parks": f'''[out:json][timeout:90];
(
  way["leisure"="park"]({bbox});
  relation["leisure"="park"]({bbox});
);
out geom;''',
    }


def run_query(query: str) -> dict:
    last_err = None
    for ep in ENDPOINTS:
        for attempt in range(2):
            try:
                r = requests.post(ep, data={"data": query}, headers=HEADERS, timeout=180)
                if r.status_code == 429:
                    raise RuntimeError(f"rate limited by {ep}")
                r.raise_for_status()
                return r.json()
            except Exception as e:  # noqa: BLE001
                last_err = e
                wait = 20 * (attempt + 1)
                print(f"  retry in {wait}s ({e})", flush=True)
                time.sleep(wait)
    raise RuntimeError(f"all Overpass endpoints failed: {last_err}")


def main() -> None:
    bbox = sys.argv[1] if len(sys.argv) > 1 else DEFAULT_BBOX
    out_dir = Path(__file__).resolve().parent.parent / "data" / "osm"
    out_dir.mkdir(parents=True, exist_ok=True)
    queries = build_queries(bbox)
    for i, (name, query) in enumerate(queries.items()):
        if i:
            time.sleep(5)  # レート制限対策の間隔
        print(f"querying {name} ...", flush=True)
        data = run_query(query)
        n = len(data.get("elements", []))
        (out_dir / f"{name}.json").write_text(
            json.dumps(data, ensure_ascii=False, indent=1), encoding="utf-8"
        )
        print(f"  {n} elements -> data/osm/{name}.json", flush=True)


if __name__ == "__main__":
    main()
