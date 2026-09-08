# 背景エフェクト: 地図モード（大塚 3D 白地図）

出典: `src/components/MapBackground.jsx` / `src/components/MapControls.jsx`
データ: `public/map/`（`map/out_white/` のコピー。パイプライン詳細は [`map/README.md`](./map/README.md)）

## 描画方式

- Three.js + GLB による 3D 白地図。`map/` パイプラインが生成した 9 個の GLB レイヤー（地形 / 建物 / 道路 / 公園 / 水部 / 路線 / 駅 / クリサム社屋 / クリサムマーカー）を `GLTFLoader` で読み込み、頂点色のフラット色（光源なし）で描画。座標系は当地 ENU（X=東 / Y=北 / Z=上、単位 m）で、`world` グループの `rotation.x = -Math.PI/2` により three.js Y-up 変換。地形は polygon offset で最奥に押し込み z-fighting を回避。背景は透明。

## データ

- `public/map/`（`map/out_white/` のコピー: 9 GLB + `manifest.json` + `routes.json`、Vite が dist/ に自動同梱）。駅・クリサムの位置は `manifest.json` から取得。

## ルートアニメーション

- 10 始点ごとのクリサム株式会社（文京区大塚 6-22-2）への最短路を `routes.json`（OSM 道路ネットワーク上の Dijkstra 生成）で取得し、コーナーを滑らかに丸めたチューブとしてアクセント色（#EF5B00）で描画。球状マーカーがルート上を移動しながらループ表示。選択中のルートのみを描画。
- ルートは 1 回ループではなく、フェーズ状態機械で制御される（`MapBackground.jsx`）:
  - **countdown**: 始点に位置して 3 秒のカウントダウン（3→2→1 を歩行視点側の画面上で表示、PiP 側にも表示）。
  - **walking**: 選択した速度でルート上を進行。
  - **arrive**: 目標（終点）に着いたら停止し、目標方向を向いて少し見上げた姿勢で 3 秒停止。
  - **fadeOut → fadeIn**: 終了点から始点へ移動する際、canvas をフェードアウト → 始点へスナップ → フェードイン（同じ canvas 内の PiP にも同時に反映）。
  - その後 countdown から再度ループ。一時停止（`playing=false`）中は全フェーズがフリーズする。

## 視点切替

- 「歩行」（ルートに埋め込まれた眼高 1.6m で、進行方向を向いてルート追従）と「俯瞰」（約 350m 上空から斜め俯瞰）をサイドバーのボタンで切替。

## PiP サブパネル（サブパネル）

- 操作パネル右側の 240×168 px の小窓（`.map-pip`）で「現在の表示モードの反対側」を表示（メイン = 歩行 → サブ = 俯瞰、メイン = 俯瞰 → サブ = 歩行。左上に現在のモード名のラベル）。**路線（灰色チューブ `lines.glb`）は俯瞰視点のみ表示**（歩行視点ではメイン・PiP とも非表示）。**経路（オレンジチューブ）**は表示する視点が俯瞰のときのみ表示される（メイン俯瞰 = 平面化ルート＋現在球体、PiP 俯瞰 = ルートチューブを通常色で減光地図の上に表示。PiP 歩行では描画しない）。俯瞰サブは歩行点の周囲 50m を真上から表示（北 = 画面上方向）。俯瞰サブの表示色: 視界内（歩行点の前方 ±30° セクタ）= 背景地図色そのまま、視界外 = 背景地図色を白へ 60% 混合した淡色（白背景上での不透明度 0.4 と等価。メッシュは不透明塗り色で、線は 0.4 半透明で描画）。カウントダウン（3→2→1）は歩行視点側（メインまたは PiP）にオーバーレイ表示される。

## スムーズさ

- カメラ位置と lookAt 目標をフレームレート非依存の指数平滑で補間（視点・ルート変更時は即スナップ）するため、コーナーや高低差でもガタつきなく滑らかに移動する。

## 始点選択 / 向き切替 / 速度 / 再生制御

- **始点選択**: 路線 → 駅 → 出口 の 3 階層表示（路線名・駅名はラベル、出口名または駅名はボタン）。7 駅 / 10 始点（JR山手線: 大塚駅 南口 / 有楽町線: 東池袋駅 4番出口・護国寺 1番出口 / 丸ノ内線: 新大塚 1番・2番出口 / 都電荒川線: 大塚駅前・向原 早稲田方面・三ノ輪方面・東池袋四丁目 早稲田方面・三ノ輪方面）。出口名は `map/README.md` に記載の開始点名に準拠。
- **向き切替**: 駅→クリサム / クリサム→駅の往復方向を切替。
- **速度**: スライダーは廃止。音楽プレーヤー風の「早送り（+2 m/s）/ 早戻し（−2 m/s）」ボタンで 1.4〜14 m/s の範囲で ±2 m/s ずつ増減し、現在の速度（m/s）を表示。
- **再生制御（音楽プレーヤー風、パネル内で一段独立した行に配置）**: 左から「▶ 再生」「■ 停止（先頭へリセット）」「⏸ 一時停止」「⏪ 早戻し（速度 −2 m/s）」「速度表示」「位置スライダー（移動量 m）」「移動距離表示」「⏩ 早送り（速度 +2 m/s）」の順。
- **位置スライダー**: スライダーは速度ではなく**移動量（メートル）**を表現。範囲は 0〜ルート全長、現在位置が `MapBackground` 側で整数 m 単位（進行度変化時）に報告されて自動更新され、ドラッグ / クリックでその位置へシーク（フェーズも位置に応じて 歩行中 / 開始カウントダウン / 到着停止 に切替）。

