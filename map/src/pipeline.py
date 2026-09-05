"""メインパイプライン: PLATEAU CityGML + 関連GeoJSON + OSM → GLBレイヤー群 (out/)。

出力レイヤー:
  terrain.glb   地形（DEM TIN → 規則グリッド、標高別頂点色）
  buildings.glb 建物（LOD1エクストルード、用途別色、地面標高に接地）
  roads.glb      道路面（灰色フラット）
  parks.glb      公園（OSM leisure=park、緑フラット）
  water.glb      水部（青フラット）
  stations.glb   開始点マーカー×10（路線カラー、README準拠の降り口）
  lines.glb      路線チューブ×4（JR山手/有楽町/丸ノ内/都電荒川）
  cresome.glb    クリサム社マーカー
  manifest.json  ビュワー用メタ情報（駅・路線・出典など）

使い方: python src/pipeline.py [--no-buildings] [--palette default|white] [--out DIR]
"""
from __future__ import annotations

import glob
import hashlib
import json
import re
import sys
import time
from pathlib import Path

import numpy as np
import trimesh
from lxml import etree
from pyproj import Transformer
from shapely.geometry import LineString, MultiPolygon, Point, Polygon, box
from shapely.ops import unary_union
from trimesh.path import Path3D
from trimesh.path.entities import Line

sys.path.insert(0, str(Path(__file__).resolve().parent))
import config  # noqa: E402
import terrain as terrain_mod  # noqa: E402

ROOT = Path(__file__).resolve().parent.parent
OUT_DIR = ROOT / config.OUT_DIR
DATA = ROOT / "data"
IS_WHITE = False  # apply_palette("white") で True（線パターン生成の可否）

# ---------------------------------------------------------------- 座標変換
M_PER_DEG = 110_574.0  # 1度 ≒ 110.574km（赤道基準、この緯度では十分）
_T_JGD_WGS = Transformer.from_crs("EPSG:6697", "EPSG:4326", always_xy=True)

_LAT0 = np.radians(config.CENTER["lat"])
_M_PER_DEG_LON = M_PER_DEG * np.cos(_LAT0)


def jgd_to_local(lat, lon):
    """JGD2011 (lat,lon) → 当地平面座標(m, CENTER原点)。配列対応。"""
    wgs_lon, wgs_lat = _T_JGD_WGS.transform(np.asarray(lon, dtype=float), np.asarray(lat, dtype=float))
    x = (wgs_lon - config.CENTER["lon"]) * _M_PER_DEG_LON
    y = (wgs_lat - config.CENTER["lat"]) * M_PER_DEG
    return x, y


def wgs_to_local(lat, lon):
    """WGS84 (lat,lon) → 当地平面座標(m)。配列対応。"""
    lat = np.asarray(lat, dtype=float)
    lon = np.asarray(lon, dtype=float)
    x = (lon - config.CENTER["lon"]) * _M_PER_DEG_LON
    y = (lat - config.CENTER["lat"]) * M_PER_DEG
    return x, y


def clip_box() -> box:
    m = config.BBOX_MARGIN
    b = config.BBOX
    return box(b["west"] - m, b["south"] - m, b["east"] + m, b["north"] + m)


def local_clip_box() -> box:
    """当地平面(m)座標版のクリップボックス（CENTER原点）。"""
    b = config.BBOX
    m = config.BBOX_MARGIN
    min_x = (b["west"] - m - config.CENTER["lon"]) * _M_PER_DEG_LON
    max_x = (b["east"] + m - config.CENTER["lon"]) * _M_PER_DEG_LON
    min_y = (b["south"] - m - config.CENTER["lat"]) * M_PER_DEG
    max_y = (b["north"] + m - config.CENTER["lat"]) * M_PER_DEG
    return box(min_x, min_y, max_x, max_y)


def _dedupe_files(paths: list[str]) -> list[str]:
    """内容が同一のGMLファイルを先頭出現分だけ残す。

    区境界を跨ぐメッシュは文京・豊島両区のZIPに同一ファイルで含まれるため、
    重複パース（GLB内のジオメトリ二重化）を防ぐためのもの。
    """
    seen: set[str] = set()
    out: list[str] = []
    for p in paths:
        h = hashlib.md5(Path(p).read_bytes()).hexdigest()
        if h in seen:
            continue
        seen.add(h)
        out.append(p)
    skipped = len(paths) - len(out)
    if skipped:
        print(f"  dedupe: {skipped} 個の内容同一ファイルをスキップ")
    return out


# ---------------------------------------------------------------- GML 共通
NS = {
    "bldg": "http://www.opengis.net/citygml/building/2.0",
    "tran": "http://www.opengis.net/citygml/transportation/2.0",
    "wtr": "http://www.opengis.net/citygml/waterbody/2.0",
    "core": "http://www.opengis.net/citygml/2.0",
    "gml": "http://www.opengis.net/gml",
}


def file_envelope(path: Path):
    """GMLファイル先頭の gml:boundedBy から (south,west,north,east) を取得。"""
    head = path.read_bytes()[:8192].decode("utf-8", "replace")
    m_low = re.search(r"<gml:lowerCorner>([\d.]+) ([\d.]+)", head)
    m_up = re.search(r"<gml:upperCorner>([\d.]+) ([\d.]+)", head)
    if not (m_low and m_up):
        return None
    s, w = (float(v) for v in m_low.groups())
    n, e = (float(v) for v in m_up.groups())
    return (s, w, n, e)


