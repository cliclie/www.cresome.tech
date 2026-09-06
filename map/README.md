*クリサム最寄り駅3Dマップ*

# Description

-- クリサム株式会社へ案内するための3Dマップデータを作成
-- HPで公開するためthree.jsで簡単に読み込める形式にする

# 元となる3Dデータ

-- TOKYO OPEN DATA を利用する
-- 文京区 : https://catalog.data.metro.tokyo.lg.jp/dataset/t000008d2000000017/resource/6ba6aa00-45c0-43f5-b292-2bcebd6be1ad
-- 豊島区 : https://catalog.data.metro.tokyo.lg.jp/dataset/t000008d2000000017/resource/ab86e15f-3933-4fa7-b2bc-d113aef33d35

# マップ範囲はクリサム株式会社と最寄り駅周辺

-- クリサム株式会社 : 東京都文京区大塚6-22-2
-- 大塚 : JR山手線
          開始点:大塚駅南口(35.73123796339138, 139.72865959435308)
-- 東池袋 : 有楽町線
          開始点:東池袋駅4番出口(35.72538930721675, 139.72018289815455)
-- 護国寺 : 有楽町線
          開始点:護国寺駅1番出口(35.72012226872597, 139.72685408886878)
-- 新大塚 : 丸ノ内線
          開始点:丸ノ内線1番出口(35.726006315785725, 139.72985283805284)
          開始点:丸ノ内線2番出口(35.725349262380185, 139.73036379886952)
-- 大塚駅前 : 都電荒川線
          開始点:大塚駅前(35.731327723287265, 139.72917527899182)
-- 向原 : 都電荒川線
          開始点:向原早稲田方面(35.729134083144075, 139.72529370687397)
          開始点:向原三ノ輪方面(35.72899690798759, 139.72502682707972)
-- 東池袋四丁目 : 都電荒川線
          開始点:東池袋四丁目早稲田方面(35.72528221561567, 139.72030423501354)
          開始点:東池袋四丁目三ノ輪方面(35.725241932098676, 139.7201037398917)

# マップに表示するオブジェクト

-- 地面（DEM標高）
-- 道路
-- 路線
-- 建物
-- 公園など
-- 開始点（駅出口・停留所）
-- 経路（10起点 → クリサム）

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
│  ├─ routes.py         最短経路計算: OSM highway → 道路グラフ + Dijkstra → out/routes.json
│  ├─ verify_stations.py  駅位置のOSM照合チェック
│  ├─ verify_glb.py     out/ のGLB整合性チェック（頂点数・bbox・頂点色）
│  ├─ verify_changes.py 白地図 roads.glb / 地形の突き抜け検証
│  ├─ _verify_no_bury.py 地形に埋もれる頂点の有無を検証（GLB読み込み→terrain.height比較）
│  ├─ _verify_road_offset.py 道路境界線と面のZオフセット検証（旧flat-offset方式用）
│  ├─ _proto_lines.py     大量エンティティの Path3D 生成・GLB エクスポートコスト検証（合成データ）
│  ├─ _test_path_color.py Path3D の GLB エクスポートで COLOR_0 が頂点単位に展開されるか確認
│  └─ _test_scene_mixed.py Trimesh + Path3D を1つのSceneに含めてGLB出力できるか確認
├─ data/           生データ（.gitignore対象）
│  ├─ plateau/       文京区・豊島区のCityGML（メッシュ別GML）+ 関連GeoJSON
│  └─ osm/           Overpass API取得データ + cresome_loc.json（社屋座標）
├─ out/            成果物（GLBレイヤー群 + manifest.json）
├─ viewer/         簡易ビュワー（vanilla three.js、CDN非依存）
│  ├─ index.html / viewer.js
│  └─ lib/three/    vendored three.js (npm: three@0.169.0)
└─ scripts/
   ├─ start_viewer.bat      ビュワー起動（python http.server + ブラウザ自動起動）
   └─ download_highways.py  OSM highway ways を Overpass API から取得 → data/osm/highways.json