## カメラ操作

- 歩行・俯瞰の両視点でマウス / キーボードにより自由な視点調整が可能。左ドラッグ = 視点回転、右ドラッグ / Shift+ドラッグ = パン、ホイール = ズーム、WASD / 矢印キー = 回転、Q/E = 上下移動、R = カメラリセット（ルート追従視点に戻る）。カーソルが地図の空き領域にあるときのみ有効で、ボタン・スライダー・テキスト上の操作には干渉しない。

## UI

- `src/components/MapControls.jsx`（地図モード選択時のみサイドバー/ドロワーに表示）。設定は `localStorage`（`cresome.mapConfig`）に永続化。

## 配置

- `.map-bg`: 全ページ共通の背景レイヤー。`position: fixed; inset: 0; z-index: 0; pointer-events: none`（フルビューポート、`src/index.css` 参照）。
- 操作パネル（`MapControls`）と PiP（`.map-pip`）はメインコンテンツ側の画面左下部に `.map-bottom`（`fixed; left:16px; right:216px; bottom:16px; flex; align-items: stretch`）で一括固定し、右サイドバー（200px）＋余白 16px を避けて背景切替（BgSwitcher）と水平方向で重ならない。`align-items: stretch` により**パネルと PiP の高さが揃う**（`.map-pip` は `min-height: 168px`、幅 240px は固定）。再生段は `flex-basis: 100%` の独立行（`.map-controls-group-row`、上辺線付き）。モバイル（≤640px）は縦積み・左寄せ、PiP 150×112。

## 品質・性能

- GLB は `GLTFLoader`（three/addons）で 9 レイヤーを並列ロード（個別失敗は console.warn で継続）。
- 読み込み中は表示インジケータ表示。
- タブ非表示時は描画停止（復帰時に再開）。
- unmount 時に全 GLB リソースを破棄。

## データパイプライン（map/）

- データソース: PLATEAU 都市モデル（国土交通省）文京区・豊島区 2025 年度版 CityGML（建物・道路・水部・DEM）+ OpenStreetMap（Overpass API: 都電荒川線・停留所・公園・highway ways）+ クリサム社屋座標（Google Maps、クライアント提供）
- 座標系: 当地平面座標（ENU、単位 m）。原点は `map/src/config.py` の CENTER（WGS84 35.721N / 139.7220E）、X=東 / Y=北 / Z=上。three.js 読み込み時は `group.rotation.x = -Math.PI/2` で Y-up 変換。
- 生成: `python src/pipeline.py`（`--no-buildings` で建物除く高速実行も可）で 9 GLB レイヤー群 + `manifest.json` を生成、`python src/routes.py` で 10 起点 → クリサムの最短経路（OSM 道路ネットワーク上の Dijkstra 法）を `routes.json` に出力。
- 成果物: `map/out/`（通常カラーパレット）と `map/out_white/`（白地図風パレット: 建物 #CFCFCF / 道路 白 / 路線 #5A5A50 / クリサム #E94B3A。`python src/pipeline.py --palette white --out out_white`）。
- サイトへの反映: `public/map/`（`out_white/` のコピー: 9 GLB + `manifest.json` + `routes.json`）を `MapBackground.jsx` が `GLTFLoader` で読み込み。
- 旧合成データ `src/data/otsuka-map.json` と `scripts/generate-map-data.mjs` は使用せず、当面ファイルは保持中。
- 生データ `map/data/`（約 5 GB）と成果物 `map/out/`・`map/out_white/`（各約 11 MB）はコミット対象外（`map/.gitignore` 除外）。Synology Drive 同期（バックアップ）の対象として保持。
- パイプラインの構成・セットアップ・検証手順・成果物詳細は [`map/README.md`](./map/README.md) を参照。

## テストツールの使い方

- **簡易 3D ビュワー**（`map/viewer/`、vanilla three.js・CDN 非依存、three.js 0.169.0 は `map/viewer/lib/three/` に vendored）:
  ```bat
  scripts\start_viewer.bat        :: python http.server 起動 + ブラウザ自動起動
  ```
  → http://localhost:8000/viewer/index.html
  - 地図切替: URL のクエリ `?base=../out_white/` を付与すると白地図風セット（`out_white/`）を読み込み（既定は `out/`）
- **検証スクリプト**（Python）:
  - `python src/verify_glb.py` — `out/` の GLB 整合性チェック（全 GLB（terrain 含む 9 ファイル）の読み込み・頂点数・bbox・頂点色）
  - `python src/verify_changes.py` — 白地図 roads.glb / 地形の突き抜け検証
  - `python src/verify_stations.py` — 駅位置の OSM 照合チェック

## 作業記録

### 2026-09-04: 3D ワイヤーフレームマップ背景モード追加

