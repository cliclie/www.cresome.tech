# www.cresome.tech

リポジトリ名変更(2026-08-24) : cresome.tech-HP -> www.cresome.tech

クリサム株式会社（Cresome Technical Works）のコーポレートサイト。
GitHub Pages（[https://www.cresome.tech](https://www.cresome.tech)、CNAME: `www.cresome.tech`）で公開しています。

## 技術スタック

- Vite + React（SPA）
- Tailwind CSS
- フォント: ZEN丸ゴシック（Google Fonts）

## 使い方

```bash
npm install        # 依存関係をインストール
npm run dev        # 開発サーバーを起動
npm run build      # 本番ビルド（dist/ に出力）
npm run preview    # ビルド結果をプレビュー
```

## デプロイ（GitHub Pages）

**main ブランチはソース専用**として扱い、公開ファイルだけを **`publish` ブランチ**
に置き、それを GitHub Pages から配信しています
（リポジトリ設定: Pages → Source: Deploy from branch → **publish / /**）。

この構成により、https://www.cresome.tech/ から README.md・ソースコード等を
直接参照することはできません。

```bash
npm run deploy     # build → 公開ファイル（index.html + assets/ + CNAME）を publish ブランチへ更新・push
```

`npm run deploy` の内部処理（`scripts/deploy.mjs`）:
1. `npm run build` で `dist/` を生成
2. `publish` ブランチの git worktree（リポジトリ隣接の `<repo>-publish-wt`）を確保
3. worktree 内の全ファイルを削除し、`dist/*` と `CNAME` を配置
4. 変更があれば commit → `git push origin publish`

publish ブランチには以下のファイルのみ存在します:
- `index.html`
- `assets/`（JS / CSS / logo / favicon）
- `CNAME`
- `public/` 配下の静的ファイル（Google Search Console 検証ファイル `google6053776ad251d250.html` など。Vite がビルド時に `dist/` ルートへ自動コピーするため、`npm run deploy` で自動的に同梱されます）

## 留意事項: アセットファイル名のビルド再現性

- `package.json` の `vite` はキャレット指定（`^5.4.11`）のため、`npm install` のタイミングによって解決される 5.4.x パッチ版が変わり得ます。
- Vite（および同梱の esbuild）のバージョンが異なると、**ソースコードを変更していてもいないなくても**、ビルド成果物の内容ハッシュが変わることがあります。例:
  - `assets/index-CsZMAxLG.js` → `assets/index-DAFwLBMo.js`
  - `assets/cresome_logo-CqxN7NRr.svg` → `assets/cresome_logo-CqxN7NRr-CqxN7NRr.svg`（アセット名に二重ハッシュ）
- 動作自体には影響しません。`npm run deploy` は publish worktree を全削除してから新しいビルド成果物を配置するため、そのまま push して公開すれば問題ありません。
- ただし、デプロイ後に publish ブランチへ反映される `assets/*` のファイル名が前回のものと異なる場合がありますので、差分がファイル名の変化中心である場合は上記の理由によるものとご判断ください。
- 前回デプロイ時と同一の Vite バージョンでビルドしたい場合は、該当コミットの `package.json` / `package-lock.json` を復元して `npm ci` を実行してください。

## サイト構成

- トップ / 事業内容 / 開発フロー / 会社概要
- 右サイドバー（モバイルは右スライドメニュー）
- ページ切り替えはフェード、要素はスクロールフェードイン
- 全ページ共通の背景エフェクト（3D 点波形 / Space Wars 風ベクター / 3D ワイヤーフレームマップの 3 モード。詳細は [WAVE.md](./WAVE.md) / [SPACESHIP.md](./SPACESHIP.md) / [MAP.md](./MAP.md) を参照）

## 配色

- メイン: `#FFFFFF`
- サブ（テキスト）: `#404080`
- アクセント: `#EF5B00`
- 詳細は [design.md](./design.md) を参照

## 背景エフェクト

全ページ共通の背景に、3 種類の装飾エフェクトを切り替え可能に表示しています（コンテンツより奥の固定レイヤー）。

- **背景の切替**: 右サイドバー（モバイルはドロワー）の下部に「背景」セクションを配置し、「波」/「宇宙船」/「地図」の 3 ボタンで切替。選択は `localStorage`（`cresome.bgMode`）に保存されリロード後も維持される。デフォルトは「波」。
- **波モード（既定）**: `src/components/WaveBackground.jsx` — Canvas 2D の 3D 点波形。詳細は [WAVE.md](./WAVE.md)
- **宇宙船モード**: `src/components/SpaceWarsBackground.jsx` — Space Wars!（Atari）風のベクター線画面。詳細は [SPACESHIP.md](./SPACESHIP.md)
- **地図モード**: `src/components/MapBackground.jsx` — Three.js + GLB の 3D 白地図（駅 → クリサムのルートアニメーション）。詳細は [MAP.md](./MAP.md)
- **配置**: 全ページ共通の背景レイヤー。`position: fixed; z-index: 0; pointer-events: none`（`src/index.css` 参照）。`.wave-bg` / `.map-bg` は `inset: 0`（フルビューポート）、`.sw-bg` は `inset: 64px`（画面内側 64px にインセット）。`.main`(z-1) / サイドバー・トップバー(z-40) / ドロワー(z-50) より奥にあるため既存 UI への変更は不要。
- **品質・性能（共通）**: `devicePixelRatio`（最大 2）による解像度補正、`prefers-reduced-motion` 指定時はアニメーション停止、タブ非表示時は描画停止（`visibilitychange` で復帰）。モード固有の詳細は各ドキュメントを参照。

## map/ — 3D マップデータ生成ワークスペース

クリサム株式会社へ案内するための 3D マップデータを生成する独立ワークスペースです。
PLATEAU 都市モデル（CityGML）と OpenStreetMap（Overpass API）の実データから、
three.js で読み込める GLB レイヤー群と最短経路を生成します。

- **成果物**: `map/out/`（通常カラー）と `map/out_white/`（白地図風: 建物 #CFCFCF / 道路 白 / 路線 #5A5A50 / クリサム #E94B3A。`python src/pipeline.py --palette white --out out_white`）。各 9 GLB レイヤー + `manifest.json`（ビュワー用メタ情報）
- **最短経路**: `map/src/routes.py` が OSM 道路ネットワーク上で Dijkstra 法により 10 起点 → クリサム社屋の経路を `routes.json` として出力
- **サイトへの移行（2026-09-05 完了）**: サイトの地図モードは `public/map/`（`out_white/` のコピー + `routes.json`）を使用。`MapBackground.jsx` が `GLTFLoader` で読み込み、`MapControls.jsx` は `src/data/stationPoints.js` 定義の 7 駅 / 10 始点で選択。旧合成データ（`src/data/otsuka-map.json` / `scripts/generate-map-data.mjs`）は使用せず、当面ファイルは保持中
- **データ管理**: 生データ `map/data/`（約 5 GB）と成果物 `map/out/`・`map/out_white/`（各約 11 MB）はコミット対象外（`map/.gitignore` 除外）、Synology Drive 同期（バックアップ）の対象として保持

詳細: サイト側の地図モード仕様・テストツール・作業ログは [MAP.md](./MAP.md) / パイプラインの構成・セットアップ・検証手順は [`map/README.md`](./map/README.md)

## 作業記録（ワークスペース共通）

背景エフェクトのモード固有の作業記録は [WAVE.md](./WAVE.md) / [SPACESHIP.md](./SPACESHIP.md) / [MAP.md](./MAP.md) に移しています。

### 2026-08-22: README.md の実装との整合性確認・修正

実装（`package.json` / `vite.config.js` / `tailwind.config.js` / `scripts/` / `src/` / `CNAME`）を正として README.md を照合し、以下の不一致を修正しました。

1. **フォント**: 「ZEN角ゴシック Antique」→「ZEN丸ゴシック」
   - 実装は `index.html` が Google Fonts の `Zen+Maru+Gothic` を読み込み、`src/index.css` の body も `'Zen Maru Gothic'` を使用している
   - `tailwind.config.js` には角ゴシックの定義が残存しているが、`font-sans` クラスは未使用
2. **公開URL**: `https://cresome.tech` → `https://www.cresome.tech`（CNAME: `www.cresome.tech`）
   - `CNAME` ファイルおよび `index.html` の canonical / OG タグは `www.cresome.tech` だった
3. **`npm run deploy` の実行順序**: 「ビルド後に…展開」→「restore → build → 展開」
   - package.json の定義は `npm run restore && npm run build && node scripts/deploy.mjs`
4. **展開内容の補足**: 古い `assets/` は削除されること、`index.html` が既に公開版の場合は退避をスキップされることを記載（`scripts/deploy.mjs` の挙動に合わせる）

あわせて `vite.config.js` のコメントに `scripts/deploy-root.mjs` と誤記があったため `scripts/deploy.mjs` に修正しました。

- 本変更はドキュメント・コメントのみでソースコードを変更していないため、再ビルド（`npm run deploy`）は行いませんでした

### 2026-08-22: GitHub Pages 公開構成を publish ブランチ方式に変更

- **背景**: 旧構成は main ブランチ直下を公開していたため、https://www.cresome.tech/README.md やソースコード（`src/`・`package.json` 等）をブラウザから直接閲覧できてしまう問題があった。
- **変更内容**:
  1. 専用公開ブランチ `publish` を作成（`index.html` / `assets/` / `CNAME` のみを含む）
  2. GitHub Pages の配信元を `publish / /` に変更（リポジトリ設定: Settings → Pages）
  3. `scripts/deploy.mjs` を書き換え: build 後、`publish` ブランチの git worktree（リポジトリ隣接の `<repo>-publish-wt`）に公開ファイルだけを配置し commit + push
  4. 旧来の「リポジトリ直下展開 + `.backup/` 退避」機構と `npm run restore` を廃止（ソース用 `index.html` が公開版で上書きされる問題自体がなくなるため）
  5. `vite.config.js` に `root` を realpath 固定する設定を追加（シンボリックリンク（ジョクション）越しのワークスペースで `npm run build` が「fileName must be neither absolute nor relative paths」エラーで失敗する問題を回避）

- **変更後の検証（実施済み）**:
  1. [https://github.com/cliclie/cresome.tech-HP/settings/pages](https://github.com/cliclie/cresome.tech-HP/settings/pages) を開く（2026-08-24 のリポジトリ名変更により、現在は [https://github.com/cliclie/www.cresome.tech/settings/pages](https://github.com/cliclie/www.cresome.tech/settings/pages) へ変更）
  2. **Source: Deploy from a branch** を選択し、Branch を **`publish`**、フォルダを **`/ (root)`** に変更して保存
  3. 数分待って [https://www.cresome.tech/](https://www.cresome.tech/) でサイト表示を確認
  4. [https://www.cresome.tech/README.md](https://www.cresome.tech/README.md) が **404** になることを確認

### 2026-08-24: リポジトリ名変更 (cresome.tech-HP -> www.cresome.tech) と旧名ワークスペースの整理

- **変更内容**:
  1. GitHub リポジトリ名を `www.cresome.tech` に変更し、ローカルのワークスペースフォルダも `www.cresome.tech` に変更した（remote: `https://github.com/cliclie/www.cresome.tech.git`）
  2. 改名に伴い不要になった旧名由来のディレクトリ（親ディレクトリ `D:\SynologyDrive\cresome.tech\` 配下）を削除した:
     - `cresome-hp/` — 旧作業コピー。git remote は旧名 `cresome.tech-HP` のままで main が新ワークスペースより 1 コミット遅れ（`6a3ba93`）。削除前に未コミット変更・stash・固有コミットのいずれも無いことを確認済み
     - `cresome-hp-publish-wt/` — 旧 publish ワークツリー。HEAD（`44f1b28`）は `origin/publish` と同一で固有データなし。削除前に未コミット変更が無いことを確認済み
  3. 本作業記録下方の旧 GitHub URL（`cresome.tech-HP/settings/pages`）に変更後の新 URL への注記を追加（元記載は残したまま追記）
- **変更後の検証（実施済み）**:
  1. `git remote -v` が新名に更新済み、main は `origin/main` と同期、作業ツリーはクリーン、`git fsck` に問題なし
  2. `origin/publish`（公開内容）およびリポジトリ全体のソース・スクリプト・設定に旧名参照が残っていないことを確認
  3. 旧 GitHub URL は GitHub の自動リダイレクト（301）で新 URL へ移動すること、新 URL は正常（200）であることを確認
- **留意事項**:
  - `scripts/deploy.mjs` は publish ワークツリーのパスをフォルダ名から導出するため、改名後は新しいワークツリー `www.cresome.tech-publish-wt` が作成・使用される（旧 `cresome-hp-publish-wt` は参照されない）
  - 旧 URL（`cresome.tech-HP/...`）は自動リダイレクトにより開けるが、今後は新 URL を使用すること

### 2026-08-24: `npm run dev` クラッシュの修正（vite.config.js に `process.chdir(root)` を追加）

- **症状**: `npm run dev` 起動直後に `TypeError: Cannot read properties of undefined (reading 'imports')`（Vite の依存関係最適化処理）でサーバーがクラッシュする、またはサイレントに依存最適化が死に `node_modules/.vite` が生成されない状態になる
- **原因**: ワークスペースがジョクション経由（`d:\cresome.tech` → `D:\SynologyDrive\...`）で開かれている環境では、esbuild の metafile パス（解決後 = realpath の cwd 基準の相対パス）と、Vite の依存関係最適化が元の（ジョクション）cwd 基準で計算する期待パスが一致せず、照合に失敗する
- **修正**: `vite.config.js` で `process.chdir(root)` を呼び、`process.cwd()` を `root`（realpath）と揃える（既存の root 固定設定を補完する追加）
- **検証（実施済み）**: 依存関係最適化が完了し `node_modules/.vite/deps` が生成される、`/` と `/src/main.jsx` が 200 を返し最適化済み deps への参照になる、`npm run build` も引き続き成功すること

### 2026-08-27: Google Search Console 検証ファイルをビルド出力（`public/`）に組み込み

- **背景**: Google Search Console の検証ファイル `google6053776ad251d250.html` を急ぎで公開するため、`npm run deploy` を経由せず `main`（`3dd2c42`）と `publish`（`df00071`）に個別に手動 push した。その際、検証ファイルはビルド成果物 `dist/` に含まれておらず、`scripts/deploy.mjs` が「publish worktree 全削除 → `dist/*` + `CNAME` のみコピー」を行うため、次回 `npm run deploy` 実行時に **publish ブランチ上の検証ファイルが削除されてしまう**（Google 検証の破損 + main→publish の一貫性喪失）という問題が起きた
- **修正内容**:
  1. 検証ファイルをリポジトリ直下から `public/` へ移動（`git mv google6053776ad251d250.html public/google6053776ad251d250.html`）
  2. Vite は `public/` 配下のファイルを `dist/` ルートへ自動コピーするため、以降の `npm run deploy` は検証ファイルを publish 出力に常に同梱する（`scripts/deploy.mjs` の処理ロジックは変更なし、構成説明コメントのみ更新）
  3. 本 README の「publish ブランチのファイル一覧」を更新（`CNAME` と `public/` 配下ファイルの記載を追加）
- **修正後の検証（実施済み）**:
  1. `npm run deploy` を実行 → ビルド成功（vite 5.4.21）、`dist/` に `public/` 由来の `google6053776ad251d250.html` が同梱されることを確認
  2. `origin/publish` に `google6053776ad251d250.html` が存在することを確認（`df00071`、`git ls-tree -r origin/publish` で確認）
  3. `npm run deploy` の worktree 投入後に「公開ファイルに変更はありません。commit/push はスキップしました。」と表示され、publish ブランチがビルド出力と完全一致することを確認（以降のデプロイでも検証ファイルが消えない）
  4. https://www.cresome.tech/google6053776ad251d250.html が 200 を返し、内容が `google-site-verification: google6053776ad251d250.html` であることを確認

### 2026-08-27: `.gitignore` に `.clinerules/01-always.md` を追加

- **変更** (`311eb5d`): `.clinerules/01-always.md`（AI ツール用の編集ルールファイル）を Git の管理対象外とし `.gitignore` に追加
- **検証（実施済み）**: `git check-ignore -v` で `.gitignore` の該当ルールにヒットすること、および `git status` で未追跡ファイルから消えたことを確認