def extract_polygons(elem, geom_tag: str):
    """要素内のジオメトリから [(exterior, [holes])] を取得（座標は lat,lon）。"""
    polys = []
    g = elem.find(geom_tag)
    if g is None:
        return polys
    for poly in g.iter(f"{{{NS['gml']}}}Polygon"):
        rings = []
        for ring_el in poly.findall(f".//{{{NS['gml']}}}LinearRing"):
            poslist = ring_el.find(f".//{{{NS['gml']}}}posList")
            if poslist is None or not poslist.text:
                continue
            vals = list(map(float, poslist.text.split()))
            # posList は JGD2011 で "lat lon z" 順 → (lon, lat) に変換して保持する
            coords = [(vals[i + 1], vals[i]) for i in range(0, len(vals) - 2, 3)]
            if len(coords) >= 4:
                rings.append(coords)
        if rings:
            polys.append((rings[0], rings[1:]))
    return polys


def to_shapely(polys):
    """[(exterior, holes)] → shapely Polygon/MultiPolygon のリスト（JGD2011度）。"""
    out = []
    for ext, holes in polys:
        try:
            p = Polygon(ext, holes) if holes else Polygon(ext)
            if p.is_valid and p.area > 0:
                out.append(p)
        except Exception:  # noqa: BLE001
            continue
    return out


def localize(poly):
    """度ポリゴン（(lon, lat)）→ 当地平面(m)座標の shapely Polygon。"""
    ext = np.array(poly.exterior.coords, dtype=float)
    x, y = jgd_to_local(ext[:, 1], ext[:, 0])
    rings = [list(zip(x.tolist(), y.tolist()))]
    for hole in poly.interiors:
        h = np.array(hole.coords, dtype=float)
        hx, hy = jgd_to_local(h[:, 1], h[:, 0])
        rings.append(list(zip(hx.tolist(), hy.tolist())))
    return Polygon(rings[0], rings[1:])


# ---------------------------------------------------------------- パーサ
def parse_buildings(cb: box):
    """bldg GML 全ファイルをパース。bbox+margin に交差する建物を返す。

    戻り値: list of dict(rings_local=[(x,y)...], holes_local=[[...]], height, usage)
    """
    out = []
    n_files = n_total = n_used = 0
    for path in _dedupe_files(sorted(glob.glob(str(DATA / "plateau/*/bldg/*.gml")))):
        env = file_envelope(Path(path))
        if env and not box(env[1], env[0], env[3], env[2]).intersects(cb):
            continue
        n_files += 1
        ctx = etree.iterparse(str(path), events=("end",), tag=f"{{{NS['bldg']}}}Building")
        for _, elem in ctx:
            n_total += 1
            usage_el = elem.find(f"{{{NS['bldg']}}}usage")
            usage = int(usage_el.text) if usage_el is not None and usage_el.text else None
            mh_el = elem.find(f"{{{NS['bldg']}}}measuredHeight")
            height = float(mh_el.text) if mh_el is not None and mh_el.text else None
            polys = to_shapely(extract_polygons(elem, f"{{{NS['bldg']}}}lod0RoofEdge"))
            elem.clear()
            while elem.getprevious() is not None:
                del elem.getparent()[0]
            for p in polys:
                if not p.intersects(cb):
                    continue
                pl = localize(p)
                if pl.area < 1.0:
                    continue
                h = height if height and height > 1 else max(3.0, (pl.area ** 0.5) * 0.2)
                out.append(
                    {
                        "rings": list(pl.exterior.coords),
                        "holes": [list(hole.coords) for hole in pl.interiors],
                        "height": h,
                        "usage": usage,
                    }
                )
                n_used += 1
        print(f"  bldg: {Path(path).name} -> cumulative {n_used}")
    print(f"buildings: files={n_files}/{len(glob.glob(str(DATA / 'plateau/*/bldg/*.gml')))} "
          f"total={n_total} used={n_used}")
    return out


def find_cresome_building(buildings, cx, cy):
    """パース済み建物の中からクリサム社屋のフットプリントを特定する。

    1) フットプリントが点を含む建物 → 採用（距離0）
    2) なければ CRESOME_BUILDING_SEARCH_RADIUS (m) 以内で最も近い建物
    戻り値: (index, 距離m)。未特定なら (None, None)。
    """
    pt = Point(cx, cy)
    best, best_d = None, None
    for i, b in enumerate(buildings):
        poly = Polygon(b["rings"], b["holes"]) if b["holes"] else Polygon(b["rings"])
        if not poly.is_valid:
            continue
        if poly.contains(pt):
            return i, 0.0
        d = poly.distance(pt)
        if best_d is None or d < best_d:
            best, best_d = i, d
    if best is not None and best_d <= config.CRESOME_BUILDING_SEARCH_RADIUS:
        return best, best_d
    return None, None


def parse_flat_layer(layer: str, cb: box):
    """tran(道路) / wtr(水部) の lod1MultiSurface ポリゴンを返す（当地平面座標）。"""
    ns = NS[layer]
    tag = f"{{{ns}}}{'Road' if layer == 'tran' else 'WaterBody'}"
    geom_tag = f"{{{ns}}}lod1MultiSurface"
    polys = []
    for path in _dedupe_files(sorted(glob.glob(str(DATA / f"plateau/*/{layer}/*.gml")))):
        env = file_envelope(Path(path))
        if env and not box(env[1], env[0], env[3], env[2]).intersects(cb):
            continue
        ctx = etree.iterparse(str(path), events=("end",), tag=tag)
        for _, elem in ctx:
            for p in to_shapely(extract_polygons(elem, geom_tag)):
                if not p.intersects(cb):
                    continue
                pl = localize(p)
                if pl.area >= 1.0:
                    polys.append(pl)
            elem.clear()
            while elem.getprevious() is not None:
                del elem.getparent()[0]
        print(f"  {layer}: {Path(path).name} -> cumulative {len(polys)}")
    print(f"{layer}: polygons={len(polys)}")
    return polys


