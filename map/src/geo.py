"""共通の座標変換（JGD2011/WGS84 → 当地平面座標 m、CENTER原点）。

pipeline.py と terrain.py で共有する。
"""
from __future__ import annotations

import sys
from pathlib import Path

import numpy as np
from pyproj import Transformer
from shapely.geometry import box

sys.path.insert(0, str(Path(__file__).resolve().parent))
import config  # noqa: E402

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
    """WGS84度空間のクリップボックス（bbox + margin）。"""
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