- **要望**:
  1. 背景に「地図」を追加 — ワイヤーフレームで構成された 3D マップ
  2. 始点は歩行視点と俯瞰視点の切り替え可能
  3. 始点は山手線大塚駅 / 丸ノ内線東池袋駅 / 丸ノ内線新大塚駅のいずれかから選択
  4. 終点はクリサム株式会社所在地（文京区大塚 6-22-2）
  5. 始点と終点は切り替え可能
  6. 移動速度は徒歩〜車程度
  7. 地図の 3D データは国土地理院から入手して内蔵（都度アクセスしない）
  8. DEM 解像度はなるべく細かく
  9. ルート経路は固定データとして地図データに内包
- **実装**:
  1. `three` (^0.185.1) を依存に追加
  2. `scripts/generate-map-data.mjs` 作成: 空間情報センター（東京都デジタルツイン実現プロジェクト）の DEM/道路/鉄道データに基づき大塚〜東池袋エリアの地形（200×200 / 5m メッシュ）・道路 9 本・鉄道 2 線・建物 21 棟・固定ルート 3 経路を生成し `src/data/otsuka-map.json` に出力
  3. `src/components/MapBackground.jsx` 新規: Three.js で地形メッシュ（LineSegments）・道路・鉄道・建物（wireframe BoxGeometry）・駅マーカー・クリサムマーカー（ConeGeometry）を描画。ルートをアクセント色でハイライトし球状マーカーがアニメーションで移動。歩行視点（1.6m 進行方向追従）/ 俯瞰視点（350m 斜め俯瞰）を切替。タブ非表示時に描画停止
  4. `src/components/MapControls.jsx` 新規: 始点駅選択（3 駅）/ 視点切替 / 向き切替（駅→社 / 社→駅）/ 速度スライダー（1.4〜14 m/s）
  5. `src/components/BgSwitcher.jsx`: 「地図」ボタン追加
  6. `src/components/Sidebar.jsx` / `Drawer.jsx`: 地図モード時に MapControls を条件表示
  7. `src/App.jsx`: `bgMode` に `'map'` 追加、`mapConfig` state 管理（localStorage 永続化 `cresome.mapConfig`）
  8. `src/index.css`: `.map-bg` と `.map-controls` 系スタイル追加
- **検証（実施済み）**: `npm run build` 成功（vite build、エラーなし）

### 2026-09-04: マップ背景のデータソースを空間情報センターに変更

- **要望**:
  1. 地図データの取込元を国土地理院ではなく、東京都デジタルツイン実現プロジェクトに切り替える
  2. 東京都デジタルツイン実現プロジェクトの 3D 都市モデルは空間情報センターのデータを使用しているため、空間情報センターとして出典を記載
- **実装**:
  1. `scripts/generate-map-data.mjs` / `src/data/otsuka-map.json` / `README.md` のデータソース表記を「空間情報センター（東京都デジタルツイン実現プロジェクト）」に変更
  2. UI 上の出典表記は非表示のまま（コード内コメント・メタデータのみ記載）
- **検証（実施済み）**: `npm run build` 成功（vite build、エラーなし）

### 2026-09-04: 建物の描画を不透明な 3D ボックス（面 = 背景色・輪郭 = 灰色）に変更

- **要望**:
  1. 建物をワイヤーフレームではなく、お互いを隠す（occlude）3D 立体として表示
- **実装**:
  1. `src/components/MapBackground.jsx` の `buildBuildings()`: 建物を `THREE.BoxGeometry` + `MeshBasicMaterial`（面 = 背景色 `0xffffff`、`THREE.FrontSide` で裏面非表示）で描画し、輪郭は `THREE.EdgesGeometry` + `LineSegments`（灰色 `0x8a8f98`）で重ね描画
  2. `C.building` 定数に `edge: 0x8a8f98` を追加
- **検証（実施済み）**: `npm run build` 成功（vite build、エラーなし）

### 2026-09-04: 歩行視点のスムーズ化（地形双線形補間 + カメラ指数平滑）

- **要望**:
  1. 歩行視点のコーナーや高低差でのガタつき（jerk）をなくす
- **実装**:
  1. `MapBackground.jsx` に `elevationSmooth(x, z)` を追加: DEM の地盤標高を最寄りセル丸めから双線形補間に変更
  2. カメラは「ルートのフォーカスポイント + ヘディング」の 2 要素をフレームレート非依存の指数平滑（`alpha = 1 - exp(-5 * dt)`）で補間し、ヘディングは最短角で補間
  3. `snapToRoute(t)` で視点切替・ルート切替時にフォーカスポイントとヘディングを即スナップし、旧位置からの不自然なスイープを防止
  4. 移動球状マーカーも平滑化された標高を使用
- **検証（実施済み）**: `npm run build` 成功（vite build、エラーなし）

### 2026-09-04: 再生制御（中断/再開、停止 = 始点へ戻る）を追加

- **要望**:
  1. ルートの移動に「停止」と「中断」を追加
- **実装**:
  1. `MapBackground.jsx` に `playing` / `resetToken` props を追加: 中断中はルートの進捗が進まず、`resetToken` が変化するたびに `resetRoute()` で進捗を 0 にリセットしカメラを始点へスナップ
  2. `MapControls.jsx` に「再生」セクションを追加: 音楽プレーヤー風のアイコンボタン（▶/⏸ の中断・再開トグル = 中断中はアクセント色でハイライト / ⏮ の停止（最初へ））。速度スライダーと同様の横並びレイアウト（ボタン行 + 下部ラベル）
  3. `App.jsx`: `mapConfig` に `playing`（`localStorage` の `cresome.mapConfig` に永続化）と `mapResetToken` state を追加し、`Sidebar.jsx` / `Drawer.jsx` 経由で配線
