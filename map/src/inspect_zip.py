"""ZIPエントリの構造を詳しく見るための一時検査スクリプト。
使い方: python src/inspect_zip.py <url>
"""
from __future__ import annotations

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from ziputil import get_total_size, parse_central_directory, read_eocd  # noqa: E402


def main() -> None:
    url = sys.argv[1]
    total = get_total_size(url)
    e = read_eocd(url, total)
    es = [x for x in parse_central_directory(url, e) if not x["name"].endswith("/")]
    bldg = [x for x in es if x["name"].startswith("udx/bldg/")]
    print(f"bldg count: {len(bldg)}")
    for x in bldg[:8]:
        print(f"  {x['csize']:>10}  {x['name']}")
    print("other udx files:")
    for x in es:
        if x["name"].startswith("udx/") and not x["name"].startswith("udx/bldg/"):
            print(f"  {x['csize']:>10}  {x['usize']:>10}  {x['name']}")


if __name__ == "__main__":
    main()
