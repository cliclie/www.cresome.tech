// クリサム 3Dマップ簡易ビュワー（vanilla three.js + GLB/manifest ローカル読み込み）
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { CSS2DRenderer, CSS2DObject } from "three/addons/renderers/CSS2DRenderer.js";

// デフォルトは ../out/ 。別パレットのプレビュー: index.html?base=../out_white/
const BASE = new URLSearchParams(location.search).get("base") || "../out/";
const LAYER_DOTS = {
  terrain: "#86AC6D", buildings: "#DCC9A5", roads: "#9AA0A6", parks: "#7CBF6B", water: "#5B9BD5",
  lines: "#F3C614", stations: "#00A550", cresome: "#E94B3A", cresome_building: "#E94B3A",
};

// ---------------------------------------------------------------- セットアップ
const app = document.getElementById("app");
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff);
scene.fog = new THREE.Fog(0xffffff, 1800, 4500);

const camera = new THREE.PerspectiveCamera(55, innerWidth / innerHeight, 0.5, 20000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.setSize(innerWidth, innerHeight);
app.appendChild(renderer.domElement);

const labelRenderer = new CSS2DRenderer();
labelRenderer.setSize(innerWidth, innerHeight);
Object.assign(labelRenderer.domElement.style, { position: "absolute", top: "0", pointerEvents: "none" });
app.appendChild(labelRenderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.08;
controls.maxPolarAngle = Math.PI; // 砲塔方式: 上を見上げる方向も許可（update() の phi クランプを事実上無効化）
controls.minDistance = 20;
controls.maxDistance = 3000;
controls.mouseButtons.LEFT = -1; // 左ドラッグの回転は無効化（下のカスタム視点回転に委譲）

// 白地図風: 光源なし（影・陰影表現をしない。メッシュは非発光のフラット色で描画）

// ENU(east,north,up) → three 空間への橋渡し: world グループを X軸-90°回転
const world = new THREE.Group();
world.rotation.x = -Math.PI / 2;
scene.add(world);
const e2t = (x, y, z = 0) => world.localToWorld(new THREE.Vector3(x, y, z));

// ---------------------------------------------------------------- 地面（地形メッシュの最低標高より下に配置）
function addGround(center3, zBase) {
  const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(6000, 6000),
    new THREE.MeshBasicMaterial({ color: 0xffffff })
  );
  ground.rotation.x = -Math.PI / 2;
  ground.position.set(center3.x, zBase - 0.15, center3.z);
  scene.add(ground);
}

// ---------------------------------------------------------------- manifest 読込 → GLB 読み込み
const layers = {};        // id -> THREE.Group
const hitTargets = [];    // 駅・クリサムのクリック用透明シリンダー
let cresomePos = null;

async function init() {
  const manifest = await (await fetch(BASE + "manifest.json")).json();

  // 地面（地形メッシュの最低標高より8m下に配置）
  addGround(e2t(0, 0, 0), (manifest.terrain?.min_elev ?? 0) - 8);

  // レイヤー GLB を全部読む
  const loader = new GLTFLoader();
  const jobs = manifest.layers.map(async (ly) => {
    if (!ly.file || !(await fetch(BASE + ly.file, { method: "HEAD" }).then(r => r.ok).catch(() => false))) return;
    const gltf = await new Promise((res, rej) => loader.load(BASE + ly.file, res, undefined, rej));
    const group = new THREE.Group();
    group.name = ly.id;
    gltf.scene.traverse((o) => {
      if (o.isMesh) {
        // 白地図風: 陰影・影表現なし — 頂点色のフラット色のみで描画
        // z-fighting 回避: 地形を最も奥に、その他の面を少し奥に polygonOffset で押し込む
        // （線は polygonOffset が効かないため自然と最前面になる）
        const old = o.material;
        const isTerrain = ly.id === "terrain";
        const isLines = ly.id === "lines";  // 路線チューブは半透明（地形が見える）
        o.material = new THREE.MeshBasicMaterial({
          vertexColors: !!o.geometry.attributes.color,
          polygonOffset: true,
          polygonOffsetFactor: isTerrain ? 1 : 0.5,
          polygonOffsetUnits: isTerrain ? 1 : 0.5,
          transparent: isLines,
          opacity: isLines ? 0.5 : 1.0,
        });
        old.dispose();
      } else if (o.isLine && o.geometry.attributes.color) {
        o.material.vertexColors = true;
      }
    });
    group.add(gltf.scene);
    world.add(group);
    layers[ly.id] = group;
  });
  await Promise.all(jobs);

  // 駅マーカー（注釈図方式: ラベル + リーダー線 + クリック用ヒットシリンダー）— position[2] は地面標高
  // ラベルは建物屋上+4mに配置（建物がない場合はマーカー円盤トップ+4m）
  for (const st of manifest.stations) {
    const z0 = st.position[2] ?? 0;
    const buildingTop = findBuildingTop(st.position[0], st.position[1], z0);
    const zObj = buildingTop !== null ? buildingTop : z0 + 0.2;
    addLabel(st.name, st.position[0], st.position[1], zObj, false);
    hitTargets.push(addHitCylinder(st.position[0], st.position[1], z0, { name: st.name, line: st.line, color: st.color }));
  }

  // クリサム社マーカー
  const cr = manifest.cresome;
  cresomePos = [cr.position[0], cr.position[1], cr.position[2] ?? 0];
  const crBuildingTop = findBuildingTop(cr.position[0], cr.position[1], cresomePos[2]);
  const crZObj = crBuildingTop !== null ? crBuildingTop : cresomePos[2] + 0.245;
  addLabel(cr.name, cr.position[0], cr.position[1], crZObj, true);
  hitTargets.push(addHitCylinder(cr.position[0], cr.position[1], cresomePos[2], { name: cr.name, line: cr.address, color: cr.color }));

  // レイヤー切替UI
  const box = document.getElementById("layers");
  for (const ly of manifest.layers) {
    if (!layers[ly.id]) continue;
    const label = document.createElement("label");
    const cb = document.createElement("input");
    cb.type = "checkbox";
    cb.checked = true;
    cb.addEventListener("change", () => { layers[ly.id].visible = cb.checked; });
    const dot = document.createElement("span");
    dot.className = "dot";
    dot.style.background = LAYER_DOTS[ly.id] || "#888";
    label.append(cb, dot, document.createTextNode(ly.label));
    box.appendChild(label);
  }

  // 経路表示（routes.json → 赤色半透明チューブ、チェックボックスで切替）
  const routesBox = document.getElementById("routes");
  const routesTitle = document.getElementById("routes-title");
  try {
    const routesData = await (await fetch(BASE + "routes.json")).json();
    if (routesData.routes && routesData.routes.length > 0) {
      routesTitle.style.display = "";
      const routesGroup = new THREE.Group();
      routesGroup.name = "routes";
      world.add(routesGroup);
      for (const route of routesData.routes) {
        const pts = route.points.map((p) => new THREE.Vector3(p[0], p[1], p[2]));
        if (pts.length < 2) continue;
        // 道路中心線に沿った CurvePath でチューブ化。コーナーは buildRoundedCurve で
        // 二次ベジェ曲線により滑らかに丸める（CatmullRom はコーナーで対角に切り抜けるため不使用）。
        const curve = buildRoundedCurve(pts, 1.0);
        let pathLen = 0;
        for (let i = 0; i < pts.length - 1; i++) pathLen += pts[i].distanceTo(pts[i + 1]);
        const segs = Math.max(Math.round(pathLen / 0.5), 64); // 0.5m間隔で弧を滑らかに
        const tubeGeo = new THREE.TubeGeometry(curve, segs, 0.3, 8, false);
        const tubeMat = new THREE.MeshBasicMaterial({ color: 0xff0000, transparent: true, opacity: 0.6, depthWrite: false });
        const tube = new THREE.Mesh(tubeGeo, tubeMat);
        tube.renderOrder = 10; // 建物より前面
        routesGroup.add(tube);
        // チェックボックス
        const label = document.createElement("label");
        const cb = document.createElement("input");
        cb.type = "checkbox";
        cb.checked = true;
        cb.addEventListener("change", () => { tube.visible = cb.checked; });
        const dot = document.createElement("span");
        dot.className = "dot";
        dot.style.background = "#ff0000";
        label.append(cb, dot, document.createTextNode(`${route.station}（${route.distance_m}m）`));
        routesBox.appendChild(label);
      }
    }
  } catch (e) {
    console.warn("routes.json 読み込み失敗:", e);
  }

  // ステータス（件数・標高・出典）
  const s = manifest.stats;
  const t = manifest.terrain ? ` / 地形 ${manifest.terrain.min_elev}〜${manifest.terrain.max_elev}m` : "";
  document.getElementById("status").textContent =
    `建物 ${s.buildings} / 道路面 ${s.roads} / 公園 ${s.parks} / 水部 ${s.water} / 駅 ${s.stations} / 路線 ${s.lines}${t}` +
    "\n出典: " + manifest.sources.join(" / ");

  // 初期カメラ: クリサム社屋を向く（地面標高基準）
  const c3 = e2t(cresomePos[0], cresomePos[1], cresomePos[2]);
  controls.target.copy(c3);
  camera.position.set(c3.x + 260, c3.y + 210, c3.z + 300);
  camera.lookAt(controls.target);

  const loading = document.getElementById("loading");
  loading.style.opacity = "0";
  setTimeout(() => loading.remove(), 500);
}


// 経路ポリラインのコーナーを滑らかに丸めた CurvePath を返す。
// 鋭角な曲がり（約10°以上）に二次ベジェ曲線を挿入する。制御点は元のコーナー、
// 両端は各線分上 r の位置に置くため、曲線はコーナーの三角形内（道路内）に収まり
// ブロックを斜めに切り抜けない。
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
    // ほぼ直線（10°未満）は丸めず直線接続
    if (inDir.dot(outDir) > 0.985) {
      curve.add(new THREE.LineCurve3(prevEnd, p1));
      prevEnd = p1;
      continue;
    }
    const r = Math.min(radius, inLen * 0.5, outLen * 0.5);
    const a = p1.clone().addScaledVector(inDir, -r); // 弧の始点（進入線分上）
    const b = p1.clone().addScaledVector(outDir, r); // 弧の終点（離線線分上）
    curve.add(new THREE.LineCurve3(prevEnd, a));
    curve.add(new THREE.QuadraticBezierCurve3(a, p1, b));
    prevEnd = b;
  }
  curve.add(new THREE.LineCurve3(prevEnd, pts[n - 1]));
  return curve;
}

