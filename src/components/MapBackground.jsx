import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import mapData from '../data/otsuka-map.json';

/**
 * 3D ワイヤーフレームマップ背景（Three.js）
 *
 * 大塚エリアの道路（幅比例のフラットリボン）・鉄道・建物（面=背景色・輪郭=灰色の 3D ボックス）を描画し、
 * 選択した駅からクリサムまでのルートをアニメーション表示する。
 *
 * 視点モード:
 * - walking: 地上 1.6m の視点でルートを進行方向に追従
 * - aerial:  高所から斜めに俯瞰
 *
 * マウス / キーボードでのカメラ操作（両視点共通）:
 * - ドラッグ: 視点回転 / 右ドラッグ or Shift+ドラッグ: パン
 * - ホイール: ズーム
 * - WASD / 矢印キー: 視点回転、Q/E: 上下移動、R: カメラリセット
 *
 * 背景は透明（alpha）、コンテンツより奥側（z-index: 0）の固定 canvas。
 */

// ============================================================
// 描画定数
// ============================================================
const C = {
  terrain: { color: 0x1f2a54, opacity: 0.12 },
  road:    { color: 0x1f2a54, opacity: 0.35 },
  railway: { color: 0x1f2a54, opacity: 0.45 },
  building:{ color: 0xffffff, edge: 0x8a8f98, opacity: 1.0 },
  route:   { color: 0xef5b00, opacity: 0.80 },
  station: { color: 0x1f2a54, opacity: 1.0 },
  cresome: { color: 0xef5b00, opacity: 1.0 },
  moving:  { color: 0xef5b00, opacity: 1.0 },
};

const EYE_H = 1.6;          // 歩行視点の高さ (m)
const AERIAL_H = 350;       // 俯瞰視点の高さ (m)
const AERIAL_TILT = 0.6;    // 俯瞰視点の前方オフセット倍率

// ============================================================
// ユーティリティ
// ============================================================
function routeLength(pts) {
  let len = 0;
  for (let i = 1; i < pts.length; i++) {
    const dx = pts[i][0] - pts[i - 1][0];
    const dz = pts[i][1] - pts[i - 1][1];
    len += Math.hypot(dx, dz);
  }
  return len;
}

function routePointAt(pts, t) {
  const total = routeLength(pts);
  let target = t * total;
  for (let i = 1; i < pts.length; i++) {
    const dx = pts[i][0] - pts[i - 1][0];
    const dz = pts[i][1] - pts[i - 1][1];
    const seg = Math.hypot(dx, dz);
    if (target <= seg && seg > 0) {
      const f = target / seg;
      return { x: pts[i - 1][0] + dx * f, z: pts[i - 1][1] + dz * f, dx, dz, seg };
    }
    target -= seg;
  }
  const last = pts[pts.length - 1];
  return { x: last[0], z: last[1], dx: 0, dz: 0, seg: 1 };
}

function elevationAt(x, z) {
  const { elevations, gridSize, cellSize, area } = mapData.terrain;
  const i = Math.round((x + area / 2) / cellSize);
  const j = Math.round((z + area / 2) / cellSize);
  if (i < 0 || i >= gridSize || j < 0 || j >= gridSize) return 0;
  return elevations[j * gridSize + i];
}

// 地盤標高を双線形補間で滑らかに求める（歩行視点の段差ボビング防止）
function elevationSmooth(x, z) {
  const { elevations, gridSize, cellSize, area } = mapData.terrain;
  const u = (x + area / 2) / cellSize;
  const v = (z + area / 2) / cellSize;
  const i = Math.floor(u);
  const j = Math.floor(v);
  if (i < 0 || i >= gridSize - 1 || j < 0 || j >= gridSize - 1) return elevationAt(x, z);
  const tx = u - i;
  const tz = v - j;
  const e00 = elevations[j * gridSize + i];
  const e10 = elevations[j * gridSize + i + 1];
  const e01 = elevations[(j + 1) * gridSize + i];
  const e11 = elevations[(j + 1) * gridSize + i + 1];
  return e00 * (1 - tx) * (1 - tz) + e10 * tx * (1 - tz) + e01 * (1 - tx) * tz + e11 * tx * tz;
}

