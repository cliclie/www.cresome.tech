*クリサム最寄り駅3Dマップ*

# Desription

-- クリサム株式会社へ案内するための3Dマップデータを作成
-- HPで公開するためtreed.jsで簡単に読み込める形式にする

# 元となる3Dデータ

-- TOKYO OPEN DATA を利用する
-- 文京区 : https://catalog.data.metro.tokyo.lg.jp/dataset/t000008d2000000017/resource/6ba6aa00-45c0-43f5-b292-2bcebd6be1ad
-- 豊島区 : https://catalog.data.metro.tokyo.lg.jp/dataset/t000008d2000000017/resource/ab86e15f-3933-4fa7-b2bc-d113aef33d35

# マップ範囲はクリサム株式会社と最寄り駅周辺

-- クリサム株式会社 : 東京都文京区大塚6-22-2
-- 大塚 : JR山手線
-- 東池袋 : 有楽町線
-- 護国寺 : 有楽町線
-- 新大塚 : 丸ノ内線
-- 大塚駅前 : 都電荒川線
-- 向原 : 都電荒川線
-- 東池袋四丁目 : 都電荒川線

# マップに表示するオブジェクト

-- 地面（DEM標高）
-- 道路
-- 路線
-- 建物
-- 公園など
-- 駅

# 構成

```
map/
├─ src/            パイプライン（Python）
│  ├─ config.py         中心・範囲・駅・路線・色の設定
│  ├─ geo.py            座標変換・クリップボックスの共通ユーティリティ
│  ├─ terrain.py        DEM(TINRelief)パース → 地形メッシュ + 標高サンプラー（接地用）
│  ├─ pipeline.py       メイン: GML/GeoJSON/OSM → out/*.glb + manifest.json
│  ├─ ziputil.py        リモートZIPのHTTP Range部分取得（中央ディレクトリ解析）
│  ├─ extract_plateau.py  PLATEAU CityGML の必要なGMLのみ抽出 → data/plateau/
│  ├─ download.py       レジューム対応ダウンロード
│  ├─ fetch_osm.py      Overpass API から都電荒川線・停留所・公園を取得 → data/osm/
│  ├─ fetch_cresome.py  クリサム社屋座標の確定（Google Maps提供値を cresome_loc.json に保存）
│  ├─ verify_stations.py  駅位置のOSM照合チェック
│  └─ verify_glb.py     out/ のGLB整合性チェック（頂点数・bbox・頂点色）
├─ data/           生データ（.gitignore対象）
│  ├─ plateau/       文京区・豊島区のCityGML（メッシュ別GML）+ 関連GeoJSON
│  └─ osm/           Overpass API取得データ + cresome_loc.json（社屋座標）
├─ out/            成果物（GLBレイヤー群 + manifest.json）
├─ viewer/         簡易ビュワー（vanilla three.js、CDN非依存）
│  ├─ index.html / viewer.js
│  └─ lib/three/    vendored three.js (npm: three@0.169.0)
└─ scripts/start_viewer.bat   ビュワー起動（python http.server + ブラウザ自動起動）
```

# セットアップと実行

```bat
:: 1) Python依存のインストール
pip install -r requirements.txt

:: 2) データ取得（初回のみ。数GB級のため時間がかかります）
python src/extract_plateau.py        :: PLATEAU CityGML（bldg/tran/wtr/dem のメッシュ別GMLのみ、HTTP Range部分取得）
python src/fetch_osm.py              :: OSM: 都電荒川線・停留所・公園・鉄道駅

:: 3) GLB生成（約30秒）
python src/pipeline.py               :: --no-buildings で建物除く高速実行も可

:: 4) ビュワー起動 → http://localhost:8000/viewer/index.html
scripts\start_viewer.bat
```

# 成果物（out/）

| ファイル | 内容 |
|---|---|
| terrain.glb   | 地面（PLATEAU DEM/TINRelief、標高0.2〜34.2m） |
| buildings.glb | 建物（LOD1エクストルード、用途別色、頂点色・単一メッシュにマージ済み。基部はDEM接地） |
| cresome_building.glb | クリサム社屋の建物1棟のみ（buildingsから切り出し。外部でこの1棟だけ色変更可能） |
| roads.glb     | 道路面（灰色、地面標高に沿う） |
| parks.glb     | 公園（OSM leisure=park、緑、地面標高に沿う） |
| water.glb     | 水部（青、地面標高に沿う） |
| lines.glb     | 路線チューブ×4（JR山手/有楽町/丸ノ内/都電荒川、公式ラインカラー） |
| stations.glb  | 駅マーカー×7（路線カラーのポール+球） |
| cresome.glb   | クリサム社マーカー（赤、文京区大塚6-22-2） |
| manifest.json | ビュワー用メタ情報（レイヤー・駅位置・路線色・出典） |

座標系: 当地平面座標(m)。原点は `config.py` の CENTER（WGS84 35.721N/139.722E）、
X=東 / Y=北 / Z=上。Z成分はDEM（TINRelief）による地面標高を含む
（この範囲では約0〜34m、駅・社屋マーカーの基部も標高に接地済み）。
GLBをthree.jsに読み込む場合は Y-up変換が必要
（シーン全体を X軸 -90°回転: `group.rotation.x = -Math.PI/2`）。

# 現行ビルド実績（2026-09-04、DEM対応＋クリサム社屋切り出し版）

