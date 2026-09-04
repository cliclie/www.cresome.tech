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
scene.background = new THREE.Color(0xdfeaf2);
scene.fog = new THREE.Fog(0xdfeaf2, 1800, 4500);

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
controls.maxPolarAngle = Math.PI / 2 - 0.02;
controls.minDistance = 20;
controls.maxDistance = 3000;

scene.add(new THREE.HemisphereLight(0xffffff, 0x99aabb, 1.1));
const sun = new THREE.DirectionalLight(0xffffff, 1.6);
sun.position.set(400, 700, -250);
scene.add(sun);

// ENU(east,north,up) → three 空間への橋渡し: world グループを X軸-90°回転
const world = new THREE.Group();
world.rotation.x = -Math.PI / 2;
scene.add(world);
const e2t = (x, y, z = 0) => world.localToWorld(new THREE.Vector3(x, y, z));

// ---------------------------------------------------------------- 地面・グリッド（地形メッシュの最低標高より下に配置）
function addGround(center3, zBase) {
  const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(6000, 6000),
    new THREE.MeshLambertMaterial({ color: 0xe8ecef })
  );
  ground.rotation.x = -Math.PI / 2;
  ground.position.set(center3.x, zBase - 0.15, center3.z);
  scene.add(ground);
  const grid = new THREE.GridHelper(2400, 120, 0xc8d2da, 0xdde5ea);
  grid.position.set(center3.x, zBase - 0.1, center3.z);
  scene.add(grid);
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
      if (o.isMesh && o.geometry.attributes.color) o.material.vertexColors = true;
    });
    group.add(gltf.scene);
    world.add(group);
    layers[ly.id] = group;
  });
  await Promise.all(jobs);

  // 駅マーカー（ラベル + クリック用ヒットシリンダー）— position[2] は地面標高
  for (const st of manifest.stations) {
    const z0 = st.position[2] ?? 0;
    addLabel(st.name, st.position[0], st.position[1], z0 + 13.5, false);
    hitTargets.push(addHitCylinder(st.position[0], st.position[1], z0, { name: st.name, line: st.line, color: st.color }));
  }

  // クリサム社マーカー
  const cr = manifest.cresome;
  cresomePos = [cr.position[0], cr.position[1], cr.position[2] ?? 0];
  addLabel(cr.name, cr.position[0], cr.position[1], cresomePos[2] + 21, true);
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


function addLabel(text, x, y, z, isCresome) {
  const div = document.createElement("div");
  div.className = "st-label" + (isCresome ? " cresome" : "");
  div.textContent = text;
  const obj = new CSS2DObject(div);
  obj.position.set(x, y, z);
  world.add(obj);
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

// ---------------------------------------------------------------- ループ
function animate() {
  requestAnimationFrame(animate);
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

