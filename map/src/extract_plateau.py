"""PLATEAU 区版 CityGML ZIP から必要な GML のみを選択抽出する（テクスチャはスキップ）。

HTTP Range リクエストで中央ディレクトリを読み、udx/{bldg,tran,wtr} のメッシュ別 GML
だけを取得して data/plateau/<ward>/ に保存する。
使い方:
    python src/extract_plateau.py [ward]   # ward: bunkyo | toshima （省略時は両方）
"""
from __future__ import annotations

import re
import sys
import time
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from ziputil import extract_entry, get_total_size, parse_central_directory, read_eocd  # noqa: E402

ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / "data" / "plateau"

WARDS = {
    "bunkyo": (
        "https://assets.cms.plateau.reearth.io/assets/b1/ea0dc7-342c-4814-b3ff-"
        "b2c162e44457/13105_bunkyo-ku_pref_2025_citygml_1_op.zip"
    ),
    "toshima": (
        "https://assets.cms.plateau.reearth.io/assets/32/d726d2-f749-431e-9c0e-"
        "f7f9fad2cd3a/13116_toshima-ku_pref_2025_citygml_1_op.zip"
    ),
}

# テクスチャ画像を含まないメッシュ別 GML のみ対象（dem = 地形TIN）
PATTERN = re.compile(r"^udx/(bldg|tran|wtr|dem)/[^/]+_op\.gml$")


def extract_ward(name: str, url: str) -> None:
    dest_root = DATA / name
    total = get_total_size(url)
    eocd = read_eocd(url, total)
    entries = parse_central_directory(url, eocd)
    selected = [e for e in entries if PATTERN.match(e["name"])]
    total_csize = sum(e["csize"] for e in selected)
    print(f"[{name}] {len(selected)} GML files, {total_csize / 1e6:.1f} MB compressed")
    t0 = time.time()
    done = 0
    for e in selected:
        layer = e["name"].split("/")[1]
        out_path = dest_root / layer / Path(e["name"]).name
        if out_path.exists() and out_path.stat().st_size == e["usize"]:
            done += 1
            continue
        out_path.parent.mkdir(parents=True, exist_ok=True)
        data = extract_entry(url, e)
        out_path.write_bytes(data)
        done += 1
        print(f"  [{done}/{len(selected)}] {e['name']} ({e['usize'] / 1e6:.2f} MB)")
    print(f"[{name}] done in {time.time() - t0:.0f}s -> {dest_root}")


def main() -> None:
    only = sys.argv[1] if len(sys.argv) > 1 else None
    for name, url in WARDS.items():
        if only and name != only:
            continue
        extract_ward(name, url)


if __name__ == "__main__":
    main()