# ---------------------------------------------------------------- メッシュ生成
def hex_to_rgba(hexc: str) -> tuple[int, int, int, int]:
    h = hexc.lstrip("#")
    return (int(h[0:2], 16), int(h[2:4], 16), int(h[4:6], 16), 255)


def paint(mesh: trimesh.Trimesh, hexc: str) -> trimesh.Trimesh:
    c = np.array(hex_to_rgba(hexc), dtype=np.uint8)
    mesh.visual.vertex_colors = np.tile(c, (len(mesh.vertices), 1))
    return mesh


def _to_trimesh(result) -> trimesh.Trimesh | None:
    """trimesh 5.x の (vertices, faces) タプルまたは Trimesh を Trimesh に変換。"""
    if result is None:
        return None
    if isinstance(result, trimesh.Trimesh):
        return result
    try:
        verts, faces = result
    except Exception:  # noqa: BLE001
        return None
    if len(verts) == 0 or len(faces) == 0:
        return None
    verts = np.asarray(verts, dtype=float)
    if verts.ndim == 2 and verts.shape[1] == 2:
        verts = np.column_stack([verts, np.zeros(len(verts))])
    return trimesh.Trimesh(vertices=verts, faces=np.asarray(faces))


def flat_meshes(polys, z_offset: float, hexc: str, terrain):
    """ポリゴン群 → 地形に接地したメッシュのリスト（z-fighting回避用のオフセット）。"""
    meshes = []
    for p in polys:
        if isinstance(p, MultiPolygon):
            parts = list(p.geoms)
        else:
            parts = [p]
        for part in parts:
            try:
                m = _to_trimesh(trimesh.creation.triangulate_polygon(part, engine="earcut"))
            except Exception:  # noqa: BLE001
                continue
            if m is None or len(m.vertices) == 0:
                continue
            m.vertices[:, 2] = terrain.height(m.vertices[:, 0], m.vertices[:, 1]) + z_offset
            paint(m, hexc)
            meshes.append(m)
    return meshes


def grid_following_meshes(polys, hexc: str, terrain) -> list:
    """ポリゴン群 → 地形グリッド上に構築したメッシュ（Option B: グリッド追従）。

    各地形グリッドセルの2つの三角形（build_mesh と同一の対角分割）とポリゴンの
    交差を計算し、交差ポリゴンを三角分割する。z は地形三角形の平面方程式から
    補間するため、地形メッシュと完全に一致する（突き抜けなし）。
    """
    h = terrain.h
    cell = terrain.cell
    min_x, min_y = terrain.min_x, terrain.min_y
    nx, ny = terrain.nx, terrain.ny
    meshes = []
    for p in polys:
        parts = list(p.geoms) if isinstance(p, MultiPolygon) else [p]
        for part in parts:
            minx, miny, maxx, maxy = part.bounds
            i0 = max(int(np.floor((minx - min_x) / cell)), 0)
            i1 = min(int(np.ceil((maxx - min_x) / cell)), nx - 2)
            j0 = max(int(np.floor((miny - min_y) / cell)), 0)
            j1 = min(int(np.ceil((maxy - min_y) / cell)), ny - 2)
            for j in range(j0, j1 + 1):
                for i in range(i0, i1 + 1):
                    x0, y0 = min_x + i * cell, min_y + j * cell
                    x1, y1 = min_x + (i + 1) * cell, min_y + (j + 1) * cell
                    z00, z10 = h[j, i], h[j, i + 1]
                    z01, z11 = h[j + 1, i], h[j + 1, i + 1]
                    tris = [
                        ((x0, y0, z00), (x1, y0, z10), (x1, y1, z11)),
                        ((x0, y0, z00), (x1, y1, z11), (x0, y1, z01)),
                    ]
                    for tri in tris:
                        tri2d = Polygon([(tri[0][0], tri[0][1]), (tri[1][0], tri[1][1]), (tri[2][0], tri[2][1])])
                        inter = tri2d.intersection(part)
                        if inter.is_empty or inter.area < 1e-6:
                            continue
                        inter_polys = list(inter.geoms) if inter.geom_type == "MultiPolygon" else [inter]
                        for ip in inter_polys:
                            if ip.area < 1e-6:
                                continue
                            m = _to_trimesh(trimesh.creation.triangulate_polygon(ip, engine="earcut"))
                            if m is None or len(m.vertices) == 0:
                                continue
                            m.vertices[:, 2] = _tri_plane_z(m.vertices[:, 0], m.vertices[:, 1], tri)
                            paint(m, hexc)
                            meshes.append(m)
    return meshes


def _tri_plane_z(x, y, tri):
    """三角形 tri の平面上の (x, y) の z を計算（平面方程式）。"""
    (x1, y1, z1), (x2, y2, z2), (x3, y3, z3) = tri
    nx = (y2 - y1) * (z3 - z1) - (z2 - z1) * (y3 - y1)
    ny = (z2 - z1) * (x3 - x1) - (x2 - x1) * (z3 - z1)
    nz = (x2 - x1) * (y3 - y1) - (y2 - y1) * (x3 - x1)
    if abs(nz) < 1e-12:
        return np.full_like(x, z1)
    return z1 - (nx * (x - x1) + ny * (y - y1)) / nz


