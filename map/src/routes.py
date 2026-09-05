"""最短経路計算: OSM highway → 道路ネットワークグラフ → Dijkstra → out/routes.json。

7駅それぞれからクリサム株式会社までの最短経路を道路中心線に沿って計算する。
経路の高さは「地形標高 + 道路面オフセット(0.06m) + 人間の視点(1.6m)」で、
歩行者の視点高さを道路面に沿って維持する。

使い方:
    python src/routes.py          # out/routes.json を生成
    python src/routes.py --out out_white   # 白地図用にも同一ファイルを出力
"""
from __future__ import annotations

import heapq
import json
import sys
import time
from pathlib import Path

import numpy as np

sys.path.insert(0, str(Path(__file__).resolve().parent))
import config  # noqa: E402
import geo  # noqa: E402
import terrain as terrain_mod  # noqa: E402

ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / "data"

# 経路の高さオフセット: 道路面(Z_ROAD) + 人間の視点(1.6m)
EYE_HEIGHT = 1.6
ROAD_OFFSET = config.Z_ROAD  # 0.06m
PATH_Z_OFFSET = EYE_HEIGHT + ROAD_OFFSET  # 1.66m

# 起点スナップ半径 (m)。
# 起点（駅出口・停留所）は歩道の枝上に位置することが多く、単一の最近傍ノードに
# スナップすると主道路への接続で遠回り（迷走）する。そのため起点付近のこの半径以内の
# ノードのうち「起点→ノード＋ノード→目的地」の総距離が最短のノードを選ぶ。
# 実際の起点の最大スナップ距離は約20mなので、安全マージンを含めて25m。
SNAP_RADIUS = 25.0

# 歩行可能な道路種別（download_highways.py と同一）。
# 歩道（footway）等も歩行可能なので、経路では道路と同じ扱いとする。
_WALKABLE = {
    "motorway_link", "trunk_link", "primary_link", "secondary_link",
    "tertiary_link", "unclassified_link", "residential_link", "service_link",
    "motorway", "trunk", "primary", "secondary", "tertiary",
    "unclassified", "residential", "service",
    "living_street", "pedestrian", "footway", "steps", "path", "track",
    "cycleway", "bridleway", "corridor",
}

# ---------------------------------------------------------------- 道路グラフ
class RoadGraph:
    """OSM highway ways から構築した道路ネットワークグラフ。"""

    def __init__(self) -> None:
        self.nodes: dict[int, tuple[float, float]] = {}  # node_id → (x, y)
        self.adj: dict[int, list[tuple[int, float]]] = {}  # node_id → [(neighbor, dist)]

    def add_way(self, node_ids: list[int], coords: list[tuple[float, float]]) -> None:
        """1本のway（連続ノード列）をグラフに追加する。"""
        for nid, (x, y) in zip(node_ids, coords):
            self.nodes[nid] = (x, y)
            self.adj.setdefault(nid, [])
        for i in range(len(node_ids) - 1):
            a, b = node_ids[i], node_ids[i + 1]
            ax, ay = coords[i]
            bx, by = coords[i + 1]
            d = float(np.hypot(bx - ax, by - ay))
            if d < 0.01:  # 重複点をスキップ
                continue
            self.adj[a].append((b, d))
            self.adj[b].append((a, d))  # 歩行者は双方向

    def nearest_node(self, x: float, y: float) -> int:
        """(x, y) に最も近いノードIDを返す。"""
        best_id, best_d = -1, float("inf")
        for nid, (nx, ny) in self.nodes.items():
            d = (nx - x) ** 2 + (ny - y) ** 2
            if d < best_d:
                best_d, best_id = d, nid
        return best_id

    def dijkstra(self, src: int, dst: int) -> list[int] | None:
        """src → dst の最短経路（ノードID列）を返す。見つからなければ None。"""
        if src == dst:
            return [src]
        dist: dict[int, float] = {src: 0.0}
        prev: dict[int, int] = {}
        visited: set[int] = set()
        pq: list[tuple[float, int]] = [(0.0, src)]
        while pq:
            d, u = heapq.heappop(pq)
            if u in visited:
                continue
            visited.add(u)
            if u == dst:
                break
            for v, w in self.adj.get(u, ()):
                if v in visited:
                    continue
                nd = d + w
                if nd < dist.get(v, float("inf")):
                    dist[v] = nd
                    prev[v] = u
                    heapq.heappush(pq, (nd, v))
        if dst not in prev and src != dst:
            return None
        path = [dst]
        while path[-1] != src:
            path.append(prev[path[-1]])
        path.reverse()
        return path

    def dijkstra_from(self, src: int) -> tuple[dict[int, float], dict[int, int]]:
        """src から全到達可能ノードへの (最短距離, prev配列) を返す。

        目的地側から一度だけ実行し、各起点が附近ノード経由でどの距離になるかを
        比較するために使う（マルチソース起点スナップ用）。
        """
        dist: dict[int, float] = {src: 0.0}
        prev: dict[int, int] = {}
        visited: set[int] = set()
        pq: list[tuple[float, int]] = [(0.0, src)]
        while pq:
            d, u = heapq.heappop(pq)
            if u in visited:
                continue
            visited.add(u)
            for v, w in self.adj.get(u, ()):
                if v in visited:
                    continue
                nd = d + w
                if nd < dist.get(v, float("inf")):
                    dist[v] = nd
                    prev[v] = u
                    heapq.heappush(pq, (nd, v))
        return dist, prev

    def path_from(self, node: int, prev: dict[int, int], src: int) -> list[int] | None:
        """dijkstra_from(src) の prev 配列で node → src の経路を再構成する。

        prev[v] は src からの最短経路上の v の前ノードなので、node から prev を
        逆方向にたどるとそのまま node → src の順になる（reverse 不要）。
        """
        if node == src:
            return [src]
        if node not in prev:
            return None
        path = [node]
        while path[-1] != src:
            path.append(prev[path[-1]])
        return path