```
  dedupe: 8個の内容同一ファイルをスキップ   （区境界を跨ぐメッシュは文京・豊島両ZIPに同一ファイルで含まれるためMD5重複除去）
buildings: files=9/47 total=30694 used=17811   （bbox内に交差する建物のみ採用）
  クリサム社屋特定（点から0.0m）: 高さ=8.9m 用途=住宅 → cresome_building.glb に切り出し
tran: polygons=5675 / wtr: polygons=822 / parks(osm): polygons=41
stations: 7/7 / lines: JR山手線・有楽町線・丸ノ内線・都電荒川線
terrain grid: 216x244 nodes (10.0m), elev [0.1, 34.2] m
== export ==（合計 約48秒）
terrain.glb          meshes=    1 verts= 52704 size= 2.10 MB
buildings.glb        meshes=    1 verts=229796 size= 8.34 MB   （基部はDEM接地）
cresome_building.glb meshes=    1 verts=    14 size= 0.00 MB   （クリサム社屋、高さ8.9m）
roads.glb            meshes=    1 verts= 48065 size= 1.21 MB   （地面標高に沿う）
parks.glb            meshes=    1 verts=   517 size= 0.01 MB
water.glb            meshes=    1 verts=  2466 size= 0.05 MB
lines.glb            meshes=    1 verts=  1536 size= 0.06 MB   （路線は地面から浮き上がり）
stations.glb         meshes=   21 verts=  1722 size= 0.04 MB   （マーカー基部はDEM接地）
cresome.glb          meshes=    1 verts=   110 size= 0.01 MB   （標高29.4mに接地）
```

※ dedupe導入前は両区共有の境界メッシュ6件が二重パースされ、約15,000件の重複建物ジオメトリ
（z-fightingの原因）が混入していました。MD5による内容重複除去で解消済みです。

検証: `python src/verify_glb.py` で全GLB（terrain含む9ファイル）の読み込み・bbox・頂点色を確認済み。
ビュワーは `scripts\start_viewer.bat` → http://localhost:8000/viewer/index.html

# カラーカスタマイズ（白地図など）

色はビルド時にGLBの**頂点色（COLOR_0属性）**として焼き込まれています。レイヤーごとに独立した
GLBファイルなので、以下2つの方法で外部から色の指定が可能です。

## 方法1: three.js側でマテリアル上書き（再ビルド不要）

読み込み時に各メッシュのマテリアルを置き換えれば頂点色は無視され、白地図風になります
（レイヤー単位での制御が可能）:

```js
const PALETTE = {
  terrain:   0xf2f2f2, buildings: 0xcfcfcf, roads: 0xffffff,
  parks:     0xe2e2e2, water:     0xedf1f4, lines: 0x5a5a5a,
  stations:  0x404040, cresome:   0xE94B3A, // アクセント色は残す
  cresome_building: 0xE94B3A,               // クリサム社屋建物も独立レイヤー
};
// GLTFLoader で各レイヤーを読み込んだ後:
gltf.scene.traverse((o) => {
  if (o.isMesh) o.material = new THREE.MeshStandardMaterial({ color: PALETTE[ly.id] });
});
```

クリサム社屋の建物1棟は `cresome_building.glb` という独立レイヤーに切り出されているため、
白地図化してもこの1棟だけ任意の色（例: 赤）に残す・別色にする事が可能です。

※ 1つのGLB**内部**のサブ要素（4路線・7駅・建物の用途別色）は頂点色でのみ区別されているため、
方法1ではレイヤー単位で単一色にできますが、GLB内の個別要素を別々に着色することはできません。

## 方法2: パイプラインで焼き込み色を変更（再ビルド約57秒）

全色は `src/config.py` に定義されています。白地図風のモノクロパレットも組み込まれています:

```bat
python src/pipeline.py --palette white --out out_white   :: 白地図風セットを out_white/ に生成（out/ は無変更）
```

ビュワーでプレビューするにはURLパラメータで出力先を切り替えられます:
`http://localhost:8000/viewer/index.html?base=../out_white/`

カスタムパレットは `config.py` の値（USAGE_COLORS / ROAD_COLOR / PARK_COLOR / WATER_COLOR /
TERRAIN_COLORS / LINES 各色）を編集して再実行してください。

# HPへの埋め込み例（最小構成）

```html
<script type="importmap">
{ "imports": {
    "three": "./lib/three/build/three.module.js",
    "three/addons/": "./lib/three/examples/jsm/"
} }
</script>
<script type="module">
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(55, innerWidth/innerHeight, 0.5, 20000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
document.body.appendChild(renderer.domElement);

// ENU(z-up) → three.js(Y-up) 変換用のグループ
const world = new THREE.Group();
world.rotation.x = -Math.PI / 2;
scene.add(world);

new GLTFLoader().load("out/buildings.glb", (gltf) => {
  gltf.scene.traverse((o) => { if (o.isMesh && o.geometry.attributes.color) o.material.vertexColors = true; });
  world.add(gltf.scene);
});

scene.add(new THREE.HemisphereLight(0xffffff, 0x99aabb, 1.2));
const sun = new THREE.DirectionalLight(0xffffff, 1.5);
sun.position.set(400, 700, -250);
scene.add(sun);

// クリサム社屋（manifest.json の cresome.position、z=29.4mはDEM標高）を向く初期カメラ
camera.position.set(303 + 260, 210, 359 + 300);
camera.lookAt(303, 29, 359);

renderer.setAnimationLoop(() => renderer.render(scene, camera));
</script>
```

# データ出典・表示について

-- PLATEAU 都市モデル（国土交通省）: 13105文京区 / 13116豊島区 2025年度版 CityGML
   （https://www.geospatial.jp/plateau/ の利用規約に従い出典表示すること）
-- PLATEAU 関連データセット: station / railway GeoJSON（JGD2011、WGS84へ変換済み）
-- OpenStreetMap (Overpass API): 公園・都電荒川線・停留所（OSMのShare-Alike条件に注意）
-- クリサム社屋座標: Google Maps（クライアント提供）