// ============================================================
// シーン構築
// ============================================================
function buildTerrain() {
  const { elevations, gridSize, cellSize } = mapData.terrain;
  const positions = new Float32Array(gridSize * gridSize * 3);
  for (let j = 0; j < gridSize; j++) {
    for (let i = 0; i < gridSize; i++) {
      const idx = (j * gridSize + i) * 3;
      positions[idx]     = (i - gridSize / 2) * cellSize;
      positions[idx + 1] = elevations[j * gridSize + i];
      positions[idx + 2] = (j - gridSize / 2) * cellSize;
    }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  const lines = [];
  for (let j = 0; j < gridSize; j++) {
    for (let i = 0; i < gridSize; i++) {
      const a = j * gridSize + i;
      if (i < gridSize - 1) lines.push(a, a + 1);
      if (j < gridSize - 1) lines.push(a, a + gridSize);
    }
  }
  geo.setIndex(lines);

  const mat = new THREE.LineBasicMaterial({
    color: C.terrain.color,
    opacity: C.terrain.opacity,
    transparent: true,
  });
  return new THREE.LineSegments(geo, mat);
}

// 地形高度に乗り（+ lift m）で描画するライン
function buildGroundLine(pts, opts, lift) {
  const positions = pts.map(([x, z]) => new THREE.Vector3(x, elevationAt(x, z) + lift, z));
  const geo = new THREE.BufferGeometry().setFromPoints(positions);
  const mat = new THREE.LineBasicMaterial({
    color: opts.color,
    opacity: opts.opacity,
    transparent: true,
  });
  return new THREE.Line(geo, mat);
}

// 折れ線を step m 間隔に細分（交差点カットの精度確保のため）
function subdivide(pts, step) {
  const out = [pts[0]];
  for (let i = 0; i < pts.length - 1; i++) {
    const [x1, z1] = pts[i];
    const [x2, z2] = pts[i + 1];
    const d = Math.hypot(x2 - x1, z2 - z1);
    const n = Math.max(1, Math.ceil(d / step));
    for (let s = 1; s < n; s++) {
      out.push([x1 + ((x2 - x1) * s) / n, z1 + ((z2 - z1) * s) / n]);
    }
    out.push(pts[i + 1]);
  }
  return out;
}

// 道路は道路幅を実寸（m）にしたフラットリボン（面）で描画する。
// 主要道路は広く、狭い路地は細くなり、路面地図の幅比例感を表現する。
// （WebGL のラインは 1px 固定のため、線幅ではなく面幅で表現する）
// 交差点ゾーン内ではリボンを引かない。
function buildRoads() {
  const intersections = mapData.intersections || [];
  const positions = [];
  const indices = [];

  for (const road of mapData.roads) {
    const pts = subdivide(road.points, 10);
    const off = road.width / 2;

    // 各センターラインポイントの左右端ポイントと交差点ゾーン判定
    const rows = pts.map(([x, z], i, arr) => {
      let dx, dz;
      if (i === 0) {
        dx = arr[1][0] - x;
        dz = arr[1][1] - z;
      } else if (i === arr.length - 1) {
        dx = x - arr[i - 1][0];
        dz = z - arr[i - 1][1];
      } else {
        // 前後セグメント方向の平均法線方向へオフセット
        const l1 = Math.hypot(x - arr[i - 1][0], z - arr[i - 1][1]) || 1;
        const l2 = Math.hypot(arr[i + 1][0] - x, arr[i + 1][1] - z) || 1;
        dx = (x - arr[i - 1][0]) / l1 + (arr[i + 1][0] - x) / l2;
        dz = (z - arr[i - 1][1]) / l1 + (arr[i + 1][1] - z) / l2;
      }
      const len = Math.hypot(dx, dz) || 1;
      const nx = -dz / len;
      const nz = dx / len;
      return {
        left: [x + nx * off, z + nz * off],
        right: [x - nx * off, z - nz * off],
        inside: intersections.some(
          (it) => Math.hypot(x - it.x, z - it.z) < it.radius,
        ),
      };
    });

    // 交差点ゾーン外の連続区間をクォッド列として出力
    let runStart = null;
    for (let i = 0; i <= rows.length; i++) {
      const open = i < rows.length && !rows[i].inside;
      if (open && runStart === null) runStart = i;
      if (!open && runStart !== null) {
        if (i - runStart >= 2) {
          const base = positions.length / 3;
          for (let r = runStart; r < i; r++) {
            const [lx, lz] = rows[r].left;
            const [rx, rz] = rows[r].right;
            positions.push(lx, elevationAt(lx, lz) + 0.3, lz);
            positions.push(rx, elevationAt(rx, rz) + 0.3, rz);
          }
          for (let r = 0; r < i - runStart - 1; r++) {
            const a = base + r * 2;
            indices.push(a, a + 1, a + 2, a + 1, a + 3, a + 2);
          }
        }
        runStart = null;
      }
    }
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geo.setIndex(indices);
  const mat = new THREE.MeshBasicMaterial({
    color: C.road.color,
    opacity: C.road.opacity,
    transparent: true,
    depthWrite: false,
    side: THREE.DoubleSide,
  });
  return new THREE.Mesh(geo, mat);
}

function buildBuildings() {
  const group = new THREE.Group();
  for (const b of mapData.buildings) {
    const x1 = Math.min(b.corners[0][0], b.corners[2][0]);
    const x2 = Math.max(b.corners[0][0], b.corners[2][0]);
    const z1 = Math.min(b.corners[0][1], b.corners[2][1]);
    const z2 = Math.max(b.corners[0][1], b.corners[2][1]);
    const w = x2 - x1;
    const d = z2 - z1;
    const h = b.height;
    const geo = new THREE.BoxGeometry(w, h, d);
    // 面 = 背景色（不透明・裏面非表示）
    const mat = new THREE.MeshBasicMaterial({
      color: C.building.color,
      opacity: C.building.opacity,
      transparent: C.building.opacity < 1,
      side: THREE.FrontSide,
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(x1 + w / 2, h / 2, z1 + d / 2);
    group.add(mesh);
    // 輪郭 = 灰色（エッジライン）
    const edges = new THREE.LineSegments(
      new THREE.EdgesGeometry(geo),
      new THREE.LineBasicMaterial({ color: C.building.edge }),
    );
    edges.position.copy(mesh.position);
    group.add(edges);
  }
  return group;
}

function buildMarkers() {
  const group = new THREE.Group();
  for (const st of mapData.stations) {
    const [x, z] = st.pos;
    const elev = elevationAt(x, z);
    const pillarGeo = new THREE.CylinderGeometry(0.5, 0.5, 8, 8);
    const pillarMat = new THREE.MeshBasicMaterial({
      color: C.station.color, opacity: 0.6, transparent: true,
    });
    const pillar = new THREE.Mesh(pillarGeo, pillarMat);
    pillar.position.set(x, elev + 4, z);
    group.add(pillar);
    const sphereGeo = new THREE.SphereGeometry(3, 12, 8);
    const sphereMat = new THREE.MeshBasicMaterial({
      color: C.station.color, opacity: 0.9, transparent: true,
    });
    const sphere = new THREE.Mesh(sphereGeo, sphereMat);
    sphere.position.set(x, elev + 9, z);
    group.add(sphere);
  }
  const [cx, cz] = mapData.cresome.pos;
  const ce = elevationAt(cx, cz);
  const cGeo = new THREE.ConeGeometry(5, 15, 8);
  const cMat = new THREE.MeshBasicMaterial({
    color: C.cresome.color, opacity: 0.9, transparent: true,
  });
  const cone = new THREE.Mesh(cGeo, cMat);
  cone.position.set(cx, ce + 7.5, cz);
  group.add(cone);
  return group;
}

// ============================================================
// コンポーネント
// ============================================================
export default function MapBackground({
  stationId = 'otsuka',
  viewpoint = 'walking',
  direction = 1,
  speed = 5,
  playing = true,
  resetToken = 0,
}) {
  const containerRef = useRef(null);
  const threeRef = useRef(null);
  const configRef = useRef({ stationId, viewpoint, direction, speed, playing });
  configRef.current = { stationId, viewpoint, direction, speed, playing };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return undefined;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60, container.clientWidth / container.clientHeight, 0.1, 2000,
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    scene.add(buildTerrain());
    scene.add(buildRoads());
    for (const rail of mapData.railways) scene.add(buildGroundLine(rail.points, C.railway, 0.4));
    scene.add(buildBuildings());
    scene.add(buildMarkers());

    let routeLine = null;
    let movingDot = null;

    // ---------- カメラ状態 ----------
    // ルートのフォーカスポイント（平滑化済み）とヘディング（平滑化済み）
    const focus = { x: 0, y: 0, z: 0 };
    let heading = 0;
    // ユーザーカメラ制御（マウス/キーボード）: 追従カメラの上に回転・パン・ズームを載せる
    const ctl = { yaw: 0, pitch: 0, zoom: 1, panX: 0, panY: 0, panZ: 0 };
    const keys = new Set();
    let lastViewpoint = null;
    const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));

    // 俯瞰の既定の軌道半径・仰角（ターゲットからのオフセット (0, AERIAL_H, AERIAL_TILT*AERIAL_H) と等価）
    const AERIAL_R = Math.hypot(AERIAL_H, AERIAL_TILT * AERIAL_H);
    const AERIAL_ELEV = Math.asin(AERIAL_H / AERIAL_R);

    // ユーザーカメラオフセットをリセット（R キー）
    function resetCamCtl() {
      ctl.yaw = 0; ctl.pitch = 0; ctl.zoom = 1;
      ctl.panX = 0; ctl.panY = 0; ctl.panZ = 0;
    }

    // フォーカスポイント・ヘディングをルート進捗 t に即座にスナップ（視点切替・ルート切替時）
    function snapToRoute(t) {
      const cfg = configRef.current;
      let pts = mapData.routes[cfg.stationId] || mapData.routes.otsuka;
      if (cfg.direction === -1) pts = [...pts].reverse();
      const p = routePointAt(pts, t);
      focus.x = p.x; focus.y = elevationSmooth(p.x, p.z); focus.z = p.z;
      heading = Math.atan2(p.dx, p.dz);
    }

    // 停止（始点に戻る）: ルート進捗をリセットしカメラを始点へ
    function resetRoute() {
      animRef.current.t = 0;
      snapToRoute(0);
    }

    // キーボード: A/D・←/→ = 左右回転, W/S・↑/↓ = ピッチ, Q/E = 上下移動
    function applyKeyDelta(dt) {
      const ry = dt * 0.8;
      if (keys.has('a') || keys.has('arrowleft')) ctl.yaw += ry;
      if (keys.has('d') || keys.has('arrowright')) ctl.yaw -= ry;
      const rp = dt * 0.6;
      if (keys.has('w') || keys.has('arrowup')) ctl.pitch += rp;
      if (keys.has('s') || keys.has('arrowdown')) ctl.pitch -= rp;
      const vRate = configRef.current.viewpoint === 'aerial' ? 80 : 20;
      if (keys.has('q')) ctl.panY += vRate * dt;
      if (keys.has('e')) ctl.panY -= vRate * dt;
      ctl.pitch = clamp(ctl.pitch, -1.2, 1.2);
    }

    function updateRoute() {
      const cfg = configRef.current;
      if (routeLine) {
        scene.remove(routeLine);
        routeLine.geometry.dispose();
        routeLine.material.dispose();
      }
      if (movingDot) {
        scene.remove(movingDot);
        movingDot.geometry.dispose();
        movingDot.material.dispose();
      }
      let pts = mapData.routes[cfg.stationId] || mapData.routes.otsuka;
      if (cfg.direction === -1) pts = [...pts].reverse();
      routeLine = buildGroundLine(pts, C.route, 0.5);
      scene.add(routeLine);
      const dotGeo = new THREE.SphereGeometry(2, 12, 8);
      const dotMat = new THREE.MeshBasicMaterial({ color: C.moving.color, opacity: 1 });
      movingDot = new THREE.Mesh(dotGeo, dotMat);
      scene.add(movingDot);
      animRef.current.t = 0;
      snapToRoute(0);
    }

    const animRef = { current: { t: 0, lastTime: 0 } };
    updateRoute();

    let rafId = 0;
    function frame(now) {
      rafId = requestAnimationFrame(frame);
      const cfg = configRef.current;
      const dt = animRef.current.lastTime ? (now - animRef.current.lastTime) / 1000 : 0;
      animRef.current.lastTime = now;

      let pts = mapData.routes[cfg.stationId] || mapData.routes.otsuka;
      if (cfg.direction === -1) pts = [...pts].reverse();

      // ルート進捗（中断中は進行しない）
      if (cfg.playing) {
        const totalLen = routeLength(pts);
        animRef.current.t += (cfg.speed * dt) / totalLen;
        if (animRef.current.t > 1) animRef.current.t -= 1;
      }

      const { x, z, dx, dz } = routePointAt(pts, animRef.current.t);
      const elev = elevationSmooth(x, z);

      if (movingDot) movingDot.position.set(x, elev + 2, z);

      // キーボードによるカメラ操作
      applyKeyDelta(dt);

      // フォーカスポイントとヘディング: フレームレート非依存の指数平滑
      const alpha = dt > 0 ? 1 - Math.exp(-5.0 * dt) : 1;
      focus.x += (x - focus.x) * alpha;
      focus.y += (elev - focus.y) * alpha;
      focus.z += (z - focus.z) * alpha;
      let dh = Math.atan2(dx, dz) - heading;
      dh = Math.atan2(Math.sin(dh), Math.cos(dh)); // 最短角で補間
      heading += dh * alpha;

      // 視点切替時は旧位置からのスイープを防ぐため即座にスナップ
      if (lastViewpoint !== null && lastViewpoint !== cfg.viewpoint) snapToRoute(animRef.current.t);
      lastViewpoint = cfg.viewpoint;

      if (cfg.viewpoint === 'walking') {
        // 歩行: 一人称視点（目線 1.6m）+ ユーザーの回転・パン・前後オフセット
        const yaw = heading + ctl.yaw;
        const pitch = clamp(ctl.pitch - 0.04, -1.2, 1.2);
        const dirX = Math.cos(pitch) * Math.sin(yaw);
        const dirY = Math.sin(pitch);
        const dirZ = Math.cos(pitch) * Math.cos(yaw);
        const off = 50 * (ctl.zoom - 1); // ホイールズーム = 視線方向への前後オフセット (m)
        const ex = focus.x + ctl.panX + dirX * off;
        const ey = focus.y + EYE_H + ctl.panY + dirY * off;
        const ez = focus.z + ctl.panZ + dirZ * off;
        camera.position.set(ex, ey, ez);
        camera.lookAt(ex + dirX * 50, ey + dirY * 50, ez + dirZ * 50);
      } else {
        // 俯瞰: フォーカスポイントを中心とした軌道カメラ + ユーザーの回転・パン・ズーム（画面上 = 北）
        const el = AERIAL_ELEV + ctl.pitch;
        const r = AERIAL_R * ctl.zoom;
        const az = ctl.yaw;
        const ox = Math.cos(el) * Math.sin(az) * r;
        const oy = Math.sin(el) * r;
        const oz = Math.cos(el) * Math.cos(az) * r;
        const fx = focus.x + ctl.panX;
        const fy = focus.y + ctl.panY;
        const fz = focus.z + ctl.panZ;
        camera.position.set(fx + ox, fy + oy, fz + oz);
        camera.lookAt(fx, fy, fz);
      }

      renderer.render(scene, camera);
    }
    rafId = requestAnimationFrame(frame);

    function onResize() {
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    }
    window.addEventListener('resize', onResize);

    // ---------- マウス / キーボード カメラ制御 ----------
    // 背景 canvas は pointer-events:none のため window 側で受ける。
    // 背景のコンテナ要素（body / .main / .page 等）がターゲットのときだけ引き継ぎ、
    // ボタン・スライダー・テキスト上での操作は妨げない。
    function isMapTarget(el) {
      if (el === document.body) return true;
      if (!(el instanceof Element)) return false;
      if (
        el.closest(
          'button, a, input, select, textarea, [data-nav], .sidebar, .topbar, .drawer, .scrim, .map-controls, .bg-switcher',
        )
      ) {
        return false;
      }
      const cls = typeof el.className === 'string' ? el.className : '';
      return /\b(main|page-wrap|page|map-bg)\b/.test(cls);
    }

    let dragMode = null; // 'rotate' | 'pan'
    let dragX = 0;
    let dragY = 0;

    function onPointerDown(e) {
      if (!isMapTarget(e.target)) return;
      if (e.button !== 0 && e.button !== 2) return;
      dragMode = e.button === 2 || e.shiftKey ? 'pan' : 'rotate';
      dragX = e.clientX;
      dragY = e.clientY;
      e.preventDefault();
    }
    function onPointerMove(e) {
      if (!dragMode) return;
      const dx = e.clientX - dragX;
      const dy = e.clientY - dragY;
      dragX = e.clientX;
      dragY = e.clientY;
      if (dragMode === 'rotate') {
        ctl.yaw -= dx * 0.005;
        ctl.pitch = clamp(ctl.pitch - dy * 0.005, -1.2, 1.2);
      } else {
        // 画面平面内でパン（視点距離に比例したスケール）
        const cfg = configRef.current;
        const yaw = cfg.viewpoint === 'walking' ? heading + ctl.yaw : ctl.yaw;
        const k = (cfg.viewpoint === 'aerial' ? AERIAL_R * ctl.zoom : 50) * 0.002;
        ctl.panX += Math.cos(yaw) * dx * k;
        ctl.panZ += -Math.sin(yaw) * dx * k;
        ctl.panY += dy * k;
      }
    }
    function onPointerUp() {
      dragMode = null;
    }
    function onWheel(e) {
      if (!isMapTarget(e.target)) return;
      e.preventDefault();
      if (configRef.current.viewpoint === 'aerial') {
        ctl.zoom = clamp(ctl.zoom * (1 - e.deltaY * 0.001), 0.3, 4);
      } else {
        ctl.zoom = clamp(ctl.zoom - e.deltaY * 0.001, 0.2, 2.5);
      }
    }
    function onKeyDown(e) {
      const ae = document.activeElement;
      if (ae && /^(INPUT|TEXTAREA|SELECT)$/.test(ae.tagName)) return;
      const k = e.key.toLowerCase();
      if (k === 'r') {
        resetCamCtl();
        return;
      }
      if (!['w', 'a', 's', 'd', 'q', 'e', 'arrowup', 'arrowdown', 'arrowleft', 'arrowright'].includes(k)) {
        return;
      }
      e.preventDefault();
      keys.add(k);
    }
    function onKeyUp(e) {
      keys.delete(e.key.toLowerCase());
    }
    function onContext(e) {
      if (dragMode === 'pan' || isMapTarget(e.target)) e.preventDefault();
    }
    function onBlur() {
      keys.clear();
    }

    window.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
    window.addEventListener('pointercancel', onPointerUp);
    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);
    window.addEventListener('contextmenu', onContext);
    window.addEventListener('blur', onBlur);

    let running = true;
    function onVis() {
      if (document.hidden) {
        cancelAnimationFrame(rafId);
        running = false;
      } else if (!running) {
        running = true;
        animRef.current.lastTime = 0;
        rafId = requestAnimationFrame(frame);
      }
    }
    document.addEventListener('visibilitychange', onVis);

    threeRef.current = { scene, camera, renderer, container, updateRoute, resetRoute };
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('pointercancel', onPointerUp);
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup', onKeyUp);
      window.removeEventListener('contextmenu', onContext);
      window.removeEventListener('blur', onBlur);
      document.removeEventListener('visibilitychange', onVis);
      renderer.dispose();
      if (renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
      threeRef.current = null;
    };
  }, []);

  // stationId / direction 変更時にルートを再構築
  useEffect(() => {
    if (threeRef.current?.updateRoute) threeRef.current.updateRoute();
  }, [stationId, direction]);

  // 停止（始点に戻る）: resetToken 変化時にルートをリセット
  useEffect(() => {
    if (resetToken > 0 && threeRef.current?.resetRoute) threeRef.current.resetRoute();
  }, [resetToken]);

  return <div ref={containerRef} className="map-bg" aria-hidden="true" />;
}