# ---------------------------------------------------------------- 線パターン（白地図風）
def _line_path(parts, hexc):
    """(x,y,z) 点列のリスト → 単一 Path3D（点列ごとに Line エンティティ、同色）。

    parts が空なら None。process=False で重複頂点マージをスキップ
    （GLB 出力時に discrete() が必ず頂点を再展開するためファイルサイズは同じ）。
    """
    verts = []
    entities = []
    offset = 0
    for pts in parts:
        pts = np.asarray(pts, dtype=float)
        if len(pts) < 2:
            continue
        verts.append(pts)
        entities.append(Line(points=list(range(offset, offset + len(pts)))))
        offset += len(pts)
    if not entities:
        return None
    colors = np.tile(np.array([hex_to_rgba(hexc)], dtype=np.uint8), (len(entities), 1))
    return Path3D(entities=entities, vertices=np.vstack(verts), colors=colors, process=False)


def _boundary_lines(geom):
    """LineString / MultiLineString / GeometryCollection → LineString のリスト。"""
    if geom is None or geom.is_empty:
        return []
    if geom.geom_type == "LineString":
        return [geom]
    if geom.geom_type in ("MultiLineString", "GeometryCollection"):
        return [g for g in geom.geoms if g.geom_type == "LineString"]
    return []


def building_outline_paths(buildings, terrain, hexc):
    """建物の屋根外周 + 底面外周 + 角の垂直線 → Path3D（白地図風の線画）。"""
    parts = []
    for b in buildings:
        ring = b["rings"]
        if len(ring) < 4:
            continue
        rx = np.array([p[0] for p in ring])
        ry = np.array([p[1] for p in ring])
        z_ground = terrain.height(rx, ry)  # 各頂点の地面標高
        z_base = float(z_ground.min())
        z_roof = z_base + b["height"]  # 屋根面（塗り潰しメッシュとぴったりに一致）
        # 屋根外周
        parts.append(np.column_stack([rx, ry, np.full(len(ring), z_roof)]))
        # 底面外周（地面に接地。z-fighting はビュワー側の polygonOffset で回避）
        parts.append(np.column_stack([rx, ry, z_ground]))
        # 角の垂直線（底面外周から屋根外周まで）
        for i in range(len(ring) - 1):  # ring は閉ループ（先頭==末尾）
            x, y = ring[i]
            parts.append(np.array([[x, y, z_ground[i]], [x, y, z_roof]]))
    return _line_path(parts, hexc)


def road_outline_paths(roads, terrain, hexc):
    """道路面の union → 境界線 → Path3D（白地図風の道路境界）。"""
    if not roads:
        return None
    boundary = unary_union(roads).boundary
    # 高さは地形（DEM）標高のみ（常に地面に接地）。z-fighting はビュワー側の
    # 地形 polygonOffset で回避する（README 参照）。
    parts = []
    for g in _boundary_lines(boundary):
        coords = np.asarray(g.coords, dtype=float)
        if len(coords) < 2:
            continue
        zs = terrain.height(coords[:, 0], coords[:, 1])
        parts.append(np.column_stack([coords, zs]))
    return _line_path(parts, hexc)


def park_hatch_paths(parks, terrain, hexc, spacing=10.0):
    """公園ポリゴン内の斜線ハッチ（45°: x+y=c 間隔 spacing m）→ Path3D。"""
    parts = []
    for p in parks:
        polys = list(p.geoms) if isinstance(p, MultiPolygon) else [p]
        for part in polys:
            minx, miny, maxx, maxy = part.bounds
            for c in np.arange(minx + miny, maxx + maxy, spacing):
                x1 = max(minx, c - maxy)
                x2 = min(maxx, c - miny)
                if x2 - x1 < 1e-6:
                    continue
                inter = part.intersection(LineString([(x1, c - x1), (x2, c - x2)]))
                for g in _boundary_lines(inter):
                    coords = np.asarray(g.coords, dtype=float)
                    if len(coords) < 2:
                        continue
                    zs = terrain.height(coords[:, 0], coords[:, 1])
                    parts.append(np.column_stack([coords, zs]))
    return _line_path(parts, hexc)


def water_wave_paths(water, terrain, hexc, spacing=12.0, wavelength=16.0, amp=1.2):
    """水部ポリゴン内の波線（東西方向の正弦波、1m 間隔サンプリング）→ Path3D。"""
    parts = []
    for p in water:
        polys = list(p.geoms) if isinstance(p, MultiPolygon) else [p]
        for part in polys:
            minx, miny, maxx, maxy = part.bounds
            for y0 in np.arange(miny, maxy, spacing):
                xs = np.arange(minx, maxx, 1.0)
                if len(xs) < 2:
                    continue
                ys = y0 + amp * np.sin(2.0 * np.pi * xs / wavelength)
                inter = part.intersection(LineString(np.column_stack([xs, ys])))
                for g in _boundary_lines(inter):
                    coords = np.asarray(g.coords, dtype=float)
                    if len(coords) < 2:
                        continue
                    zs = terrain.height(coords[:, 0], coords[:, 1])
                    parts.append(np.column_stack([coords, zs]))
    return _line_path(parts, hexc)