// 注釈図方式のラベル: オブジェクトトップ+4mにラベル、3Dリーダー線でオブジェクトに接続
const LABEL_OFFSET = 4; // ラベルの浮き上がり高さ (m)

// 指定地点の建物屋上高さを検出（上空から真下にレイキャスト）
function findBuildingTop(x, y, z0) {
  const raycaster = new THREE.Raycaster();
  const origin = e2t(x, y, z0 + 500); // 500m上空（ワールド座標）
  const direction = new THREE.Vector3(0, -1, 0); // 真下（ワールド座標）
  raycaster.set(origin, direction);
  
  // 建物レイヤーのみを対象（マーカー円盤や地形は除外）
  const targets = [layers["buildings"], layers["cresome_building"]].filter(Boolean);
  const intersects = raycaster.intersectObjects(targets, true);
  
  if (intersects.length > 0) {
    // 交点（ワールド座標）をENU座標に変換
    const point = world.worldToLocal(intersects[0].point.clone());
    return point.z; // 建物屋上の高さ（ENU座標）
  }
  return null; // 建物がない
}

function addLabel(text, x, y, zObj, isCresome) {
  const zLabel = zObj + LABEL_OFFSET;
  
  // ラベルボックス（CSS2DObject）
  const div = document.createElement("div");
  div.className = "st-label" + (isCresome ? " cresome" : "");
  const tag = document.createElement("span");
  tag.className = "tag";
  tag.textContent = text;
  div.append(tag);
  const obj = new CSS2DObject(div);
  obj.position.set(x, y, zLabel);
  world.add(obj);
  
  // リーダー線（3Dライン）— depthTest 無効で常に前面表示
  const geo = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(x, y, zObj),
    new THREE.Vector3(x, y, zLabel),
  ]);
  const mat = new THREE.LineBasicMaterial({ color: isCresome ? 0xE94B3A : 0x787878, depthTest: false });
  const line = new THREE.Line(geo, mat);
  line.renderOrder = 999; // 最前面に描画
  world.add(line);
}

