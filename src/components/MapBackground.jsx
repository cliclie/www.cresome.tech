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
 * - aerial:  高所から斜めに俯瞰（軌道カメラ）
 *
 * サブパネル（PiP）: 画面下部の小窓に「現在の表示モードと逆」の視点を描画
 * - PiP = 歩行: 眼高の歩行視点（ルートチューブは描画しない）
 * - PiP = 俯瞰: 歩行点の周囲 50m を真上から表示。視界内（歩行点の前方 ±30° セクタ）は背景地図色そのまま、視界外は背景地図色を白へ 60% 混合した淡色。オレンジ経路チューブは常時通常色で表示
 * 路線（lines レイヤーの灰色チューブ: 電車などの交通機関）は俯瞰視点のみ表示（歩行視点ではメイン・PiP とも非表示）
 *
 * ルートアニメーション（フェーズ状態機械）:
 * countdown(3s) → walking → arrive(3s, 目標を向き少し見上げる) → fadeOut → 始点スナップ → fadeIn → countdown …
 * 一時停止(playing=false)中は全フェーズがフリーズ。
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
const ROUTE_TUBE_OPACITY = 0.5;   // ルートチューブの不透明度（文字色程度に薄め）
const RAIL_LINE_OPACITY = 0.5;   // 路線レイヤーの不透明度（文字色程度に薄め）
const ROAD_LINE_OPACITY = 0.55;  // 道路ネットワークラインの不透明度（文字色程度に薄め）
const AERIAL_H = 350;       // 俯瞰視点の高さ (m)
const AERIAL_TILT = 0.6;    // 俯瞰視点の前方オフセット倍率
// PiP（俯瞰モード）: 歩行点の周囲 50m を真上から表示
const PI_AERIAL_RADIUS = 50; // 表示半径 (m)
const PI_AERIAL_H = PI_AERIAL_RADIUS / Math.tan(THREE.MathUtils.degToRad(30)); // カメラ高さ（60° FOV で半径 50m）
// PiP 俯瞰: 視界内（前方 ±30° セクタ）は背景地図色そのまま、視界外はこの比率で白へ混合（白背景上での不透明度 0.4 と等価）
const PI_OUT_OPACITY = 0.16;
// PiP 俯瞰: 視界内セクタの半角（±30°、中心軸 = 進行方向 heading）
const PI_FOV_HALF = THREE.MathUtils.degToRad(30);
// フェーズ状態機械の定数
const COUNTDOWN_DUR = 3;   // 開始カウントダウン（秒）
const ARRIVE_DUR = 3;      // 到着後停止（秒）
const FADE_DUR = 0.45;     // フェードアウト/イン（秒）
const ARRIVE_PITCH_LIFT = 0.15; // 到着時の「少し見上げる」pitch 加算 (rad)

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
  apiRef = null,
  onProgress = null,
  onCountdown = null,
  pipRef = null,
}) {
  const containerRef = useRef(null);
  const threeRef = useRef(null);
  const configRef = useRef({ stationId, viewpoint, direction, speed, playing });
  configRef.current = { stationId, viewpoint, direction, speed, playing };
  const cbRef = useRef({ onProgress, onCountdown });
  cbRef.current = { onProgress, onCountdown };

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
    // フェーズ状態機械: countdown → walking → arrive → fadeOut → fadeIn → countdown …
    let phase = 'countdown';
    let phaseT = COUNTDOWN_DUR; // 現フェーズの残り時間（秒）
    let arriveBlend = 0;        // 到着時の「少し見上げる」イージング（0→1）
    let canvasOpacity = 1;      // フェード用 canvas 不透明度
    let lastReportedM = -1;     // 直前に報告した位置（メートル）
    let lastReportedCd = -1;    // 直前に報告したカウントダウン値
    let arriveHeading = 0;      // 到着時に「目標を向く」方位（ルートの終端 → 目標マーク重心）

    // ルート状態（init で routes.json を読み込み後に構築）
    const routesDataRef = { current: null };
    let cresomePos3 = null;            // クリサム社屋の重心（three.js 座標、manifest）
    const stationPosByName = {};       // 駅名 → 駅出口の重心（three.js 座標、manifest）
    let routePts3 = [];  // three.js 座標の配列
    let routeCurve = null; // ルートの丸め CurvePath（ドット位置・ヘディング用）
    let routeLen = 0;
    let routeLine = null;
    let routeFlat = null; // 平面化ルート（俯瞰・一人称用）
    let movingDot = null;
    // PiP 俯瞰: マテリアル切替対象のマップオブジェクト（userData.pipBaseMat = 通常 / pipFadedMat = 減光 0.4）
    const pipFadeObjs = [];
    // PiP 俯瞰: 視界内（前方 ±30° セクタ）クリップ平面 — 歩行点を通る縦平面 2 枚、毎フレーム更新
    const pipWedgePlanes = [new THREE.Plane(), new THREE.Plane()];
    // 路線（lines レイヤー・灰色チューブ: 電車などの交通機関）の描画オブジェクト群。
    // 歩行視点（メイン・PiP 双方）では非表示にし、俯瞰視点のみ表示する。
    const railObjs = [];

    // ---------- カメラ状態 ----------
    // ルートのフォーカスポイント（平滑化済み）とヘディング（平滑化済み）
    const focus = { x: 0, y: 0, z: 0 };
    let heading = 0;
    // ユーザーカメラ制御（マウス/キーボード）: 追従カメラの上に回転・パン・ズーム・FOV を載せる
    const ctl = { yaw: 0, pitch: 0, zoom: 1, panX: 0, panY: 0, panZ: 0, fov: 0 };
    // 俯瞰の既定の軌道半径・仰角（ターゲットからのオフセット (0, AERIAL_H, AERIAL_TILT*AERIAL_H) と等価）
    const AERIAL_R = Math.hypot(AERIAL_H, AERIAL_TILT * AERIAL_H);
    const AERIAL_ELEV = Math.asin(AERIAL_H / AERIAL_R);
    // サブパネル（PiP）用カメラ: 「現在の表示モードと逆」の視点を描画
    const pipCam = new THREE.PerspectiveCamera(60, 16 / 9, 0.1, 5000);
    const keys = new Set();
    let lastViewpoint = null;
    const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));


    // ユーザーカメラオフセットをリセット（R キー）
    function resetCamCtl() {
      ctl.yaw = 0; ctl.pitch = 0; ctl.zoom = 1; ctl.fov = 0;
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

      // 古いルート・平面化ルート・ドットを破棄
      if (routeLine) {
        scene.remove(routeLine);
        routeLine.geometry.dispose();
        routeLine.material.dispose();
        routeLine = null;
      }
      if (routeFlat) {
        scene.remove(routeFlat);
        routeFlat.geometry.dispose();
        routeFlat.material.dispose();
        routeFlat = null;
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
      // 到着時の「目標を向く」方位: ルート終端 → 目標マーク重心（station→社ならクリサム社屋、逆にすれば駅出口）
      {
        const end = routeCurve.getPointAt(1);
        const goal = cfg.direction === 1 ? cresomePos3 : stationPosByName[stationName];
        const dx = (goal ? goal.x : end.x) - end.x;
        const dz = (goal ? goal.z : end.z) - end.z;
        if (Math.hypot(dx, dz) > 0.01) {
          arriveHeading = Math.atan2(dx, dz);
        } else {
          const tEnd = routeCurve.getTangentAt(1);
          arriveHeading = Math.atan2(tEnd.x, tEnd.z);
        }
      }
      const segs = Math.max(Math.round(routeLen / 0.5), 64);
      const tubeGeo = new THREE.TubeGeometry(routeCurve, segs, ROUTE_TUBE_RADIUS, 8, false);
      const tubeMat = new THREE.MeshBasicMaterial({
        color: ROUTE_COLOR, transparent: true, opacity: ROUTE_TUBE_OPACITY, depthWrite: false,
      });
      routeLine = new THREE.Mesh(tubeGeo, tubeMat);
      routeLine.renderOrder = 10; // 建物より前面
      scene.add(routeLine);

      // 平面化ルート（俯瞰・一人称用）: ルートを地面に投影し半透明化
      // （routes.json の z は眼高 1.6m 込みなので 1.45 を引いて地面から 0.15m 上に据える）
      const flatPts = routePts3.map(
        (p) => new THREE.Vector3(p.x, p.y - 1.45, p.z),
      );
      const flatCurve = buildRoundedCurve(flatPts, 1.0);
      const flatGeo = new THREE.TubeGeometry(flatCurve, segs, 0.15, 6, false);
      const flatMat = new THREE.MeshBasicMaterial({
        color: ROUTE_COLOR, transparent: true, opacity: 0.55, depthWrite: false,
      });
      routeFlat = new THREE.Mesh(flatGeo, flatMat);
      routeFlat.renderOrder = 9;
      scene.add(routeFlat);

      // 移動ドット（routes.json の z は眼高込み）
      const dotGeo = new THREE.SphereGeometry(1.5, 16, 12);
      const dotMat = new THREE.MeshBasicMaterial({ color: DOT_COLOR });
      movingDot = new THREE.Mesh(dotGeo, dotMat);
      scene.add(movingDot);

      anim.t = 0;
      phase = 'countdown';
      phaseT = COUNTDOWN_DUR;
      arriveBlend = 0;
      canvasOpacity = 1;
      lastReportedM = -1;
      lastReportedCd = -1;
      snapToRoute(0);
      renderer.domElement.style.opacity = 1;
      if (cbRef.current.onProgress) cbRef.current.onProgress(0, Math.round(routeLen));
    }

    // シーク（外部 API）: ルート上のメートル位置へジャンプ。フェーズは位置に応じて切替
    function seekTo(meters) {
      if (!routeLen || !routeCurve) return;
      anim.t = clamp(meters / routeLen, 0, 1);
      arriveBlend = 0;
      canvasOpacity = 1;
      renderer.domElement.style.opacity = 1;
      if (anim.t <= 0.001) {
        phase = 'countdown';
        phaseT = COUNTDOWN_DUR;
      } else if (anim.t >= 0.999) {
        phase = 'arrive';
        phaseT = ARRIVE_DUR;
      } else {
        phase = 'walking';
      }
      snapToRoute(anim.t);
      const m = Math.round(anim.t * routeLen);
      lastReportedM = m;
      if (cbRef.current.onProgress) cbRef.current.onProgress(m, Math.round(routeLen));
      const cd = phase === 'countdown' ? COUNTDOWN_DUR : null;
      lastReportedCd = cd;
      if (cbRef.current.onCountdown) cbRef.current.onCountdown(cd);
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

      // 到着時の「目標を向く」用の重心位置（three.js 座標）
      cresomePos3 = enuToV3(manifest.cresome.position);
      for (const s of manifest.stations || []) {
        stationPosByName[s.name] = enuToV3(s.position);
      }

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
                    const hasColor = !!o.geometry?.attributes.color;
                    if (o.isMesh) {
                      // 白地図風: 陰影・影なし — 頂点色のフラット色のみで描画
                      // z-fighting 回避: 地形を最も奥に、その他の面を少し奥に polygonOffset で押し込む
                      const old = o.material;
                      const isTerrain = layer.id === 'terrain';
                      const isRail = layer.id === 'lines'; // 路線チューブは半透明（地形が見える）
                      o.material = new THREE.MeshBasicMaterial({
                        vertexColors: hasColor,
                        polygonOffset: true,
                        polygonOffsetFactor: isTerrain ? 1 : 0.5,
                        polygonOffsetUnits: isTerrain ? 1 : 0.5,
                        transparent: isRail,
                        opacity: isRail ? RAIL_LINE_OPACITY : 1.0,
                      });
                      old.dispose();
                    } else if (o.isLine) {
                      // 道路ネットワーク（LINES プリミティブ）: 非発光の半透明ライン（文字色程度に薄め）
                      const old = o.material;
                      o.material = new THREE.LineBasicMaterial({
                        vertexColors: hasColor,
                        transparent: true,
                        opacity: ROAD_LINE_OPACITY,
                        depthWrite: false,
                      });
                      old.dispose();
                    } else {
                      return;
                    }
                    // PiP 俯瞰用: 視界外減光のツインマテリアルを保持。PiP 俯瞰描画時に毎フレーム切替
                    o.userData.pipBaseMat = o.material;
                    const faded = o.material.clone();
                    if (o.isMesh) {
                      // メッシュ: 半透明 alpha では建物の白塗り潰しが背景に透けて見えるため、
                      // 各頂点色を白へ 60% 混合した不透明な塗り色で描画（= 背景地図色 × 0.4 の見た目）
                      faded.transparent = false;
                      faded.opacity = 1.0;
                      faded.onBeforeCompile = (shader) => {
                        shader.fragmentShader = shader.fragmentShader.replace(
                          '#include <color_fragment>',
                          `#include <color_fragment>\n\t// PiP 俯瞰・視界外減光: 背景地図色 × ${PI_OUT_OPACITY}（白へ混合）\n\tdiffuseColor.rgb = mix( vec3( 1.0 ), diffuseColor.rgb, ${PI_OUT_OPACITY} );`,
                        );
                      };
                    } else {
                      // ライン: 半透明のまま（元が depthWrite:false で透明パスに描画される）
                      faded.transparent = true;
                      faded.opacity = PI_OUT_OPACITY;
                    }
                    o.userData.pipFadedMat = faded;
                    pipFadeObjs.push(o);
                    // 路線レイヤー（灰色チューブ）のオブジェクトを収集（歩行視点で非表示にする用）
                    if (layer.id === 'lines') railObjs.push(o);
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
      let routePos = null; // 現在のルート上の位置（PiP 用）

      if (routeCurve) {
        // フェーズ状態機械（一時停止中は全フェーズがフリーズ）:
        // countdown(3s) → walking → arrive(3s: 目標を向き少し見上げる) → fadeOut → 始点スナップ → fadeIn → …
        if (cfg.playing && routeLen > 0) {
          switch (phase) {
            case 'countdown':
              phaseT -= dt;
              if (phaseT <= 0) phase = 'walking';
              break;
            case 'walking':
              anim.t += (cfg.speed * dt) / routeLen;
              if (anim.t >= 1) {
                anim.t = 1;
                phase = 'arrive';
                phaseT = ARRIVE_DUR;
              }
              break;
            case 'arrive':
              phaseT -= dt;
              arriveBlend = Math.min(1, arriveBlend + dt * 2.5);
              if (phaseT <= 0) {
                phase = 'fadeOut';
                phaseT = FADE_DUR;
              }
              break;
            case 'fadeOut':
              phaseT -= dt;
              canvasOpacity = Math.max(0, phaseT / FADE_DUR);
              if (phaseT <= 0) {
                anim.t = 0;
                snapToRoute(0);
                arriveBlend = 0;
                phase = 'fadeIn';
                phaseT = FADE_DUR;
              }
              break;
            case 'fadeIn':
              phaseT -= dt;
              canvasOpacity = Math.min(1, 1 - phaseT / FADE_DUR);
              if (phaseT <= 0) {
                canvasOpacity = 1;
                phase = 'countdown';
                phaseT = COUNTDOWN_DUR;
              }
              break;
          }
        }
        if (routeLen > 0) renderer.domElement.style.opacity = canvasOpacity;

        const pos = routeCurve.getPointAt(anim.t);
        routePos = pos;
        const dir = routeCurve.getTangentAt(anim.t);
        if (movingDot) movingDot.position.copy(pos);

        // ルート表示: フレーム開始時に全非表示。各ビュー（メイン / PiP）で必要分だけ ON にし、
        // 描画後に元に戻す（別ビューへ漏れないよう制御）
        if (routeLine) routeLine.visible = false;
        if (routeFlat) routeFlat.visible = false;
        if (movingDot) movingDot.visible = false;

        // キーボードによるカメラ操作
        applyKeyDelta(dt);

        // フォーカスポイントとヘディング: フレームレート非依存の指数平滑
        const alpha = dt > 0 ? 1 - Math.exp(-5.0 * dt) : 1;
        focus.x += (pos.x - focus.x) * alpha;
        focus.y += (pos.y - focus.y) * alpha;
        focus.z += (pos.z - focus.z) * alpha;
        // ヘディング目標: 通常はルート接線方向 / 到着フェーズは目標マーク重心方向（クリサム社屋・駅出口）
        const targetHeading =
          phase === 'arrive' ? arriveHeading : Math.atan2(dir.x, dir.z);
        let dh = targetHeading - heading;
        dh = Math.atan2(Math.sin(dh), Math.cos(dh)); // 最短角で補間
        heading += dh * alpha;

        // 視点切替時は旧位置からのスイープを防ぐため即座にスナップ
        if (lastViewpoint !== null && lastViewpoint !== cfg.viewpoint) snapToRoute(anim.t);
        lastViewpoint = cfg.viewpoint;

        if (cfg.viewpoint === 'walking') {
          // 歩行: ルート上の眼高（routes.json の z に既反映）+ ユーザーの回転・パン・前後オフセット
          const yaw = heading + ctl.yaw;
          const pitch = clamp(ctl.pitch - 0.04 + ARRIVE_PITCH_LIFT * arriveBlend, -1.2, 1.2);
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

      // メインビュー（全画面）: 俯瞰 = 平面化ルート＋現在地球体 / 歩行 = 非表示
      if (cfg.viewpoint === 'aerial') {
        if (routeFlat) routeFlat.visible = true;
        if (movingDot) movingDot.visible = true;
      }
      // 路線（lines レイヤー・灰色チューブ）: 俯瞰視点のみ表示（歩行視点では非表示）
      for (const o of railObjs) o.visible = cfg.viewpoint === 'aerial';

      // 進行度（メートル）・カウントダウンの報告（整数変化時のみ、60fps の毎フレーム setState を避ける）
      if (routeLen > 0) {
        const mNow = Math.round(anim.t * routeLen);
        if (mNow !== lastReportedM) {
          lastReportedM = mNow;
          if (cbRef.current.onProgress) cbRef.current.onProgress(mNow, Math.round(routeLen));
        }
        const cd = phase === 'countdown' ? Math.max(1, Math.ceil(phaseT)) : null;
        if (cd !== lastReportedCd) {
          lastReportedCd = cd;
          if (cbRef.current.onCountdown) cbRef.current.onCountdown(cd);
        }
      }

      renderer.setViewport(0, 0, renderer.domElement.clientWidth, renderer.domElement.clientHeight);
      renderer.setScissorTest(false);
      renderer.render(scene, camera);
      if (routeFlat) routeFlat.visible = false;
      if (movingDot) movingDot.visible = false;

      // サブパネル（PiP）: 「現在の表示モードと逆」の視点を小窓に描画
      const pipEl = pipRef ? pipRef.current : null;
      if (pipEl && routePos) {
        const rect = pipEl.getBoundingClientRect();
        if (rect.width > 4 && rect.height > 4) {
          const px = Math.round(rect.left);
          const py = Math.round(renderer.domElement.clientHeight - rect.bottom);
          const pw = Math.round(rect.width);
          const ph = Math.round(rect.height);
          const isPipAerial = cfg.viewpoint === 'walking'; // メイン=歩行 → PiP=俯瞰
          if (!isPipAerial) {
            // PiP = 歩行: ルート上の現在位置のデフォルト姿勢（眼高 + 進行方向）。チューブは描画しない。
            const pYaw = heading;
            const pPitch = -0.04 + ARRIVE_PITCH_LIFT * arriveBlend;
            const pDirX = Math.cos(pPitch) * Math.sin(pYaw);
            const pDirY = Math.sin(pPitch);
            const pDirZ = Math.cos(pPitch) * Math.cos(pYaw);
            pipCam.up.set(0, 1, 0);
            pipCam.position.set(routePos.x, routePos.y, routePos.z);
            pipCam.lookAt(
              routePos.x + pDirX * 50,
              routePos.y + pDirY * 50,
              routePos.z + pDirZ * 50,
            );
          } else {
            // PiP = 俯瞰: 歩行点の周囲 50m を真上から（北 = 画面上方向）
            pipCam.up.set(0, 0, -1);
            pipCam.position.set(routePos.x, routePos.y + PI_AERIAL_H, routePos.z);
            pipCam.lookAt(routePos.x, routePos.y, routePos.z);
          }
          pipCam.aspect = pw / ph;
          pipCam.updateProjectionMatrix();
          renderer.setViewport(px, py, pw, ph);
          renderer.setScissor(px, py, pw, ph);
          renderer.setScissorTest(true);

          // 路線（lines レイヤー・灰色チューブ）: PiP=俯瞰（メイン=歩行）のみ表示
          for (const o of railObjs) o.visible = isPipAerial;

          if (isPipAerial) {
            // PiP 俯瞰: 視界内（前方 ±30° セクタ）= 背景地図色そのまま、視界外 = 白へ混合した塗り色。
            // セクタの補集合は非凸のため単一パスのクリップでは表現できない →
            // 「全窓減光 → 経路上書き → 視界内再描画」の 3 パス。
            // パス 1（視界外レベル）: 全マップレイヤーを減光マテリアルで全窓描画
            for (const o of pipFadeObjs) o.material = o.userData.pipFadedMat;
            renderer.render(scene, pipCam);
            // パス 2（経路上書き）: オレンジ経路チューブのみを通常色で描画（減光対象外・視界内外を問わず常時表示）。
            // 一時的に depthWrite を ON にし、経路が深度を書き込むことで、
            // パス 3 の視界内再描画が経路のピクセルを上書きしないようにする。
            world.visible = false;
            if (routeLine) {
              routeLine.visible = true;
              routeLine.material.depthWrite = true;
            }
            renderer.autoClear = false;
            renderer.render(scene, pipCam);
            if (routeLine) routeLine.material.depthWrite = false;
            world.visible = true;
            // パス 3（視界内復描）: 通常マテリアルに戻し、クリップ平面（歩行点を通る縦平面 2 枚）で
            // 前方 ±30° セクタの内側のみを残して再描画 → 視界内だけ背景地図色（フルカラー）で上書き
            for (const o of pipFadeObjs) o.material = o.userData.pipBaseMat;
            // セクタ境界の 2 平面: 保持側 = セクタ内（符号付き距離 ≥ 0）
            const a1 = heading - PI_FOV_HALF;
            pipWedgePlanes[0].normal.set(Math.cos(a1), 0, -Math.sin(a1));
            pipWedgePlanes[0].constant =
              -(pipWedgePlanes[0].normal.x * routePos.x +
                pipWedgePlanes[0].normal.z * routePos.z);
            const a2 = heading + PI_FOV_HALF;
            pipWedgePlanes[1].normal.set(-Math.cos(a2), 0, Math.sin(a2));
            pipWedgePlanes[1].constant =
              -(pipWedgePlanes[1].normal.x * routePos.x +
                pipWedgePlanes[1].normal.z * routePos.z);
            renderer.autoClear = false;
            renderer.clippingPlanes = pipWedgePlanes;
            renderer.render(scene, pipCam);
            renderer.clippingPlanes = []; // three の WebGLClipping.init は null を許容しないため空配列で無効化
            renderer.autoClear = true;
          } else {
            renderer.render(scene, pipCam);
          }
          if (isPipAerial && routeLine) routeLine.visible = false;
          renderer.setScissorTest(false);
        }
      }
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
      return /\b(main|page-wrap|page|map-bg|map-pip|map-bottom)\b/.test(cls);
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

    threeRef.current = { scene, camera, renderer, container, updateRoute };
    // 外部 API（App 側からスライダー・停止ボタン等が呼ぶ）
    if (apiRef) apiRef.current = { seekTo };
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
      if (routeFlat) {
        routeFlat.geometry.dispose();
        routeFlat.material.dispose();
      }
      if (movingDot) {
        movingDot.geometry.dispose();
        movingDot.material.dispose();
      }
      // GLB レイヤーのリソース破棄（メッシュ・ライン両方）＋ PiP 俯瞰用の減光ツインマテリアル
      world.traverse((o) => {
        if (!o.isMesh && !o.isLine) return;
        if (o.geometry) o.geometry.dispose();
        const m = o.material;
        if (Array.isArray(m)) m.forEach((mm) => mm.dispose());
        else if (m) m.dispose();
        const b = o.userData.pipBaseMat;
        if (b && b !== m) b.dispose();
        if (o.userData.pipFadedMat) o.userData.pipFadedMat.dispose();
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

  return <div ref={containerRef} className="map-bg" aria-hidden="true" />;
}