```

# セットアップと実行

```bat
:: 1) Python依存のインストール
pip install -r requirements.txt

:: 2) データ取得（初回のみ。数GB級のため時間がかかります）
python src/extract_plateau.py        :: PLATEAU CityGML（bldg/tran/wtr/dem のメッシュ別GMLのみ、HTTP Range部分取得）
python src/fetch_osm.py              :: OSM: 都電荒川線・停留所・公園・鉄道駅
python scripts\download_highways.py  :: OSM highway ways（最短経路計算用道路ネットワーク）

:: 3) GLB生成（約30秒）
python src/pipeline.py               :: --no-buildings で建物除く高速実行も可

:: 4) 最短経路生成（10起点 → クリサム）
python src/routes.py                 :: out/routes.json を生成（道路グラフ + Dijkstra）

:: 5) ビュワー起動 → http://localhost:8000/viewer/index.html
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
| stations.glb  | 開始点マーカー×10（路線カラーのポール+球。駅出口・停留所） |
| cresome.glb   | クリサム社マーカー（赤、文京区大塚6-22-2） |
| manifest.json | ビュワー用メタ情報（レイヤー・開始点位置・路線色・出典） |
| routes.json   | 10起点→クリサムの最短経路（ENUポリライン、Douglas-Peucker簡略化済み） |

座標系: 当地平面座標(m)。原点は `config.py` の CENTER（WGS84 35.721N/139.722E）、
X=東 / Y=北 / Z=上。Z成分はDEM（TINRelief）による地面標高を含む
（この範囲では約0〜34m、駅・社屋マーカーの基部も標高に接地済み）。
GLBをthree.jsに読み込む場合は Y-up変換が必要
（シーン全体を X軸 -90°回転: `group.rotation.x = -Math.PI/2`）。

# 最短経路の生成（routes.py）

10起点（駅出口・停留所）からクリサム社屋までの最短経路を、OSM の道路ネットワーク上で
Dijkstra 法により計算し `out/routes.json` に出力します。

## 仕組み

1. **道路グラフ構築**: `data/osm/highways.json`（`scripts/download_highways.py` で取得）の
   highway ways を ENU 座標に変換し、共有端点 = ノード、セグメント距離 = 重みの無向グラフを構築。
2. **起点スナップ（複数候補評価）**: 各起点に対し、`SNAP_RADIUS`（25 m）以内のグラフノードを
   すべて候補とし、「起点→ノード距離 + ノード→クリサム距離」が最小となるノードを選択。
   単一最寄ノードスナップだと歩道（footway）の枝に張り付いて迂回・折り返しが発生する問題を
   回避するため、主路方向へのスナップを優先する。
3. **Dijkstra**: クリサム側ノードから 1 回の Dijkstra で全ノードの最短距離を求め、
   各起点スナップノードからクリサムへの経路を復元（`path_from`）。
4. **座標列の組み立て**: 実際の起点座標をスナップ済みグラフ経路の先頭に付加し、
   Douglas-Peucker 簡略化（epsilon = 2 m）を適用して ENU ポリラインとして出力。

## 出力形式（routes.json）

```json
{
  "routes": [
    {
      "station": "大塚駅南口",
      "path": [[x, y], [x, y], ...],
      "distance_m": 992.5
    }
  ]
}
```

- `path`: ENU 座標（m）の 2 次元配列。先頭は実際の起点座標。
- `distance_m`: 経路長（m）。

## 検証

- 全 10 経路の起点スナップ距離は最大約 19.8 m（`SNAP_RADIUS = 25.0` に余裕あり）。
- ビュワーで目視確認済み: 各起点は主路方向にスナップし、クリサムへ向かって自然に接続。
- 直線距離に対する経路長比が大きい場合（例: 護国寺駅1番出口）は道路ネットワークの
   形状によるもので、経路自体は道路に沿っており問題なし。

# 描画方式（z-fighting 回避・地形追従）