function addHitCylinder(x, y, z0, info) {
  const m = new THREE.Mesh(
    new THREE.CylinderGeometry(7, 7, 30, 12),
    new THREE.MeshBasicMaterial({ visible: false })
  );
  m.position.set(x, y, z0 + 15);
  m.userData.info = info;
  world.add(m);
  return m;
}

// ---------------------------------------------------------------- クリック → ポップアップ
const raycaster = new THREE.Raycaster();
const popup = document.getElementById("popup");
let downAt = null;

renderer.domElement.addEventListener("pointerdown", (e) => { downAt = [e.clientX, e.clientY]; });
renderer.domElement.addEventListener("pointerup", (e) => {
  if (!downAt) return;
  const moved = Math.hypot(e.clientX - downAt[0], e.clientY - downAt[1]);
  downAt = null;
  if (moved > 5) return; // ドラッグは除外
  const ndc = new THREE.Vector2((e.clientX / innerWidth) * 2 - 1, -(e.clientY / innerHeight) * 2 + 1);
  raycaster.setFromCamera(ndc, camera);
  const hits = raycaster.intersectObjects(hitTargets, false);
  if (hits.length) {
    const info = hits[0].object.userData.info;
    popup.innerHTML =
      `<h2>${info.name}</h2>` +
      `<div class="line"><span class="swatch" style="background:${info.color}"></span>${info.line}</div>`;
    popup.style.display = "block";
    popup.style.left = Math.min(e.clientX + 14, innerWidth - 280) + "px";
    popup.style.top = Math.min(e.clientY + 14, innerHeight - 120) + "px";
  } else {
    popup.style.display = "none";
  }
});