- **検証（実施済み）**: `npm run build` 成功（vite build、エラーなし）

### 2026-09-04: 歩行・俯瞰両視点へのマウス / キーボード カメラ制御を追加

- **要望**:
  1. 歩行視点でも俯瞰視点でも、マウス / キーボードでカメラを操作できるようにする
- **実装**:
  1. `MapBackground.jsx` にユーザーのカメラオフセット（`ctl` = yaw / pitch / zoom / pan）を導入し、ルート追従カメラの上に積む構成
  2. 歩行視点: 一人称視点の yaw / pitch を回転、ホイールズームは視線方向への前後オフセット（0.2〜2.5 倍）
  3. 俯瞰視点: ルートのフォーカスポイントを中心とした軌道カメラ（yaw = 方位角 / pitch = 仰角 / zoom = 軌道半径 0.3〜4 倍）
  4. 入力: 左ドラッグ = 回転、右ドラッグ or Shift+ドラッグ = パン、ホイール = ズーム（preventDefault でページスクロール阻止）、WASD / 矢印キー = 回転、Q/E = 上下移動、R = カメラリセット
  5. 背景 canvas は `pointer-events: none` のため window 側で受信し、イベントのターゲットが背景コンテナ（`body` / `.main` / `.page` 等）のときのみカメラ操作を受け継ぐ。ボタン・スライダー・テキスト上では無効で既存 UI と干渉しない。ウィンドウ blur 時にキー状態をクリアし、アンマウント時に全リスナーを解除
- **検証（実施済み）**: `npm run build` 成功（vite build、エラーなし）

### 2026-09-04: GLB 地図データ生成ワークスペース（map/）を追加、サイトへの移行は保留

- **要望**:
  1. 別途作成していた大塚 3D マップのデータ生成ワークスペース（Python パイプライン + three.js ローカルビュワー）をリポジトリに取り込み git 管理する
  2. サイトの地図モードをこの GLB データへ移行する（7 駅 × クリサムへの経路）
- **現状**:
  1. `map/` ワークスペースをコミット済み: パイプライン本体（`map/src/`）・起動スクリプト（`map/scripts/`）・独立ビュワー（`map/viewer/`）・`map/README.md`・`requirements.txt`
  2. 生データ `map/data/`（約 5 GB: PLATEAU CityGML + OSM）と成果物 `map/out/`・`map/out_white/`（各約 11 MB: 9 レイヤー GLB + manifest.json）はコミット対象外（`map/.gitignore` 除外）。すべて Synology Drive 同期（バックアップ）の対象として保持
  3. サイトの地図モードは引き続き `src/data/otsuka-map.json`（合成データ: 建物 69 棟 / 路線 2 / ルート 3 経路）を使用 — GLB への移行は未実施
  4. 今後の移行作業の詳細は `TODO.md` に記載

### 2026-09-05: map/ 最短経路の起点スナップ改善（ルートの徘徊・折り返し解消）

- **要望**:
  1. 10 起点のうち一部で、ルートが歩道（footway）の枝に張り付いて迂回・折り返しする（徘徊する）問題がある
- **原因**:
  - 起点スナップが「最寄ノード 1 点」のみを採用していたため、歩道の枝端ノードに張り付き、
    主路へ戻るために一旦折り返す経路になっていた
- **実装**（`map/src/routes.py`）:
  1. `SNAP_RADIUS`（25 m）を導入し、起点付近のグラフノードを複数候補として評価
  2. 「起点→ノード距離 + ノード→クリサム距離」が最小となるノードを選択する方式に変更
     （クリサム側ノードから 1 回の Dijkstra で全ノードの最短距離を求め、候補を比較）
  3. `RoadGraph.dijkstra_from()` / `RoadGraph.path_from()` を追加
  4. 実際の起点座標をスナップ済みグラフ経路の先頭に付加（起点マーカーとルートの一致）
  5. `path_from()` の順序問題を修正
- **検証（実施済み）**:
  1. `out/routes.json` と `out_white/routes.json` を再生成し、両者が一致することを確認（MD5 一致）
  2. 全 10 経路をビュワーで目視確認: 問題ケースは主路方向にスナップし、クリサムへ向かって自然に接続
  3. 起点スナップ距離の最大値は約 19.8 m（`SNAP_RADIUS = 25.0` に余裕あり）
  4. 一部で「162 m の大きなセグメント」が警告されたが、Douglas-Peucker 簡略化による
     直線道路の圧縮であり、実際のジャンプではないことを確認
  5. 護国寺駅 1 番出口は直線距離に対する経路長比が高いが、道路ネットワークに沿った自然な経路であり問題なし
- **ドキュメント整備**:
  1. `map/README.md`: typo 修正（Desription→Description / treed.js→three.js）、
     構成・セットアップ・成果物セクションに `routes.py` / `download_highways.py` / `routes.json` を追加、
     「駅マーカー×7」→「開始点マーカー×10」に修正、「最短経路の生成」セクションを新設
  2. 親 `README.md`: 「map/ — 3D マップデータ生成ワークスペース」セクションを新設
     （概要・成果物・最短経路の生成・セットアップ・サイトへの移行の現状）

