"""メインパイプライン: PLATEAU CityGML + 関連GeoJSON + OSM → GLBレイヤー群 (out/)。

出力レイヤー:
  terrain.glb   地形（DEM TIN → 規則グリッド、標高別頂点色）
  buildings.glb 建物（LOD1エクストルード、用途別色、地面標高に接地）
  roads.glb      道路面（灰色フラット）
  parks.glb      公園（OSM leisure=park、緑フラット）
  water.glb      水部（青フラット）
  stations.glb   駅マーカー×7（路線カラー）
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

sys.path.insert(0, str(Path(__file__).resolve().parent))
import config  # noqa: E402
import terrain as terrain_mod  # noqa: E402

ROOT = Path(__file__).resolve().parent.parent
OUT_DIR = ROOT / config.OUT_DIR
DATA = ROOT / "data"

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


def building_meshes(buildings, terrain, color=None):
    """建物 → エクストルードメッシュ（用途別色、地面標高に接地。color指定時は全メッシュ統一色）。"""
    meshes = []
    n_skip = 0
    for b in buildings:
        poly = Polygon(b["rings"], b["holes"]) if b["holes"] else Polygon(b["rings"])
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
        # 足跡外周の最低標高を基準に接地（斜面では浮き上がらない）
        rx = np.array([p[0] for p in b["rings"]])
        ry = np.array([p[1] for p in b["rings"]])
        m.apply_translation([0.0, 0.0, float(terrain.height(rx, ry).min())])
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
    """クリサム社マーカー: 高めのポール + コーンヘッド（z0 で地形に接地）。"""
    h = 14.0
    pole = trimesh.creation.cylinder(radius=0.7, height=h, sections=16)
    pole.apply_translation([x, y, z0 + h / 2])
    paint(pole, config.CRESOME_COLOR)
    cone = trimesh.creation.cone(radius=2.4, height=5.0, sections=24)
    cone.apply_translation([x, y, z0 + h + 2.5])
    paint(cone, config.CRESOME_COLOR)
    base = trimesh.creation.cylinder(radius=3.5, height=0.25, sections=24)
    base.apply_translation([x, y, z0 + 0.12])
    paint(base, "#FFFFFF")
    merged = trimesh.util.concatenate([base, pole, cone])
    merged.name = "cresome_hq"
    return merged


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
    """PLATEAU station.geojson（両区）から config.STATIONS の7駅を抽出。

    不足分は OSM tram_stops.json で補完する。
    戻り値: list of dict(label, line_key, color, x, y, elevation)
    """
    found = {}
    for ward in ("bunkyo", "toshima"):
        files = sorted((DATA / "plateau" / "related" / ward).glob("*station*.geojson"))
        for f in files:
            data = json.loads(f.read_text(encoding="utf-8"))
            for feat in data.get("features", []):
                props = feat.get("properties", {})
                key = (props.get("路線名"), props.get("駅名"))
                if key not in config.STATIONS:
                    continue
                lon, lat = feat["geometry"]["coordinates"][:2]
                x, y = jgd_to_local(lat, lon)
                found[key] = {
                    "label": config.STATIONS[key]["label"],
                    "line_key": config.STATIONS[key]["line"],
                    "color": config.LINES[key[0]]["color"],
                    "x": float(x),
                    "y": float(y),
                    "elevation": props.get("高さ", 0),
                }
    if len(found) < len(config.STATIONS):
        missing = set(config.STATIONS) - set(found)
        print(f"stations: PLATEAUで不足 {missing} → OSM tram_stops.json で補完")
        osm_path = DATA / "osm" / "tram_stops.json"
        if osm_path.exists():
            data = json.loads(osm_path.read_text(encoding="utf-8"))
            for key in missing:
                st_name = key[1].replace("駅", "")
                best = None
                for el in data.get("elements", []):
                    tags = el.get("tags", {})
                    if tags.get("name") != st_name:
                        continue
                    pt = tags.get("public_transport")
                    if pt not in ("station", "stop_position"):
                        continue
                    x, y = wgs_to_local(el["lat"], el["lon"])
                    score = 0 if pt == "station" else 1
                    if best is None or score < best[0]:
                        best = (score, float(x), float(y))
                if best:
                    found[key] = {
                        "label": config.STATIONS[key]["label"],
                        "line_key": config.STATIONS[key]["line"],
                        "color": config.LINES[key[0]]["color"],
                        "x": best[1],
                        "y": best[2],
                        "elevation": 0,
                    }
    out = [found[k] for k in config.STATIONS if k in found]
    print(f"stations: {len(out)}/{len(config.STATIONS)}")
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
    """
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    path = OUT_DIR / f"{name}.glb"
    if isinstance(meshes, trimesh.Scene):
        scene = meshes
    else:
        meshes = list(meshes or [])
        if not meshes:
            return None
        merged = trimesh.util.concatenate(meshes)
        merged.name = name
        scene = trimesh.Scene(merged)
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
            {"id": "stations", "file": "stations.glb", "label": "駅"},
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
    if name == "default":
        return
    if name != "white":
        raise SystemExit(f"unknown palette: {name} (available: default, white)")
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
        building_meshes(cresome_buildings, terr, color=config.CRESOME_BUILDING_COLOR)
        if cresome_buildings else []
    )
    meshes_roads = flat_meshes(roads, config.Z_ROAD, config.ROAD_COLOR, terr)
    meshes_parks = flat_meshes(parks, config.Z_PARK, config.PARK_COLOR, terr)
    meshes_water = flat_meshes(water, config.Z_WATER, config.WATER_COLOR, terr)

    meshes_lines: list[trimesh.Trimesh] = []
    for l in lines:
        for seg in l["segments"]:
            m = tube_mesh(seg.tolist(), 0.8, l["color"], terr)
            if m is not None:
                meshes_lines.append(m)

    scene_stations = trimesh.Scene()
    for s in stations:
        h = config.STATION_MARKER_HEIGHT
        z0 = float(terr.height(s["x"], s["y"]))
        s["z"] = z0
        ring = trimesh.creation.cylinder(radius=3.0, height=0.2, sections=24)
        ring.apply_translation([s["x"], s["y"], z0 + 0.1])
        paint(ring, "#FFFFFF")
        pole = trimesh.creation.cylinder(radius=0.5, height=h, sections=16)
        pole.apply_translation([s["x"], s["y"], z0 + h / 2 + 0.2])
        paint(pole, s["color"])
        head = trimesh.creation.icosphere(subdivisions=2, radius=1.8)
        head.apply_translation([s["x"], s["y"], z0 + h + 1.6])
        paint(head, s["color"])
        scene_stations.add_geometry(ring, node_name=f"{s['label']}_ring")
        scene_stations.add_geometry(pole, node_name=f"{s['label']}_pole")
        scene_stations.add_geometry(head, node_name=f"{s['label']}_head")

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