// ---------------------------------------------------------------- キーボード操作（W/S: 前後 / A・D: 左右 / R: 上昇 / F: 下降）
const keys = new Set();
const MOVE_KEYS = new Set(["KeyW", "KeyA", "KeyS", "KeyD", "KeyR", "KeyF"]);
addEventListener("keydown", (e) => {
  if (e.ctrlKey || e.metaKey || e.altKey) return; // ブラウザのショートカット（Ctrl+R等）は優先
  if (!MOVE_KEYS.has(e.code)) return;
  keys.add(e.code);
  e.preventDefault();
});
addEventListener("keyup", (e) => {
  if (MOVE_KEYS.has(e.code)) keys.delete(e.code);
});
addEventListener("blur", () => keys.clear()); // ウィンドウを離れたら押し込みを解放

const SPEED = 1.0; // 移動速度係数
const _worldUp = new THREE.Vector3(0, 1, 0);
const _fwd = new THREE.Vector3();
const _right = new THREE.Vector3();
const _mv = new THREE.Vector3();
function updateCameraMove(delta) {
  if (keys.size === 0) return;
  const dist = controls.getDistance();

  // 並進（W: 前 / S: 後 / A: 左 / D: 右 / R: 上昇 / F: 下降）
  // 進行方向 = カメラの向きを水平面に射影（真上を向いていれば水平移動はスキップ）
  camera.getWorldDirection(_fwd);
  _fwd.y = 0;
  if (_fwd.lengthSq() < 1e-6) return;
  _fwd.normalize();
  // 右方向 = 進行方向 × 上方向（水平面内、進行方向に垂直）
  _right.crossVectors(_fwd, _worldUp);
  // 移動速度はズーム距離に比例（寄れば細かく、離れれば広く）
  const step = dist * SPEED * delta;
  _mv.set(0, 0, 0);
  if (keys.has("KeyW")) _mv.add(_fwd);
  if (keys.has("KeyS")) _mv.sub(_fwd);
  if (keys.has("KeyD")) _mv.add(_right);
  if (keys.has("KeyA")) _mv.sub(_right);
  if (keys.has("KeyR")) _mv.y += 1;
  if (keys.has("KeyF")) _mv.y -= 1;
  if (_mv.lengthSq() === 0) return;
  _mv.normalize().multiplyScalar(step);
  // カメラとターゲットを一緒に並進（視点の向きを保ったまま移動）
  camera.position.add(_mv);
  controls.target.add(_mv);
}

