"""レジューム対応のファイルダウンロード。
使い方:
    python src/download.py <url> <dest_path>
"""
from __future__ import annotations

import sys
from pathlib import Path

import requests

CHUNK = 1 << 20


def download(url: str, dest: Path) -> None:
    dest.parent.mkdir(parents=True, exist_ok=True)
    headers: dict = {}
    pos = dest.stat().st_size if dest.exists() else 0
    if pos:
        headers["Range"] = f"bytes={pos}-"
        print(f"resuming from {pos} bytes")
    r = requests.get(url, headers=headers, stream=True, timeout=120)
    r.raise_for_status()
    started_206 = r.status_code == 206
    cl = int(r.headers.get("Content-Length", 0))
    total = (pos if started_206 else 0) + cl if cl else None
    mode = "ab" if (started_206 and pos) else "wb"
    if not started_206:
        pos = 0
    done = pos
    with open(dest, mode) as f:
        for chunk in r.iter_content(CHUNK):
            f.write(chunk)
            done += len(chunk)
            if total:
                print(
                    f"\r{dest.name}: {done / 1e6:.1f}/{total / 1e6:.1f} MB "
                    f"({done * 100 // total}%)",
                    end="",
                    flush=True,
                )
    print()
    if total and done != total:
        raise RuntimeError(f"incomplete download: {done} != {total}")


def main() -> None:
    if len(sys.argv) != 3:
        print(__doc__)
        sys.exit(1)
    download(sys.argv[1], Path(sys.argv[2]))


if __name__ == "__main__":
    main()
