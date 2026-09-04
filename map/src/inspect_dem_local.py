"""ローカル DEM GML の構造確認・三角形数カウント（高速バイトスキャン）。
使い方: python src/inspect_dem_local.py [file]
"""
from __future__ import annotations

import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent


def main() -> None:
    if len(sys.argv) > 1:
        paths = [Path(sys.argv[1])]
    else:
        paths = sorted((ROOT / "data" / "plateau").glob("*/dem/*.gml"))

    for path in paths:
        head = path.read_bytes()[:4000].decode("utf-8", "replace")
        m = re.search(r'srsName="([^"]+)"', head)
        if m:
            print("  srsName:", m.group(1))
        print(f"=== {path.name} ({path.stat().st_size / 1e6:.0f} MB) ===")
        print(head[:2500])
        # タグ出現カウント（チャンクストリームスキャン）
        tags = [b"<gml:Triangle", b"posList", b"TriangulatedSurface", b"TINRelief",
                b"ReliefFeature", b">node<", b"surfaceMember"]
        counts = {t: 0 for t in tags}
        max_len = max(len(t) for t in tags) - 1
        tail = b""
        with open(path, "rb") as f:
            while True:
                chunk = f.read(64 << 20)
                if not chunk:
                    break
                buf = tail + chunk
                for t in tags:
                    counts[t] += buf.count(t)
                tail = buf[-max_len:]
        for t, n in counts.items():
            if n:
                print(f"  count {t.decode()}: {n}")
        print()


if __name__ == "__main__":
    main()
