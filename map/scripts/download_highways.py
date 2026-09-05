"""OSM highway ways を Overpass API から取得し data/osm/highways.json に保存する。

最短経路計算用の道路ネットワーク（中心線 + 接続性）を確保するための
ワンタイムデータ取得スクリプト。再実行で最新データに更新される。

使い方:
    python scripts/download_highways.py
"""
from __future__ import annotations

import json
import sys
import time
from pathlib import Path

import requests

sys.path.insert(0, str(Path(__file__).resolve().parent.parent / "src"))
import config  # noqa: E402

# Overpass API エンドポイント（複数備品、順にフォールバック）
OVERPASS_URLS = [
    "https://overpass-api.de/api/interpreter",
    "https://overpass.kumi.systems/api/interpreter",
    "https://overpass.private.coffee/api/interpreter",
]

# 歩行可能な道路種別（経路案内のため）
WALKABLE_HIGHWAYS = {
    "motorway_link", "trunk_link", "primary_link", "secondary_link",
    "tertiary_link", "unclassified_link", "residential_link", "service_link",
    "motorway", "trunk", "primary", "secondary", "tertiary",
    "unclassified", "residential", "service",
    "living_street", "pedestrian", "footway", "steps", "path", "track",
    "cycleway", "bridleway", "corridor",
}


def build_query() -> str:
    b = config.BBOX
    return (
        "[out:json][timeout:90];"
        f"way({b['south']},{b['west']},{b['north']},{b['east']})[\"highway\"];"
        "out geom;"
    )


def main() -> None:
    query = build_query()
    print(f"Overpass query:\n{query}\n")

    headers = {
        "User-Agent": "cresome-map-route-planner/1.0 (one-time data fetch)",
        "Accept": "application/json",
    }
    last_err = None
    for url in OVERPASS_URLS:
        try:
            print(f"POST {url}")
            resp = requests.post(url, data={"data": query}, headers=headers, timeout=120)
            resp.raise_for_status()
            data = resp.json()
            break
        except Exception as e:  # noqa: BLE001
            last_err = e
            print(f"  failed: {e}")
            time.sleep(5)
    else:
        raise SystemExit(f"Overpass API 取得失敗: {last_err}")

    ways = data.get("elements", [])
    print(f"ways total: {len(ways)}")

    # 歩行可能な道路にフィルタ
    kept = []
    for w in ways:
        hw = (w.get("tags") or {}).get("highway")
        if hw in WALKABLE_HIGHWAYS:
            kept.append(w)
    print(f"ways walkable: {len(kept)}")

    out_path = Path(__file__).resolve().parent.parent / "data" / "osm" / "highways.json"
    out_path.write_text(json.dumps(kept, ensure_ascii=False), encoding="utf-8")
    print(f"saved: {out_path} ({out_path.stat().st_size / 1e6:.1f} MB)")


if __name__ == "__main__":
    main()