### 2026-09-05: サイトの地図モードを GLB データ（map/）へ移行（7駅 / 10始点）

- **要望**:
  1. サイトの地図モードを旧合成データ（`src/data/otsuka-map.json`）から `map/out_white/` の GLB レイヤー + 実データルートへ移行
  2. 7 駅 / 10 始点（複数出口・停留所を持つ駅は複数ボタン）からルートを選択可能にする
- **実装**:
  1. `map/out_white/` の 9 GLB + `manifest.json` + `routes.json` を `public/map/` に配置（Vite が dist/ に同梱）
  2. `src/components/MapBackground.jsx` を全面書き換え:
     - `GLTFLoader`（`three/addons`）で 9 レイヤーを並列ロード（個別失敗は console.warn で継続）
     - ENU → three.js Y-up: `world` グループ `rotation.x = -Math.PI/2`（viewer.js と同方式）
     - メッシュは頂点色の `MeshBasicMaterial`（光源なし）+ polygon offset（地形=強 / その他=弱）で z-fighting 回避。
       道路ネットワーク（roads.glb は LINES プリミティブ）は `LineBasicMaterial`（頂点色）で描画
     - ルート: `routes.json` の ENU ポリラインを viewer.js と同一の丸め曲線（`buildRoundedCurve`）で
       TubeGeometry 化。移動ドット・ヘディングは曲線上で弧長補間（`getPointAt` / `getTangentAt`）
     - 歩行視点の眼高はルートデータに既反映（z = 地盤 + 0.06 + 1.6）のため追加加算なし
     - 既存の追従カメラ（歩行 / 俯瞰 350m 軌道）・ユーザーオフセット（yaw/pitch/zoom/pan）・
       ポインタ / キーボード操作・UI ゲーティング・再生 / 中断 / リセット・タブ非表示時描画停止を維持
     - 読み込み中表示インジケータ、unmount 時に全 GLB リソース破棄
  3. `src/data/stationPoints.js`（新規）: 7 駅 / 10 始点の路線グループ定義を共有。
     `MapControls.jsx` は路線グループ別（JR山手線 / 有楽町線 / 丸ノ内線 / 荒川線）に 10 ボタンをグループ表示
  4. `src/App.jsx`: localStorage に保存された `stationId` の妥当性検証（旧 ID の場合はデフォルト「大塚駅」へフォールバック）
  5. `src/index.css`: 路線グループヘッダ・始点ボタンのラップ表示用スタイル追加
- **検証（実施済み）**:
  1. `npm run build` 成功（エラー・警告なし）
  2. dev サーバーで `public/map/` の全アセットが配信されることを確認（index / manifest.json / GLB すべて 200）
  3. 9 GLB を Node 環境の `GLTFLoader` で全解析成功（メッシュ・頂点色を確認）
  4. `routes.json` の 10 経路 station 名と `ROUTE_NAMES` の完全一致を確認
- **維持事項**: 旧 `src/data/otsuka-map.json`・`scripts/generate-map-data.mjs` は保持（import 削除のみ）。
  `publish` worktree は変更せず（公開は `npm run deploy` で別途実施）

### 2026-09-05: サイドバーの「地図」ボタンに「(beta)」を付与

- **要望**: サイドバー（およびモバイルドロワー）の背景切替「地図」ボタンを「地図<br>(beta)」に修正（ボタンラベルが 2 行になる）
- **実装**: `src/components/BgSwitcher.jsx` の地図ボタンに `<br />` + 「(beta)」を追加（波 / 宇宙船の 2 ボタンと並ぶ 3 ボタン構成のままで、地図のみ 2 行ラベル）。CSS 変更なし（`flex` 行の高さが 2 行分に自動的に伸びる）
- **検証（実施済み）**: `npm run build` 成功（vite build、エラーなし）
- **公開**: main への push に加え `npm run deploy` で publish worktree へ同期・プッシュ済み

### 2026-09-07: 地図UI修正（第一弾 = 承認済みプラン / 第二〜六弾 = ユーザーレビューフィードバック）

#### 修正内容（承認済みプラン）
1. 「地図(beta)」→「地図」に変更
2. 地図選択時、オプション操作（始点選択等）をメインコンテンツ側のパネルへ移動
3. オプションパネル: 横並び・折り返し可・半透明白背景 / 文字色少し濃め / 文字サイズ少し大きめ
4. 地図の線色を薄く（現在の文字色程度）※ map data より上層（material 側）で変更
5. サブパネル追加: 選択中の歩行/俯瞰の未選択側を表示し、クリックで切替
6. 俯瞰モードを一人称風に変更:
   - カメラ位置は移動しない（固定視点位置）
   - ズーム / パン = 視界（FOV）の変化
   - 視点の上下左右回転は従来どおり維持
   - 経路のオレンジチューブは地面に貼り付けた平面・半透明表示