def build_graph() -> RoadGraph:
    """OSM highways.json から道路グラフを構築する（全歩行可能種別、歩道含む）。"""
    path = DATA / "osm" / "highways.json"
    data = json.loads(path.read_text(encoding="utf-8"))
    g = RoadGraph()
    n_ways = 0
    for w in data:
        tags = w.get("tags") or {}
        hw = tags.get("highway")
        if hw not in _WALKABLE:
            continue
        geom = w.get("geometry")
        nodes = w.get("nodes")
        if not geom or not nodes or len(geom) < 2:
            continue
        coords = []
        for pt in geom:
            x, y = geo.wgs_to_local(pt["lat"], pt["lon"])
            coords.append((float(x), float(y)))
        g.add_way(nodes, coords)
        n_ways += 1
    print(f"road graph: ways={n_ways}, nodes={len(g.nodes)}")
    return g


# ---------------------------------------------------------------- 経路生成
def _simplify_path(pts: list[tuple[float, float, float]], tol: float = 1.5) -> list[tuple[float, float, float]]:
    """Douglas-Peucker 簡略化（XY平面、反復実装）。"""
    n = len(pts)
    if n <= 2:
        return pts
    keep = [False] * n
    keep[0] = keep[-1] = True
    # スタック: (start_idx, end_idx)
    stack = [(0, n - 1)]
    while stack:
        s, e = stack.pop()
        if e - s < 2:
            continue
        ax, ay, _ = pts[s]
        bx, by, _ = pts[e]
        dx, dy = bx - ax, by - ay
        seg_len_sq = dx * dx + dy * dy
        best_i, best_d = -1, 0.0
        if seg_len_sq < 1e-12:
            for i in range(s + 1, e):
                px, py, _ = pts[i]
                d = float(np.hypot(px - ax, py - ay))
                if d > best_d:
                    best_d, best_i = d, i
        else:
            for i in range(s + 1, e):
                px, py, _ = pts[i]
                t = ((px - ax) * dx + (py - ay) * dy) / seg_len_sq
                t = max(0.0, min(1.0, t))
                cx, cy = ax + t * dx, ay + t * dy
                d = float(np.hypot(px - cx, py - cy))
                if d > best_d:
                    best_d, best_i = d, i
        if best_d >= tol and best_i > 0:
            keep[best_i] = True
            stack.append((s, best_i))
            stack.append((best_i, e))
    return [pts[i] for i in range(n) if keep[i]]


