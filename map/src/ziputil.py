"""リモートZIPの中央ディレクトリをHTTP Rangeで取得し、選択エントリのみ展開するユーティリティ。

全ダウンロード（数百MB〜1GB）を避け、必要なメッシュファイルだけ取得するためのもの。
使い方:
    python src/ziputil.py list <url>                 # エントリ一覧表示
    python src/ziputil.py extract <url> <dest_dir> <pattern1> [pattern2 ...]
                                                     # 名前が pattern にマッチするエントリを dest_dir に展開
"""
from __future__ import annotations

import re
import struct
import sys
import zlib
from pathlib import Path

import requests

CHUNK = 1 << 20


def fetch(url: str, start: int | None = None, end: int | None = None) -> bytes:
    """Range指定でバイト列を取得する。"""
    headers = {}
    if start is not None:
        headers["Range"] = f"bytes={start}-{end}" if end is not None else f"bytes={start}-"
    r = requests.get(url, headers=headers, stream=True, timeout=120)
    r.raise_for_status()
    return b"".join(r.iter_content(CHUNK))


def get_total_size(url: str) -> int:
    r = requests.head(url, timeout=30)
    r.raise_for_status()
    return int(r.headers["Content-Length"])


def read_eocd(url: str, total: int) -> dict:
    """End of Central Directory レコードを読み取る。"""
    tail_size = min(total, 22 + 65535 + 4096)
    data = fetch(url, total - tail_size, total - 1)
    idx = data.rfind(b"PK\x05\x06")
    if idx < 0:
        raise ValueError("EOCD not found")
    eocd = data[idx:]
    (disk_no, cd_disk, cd_entries_disk, cd_entries_total, cd_size, cd_offset, comment_len) = (
        struct.unpack("<HHHHIIH", eocd[4:22])
    )
    if cd_offset == 0xFFFFFFFF or cd_size == 0xFFFFFFFF:
        # ZIP64 EOCD locator + record
        loc_start = total - tail_size + idx - 20
        loc = fetch(url, max(0, loc_start), total - tail_size + idx - 1)
        (sig, _cd_disk64, cd_off64, cd_size64) = struct.unpack("<IQHQ", loc[-20:])
        if sig == 0x07064B50:
            cd_offset, cd_size = cd_off64, cd_size64
    return {
        "entries": cd_entries_total,
        "cd_size": cd_size,
        "cd_offset": cd_offset,
        "comment_len": comment_len,
    }


def _zip64_extra(extra: bytes) -> list[int]:
    """ZIP64 拡張フィールド(tag 0x0001)から数値リストを返す（出現順）。"""
    off = 0
    while off + 4 <= len(extra):
        tag, size = struct.unpack("<HH", extra[off : off + 4])
        if tag == 0x0001:
            body = extra[off + 4 : off + 4 + size]
            vals = []
            p = 0
            while p + 8 <= len(body):
                vals.append(struct.unpack("<Q", body[p : p + 8])[0])
                p += 8
            return vals
        off += 4 + size
    return []


def parse_central_directory(url: str, eocd: dict) -> list[dict]:
    """中央ディレクトリを解析してエントリ一覧を返す。"""
    cd = fetch(url, eocd["cd_offset"], eocd["cd_offset"] + eocd["cd_size"] - 1)
    entries: list[dict] = []
    off = 0
    while off + 46 <= len(cd):
        sig = struct.unpack("<I", cd[off : off + 4])[0]
        if sig != 0x02014B50:
            break
        (
            _sig, _vmade, _vneed, flags, method, _mtime, _mdate, crc,
            csize, usize, name_len, extra_len, comment_len,
            _disk_start, _iattr, _eattr, local_off,
        ) = struct.unpack("<IHHHHHHIIIHHHHHII", cd[off : off + 46])
        name = cd[off + 46 : off + 46 + name_len].decode("utf-8", "replace")
        extra = cd[off + 46 + name_len : off + 46 + name_len + extra_len]
        if csize == 0xFFFFFFFF or usize == 0xFFFFFFFF or local_off == 0xFFFFFFFF:
            z64 = _zip64_extra(extra)
            # 中央ディレクトリ ZIP64 の出現順: usize, csize, local_off
            i = 0
            if usize == 0xFFFFFFFF and i < len(z64):
                usize = z64[i]
                i += 1
            if csize == 0xFFFFFFFF and i < len(z64):
                csize = z64[i]
                i += 1
            if local_off == 0xFFFFFFFF and i < len(z64):
                local_off = z64[i]
        entries.append(
            {
                "name": name,
                "method": method,
                "csize": csize,
                "usize": usize,
                "crc": crc,
                "local_off": local_off,
                "flags": flags,
            }
        )
        off += 46 + name_len + extra_len + comment_len
    return entries


def extract_entry(url: str, entry: dict) -> bytes:
    """1エントリのローカルデータ部をRange取得して展開したバイト列を返す。"""
    head = fetch(url, entry["local_off"], entry["local_off"] + 30 + 4096)
    sig = struct.unpack("<I", head[:4])[0]
    if sig != 0x04034B50:
        raise ValueError(f"bad local header for {entry['name']}")
    (_sig, _ver, _flags, method, _mt, _md, _crc, _cs, _us, name_len, extra_len) = struct.unpack(
        "<IHHHHHIIIHH", head[:30]
    )
    data_start = entry["local_off"] + 30 + name_len + extra_len
    data = fetch(url, data_start, data_start + entry["csize"] - 1)
    if len(data) != entry["csize"]:
        raise ValueError(f"short read for {entry['name']}: {len(data)} != {entry['csize']}")
    if method == 0:
        out = data
    elif method == 8:
        d = zlib.decompressobj(-15)
        out = d.decompress(data, max(entry["usize"], 1 << 20)) + d.flush()
    else:
        raise ValueError(f"unsupported compression method {method} for {entry['name']}")
    if entry["crc"] and zlib.crc32(out) & 0xFFFFFFFF != entry["crc"]:
        raise ValueError(f"CRC mismatch for {entry['name']}")
    return out


def main() -> None:
    if len(sys.argv) < 3:
        print(__doc__)
        sys.exit(1)
    cmd, url = sys.argv[1], sys.argv[2]

    total = get_total_size(url)
    eocd = read_eocd(url, total)
    entries = parse_central_directory(url, eocd)
    print(f"total={total} bytes, entries={len(entries)} (eocd says {eocd['entries']})")

    if cmd == "list":
        for e in entries:
            print(f"{e['csize']:>12}  {e['usize']:>12}  {e['name']}")
    elif cmd == "extract":
        dest = Path(sys.argv[3])
        patterns = [re.compile(p) for p in sys.argv[4:]]
        dest.mkdir(parents=True, exist_ok=True)
        n = 0
        for e in entries:
            if e["name"].endswith("/"):
                continue
            if any(p.search(e["name"]) for p in patterns):
                out_path = dest / Path(e["name"]).name
                print(f"extracting {e['name']} -> {out_path} ({e['csize']} bytes compressed)")
                data = extract_entry(url, e)
                out_path.write_bytes(data)
                n += 1
        print(f"done: {n} entries extracted to {dest}")
    else:
        print("unknown command")
        sys.exit(1)


if __name__ == "__main__":
    main()