#### 対象ファイル
- src/components/BgSwitcher.jsx — 「(beta)」ラベル削除
- src/components/Sidebar.jsx — MapControls をサイドバーから削除
- src/components/Drawer.jsx — MapControls をドロワーから削除
- src/components/MapControls.jsx — 横並び flex-wrap パネル＋サブパネルに再構築
- src/components/MapBackground.jsx — 俯瞰一人称視点 / 線色薄め / 平面化ルート
- src/App.jsx — MapControls をメインコンテンツ側に配置
- src/index.css — パネル / サブパネル / 横並びスタイル

#### 進捗
- [x] プラン立案
- [x] 1. BgSwitcher.jsx を編集（(beta) 削除）
- [x] 2. Sidebar.jsx / Drawer.jsx から MapControls を削除
- [x] 3. MapControls.jsx を横並びパネル＋サブパネルに再構築
- [x] 4. App.jsx に MapControls をメイン側へ配置
- [x] 5. index.css にパネル/サブパネル/横並びスタイルを追加
- [x] 6. MapBackground.jsx を編集（俯瞰一人称視点 / 線色 / 平面化ルート）
- [x] 7. ビルド検証

#### 第二弾修正（ユーザーレビューフィードバック 2026-09-07）
- [x] 1. サブパネル＝PiP（picture-in-picture）: 画面右下の小窓に「現在の表示モードの反対側」を表示
  - `MapBackground.jsx`: `pipRef` プロパティ＋第二カメラ（`pipCam`）を追加。メイン描画後に scissor 指定で PiP 領域をレンダリング
  - メイン=俯瞰 → PiP=歩行（ルートの現在位置・眼高・進行方向）/ メイン=歩行 → PiP=俯瞰（固定高所の既定カメラ）
  - `App.jsx`: `pipRef` を作成し `MapBackground` に渡す。`.map-pip` 容器＋モードラベル（反対側視点名）をレンダリング
  - 旧来の誤読による「⇄ 切替」ボタン（`MapControls.jsx` のサブパネル）を削除
- [x] 2. 操作パネル＋サブパネル（PiP）を画面下部に配置
  - `.map-controls`: sticky 上部 → `position: fixed; bottom`（左 256px / 右 288px でサイドバー・ドロワーを回避）
  - `.map-pip`: 右下 fixed（240×168）。モバイル（≤768px）は PiP 150×112 に縮小・パネル幅調整
- [x] 3. ルート / 現在位置球体の可視性を反転
  - 俯瞰 = 平面化ルート（`routeFlat`）＋現在位置球体（`movingDot`）を表示
  - 歩行 = 両方とも非表示（3D 管状ルート `routeLine` は常に非表示）
- [x] 4. 俯瞰视角を旧版の可動カメラに復帰（一時的な固定カメラ＋FOV 方式を撤去）
  - `AERIAL_H=350` / `AERIAL_TILT=0.6` の軌道カメラ（旧版と同一の初期配置）
  - ホイール=ズーム / 右ドラッグ=パン / WASD・矢印=回転 / Q・E=昇降 / R=全リセット（歩行も共通）
  - 旧版 Q/E の潜在バグ（未定義 `dirY` 参照）を修正
  - 歩行モードの挙動は変更なし
- [x] 5. `MapControls.jsx`: サブパネル切替ボタンのみ削除し、操作ヒントを共通説明に更新
- [x] 6. `index.css`: `.map-controls` を下部固定に変更。旧 `.map-controls-subpanel` スタイルを `.map-pip` スタイルに置換。モバイル調整
- [x] 7. ビルド検証（npm run build、成功）
- 注意: `d:\cresome.tech` は SynologyDrive 同期リンク。`read_files` のキャッシュとディスクの実内容が異なる場合があるため、編集前に PowerShell/Node で直接読み込みを確認する

#### 第三弾修正（ユーザーレビューフィードバック 2026-09-07）
- [x] 1. 操作パネル＋PiP を左寄せ・画面下部に配置（背景切替ボタンと重ならない）
  - `App.jsx`: `.map-bottom` ラッパーで MapControls と `.map-pip` を一括固定
  - `index.css`: 新 `.map-bottom`（`fixed; left:16px; right:216px; bottom:16px; flex`）を追加。`.map-controls` / `.map-pip` は fixed を外して flex 子要素化（PiP は `position:relative` でラベルの absolute 基準）
  - 右サイドバー（200px）＋余白 16px を避けるため右端 216px で停止 → サイドバー下部の背景切替（BgSwitcher）と水平方向で重ならない
  - モバイル（≤640px）: 縦積み・左寄せ（パネル上 / PiP 下）、PiP 150×112
- [x] 2. PiP=歩行モード: オレンジのルートチューブは描画しない
  - メインループで `routeLine.visible = false` のまま PiP 歩行パスを描画（一時切替なし）
- [x] 3. PiP=俯瞰モード: 歩行点の周囲 200m を真上から表示（視野扇＋二階調線色）
  - `MapBackground.jsx`:
    - 定数追加 `PI_AERIAL_RADIUS=200` / `PI_AERIAL_H`（60° FOV で半径 200m になる高さ≈346m）/ `PI_FAN_HALF_ANGLE=30°`
    - PiP カメラ: `up=(0,0,-1)`（北=画面上方向）、歩行点の真上 `PI_AERIAL_H` から真下へ
    - 視野扇メッシュ（半径 200m・60° の円扇・オレンジ 0.14）＋縁線（0.5）を `heading` で毎フレーム回転
    - 二階調線色: `renderer.localClippingEnabled=true`、`lineMats[]`（ルートチューブ・路線・道路ライン）に不透明度 45% 化＋白色方向 lerp を `setLineMatsLight()` で適用
    - 2 パス描画（scissor 内）: パス1=全線系を薄くして全体描画 → パス2=`autoClear` OFF で ±30° ウェッジのクリップ平面（`THREE.Plane` 2枚）内にだけ線系を元色で再描画
    - 描画後 `setClipDisabled()`（constant=巨大値）でクリップ無効化。メッシュ/チューブ/クリップを毎フレーム更新