def building_meshes(buildings, terrain, color=None, shrink=0.0):
    """建物 → エクストルードメッシュ（用途別色、地面標高に接地。color指定時は全メッシュ統一色）。

    shrink > 0 の場合、ポリゴンを水平方向に shrink (m) 内側に縮小する
    （白地図で輪郭線と Z-fighting しないよう輪郭線がメッシュ外側に来るようにする）。
    """
    meshes = []
    n_skip = 0
    for b in buildings:
        poly = Polygon(b["rings"], b["holes"]) if b["holes"] else Polygon(b["rings"])
        if shrink > 0:
            poly = poly.buffer(-shrink, join_style=2)  # mitre: 角を落として縮小
        if not poly.is_valid:
            n_skip += 1
            continue
        try:
            m = _to_trimesh(trimesh.creation.extrude_polygon(poly, b["height"], engine="earcut"))
        except Exception:  # noqa: BLE001
            n_skip += 1
            continue
        if m is None or len(m.vertices) == 0:
            n_skip += 1
            continue
        # 底面を地形に追従させ接地（斜面で埋没しない）。屋根面は平面（最低標高+height）に保つ
        rx = np.array([p[0] for p in b["rings"]])
        ry = np.array([p[1] for p in b["rings"]])
        z_base = float(terrain.height(rx, ry).min())
        v = m.vertices
        h = b["height"]
        bottom_mask = v[:, 2] < h / 2
        top_mask = v[:, 2] >= h / 2
        v[bottom_mask, 2] = terrain.height(v[bottom_mask, 0], v[bottom_mask, 1])
        v[top_mask, 2] = z_base + h
        m.vertices = v
        if color is None:
            usage = b.get("usage")
            color = config.USAGE_COLORS.get(usage, ("?", config.DEFAULT_BUILDING_COLOR))[1]
        paint(m, color)
        meshes.append(m)
    print(f"buildings meshed: {len(meshes)} (skipped {n_skip})")
    return meshes


def tube_mesh(points_local, radius: float, hexc: str, terrain) -> trimesh.Trimesh | None:
    """ポリライン → 地形沿いに浮き上がったチューブメッシュ。"""
    if len(points_local) < 2:
        return None
    pts = np.asarray(points_local, dtype=float)
    zs = terrain.height(pts[:, 0], pts[:, 1]) + config.LINE_HEIGHT
    path = list(zip(pts[:, 0].tolist(), pts[:, 1].tolist(), zs.tolist()))
    try:
        # trimesh 5.x の sweep_polygon は shapely Polygon をプロファイルに要求する
        angles = np.linspace(0.0, 2 * np.pi, 13)[:-1]
        profile = Polygon([(radius * np.cos(a), radius * np.sin(a)) for a in angles])
        m = _to_trimesh(trimesh.creation.sweep_polygon(profile, path))
    except Exception:  # noqa: BLE001
        return None
    if m is None or len(m.vertices) == 0:
        return None
    paint(m, hexc)
    return m


def station_marker(name: str, x: float, y: float, hexc: str) -> trimesh.Scene:
    """駅マーカー: 地面リング + ポール + ヘッド球（路線カラー）。"""
    h = config.STATION_MARKER_HEIGHT
    ring = trimesh.creation.cylinder(radius=3.0, height=0.2, sections=24)
    ring.apply_translation([x, y, 0.1])
    paint(ring, "#FFFFFF")
    pole = trimesh.creation.cylinder(radius=0.5, height=h, sections=16)
    pole.apply_translation([x, y, h / 2 + 0.2])
    paint(pole, hexc)
    head = trimesh.creation.icosphere(subdivisions=2, radius=1.8)
    head.apply_translation([x, y, h + 1.6])
    paint(head, hexc)
    scene = trimesh.Scene([ring, pole, head])
    for node in scene.graph.nodes_geometry:
        pass
    # ノード名を駅名に（glTFのmesh名として出力される）
    return scene


def cresome_marker(x: float, y: float, z0: float = 0.0) -> trimesh.Trimesh:
    """クリサム社マーカー: 注釈図方式 — 地点を示す基部円盤のみ（z0 で地形に接地）。"""
    base = trimesh.creation.cylinder(radius=0.5, height=0.25, sections=24)
    base.apply_translation([x, y, z0 + 0.12])
    paint(base, config.CRESOME_COLOR)
    base.name = "cresome_hq"
    return base


def parse_osm_parks(cb: box):
    """OSM parks.json (leisure=park) → 当地平面座標ポリゴンリスト。"""
    path = DATA / "osm" / "parks.json"
    if not path.exists():
        return []
    data = json.loads(path.read_text(encoding="utf-8"))
    lcb = local_clip_box()
    polys = []

    def way_ring(way_el):
        geom = way_el.get("geometry")
        if not geom or len(geom) < 4:
            return None
        coords = [(g["lon"], g["lat"]) for g in geom]
        if coords[0] != coords[-1]:
            coords.append(coords[0])
        x, y = wgs_to_local([c[1] for c in coords], [c[0] for c in coords])
        return list(zip(x.tolist(), y.tolist()))

    for el in data.get("elements", []):
        if el["type"] == "way":
            ring = way_ring(el)
            if ring:
                p = Polygon(ring)
                if p.is_valid and p.area > 50 and p.intersects(lcb):
                    polys.append(p)
        elif el["type"] == "relation":
            outers, inners = [], []
            for m in el.get("members", []):
                if m["type"] != "way" or not m.get("geometry"):
                    continue
                ring = way_ring(m)
                if not ring:
                    continue
                (outers if m.get("role") == "outer" else inners).append(ring)
            if outers:
                try:
                    mp = MultiPolygon([Polygon(o) for o in outers])
                    if inners:
                        mp = unary_union(mp).difference(unary_union(Polygon(i) for i in inners))
                    for part in (mp.geoms if isinstance(mp, MultiPolygon) else [mp]):
                        if part.is_valid and part.area > 50 and part.intersects(lcb):
                            polys.append(part)
                except Exception:  # noqa: BLE001
                    continue
    print(f"parks(osm): polygons={len(polys)}")
    return polys