## 地形追従（Option B: グリッド追従）

公園・水部の面メッシュは、地形グリッド（10m）の三角形とポリゴンの交差を計算して
地形メッシュと**同一の三角形分割・同一の z** で構築する（`grid_following_meshes`）。
これにより地形メッシュと完全に一致し、斜面で地形がオブジェクト表面から突き抜ける
現象が構造的に解消される。

### 地形三角形境界での線分分割（`_terrain_conform_polyline`）

線画（建物外周・道路境界・公園ハッチ・水部波線・路線チューブ）は、各セグメントが
地形グリッドの三角形内に収まるよう、グリッド線・対角線との交点で分割する
（`_terrain_conform_polyline` / `_densify_polyline`）。これにより 3D 直線セグメントが
常に terrain.height（三角形平面補間）の面上を走り、地形に埋もれることが構造的にない。

## 高さの基準

- **道路境界線**（白地図）: 地形（DEM）標高 + 0.01m
- **建物底面外周**（白地図）: 地形（DEM）標高（建物メッシュと完全一致）
- **公園ハッチ・水部波線**（白地図）: 地形（DEM）標高 + 0.01m
- **建物屋根面**: フットプリント最高地 + 高さ（完全平面）

z-fighting 対策は主にビュワー側の polygonOffset で対応。
線画は GL_LINES として描画されるため polygonOffset が効かず、
物理オフセット 0.01m（1cm）で最小限に浮かせた。
建物底面外周はメッシュの底面と完全に同一標高（オフセットなし）。

## z-fighting 回避（ビュワー側 polygonOffset）

オフセット廃止により線・面・地形が同一標高に重なるため、z-fighting（ちらつき）を
ビュワー側（`viewer.js`）の `polygonOffset` で回避する:

- **地形**（terrain）: `polygonOffsetFactor=1, polygonOffsetUnits=1`（最も奥）
- **その他の面**（道路・公園・水部・建物）: `polygonOffsetFactor=0.5, polygonOffsetUnits=0.5`
- **線**（GL_LINES）: 非適用（WebGL の polygonOffset は三角形にのみ効くため最前面）

深度順序は **線 > 面 > 地形** となり、共面 z-fighting を回避する。

## 道路塗りつぶし

- **白地図**（out_white/）: 道路塗りつぶしは廃止し、境界線のみで表現
- **デフォルト**（out/）: 道路塗りつぶし（灰色）を維持

# 現行ビルド実績（2026-09-06、地形三角形追従 + z-offset最小化版）

```
buildings: files=9/47 total=30694 used=17811   （bbox内に交差する建物のみ採用）
  クリサム社屋特定（点から0.0m）: 高さ=10.8m 用途=住宅 → cresome_building.glb に切り出し
tran: polygons=5675 / wtr: polygons=822 / parks(osm): polygons=41
stations: 10 開始点 / lines: JR山手線・有楽町線・丸ノ内線・都電荒川線
terrain grid: 216x244 nodes (10.0m), elev [0.1, 34.2] m
== export ==（合計 約55秒）
terrain.glb          meshes=    1 verts=  52704 size= 2.10 MB
buildings.glb        meshes=    2 verts=1063850 size=30.23 MB  （線画 + メッシュ）
cresome_building.glb meshes=    2 verts=     36 size= 0.00 MB
roads.glb            meshes=    1 verts=  97004 size= 3.07 MB
parks.glb            meshes=    2 verts=  28142 size= 0.69 MB
water.glb            meshes=    2 verts=  19387 size= 0.44 MB
lines.glb            meshes=    1 verts=  45948 size= 1.84 MB  （3m間隔デンスファイ）
stations.glb         meshes=   10 verts=    500 size= 0.01 MB
cresome.glb          meshes=    1 verts=     50 size= 0.00 MB
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

※ 1つのGLB**内部**のサブ要素（4路線・10開始点・建物の用途別色）は頂点色でのみ区別されているため、
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
