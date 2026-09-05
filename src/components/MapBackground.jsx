import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

/**
 * 3D 白地図背景（Three.js + GLB）
 *
 * map/out_white/ で生成した GLB レイヤー（地形・建物・道路・公園・水部・路線・駅・クリサム）を読み込み、
 * 選択した駅からクリサムまでのルートをアニメーション表示する。
 *
 * 座標系: ENU（x=東, y=北, z=上）→ three.js Y-up 変換（world group rotation.x = -PI/2）
 *
 * 視点モード:
 * - walking: ルート上の眼高（1.6m）で進行方向に追従
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
// 始点 ID → routes.json の station 名
// ============================================================
const ROUTE_NAMES = {
  otsuka: '大塚駅南口',
  higashi_ikebukuro: '東池袋駅4番出口',
  gokokuji: '護国寺駅1番出口',
  shin_otsuka_1: '新大塚 丸ノ内線1番出口',
  shin_otsuka_2: '新大塚 丸ノ内線2番出口',
  otsuka_ekimae: '大塚駅前',
  koubara_waseda: '向原 早稲田方面',
  koubara_micorowa: '向原 三ノ輪方面',
  hie_4chome_waseda: '東池袋四丁目 早稲田方面',
  hie_4chome_micorowa: '東池袋四丁目 三ノ輪方面',
};

// ============================================================
// 描画定数
// ============================================================
const ROUTE_COLOR = 0xef5b00;
const DOT_COLOR = 0xff9d4d;
const ROUTE_TUBE_RADIUS = 0.3;
const AERIAL_H = 350;       // 俯瞰視点の高さ (m)
const AERIAL_TILT = 0.6;    // 俯瞰視点の前方オフセット倍率

// ============================================================
// 座標変換: ENU [x, y, z] → three.js Vector3
// world group が rotation.x=-PI/2 になっているため three.js 座標: (x, z, -y)
// ============================================================
function enuToV3(enu) {
  return new THREE.Vector3(enu[0], enu[2], -enu[1]);
}

// ============================================================
// 経路ポリラインのコーナーを滑らかに丸めた CurvePath（viewer.js 移植）
// ============================================================
function buildRoundedCurve(pts, radius) {
  const curve = new THREE.CurvePath();
  const n = pts.length;
  if (n < 3) {
    for (let i = 0; i < n - 1; i++) curve.add(new THREE.LineCurve3(pts[i], pts[i + 1]));
    return curve;
  }
  const inDir = new THREE.Vector3();
  const outDir = new THREE.Vector3();
  let prevEnd = pts[0];
  for (let i = 1; i < n - 1; i++) {
    const p1 = pts[i];
    inDir.subVectors(p1, pts[i - 1]);
    outDir.subVectors(pts[i + 1], p1);
    const inLen = inDir.length();
    const outLen = outDir.length();
    if (inLen < 1e-6 || outLen < 1e-6) {
      curve.add(new THREE.LineCurve3(prevEnd, p1));
      prevEnd = p1;
      continue;
    }
    inDir.divideScalar(inLen);
    outDir.divideScalar(outLen);
    if (inDir.dot(outDir) > 0.985) {
      curve.add(new THREE.LineCurve3(prevEnd, p1));
      prevEnd = p1;
      continue;
    }
    const r = Math.min(radius, inLen * 0.5, outLen * 0.5);
    const a = p1.clone().addScaledVector(inDir, -r);
    const b = p1.clone().addScaledVector(outDir, r);
    curve.add(new THREE.LineCurve3(prevEnd, a));
    curve.add(new THREE.QuadraticBezierCurve3(a, p1, b));
    prevEnd = b;
  }
  curve.add(new THREE.LineCurve3(prevEnd, pts[n - 1]));
  return curve;
}

// ============================================================
// ルート長（速度換算用: m/s → 進捗 t/秒）
// ============================================================
function routeLength(pts3) {
  let len = 0;
  for (let i = 1; i < pts3.length; i++) len += pts3[i - 1].distanceTo(pts3[i]);
  return len;
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

    let disposed = false;
    let rafId = 0;

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0xffffff, 1800, 4500);

    const camera = new THREE.PerspectiveCamera(
      60, container.clientWidth / container.clientHeight, 0.1, 5000,
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // ENU（x=東, y=北, z=上）→ three.js Y-up 変換用グループ
    const world = new THREE.Group();
    world.rotation.x = -Math.PI / 2;
    scene.add(world);

    // 読み込みインジケータ（全 GLB 読み込み後に削除）
    const loadEl = document.createElement('div');
    loadEl.textContent = '地図を読み込んでいます…';
    loadEl.style.cssText =
      'position:absolute;inset:0;display:flex;align-items:center;justify-content:center;' +
      'color:#8a8f98;font-size:14px;font-family:inherit;';
    container.appendChild(loadEl);

    // ---------- アニメーション状態 ----------
    const anim = { t: 0, lastTime: 0 };

    // ルート状態（init で routes.json を読み込み後に構築）
    const routesDataRef = { current: null };
    let routePts3 = [];  // three.js 座標の配列
    let routeCurve = null; // ルートの丸め CurvePath（ドット位置・ヘディング用）
    let routeLen = 0;
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
      if (!routeCurve) return;
      const pos = routeCurve.getPointAt(t);
      const dir = routeCurve.getTangentAt(t);
      focus.x = pos.x; focus.y = pos.y; focus.z = pos.z;
      heading = Math.atan2(dir.x, dir.z);
    }

    // stationId / direction に応じてルートを再構築
    function updateRoute() {
      const cfg = configRef.current;
      if (!routesDataRef.current) return;

      // 古いルート・ドットを破棄
      if (routeLine) {
        scene.remove(routeLine);
        routeLine.geometry.dispose();
        routeLine.material.dispose();
        routeLine = null;
      }
      if (movingDot) {
        scene.remove(movingDot);
        movingDot.geometry.dispose();
        movingDot.material.dispose();
        movingDot = null;
      }

      const stationName = ROUTE_NAMES[cfg.stationId] || ROUTE_NAMES.otsuka;
      const route = routesDataRef.current.routes.find((r) => r.station === stationName);
      if (!route || route.points.length < 2) return;

      let pts = route.points;
      if (cfg.direction === -1) pts = [...pts].reverse();
      routePts3 = pts.map((p) => enuToV3(p));
      routeLen = routeLength(routePts3);

      // ルートチューブ（viewer と同様の丸め曲線 + TubeGeometry）
      routeCurve = buildRoundedCurve(routePts3, 1.0);
      const segs = Math.max(Math.round(routeLen / 0.5), 64);
      const tubeGeo = new THREE.TubeGeometry(routeCurve, segs, ROUTE_TUBE_RADIUS, 8, false);
      const tubeMat = new THREE.MeshBasicMaterial({
        color: ROUTE_COLOR, transparent: true, opacity: 0.8, depthWrite: false,
      });
      routeLine = new THREE.Mesh(tubeGeo, tubeMat);
      routeLine.renderOrder = 10; // 建物より前面
      scene.add(routeLine);

      // 移動ドット（routes.json の z は眼高込み）
      const dotGeo = new THREE.SphereGeometry(1.5, 16, 12);
      const dotMat = new THREE.MeshBasicMaterial({ color: DOT_COLOR });
      movingDot = new THREE.Mesh(dotGeo, dotMat);
      scene.add(movingDot);

      anim.t = 0;
      snapToRoute(0);
    }

    // 停止（始点に戻る）: ルート進捗をリセットしカメラを始点へ
    function resetRoute() {
      anim.t = 0;
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

    // ---------- GLB レイヤー読込（public/map/） ----------
    async function init() {
      const base = `${import.meta.env.BASE_URL}map/`;
      const loader = new GLTFLoader();

      const [manifestRes, routesRes] = await Promise.all([
        fetch(base + 'manifest.json'),
        fetch(base + 'routes.json'),
      ]);
      const manifest = await manifestRes.json();
      routesDataRef.current = await routesRes.json();
      if (disposed) return;

      // 全レイヤーを並列ロード（個別失敗でも残りは読み込む）
      await Promise.all(
        manifest.layers.map(
          (layer) =>
            new Promise((resolve) => {
              loader.load(
                base + layer.file,
                (gltf) => {
                  if (disposed) {
                    resolve();
                    return;
                  }
                  gltf.scene.traverse((o) => {
                    if (!o.isMesh) return;
                    const old = o.material;
                    const isTerrain = layer.id === 'terrain';
                    const isLines = layer.id === 'lines'; // 路線チューブは半透明（地形が見える）
                    o.material = new THREE.MeshBasicMaterial({
                      vertexColors: !!o.geometry.attributes.color,
                      polygonOffset: true,
                      polygonOffsetFactor: isTerrain ? 1 : 0.5,
                      polygonOffsetUnits: isTerrain ? 1 : 0.5,
                      transparent: isLines,
                      opacity: isLines ? 0.5 : 1.0,
                    });
                    old.dispose();
                  });
                  world.add(gltf.scene);
                  resolve();
                },
                undefined,
                (err) => {
                  console.warn(`マップレイヤー読込失敗 (${layer.id}):`, err);
                  resolve();
                },
              );
            }),
        ),
      );
      if (disposed) return;

      loadEl.remove();

      // 初期カメラ: クリサム社屋に向ける（manifest の位置、viewer と同じオフセット）
      const c3 = enuToV3(manifest.cresome.position);
      focus.x = c3.x;
      focus.y = c3.y;
      focus.z = c3.z;
      camera.position.set(c3.x + 260, c3.y + 210, c3.z + 300);
      camera.lookAt(c3);

      updateRoute();
    }


    // ---------- アニメーションループ ----------
    function frame(now) {
      rafId = requestAnimationFrame(frame);
      const cfg = configRef.current;
      const dt = anim.lastTime ? (now - anim.lastTime) / 1000 : 0;
      anim.lastTime = now;

      if (routeCurve) {
        // ルート進捗（中断中は進行しない）
        if (cfg.playing && routeLen > 0) {
          anim.t += (cfg.speed * dt) / routeLen;
          if (anim.t > 1) anim.t -= 1;
        }

        const pos = routeCurve.getPointAt(anim.t);
        const dir = routeCurve.getTangentAt(anim.t);
        if (movingDot) movingDot.position.copy(pos);

        // キーボードによるカメラ操作
        applyKeyDelta(dt);

        // フォーカスポイントとヘディング: フレームレート非依存の指数平滑
        const alpha = dt > 0 ? 1 - Math.exp(-5.0 * dt) : 1;
        focus.x += (pos.x - focus.x) * alpha;
        focus.y += (pos.y - focus.y) * alpha;
        focus.z += (pos.z - focus.z) * alpha;
        let dh = Math.atan2(dir.x, dir.z) - heading;
        dh = Math.atan2(Math.sin(dh), Math.cos(dh)); // 最短角で補間
        heading += dh * alpha;

        // 視点切替時は旧位置からのスイープを防ぐため即座にスナップ
        if (lastViewpoint !== null && lastViewpoint !== cfg.viewpoint) snapToRoute(anim.t);
        lastViewpoint = cfg.viewpoint;

        if (cfg.viewpoint === 'walking') {
          // 歩行: ルート上の眼高（routes.json の z に既反映）+ ユーザーの回転・パン・前後オフセット
          const yaw = heading + ctl.yaw;
          const pitch = clamp(ctl.pitch - 0.04, -1.2, 1.2);
          const dirX = Math.cos(pitch) * Math.sin(yaw);
          const dirY = Math.sin(pitch);
          const dirZ = Math.cos(pitch) * Math.cos(yaw);
          const off = 50 * (ctl.zoom - 1); // ホイールズーム = 視線方向への前後オフセット (m)
          const ex = focus.x + ctl.panX + dirX * off;
          const ey = focus.y + ctl.panY + dirY * off;
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
      }

      renderer.render(scene, camera);
    }

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
        anim.lastTime = 0;
        rafId = requestAnimationFrame(frame);
      }
    }
    document.addEventListener('visibilitychange', onVis);

    init().catch((err) => {
      console.warn('マップ背景の初期化失敗:', err);
      if (loadEl.parentNode) loadEl.remove();
    });
    rafId = requestAnimationFrame(frame);

    threeRef.current = { scene, camera, renderer, container, updateRoute, resetRoute };
    return () => {
      disposed = true;
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
      if (routeLine) {
        routeLine.geometry.dispose();
        routeLine.material.dispose();
      }
      if (movingDot) {
        movingDot.geometry.dispose();
        movingDot.material.dispose();
      }
      // GLB レイヤーのリソース破棄
      world.traverse((o) => {
        if (!o.isMesh) return;
        if (o.geometry) o.geometry.dispose();
        const m = o.material;
        if (Array.isArray(m)) m.forEach((mm) => mm.dispose());
        else if (m) m.dispose();
      });
      renderer.dispose();
      if (renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
      if (loadEl.parentNode) loadEl.remove();
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

