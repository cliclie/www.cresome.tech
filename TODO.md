# TODO — サイトの地図モードを GLB データ（map/）へ移行

作成: 2026-09-04（作業中断時の残タスク記録）

## データの正
- 今後は `map/` パイプラインが生成するデータ（PLATEAU CityGML / OSM Overpass の実データ）を正とする
- 旧 `src/data/otsuka-map.json` と `scripts/generate-map-data.mjs`（合成データ）は利用しない（当面ファイルは保持）

## 決定事項
- **座標系**: `map/src/config.py` の当地 ENU（原点 35.7210N / 139.7220E、X=東 / Y=北 / Z=上、単位 m）
- **サイト用パレット**: 白地図パレット `map/out_white/`（建物 #CFCFCF / 道路 白 / 路線 #5A5A50 / クリサム #E94B3A）
- **納所**: 9 GLB + `manifest.json` → `public/map/`（Vite が dist/ に自動同梱、deploy で publish に反映）
- **ルート**: 7 駅 → クリサム。新座標系で再計算し JSON（`manifest.json` の `routes` キー）に保存
- **外部データ**: `map/data/`（約 5 GB）はコミット対象外。環境変数 `MAP_DATA_DIR` でパス指定
- **publish ブランチ**: 公開ファイルのみ（dist/ 経由の GLB + manifest）。生成スクリプト・元データは載せない
- **Synology 同期**: 全ファイルを同期対象のまま（バックアップ用途・除外しない）

## 1. map/ パイプラインの整備
- [ ] `map/src/config.py` に `DATA_DIR` を追加（`os.environ.get("MAP_DATA_DIR", デフォルト ROOT/data)`）
- [ ] 各スクリプトの `data/` ハードコードパスを `config.DATA_DIR` に統一:
      `pipeline.py`（`DATA = ROOT / "data"`）, `fetch_osm.py`（out_dir）, `fetch_cresome.py`（OUT）, `inspect_dem_local.py`, `terrain.py`（要確認）
- [ ] `map/src/fetch_osm.py` に highway query 追加 → `data/osm/highways.json`
      （`way["highway"]~"^(primary|secondary|tertiary|residential|unclassified|living_street|service)$"({bbox}); out geom;`）
- [ ] 新規 `map/src/routes.py`:
      - OSM highway ways から道路グラフ構築（共有端点 = ノード、重み = セグメント距離）
      - manifest の 7 駅 + クリサム位置の最寄ノード特定
      - Dijkstra（heapq）で最短路計算 → ENU ポリライン `[[x, y], ...]` を `out/routes.json` に出力
      - 失敗時（最寄道路がない等）は直線接続フォールバック + 警告出力
- [ ] `map/src/pipeline.py` にルート生成ステップを追加し、`manifest.json` に `"routes"` キーを同梱
- [ ] `map/README.md` の "De sription" typo 修正 + `inspect_*.py` / `out_white/` の構造説明追記
- [ ] パイプライン実行で出物検証（GLB + routes 入り manifest、`verify_glb.py` / `viewer/` で目視）

## 2. サイト本体の移行（three@0.185）
- [ ] `map/out_white/` の 9 GLB + `manifest.json` を `public/map/` にコピー
- [ ] `src/components/MapBackground.jsx` 書き換え:
      - `../data/otsuka-map.json` の import を削除
      - `GLTFLoader`（`three/examples/jsm/loaders/GLTFLoader.js`）で 9 レイヤーを読み込み
      - ENU → Y-up 変換: `world` グループに `rotation.x = -Math.PI/2`（`map/viewer/viewer.js` と同方式）
      - ライティング追加（HemisphereLight + DirectionalLight、GLB は PBR マテリアルで必須）
      - 地盤標高: `elevationAt()` / `elevationSmooth()` を terrain GLB へのレイキャストに置換（1 フレーム 1 回）
      - ルート / 駅 / クリサム位置は `map/manifest.json` から取得
      - **維持**: 追従カメラ（歩行 1.6m / 俯瞰 350m 軌道）、ユーザーカメラオフセット（yaw/pitch/zoom/pan）、
        ポインタ / キーボード操作 + UI ゲーティング、再生 / 中断 / リセット（`resetToken`）、
        フレームレート非依存の指数平滑 + 最短角補間、タブ非表示時描画停止
- [ ] `src/components/MapControls.jsx`: 駅選択を 7 駅に変更
      （大塚 = 山手線 / 東池袋・護国寺 = 有楽町線 / 新大塚 = 丸ノ内線 / 大塚駅前・向原・東池袋四丁目 = 都電荒川線。
       東池袋駅の路線名を「丸ノ内線」→「有楽町線」に修正）
- [ ] `src/App.jsx`: `defaultMapConfig.stationId` は `'otsuka'` のまま（旧 localStorage の 3 駅 ID は継続有効）
- [ ] `src/index.css`: 必要なら 7 駅ボタンの表示調整

## 3. ドキュメント
- [ ] メイン `README.md` の「地図モード」セクションを GLB 方式（データソース / レイヤー / 座標系 / ルート）に改訂 + 作業記録追記

## 4. 検証・コミット・デプロイ
- [ ] `npx vite build` が成功すること
- [ ] dev サーバーで目視: GLB 各レイヤー描画（暗くなるならライティング不足）、7 ルートのアニメーション、
      再生 / 中断 / リセット、マウス / キーボードカメラ操作、他背景モードへの影響なし
- [ ] main にコミット（ローカル）
- [ ] publish worktree を dist/ + CNAME で同期しコミット（ローカル。公開は `npm run deploy` で別途実施）