# ---------------------------------------------------------------- 駅・路線
def _localize_coords_jgd(coords: list[list[float]]):
    """[lon,lat] 列 → (x,y) numpy 配列（JGD2011）。"""
    arr = np.asarray(coords, dtype=float)
    return jgd_to_local(arr[:, 1], arr[:, 0])


def _localize_coords_wgs(coords: list[list[float]]):
    """[lon,lat] 列 → (x,y) numpy 配列（WGS84）。"""
    arr = np.asarray(coords, dtype=float)
    return wgs_to_local(arr[:, 1], arr[:, 0])


def _clip_linestring(pts):
    """当地平面座標の折れ線を bbox+margin にクリップし、残る LineString の頂点列を返す。"""
    if isinstance(pts, tuple):
        pts = np.column_stack([np.asarray(pts[0], dtype=float), np.asarray(pts[1], dtype=float)])
    else:
        pts = np.asarray(pts, dtype=float)
    poly = local_clip_box()
    ls = LineString(pts[:, :2])
    inter = ls.intersection(poly)
    out = []
    if inter.is_empty:
        return out
    geoms = (
        inter.geoms if inter.geom_type in ("MultiLineString", "GeometryCollection") else [inter]
    )
    for g in geoms:
        if g.geom_type == "LineString":
            out.append(np.asarray(g.coords, dtype=float))
    return out


def parse_stations():
    """config.START_POINTS の10開始点を当地座標に変換して返す。

    駅マーカーの代わりに開始点（降り口）を表示する。
    戻り値: list of dict(label, line_key, color, x, y, elevation)
    """
    out = []
    for sp in config.START_POINTS:
        x, y = wgs_to_local(sp["lat"], sp["lon"])
        out.append({
            "label": sp["name"],
            "line_key": sp["line"],
            "color": config.LINE_COLOR_BY_LABEL[sp["line"]],
            "x": float(x),
            "y": float(y),
            "elevation": 0,
        })
    print(f"stations: {len(out)} 開始点")
    return out



def parse_lines():
    """PLATEAU railway.geojson（両区）+ OSM tram_lines.json から路線ポリラインを抽出。

    戻り値: list of dict(label, color, segments=[np.ndarray(x,y)...])
    """
    wanted = set(config.LINES)
    segs: dict[str, list[np.ndarray]] = {}
    for ward in ("bunkyo", "toshima"):
        files = sorted((DATA / "plateau" / "related" / ward).glob("*railway*.geojson"))
        for f in files:
            data = json.loads(f.read_text(encoding="utf-8"))
            for feat in data.get("features", []):
                line_name = feat.get("properties", {}).get("路線名")
                if line_name not in wanted:
                    continue
                geom = feat.get("geometry", {})
                gtype, coords = geom.get("type"), geom.get("coordinates", [])
                lists = coords if gtype == "MultiLineString" else [coords]
                for c in lists:
                    if len(c) < 2:
                        continue
                    pts = _localize_coords_jgd(c)
                    segs.setdefault(line_name, []).extend(_clip_linestring(pts))
    # OSM フォールバック（荒川線が PLATEAU に無い場合）
    osm_path = DATA / "osm" / "tram_lines.json"
    if not segs.get("荒川線") and osm_path.exists():
        data = json.loads(osm_path.read_text(encoding="utf-8"))
        for el in data.get("elements", []):
            if el.get("type") != "way":
                continue
            geom = el.get("geometry", [])
            if len(geom) < 2:
                continue
            pts = _localize_coords_wgs([[g["lon"], g["lat"]] for g in geom])
            segs.setdefault("荒川線", []).extend(_clip_linestring(pts))
    out = []
    for line_name, info in config.LINES.items():
        parts = segs.get(line_name)
        if not parts:
            print(f"lines: {line_name} のポリラインが見つかりません")
            continue
        merged = _merge_segments(parts)
        total_pts = sum(len(m) for m in merged)
        out.append({"label": info["label"], "color": info["color"], "segments": merged})
        print(f"lines: {info['label']} segs={len(merged)} pts={total_pts}")
    return out


def _merge_segments(parts, tol=0.5):
    """端点が近いセグメントを連結する（単純な貪欲法）。"""
    parts = [np.asarray(p) for p in parts if len(np.asarray(p)) >= 2]
    merged: list[np.ndarray] = []
    while parts:
        cur = parts.pop(0)
        changed = True
        while changed:
            changed = False
            for i, other in enumerate(parts):
                if np.linalg.norm(cur[-1] - other[0]) < tol:
                    cur = np.vstack([cur, other[1:]])
                    parts.pop(i)
                    changed = True
                    break
                if np.linalg.norm(cur[0] - other[-1]) < tol:
                    cur = np.vstack([other[:-1][::-1], cur])
                    parts.pop(i)
                    changed = True
                    break
        merged.append(cur)
    return [m for m in merged if len(m) >= 2]