def generate_routes(graph: RoadGraph, terrain: terrain_mod.Terrain) -> dict:
    """7駅 → クリサムの最短経路を計算し、routes.json 形式のdictを返す。

    経路は歩行可能な道路（歩道含む、歩道は歩行可能）に沿わせる。
    """
    cresome = json.loads((DATA / "osm" / "cresome_loc.json").read_text(encoding="utf-8"))
    cx, cy = geo.wgs_to_local(cresome["lat"], cresome["lon"])
    cx, cy = float(cx), float(cy)
    cresome_node = graph.nearest_node(cx, cy)
    print(f"cresome: ({cx:.1f}, {cy:.1f}) → nearest node {cresome_node}")

    # クリサム側から一度だけDijkstra: 各起点の附近ノード比較に使う
    dist_map, prev = graph.dijkstra_from(cresome_node)

    stations = _load_stations()
    routes = []
    for st in stations:
        sx, sy = st["x"], st["y"]
        # 起点付近(SNAP_RADIUS以内)のノードから総距離が最短のノードを選ぶ。
        # 単一の最近傍ノードだと歩道の枝にスナップして主道路接続で迷走するため。
        best_node, best_total = None, float("inf")
        for nid, (nx, ny) in graph.nodes.items():
            d_snap = float(np.hypot(nx - sx, ny - sy))
            if d_snap > SNAP_RADIUS:
                continue
            d_route = dist_map.get(nid)
            if d_route is None:
                continue
            total = d_snap + d_route
            if total < best_total:
                best_total, best_node = total, nid
        if best_node is None:
            print(f"  {st['label']}: 経路なし（グラフ未接続）")
            continue
        path_nodes = graph.path_from(best_node, prev, cresome_node)
        if path_nodes is None:
            print(f"  {st['label']}: 経路なし（グラフ未接続）")
            continue
        # 起点実座標を先頭に追加（スナップ分を直線で結ぶ）
        pts_2d = [(sx, sy)] + [graph.nodes[n] for n in path_nodes]
        pts_s = _simplify_path([(x, y, 0.0) for x, y in pts_2d], tol=0.3)
        xs = np.array([p[0] for p in pts_s])
        ys = np.array([p[1] for p in pts_s])
        zs = terrain.height(xs, ys) + PATH_Z_OFFSET
        pts_3d = [(float(x), float(y), float(z)) for x, y, z in zip(xs, ys, zs)]
        dist = sum(
            float(np.hypot(b[0] - a[0], b[1] - a[1]))
            for a, b in zip(pts_3d[:-1], pts_3d[1:])
        )
        routes.append({
            "station": st["label"],
            "line": st["line_key"],
            "distance_m": round(dist, 1),
            "points": pts_3d,
        })
        print(f"  {st['label']}: {dist:.0f}m, {len(pts_3d)} pts")

    return {
        "cresome": {"x": cx, "y": cy, "z": float(terrain.height(cx, cy) + PATH_Z_OFFSET)},
        "routes": routes,
    }


def _load_stations() -> list[dict]:
    """config.START_POINTS の10開始点を当地座標に変換して返す。"""
    out = []
    for sp in config.START_POINTS:
        x, y = geo.wgs_to_local(sp["lat"], sp["lon"])
        out.append({
            "label": sp["name"],
            "line_key": sp["line"],
            "x": float(x),
            "y": float(y),
        })
    return out


# ---------------------------------------------------------------- メイン
def main() -> None:
    import argparse

    ap = argparse.ArgumentParser()
    ap.add_argument("--out", action="append", default=None, help="出力ディレクトリ（複数可、既定: out）")
    args = ap.parse_args()

    out_dirs = args.out or [config.OUT_DIR]

    t0 = time.time()
    print("building terrain...")
    terrain = terrain_mod.Terrain()
    terrain.build()

    print("building road graph...")
    graph = build_graph()

    print("computing routes...")
    result = generate_routes(graph, terrain)
    print(f"routes: {len(result['routes'])} 計算完了, 所要 {time.time() - t0:.0f}s")

    for out_dir in out_dirs:
        out_path = ROOT / out_dir / "routes.json"
        out_path.parent.mkdir(parents=True, exist_ok=True)
        out_path.write_text(json.dumps(result, ensure_ascii=False, indent=1), encoding="utf-8")
        print(f"saved: {out_path} ({out_path.stat().st_size / 1024:.0f} KB)")


if __name__ == "__main__":
    main()