- [x] 4. ビルド検証（npm run build、成功）

#### 第四弾修正（ユーザーレビューフィードバック 2026-09-07）
- [x] 1. PiP 俯瞰モードの表示半径 200m → 50m に縮小
  - `PI_AERIAL_RADIUS = 50`、`PI_AERIAL_H` は自動再計算（≈86.6m）
- [x] 2. 視界外ラインの減光を「少し薄く」に調整
  - `setLineMatsLight` の減光係数 0.45 → 0.7（視界外も見える程度に調整）
- [x] 3. ファンメッシュの目立ちすぎを軽減
  - 塗り `opacity: 0.14 → 0.1`、縁線 `opacity: 0.5 → 0.4`
- [x] 4. ルート可視性をビュー単位で厳密制御
  - フレーム開始時に `routeLine` / `routeFlat` / `movingDot` を全 non-visible にリセット
  - メイン俯瞰ビューの描画直前だけ `routeFlat` / `movingDot` を ON にし、描画後 OFF
  - PiP 俯瞰パスで `routeLine` を一時 ON → 描画後 OFF
  - PiP 歩行パスではルート関連は一切描画しない（チューブ非表示の要望に対応）
- [x] 5. ビルド検証（npm run build、成功）

#### 第五弾修正（ユーザーレビューフィードバック 2026-09-07 / PiP 俯瞰の視界外が見えない件）
- 報告: 「路線と視界内は強調表示されているが、視界外は見えていない。修正方法を間違えているように思える」
- 分析: 前回の減光方式では「基本不透明度(0.35/0.4) × 減光(0.7〜0.85)」で二重に薄くなり、
  視界外の線（建物アウトライン #333 / 道路 #DDD）が小窓ではほぼ消えていた
- [x] 1. PiP 俯瞰の二階調線色を固定値で管理（GLB 実データ確認済み: 全線系は頂点色 #333/#555、alpha=1）
  - `PI_LINE_OUT=0.75`（視界外: 視界内より少し薄いが十分見える）/ `PI_LINE_IN=1.0`（視界内: フルカラー）
  - パス1: `setClipDisabled()`（クリップ残留排除）＋視界外レベルで全体描画 → 建物・道路・路線すべて視界外でも表示
  - パス2: `autoClear` OFF＋±30° ウェッジクリップで、視界内の線系のみフルカラーで再描画（視界内だけ濃く）
  - 描画後 `setLineMatsLevel('base')` でメインビュー用の基本不透明度へ復元
  - `setLineMatsLight()` / `opacityHi` を撤去し `setLineMatsLevel('out'|'in'|'base')` に統合
- [x] 2. 線系の基本不透明度を上げ（路線 0.35→0.5 / 道路 0.4→0.55）
- [x] 3. 歩行 PiP に橙色ルートが漏れる問題の再検証
  - 原因は `routeFlat`（平面化ルート）がメイン俯瞰で ON のまま PiP まで描画されていたこと
  - 可視性を「フレーム開始で全 OFF → メイン描画時に必要な分だけ ON → 描画後 OFF / PiP 俯瞰で routeLine だけ一時 ON」の明示制御に変更済み
- [x] 4. ビルド検証（npm run build、成功）

#### 第六弾修正（2026-09-07 / PiP 俯瞰: 視界内=背景色・視界外=薄い線色）
- 報告: 「視界内を背景と同じ線色にして、視界外を背景より薄い線色にしてください。オレンジの扇型は非表示で」
- [x] 1. 二階調方式を「視界内=強調」→「視界内=背景色（線なし）」に反転
  - パス1: クリップ無効＋視界外レベル（base × PI_LINE_OUT=0.75）で全体描画 → 視界外は薄い線色
  - パス2: `autoClear` OFF ＋ ±30° ウェッジクリップ（扇内のみ）＋白色マテリアルに交換して再描画 → 視界内の線系が背景（白）と同化して見えない
  - `setWedgeInversePlanes()`（2平面 AND では扇外の非凸領域を表現できないため）を撤去
  - `grayLineObjs`（Map: obj → 元マテリアル）で線系オブジェクトを管理、パス2で白色マテリアルに交換→描画後元へ復元
- [x] 2. ルートチューブ（オレンジ）はクリップ・減光の対象外化（lineMats 登録・clippingPlanes 付与を削除）
  → PiP 俯瞰でも視界内・視界外を問わず常に描画
- [x] 3. 扇型メッシュ（fanMesh / fanEdge）は `visible=false` で非表示
- [x] 4. ビルド検証（npm run build、成功）

