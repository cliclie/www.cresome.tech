"""DEM GML の先頭部分のみRange取得・部分展開して構造を確認する（全取得しない）。
使い方: python src/inspect_dem.py [ward]   # ward: bunkyo | toshima
"""
from __future__ import annotations

import re
import struct
import sys
import zlib
from pathlib import Path

import requests

sys.path.insert(0, str(Path(__file__).resolve().parent))
from extract_plateau import WARDS  # noqa: E402
from ziputil import get_total_size, parse_central_directory, read_eocd  # noqa: E402


def main() -> None:
    ward = sys.argv[1] if len(sys.argv) > 1 else "bunkyo"
    url = WARDS[ward]
    total = get_total_size(url)
    eocd = read_eocd(url, total)
    entries = parse_central_directory(url, eocd)
    dems = [e for e in entries if re.match(r"^udx/dem/[^/]+_op\.gml$", e["name"])]
    print(f"[{ward}] DEM entries: {len(dems)}")
    for e in dems:
        print(f"  {e['name']}  csize={e['csize'] / 1e6:.1f}MB usize={e['usize'] / 1e6:.1f}MB")
    if not dems:
        return

    e = dems[0]
    # ローカルヘッダからデータ開始位置を求める
    head = requests.get(url, headers={"Range": f"bytes={e['local_off']}-{e['local_off'] + 4095}"}, timeout=60).content
    (_sig, _ver, _flags, method, _mt, _md, _crc, _cs, _us, name_len, extra_len) = struct.unpack(
        "<IHHHHHIIIHH", head[:30]
    )
    data_start = e["local_off"] + 30 + name_len + extra_len
    # 圧縮データ先頭 400KB を取得して部分展開
    chunk = requests.get(url, headers={"Range": f"bytes={data_start}-{data_start + 409599}"}, timeout=120).content
    d = zlib.decompressobj(-15)
    text = (d.decompress(chunk) + d.flush()).decode("utf-8", "replace")[:6000]
    print(f"--- first {len(text)} chars of decompressed GML ---")
    print(text)


if __name__ == "__main__":
    main()