# ---------------------------------------------------------------- エクスポート
def export_glb(name: str, meshes) -> Path | None:
    """メッシュ群（またはScene）を out/<name>.glb に書き出す。

    リスト渡しの場合は頂点色を保ったまま1メッシュにマージし、
    ビュワー側のdraw call数を削減する。
    Trimesh（面）と Path3D（線パターン）が混在する場合はそれぞれ
    個別にマージして1シーンに格納する（GLBでは GL_TRIANGLES / GL_LINES 別プリミティブ）。
    """
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    path = OUT_DIR / f"{name}.glb"
    if isinstance(meshes, trimesh.Scene):
        scene = meshes
    else:
        meshes = list(meshes or [])
        if not meshes:
            return None
        tris = [m for m in meshes if isinstance(m, trimesh.Trimesh)]
        paths = [m for m in meshes if isinstance(m, Path3D)]
        geoms = []
        if tris:
            merged = trimesh.util.concatenate(tris)
            merged.name = name
            geoms.append(merged)
        if paths:
            merged_p = trimesh.util.concatenate(paths)
            merged_p.name = f"{name}_lines"
            geoms.append(merged_p)
        if not geoms:
            return None
        scene = trimesh.Scene(geoms)
    if not scene.geometry:
        return None
    gltf = scene.export(file_type="glb")
    path.write_bytes(gltf)
    size = len(gltf) / 1e6
    n_v = sum(len(g.vertices) for g in scene.geometry.values())
    print(f"export: {path.name} meshes={len(scene.geometry)} verts={n_v} size={size:.2f} MB")
    return path


def write_manifest(stations, lines, stats, terr, cz, cresome_bldg=None):
    """ビュワー用メタ情報 manifest.json を書く。"""
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    cresome = json.loads((DATA / "osm" / "cresome_loc.json").read_text(encoding="utf-8"))
    cx, cy = wgs_to_local(cresome["lat"], cresome["lon"])
    manifest = {
        "center": config.CENTER,
        "bbox": config.BBOX,
        "terrain": {
            "min_elev": round(terr.min_elev, 2),
            "max_elev": round(terr.max_elev, 2),
        },
        "layers": [
            {"id": "terrain", "file": "terrain.glb", "label": "地形"},
            {"id": "buildings", "file": "buildings.glb", "label": "建物"},
            {"id": "cresome_building", "file": "cresome_building.glb", "label": "クリサム社屋建物"},
            {"id": "roads", "file": "roads.glb", "label": "道路"},
            {"id": "parks", "file": "parks.glb", "label": "公園"},
            {"id": "water", "file": "water.glb", "label": "水部"},
            {"id": "lines", "file": "lines.glb", "label": "路線"},
            {"id": "stations", "file": "stations.glb", "label": "開始点"},
            {"id": "cresome", "file": "cresome.glb", "label": "クリサム株式会社"},
        ],
        "stations": [
            {
                "name": s["label"],
                "line": s["line_key"],
                "color": s["color"],
                "position": [s["x"], s["y"], s.get("z", 0.0)],
            }
            for s in stations
        ],
        "lines": [{"name": l["label"], "color": l["color"]} for l in lines],
        "cresome": {
            "name": "クリサム株式会社",
            "address": "東京都文京区大塚6-22-2",
            "position": [float(cx), float(cy), cz],
            "color": config.CRESOME_COLOR,
            "building": {
                "found": cresome_bldg is not None,
                "height": round(cresome_bldg["height"], 1) if cresome_bldg else None,
                "usage": config.USAGE_COLORS.get(cresome_bldg["usage"], ("?",))[0] if cresome_bldg else None,
                "color": config.CRESOME_BUILDING_COLOR,
            },
        },
        "stats": stats,
        "sources": [
            "PLATEAU 都市モデル（国土交通省）: 13105文京区 / 13116豊島区 2025年度版 CityGML",
            "PLATEAU 関連データセット: station / railway GeoJSON",
            "OpenStreetMap (Overpass API): 公園・都電荒川線（フォールバック）",
        ],
    }
    path = OUT_DIR / "manifest.json"
    path.write_text(json.dumps(manifest, ensure_ascii=False, indent=2), encoding="utf-8")
    print("export: manifest.json")


# ---------------------------------------------------------------- main
def apply_palette(name: str) -> None:
    """カラーパレットを適用（configをミューテート。色は全て呼び出し時に参照される）。"""
    global IS_WHITE
    IS_WHITE = False
    if name == "default":
        return
    if name != "white":
        raise SystemExit(f"unknown palette: {name} (available: default, white)")
    IS_WHITE = True
    p = config.WHITE_PALETTE
    config.USAGE_COLORS = {k: (v[0], p["BUILDING_GRAY"]) for k, v in config.USAGE_COLORS.items()}
    config.DEFAULT_BUILDING_COLOR = p["BUILDING_GRAY"]
    config.ROAD_COLOR = p["ROAD_COLOR"]
    config.PARK_COLOR = p["PARK_COLOR"]
    config.WATER_COLOR = p["WATER_COLOR"]
    config.TERRAIN_COLORS = tuple(p["TERRAIN_COLORS"])
    for key in config.LINES:
        config.LINES[key]["color"] = p["LINE_GRAY"]
    # CRESOME_COLOR / CRESOME_BUILDING_COLOR はアクセント色を維持（白地図でも社屋が一目で分かるように）


def _opt(args, flag):
    if flag in args:
        i = args.index(flag)
        if i + 1 < len(args):
            return args[i + 1]
    return None