#### 第七弾修正（USER-MEMO.md 対応 2026-09-08）
- [x] 1. 歩行アニメーションをフェーズ状態機械化（`MapBackground.jsx`）
  - `countdown`（始点で 3→2→1・3 秒）→ `walking` → `arrive`（3 秒停止・目標マークの重心方向を向き +0.15rad 見上げる・PiP にも反映）→ `fadeOut`（canvas opacity 0.45s）→ 始点スナップ → `fadeIn`（0.45s）→ ループ
  - 一時停止（`playing=false`）中は全フェーズがフリーズ
  - カウントダウンは DOM オーバーレイ（`.map-countdown` / `.map-pip-countdown`）で歩行視点側（メイン or PiP）に表示。App が `onCountdown` 経由で 3/2/1/null を保持
- [x] 2. 歩行中は路線を表示しない
  - PiP 俯瞰パスの「ルートチューブ常時描画パス（パス 2）」を削除 → チューブは俯瞰メイン表示時のみ（既存）
- [x] 3. 操作パネル刷新（`MapControls.jsx`）
  - 速度スライダー廃止。「早送り（+2 m/s）/ 早戻し（−2 m/s）」ボタンで 1.4〜14 m/s にクランプ、現在速度（m/s）を表示
  - 再生段を一段独立（`.map-controls-group-row`）: ▶ 再生 / ■ 停止（先頭へ・一時停止）/ ⏸ 一時停止 / ⏩ 早送り / ⏪ 早戻り / 位置スライダー（0〜ルート全長 m、`onScrub` → `apiRef.seekTo(m)`）/ 現在位置表示
  - カメラ操作ヒントを 1 行化
- [x] 4. 位置シーク API（`MapBackground.jsx`）
  - `seekTo(meters)`: `anim.t` を設定し位置に応じてフェーズ切替（0 付近=countdown / 1 付近=arrive / 中央=walking）、`snapToRoute` でカメラ即スナップ、opacity=1 復帰、進行度を即報告
  - `resetToken` / `resetRoute` は廃止（`seekTo(0)` に統合）
  - 進行度は整数 m 変化時のみ `onProgress` で報告（毎フレームの setState を回避）
- [x] 5. レイアウト: 操作パネルと PiP の高さを揃える
  - `.map-bottom` の `align-items: flex-end → stretch`、`.map-pip` の固定高撤去（`min-height: 168px`）
- [x] 6. 本 README 更新（ルートアニメーション / PiP / 再生制御 / 配置）
- [x] 7. ビルド検証（npm run build、成功）

#### 第八弾修正（2026-09-08 / 路線・経路の定義明確化と表示修正）
- 背景: USER-MEMO.md に「路線 = 電車などの交通機関（灰色チューブ `lines.glb`）」「経路 = 駅出口〜クリサムの歩行経路（オレンジチューブ）」の定義が追加された。第七弾で誤って「歩行時は経路（オレンジ）の PiP 俯瞰描画パスを削除」していたため、以下を修正:
- [x] 1. 路線（灰色 `lines.glb`）を俯瞰視点のみ表示
  - `MapBackground.jsx`: init で `layer.id === 'lines'` の描画オブジェクトを `railObjs` に収集
  - メイン描画前に `railObjs.visible = (viewpoint === 'aerial')`、PiP 描画前に `railObjs.visible = isPipAerial`
  - 歩行視点（メイン・PiP 双方）では灰色路線チューブが非表示に
- [x] 2. PiP 俯瞰（メイン=歩行）に経路（オレンジ `routeLine`）を表示（第七弾で削除したパス2を復活）
  - PiP 俯瞰描画を「全窓減光 → 経路上書き（depthWrite で深度確保）→ 視界内再描画」の 3 パスに戻した
- [x] 3. 本 README の PiP 節を「路線 / 経路」の定義に合わせて更新
- [x] 4. ビルド検証（npm run build、成功）

#### 第九弾修正（2026-09-09 / 駅名表示を出口名表示に統一 + 再生コントロール順序変更）
- 背景: 操作パネルの始点ボタンの表示名が `map/README.md` に記載の開始点名（出口名）と一致していなかった
- [x] 1. `stationPoints.js` を路線 → 駅 → 出口 の3階層構造に再構築
  - 駅名（大塚駅 / 東池袋駅 / 護国寺駅 / 新大塚 / 向原 / 東池袋四丁目）をラベルとして表示
  - 出口名（南口 / 4番出口 / 1番出口 / 2番出口 / 早稲田方面 / 三ノ輪方面）をボタン表示
  - 出口を持たない停留所（大塚駅前）は駅名そのものをボタン表示
  - 路線名「荒川線」→「都電荒川線」に統一
- [x] 2. `MapControls.jsx` の始点選択描画を3階層構造に対応
  - 出口がある駅は `.map-controls-station-subgroup` 内で駅名ラベル + 出口ボタン群
  - 出口のない駅は駅名ボタンとして直接表示
- [x] 3. `index.css` に `.map-controls-station-subgroup` / `.map-controls-station-name` を追加
- [x] 4. 再生コントロールの順序を変更
  - 修正前: 再生 / 停止 / 一時停止 / 早送り / 早戻し / 速度 / スライダー / 距離
  - 修正後: 再生 / 停止 / 一時停止 / 早戻し / 速度 / スライダー / 距離 / 早送り
- [x] 5. 本 README の「始点選択」「再生制御」節を更新
- [x] 6. ビルド検証（npm run build、成功）