// ---------------------------------------------------------------- マウス視点回転（左ドラッグ: カメラ位置固定の yaw + pitch、砲塔方式）
const _lookOff = new THREE.Vector3();
const _lookFwd = new THREE.Vector3();
const _lookRgt = new THREE.Vector3();
let lookActive = false;
let lookX = 0, lookY = 0;
function lookRotate(dx, dy) {
  const sens = (2 * Math.PI) / innerHeight; // OrbitControls と同じ回転速度
  // yaw（水平）: 世界の上方向(Y)回りでターゲットを回転
  _lookOff.subVectors(controls.target, camera.position);
  _lookOff.applyAxisAngle(_worldUp, -dx * sens);
  controls.target.copy(camera.position).add(_lookOff);
  // pitch（上下）: カメラの右方向回りでターゲットを回転
  _lookFwd.subVectors(controls.target, camera.position).normalize();
  _lookRgt.crossVectors(_lookFwd, _worldUp);
  if (_lookRgt.lengthSq() > 1e-8) {
    _lookRgt.normalize();
    _lookOff.subVectors(controls.target, camera.position);
    _lookOff.applyAxisAngle(_lookRgt, -dy * sens);
    controls.target.copy(camera.position).add(_lookOff);
  }
  // 真上/真下の極付近で視点反転しないよう俯仰角をクランプ（±84°）
  _lookOff.subVectors(controls.target, camera.position);
  const len = _lookOff.length();
  if (len > 1e-6) {
    const nx = _lookOff.x / len, ny = _lookOff.y / len, nz = _lookOff.z / len;
    const cy = THREE.MathUtils.clamp(ny, -0.995, 0.995);
    const nl = Math.sqrt(nx * nx + cy * cy + nz * nz);
    _lookOff.set(nx / nl, cy / nl, nz / nl).multiplyScalar(len);
    controls.target.copy(camera.position).add(_lookOff);
  }
}
renderer.domElement.addEventListener("pointerdown", (e) => {
  if (e.pointerType !== "mouse" || e.button !== 0) return; // マウスの左ボタンのみ
  lookActive = true;
  lookX = e.clientX;
  lookY = e.clientY;
});
renderer.domElement.addEventListener("pointermove", (e) => {
  if (!lookActive) return;
  lookRotate(e.clientX - lookX, e.clientY - lookY);
  lookX = e.clientX;
  lookY = e.clientY;
});
const endLook = (e) => { if (e.type === "pointercancel" || e.button === 0) lookActive = false; };
renderer.domElement.addEventListener("pointerup", endLook);
renderer.domElement.addEventListener("pointercancel", endLook);

// ---------------------------------------------------------------- ループ
const clock = new THREE.Clock();
function animate() {
  requestAnimationFrame(animate);
  updateCameraMove(clock.getDelta());
  controls.update();
  renderer.render(scene, camera);
  labelRenderer.render(scene, camera);
}
addEventListener("resize", () => {
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
  labelRenderer.setSize(innerWidth, innerHeight);
});

init().catch((err) => {
  console.error(err);
  const loading = document.getElementById("loading");
  if (loading) loading.textContent = "読み込み失敗: " + err.message + "（out/ にGLBがあるか確認してください）";
});
animate();