def main():
    args = sys.argv[1:]
    no_buildings = "--no-buildings" in args
    global OUT_DIR
    out_arg = _opt(args, "--out")
    if out_arg:
        OUT_DIR = ROOT / out_arg
    apply_palette(_opt(args, "--palette") or "default")
    t0 = time.time()
    cb = clip_box()
    OUT_DIR.mkdir(parents=True, exist_ok=True)

    print("== parse ==")
    buildings = [] if no_buildings else parse_buildings(cb)
    roads = parse_flat_layer("tran", cb)
    water = parse_flat_layer("wtr", cb)
    parks = parse_osm_parks(cb)
    stations = parse_stations()
    lines = parse_lines()

    # クリサム社座標（WGS84 → 当地平面）— 社屋建物の特定とマーカーに使用
    cresome = json.loads((DATA / "osm" / "cresome_loc.json").read_text(encoding="utf-8"))
    cx, cy = wgs_to_local(cresome["lat"], cresome["lon"])

    print("== cresome building ==")
    idx_cb, dist_cb = find_cresome_building(buildings, float(cx), float(cy)) if buildings else (None, None)
    cresome_buildings: list[dict] = []
    if idx_cb is not None:
        b = buildings.pop(idx_cb)
        cresome_buildings.append(b)
        usage_name = config.USAGE_COLORS.get(b["usage"], ("?",))[0]
        print(f"  社屋建物特定（点から{dist_cb:.1f}m）: 高さ={b['height']:.1f}m 用途={usage_name}")
    else:
        print("  社屋建物を特定できません（cresome_building.glb は出力されません）")

    print("== terrain ==")
    terr = terrain_mod.Terrain()
    terr.build()

    print("== mesh ==")
    meshes_buildings = building_meshes(buildings, terr) if buildings else []
    meshes_cresome_bldg = (
        # 白地図: 輪郭線と Z-fighting 回避のため塗り潰しを 1cm 内側に縮小（輪郭線が外側に来る）
        building_meshes(cresome_buildings, terr, color=config.CRESOME_BUILDING_COLOR,
                        shrink=0.01 if IS_WHITE else 0.0)
        if cresome_buildings else []
    )
    # 道路塗りつぶしはデフォルトのみ（白地図は境界線のみで表現）
    meshes_roads = [] if IS_WHITE else flat_meshes(roads, config.Z_ROAD, config.ROAD_COLOR, terr)
    # 公園・水部は地形グリッド追従メッシュ（Option B: 地形三角形と同一分割で突き抜けなし）
    meshes_parks = grid_following_meshes(parks, config.PARK_COLOR, terr)
    meshes_water = grid_following_meshes(water, config.WATER_COLOR, terr)

    meshes_lines: list[trimesh.Trimesh] = []
    for l in lines:
        for seg in l["segments"]:
            m = tube_mesh(seg.tolist(), 0.8, l["color"], terr)
            if m is not None:
                meshes_lines.append(m)

    # 駅マーカー: 注釈図方式 — ピン（リング/ポール/頭部球）は廃止し、
    # 地点を示す小さな基部円盤のみ残す（ラベルからのリーダー線がここに接続）
    scene_stations = trimesh.Scene()
    for s in stations:
        z0 = float(terr.height(s["x"], s["y"]))
        s["z"] = z0
        base = trimesh.creation.cylinder(radius=0.5, height=0.2, sections=24)
        base.apply_translation([s["x"], s["y"], z0 + 0.1])
        paint(base, s["color"])
        scene_stations.add_geometry(base, node_name=f"{s['label']}_base")

    cz = float(terr.height(float(cx), float(cy)))
    m_cresome = cresome_marker(float(cx), float(cy), cz)

    print("== export ==")
    stats = {
        "buildings": len(meshes_buildings),
        "cresome_building": len(meshes_cresome_bldg),
        "roads": len(meshes_roads),
        "parks": len(meshes_parks),
        "water": len(meshes_water),
        "stations": len(stations),
        "lines": len(lines),
    }
    # 線パターン（白地図のみ）: 建物アウトライン / 道路境界 / 公園ハッチ / 水波線
    if IS_WHITE:
        print("== white map lines ==")
        p = config.WHITE_PALETTE
        pl = building_outline_paths(buildings, terr, p["OUTLINE_COLOR"])
        if pl is not None:
            meshes_buildings.append(pl)
        pl = building_outline_paths(cresome_buildings, terr, p["OUTLINE_COLOR"])
        if pl is not None:
            meshes_cresome_bldg.append(pl)
        pl = road_outline_paths(roads, terr, p["OUTLINE_COLOR"])
        if pl is not None:
            meshes_roads.append(pl)
        pl = park_hatch_paths(parks, terr, p["HATCH_COLOR"])
        if pl is not None:
            meshes_parks.append(pl)
        pl = water_wave_paths(water, terr, p["WAVE_COLOR"])
        if pl is not None:
            meshes_water.append(pl)
    export_glb("terrain", [terr.build_mesh()])
    if meshes_buildings:
        export_glb("buildings", meshes_buildings)
    if meshes_cresome_bldg:
        export_glb("cresome_building", meshes_cresome_bldg)
    export_glb("roads", meshes_roads)
    export_glb("parks", meshes_parks)
    export_glb("water", meshes_water)
    export_glb("lines", meshes_lines)
    export_glb("stations", scene_stations)
    export_glb("cresome", [m_cresome])
    write_manifest(stations, lines, stats, terr, cz, cresome_buildings[0] if cresome_buildings else None)
    print(f"done in {time.time() - t0:.0f}s")


if __name__ == "__main__":
    main()

