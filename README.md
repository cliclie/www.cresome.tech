# www.cresome.tech

リポジトリ名変更(2026-08-24) : cresome.tech-HP -> www.cresome.tech

クリサム株式会社（Cresome Technical Works）のコーポレートサイト。
GitHub Pages（[https://www.cresome.tech](https://www.cresome.tech)、CNAME: `www.cresome.tech`）で公開しています。

## 技術スタック

- Vite 8（Rolldown ビルド）+ React（SPA）
- Tailwind CSS 4（`@tailwindcss/vite` プラグイン）
- フォント: ZEN丸ゴシック（Google Fonts）

## 使い方

```bash
npm install        # 依存関係をインストール
npm run dev        # 開発サーバーを起動
npm run build      # 本番ビルド（dist/ に出力）
npm run preview    # ビルド結果をプレビュー
npm run bench:fetch # 記事のベンチマークデータを各環境設定リポジトリから再取得（src/data/articles/llm-bench.json）
npm run audit      # 依存関係の脆弱性監査（High 以上で非ゼロ終了）
npm run approve:scripts  # puppeteer 更新後に postinstall（Chromium 取得）を承認
```

依存監査の恒久化:

- ルート（npm）: `npm run audit`。GitHub Dependabot も `.github/dependabot.yml` で有効
  （`/`、`/map`、`/map/viewer` の 3 エコシステムを毎週月曜 10:00 JST にチェック）。
- `map/`（Python）: `map\scripts\audit_deps.bat`（初回は `python -m pip install pip-audit` が必要）。
- `package.json` の `allowScripts` は **semver レンジ不可**（npm が `^` `~` `>=` を拒否し、
  完全一致バージョンを `||` で連結する形式のみ）。puppeteer を更新したら
  `npm run approve:scripts` を実行しないと、Chromium 取得の postinstall が黙ってスキップされます。

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

- `package.json` の `vite` はキャレット指定（`^8.3.5`）のため、`npm install` のタイミングによって解決される 8.x パッチ版が変わり得ます。
- Vite（および同梱の Rolldown / Lightning CSS）のバージョンが異なると、**ソースコードを変更していてもいないなくても**、ビルド成果物の内容ハッシュが変わることがあります。例:
  - `assets/index-CsZMAxLG.js` → `assets/index-DAFwLBMo.js`
  - `assets/cresome_logo-CqxN7NRr.svg` → `assets/cresome_logo-CqxN7NRr-CqxN7NRr.svg`（アセット名に二重ハッシュ）
- 動作自体には影響しません。`npm run deploy` は publish worktree を全削除してから新しいビルド成果物を配置するため、そのまま push して公開すれば問題ありません。
- ただし、デプロイ後に publish ブランチへ反映される `assets/*` のファイル名が前回のものと異なる場合がありますので、差分がファイル名の変化中心である場合は上記の理由によるものとご判断ください。
- 前回デプロイ時と同一の Vite バージョンでビルドしたい場合は、該当コミットの `package.json` / `package-lock.json` を復元して `npm ci` を実行してください。

## 留意事項: `src/index.css` は LF 改行が必須（Tailwind CSS v4）

- Tailwind CSS v4 のパーサは CRLF 改行を正しく扱えず、`src/index.css` が CRLF の場合 `npm run build` が
  `CssSyntaxError: Invalid declaration` で失敗します（同一内容を LF にすると成功）。
- 開発環境が `core.autocrlf=true` でも CSS が CRLF でチェックアウトされないよう、
  `.gitattributes` に `*.css text eol=lf` を宣言して固定しています。**このルールを消すとビルドが壊れます。**
- 今後 CSS ファイルを増やす場合は `.gitattributes` に同種のルールを追加してください（LF 推奨）。

## 留意事項: Tailwind の走査対象を明示している（`src/index.css` 先頭）

- Tailwind CSS v4 のソース自動検出は `.gitignore` 対象外を走査するため、放置すると
  `map/viewer/lib/three/`（three.js のベンダーコピー約 500 ファイル）まで読み込み、
  不要なユーティリティを生成して CSS が肥大化します（実測 19.08 kB → 26.22 kB、
  ビルドも 207 ms → 2.35 s に悪化）。
- そこで `@import "tailwindcss" source(none);` で自動検出を無効化し、`@source` で
  旧 `tailwind.config.js` の `content` と同じ `index.html` と `src/**/*.{js,jsx}` のみに限定しています。
  **Tailwind に走査させるファイルを追加する場合は `@source` へ追記してください。**

## 留意事項: 旧ブラウザへの注意表示

- Vite 8 の既定ビルドターゲットは `baseline-widely-available`（Chrome/Edge 111・Safari 16.4・Firefox 114 相当）で、
  これより古いブラウザでは成果物が動作しない可能性があります。ターゲットは意図的に既定値のまま据え置き、
  `index.html` の先頭に「このブラウザでは正常に動作しないかもしれません。」を
  薄い赤字（11 px・`rgba(180, 40, 40, 0.55)`）で表示します。
- 判定はインラインのクラシックスクリプト（ES5 構文）で行い、`Object.hasOwn` / `structuredClone` /
  `String.prototype.isWellFormed` の有無でモダンさを検査します（ターゲット境界よりわずかに広い範囲を許容）。

## サイト構成

- トップ / 事業内容 / 開発フロー / 会社概要 / 記事（記事機能の詳細は [ARTICLES.md](./ARTICLES.md) を参照）
- 右サイドバー（モバイルは右スライドメニュー）
  - 「記事」は他の並びより間隔を広げ、直下に記事の最新更新日を表示する
- ページ切り替えはフェード、要素はスクロールフェードイン
- 全ページ共通の背景エフェクト（3D 点波形 / Space Wars 風ベクター / 3D ワイヤーフレームマップの 3 モード。詳細は [WAVE.md](./WAVE.md) / [SPACESHIP.md](./SPACESHIP.md) / [MAP.md](./MAP.md) を参照）

## 配色

- メイン: `#FFFFFF`
- サブ（テキスト）: `#404080`
- アクセント: `#EF5B00`
- 詳細は [design.md](./design.md) を参照

## 記事（`src/pages/Articles.jsx`）

右サイドメニューの「記事」から入る一覧機能で、**左ペイン＝記事一覧（更新日・タイトル）／右ペイン＝記事本文** の 2 列レイアウトです（横幅 1080px 未満では縦積み）。実装詳細・データ生成・運用は **[ARTICLES.md](./ARTICLES.md)** を参照。

- メニューは「トップ」〜「会社概要」より間隔を広げ、直下に記事の最新更新日を表示します（`Sidebar.jsx` / `Drawer.jsx` 共通、`.nav-group--spaced` と `.nav-sub`）
- 記事の追加は、本文を `src/pages/articles/` に置いて `src/data/articles/index.js` の `ARTICLES` に登録するだけ（メニュー側の変更不要）
- **記事1「ローカル環境でローカルLLMをローカルな条件でベンチマーク」**: 自社内 3 台（AI TOP ATOM / whitebearatom2 / Whitebear2026）の環境設定リポジトリの README から `npm run bench:fetch`（`scripts/fetch-llm-bench.mjs`）が生成した 37 環境の一覧。15 列（順位・モデル名・重み名・decode・prefill・コンテキスト長・使用メモリ・機種名・OS・CPU・搭載RAM・推論エンジン・エンジン版・計測日・備考）を全列ソートでき、ヘッダー行と先頭 2 列は固定、行クリックで詳細諸元をポップアップします。一覧はブラウザ幅に追従し、社内 IP は公開バンドルに含めません

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

### 2026-10-03: 波モード（背景エフェクト）の描画調整

- **変更** (`8eee90c`): `src/components/WaveBackground.jsx` の波を、点数増加（`STEP` 24→12）・点サイズ小型化（`MAX_RADIUS` 1→0.5）・グロー（ぼかし）2 層描画の除去・点色暗化（`DOT_RGB` 200,200,210→150,150,160）に調整
- **検証（実施済み）**: `npm run dev` / `npm run build` で確認後、`npm run deploy` で `publish`（`5c133c8`）へ反映。https://www.cresome.tech/ で「密・小・ぼかしなし・濃い灰色」の点波形を表示
- 詳細は [WAVE.md](./WAVE.md) の作業記録を参照

### 2026-10-23: サードパーティ依存のセキュリティ更新（Vite 8 / Tailwind CSS 4）と `map/` 生成環境の CVE 対応

- **背景**: `npm audit` が報告した 10 件（High 7 / Moderate 3）に加え、OSV（GitHub Advisory / PyPI）照会で Vite 固有の advisory と `map/` の Python 環境の advisory を追加検出した（npm 側 12 advisory・PyPI 側 4 advisory）。公開物（`publish` ブランチの静的ファイル）に `node_modules` のコードは含まれず **www.cresome.tech 自体を直接狙える CVE は 0 件**だったが、開発サーバー（Vite 5 系）には Windows 環境由来の実害がありうる CVE が多いため、ツールチェーンを更新した。
- **検出していた主な脆弱性（すべて解消済み）**:
  1. `vite` 5.4.21 — CVE-2026-53571（`server.fs.deny` bypass on Windows alternate paths）/ CVE-2026-112946（`server.fs.allow` 外のファイル提供）/ CVE-2026-112945（独自ミドルウェア経由の cross-origin script execution）/ CVE-2026-39365（依存最適化 `.map` の path traversal）。**Vite 5 系には修正リリースが存在しない（EOL）**
  2. `vite` 5.4.21・`launch-editor` — CVE-2026-53632（UNC パス経由の NTLMv2 ハッシュ漏洩）/ CVE-2026-112942 / CVE-2026-112943 / CVE-2026-112944（エディタ CLI 引数起因の任意コマンド実行）
  3. `esbuild` 0.21.5（vite 5 同梱）— GHSA-67mh-4wv8-2f99（dev サーバーの `Access-Control-Allow-Origin: *` によるソース漏洩）
  4. `source-map-js` 1.2.1（`postcss` 経由）— CVE-2026-93749（indexed source-map の offset 未検証による event-loop DoS）
  5. `braces` 3.0.3（`tailwindcss` 3 → chokidar / micromatch / fast-glob 経由）— CVE-2026-93687（深いネストの brace パターンでスタック枯渇）。**上流に修正版なし** → Tailwind 4 で依存ごと除去
  6. `postcss-selector-parser` 6.1.4 — CVE-2026-104844（フラットセレクタ解析の O(n²) による CPU 枯渇、6 系へのバックポートなし）→ Tailwind 4 で依存ごと除去
  7. `urllib3` 2.7.0（`map/`）— GHSA-8988-9cw3-xx77（HTTPS プロキシ TLS 設定が無視されうる）/ GHSA-gh4c-6fx4-qh6g（chunked deflate で無限ループ）/ GHSA-vxq7-64xx-v4gw（無制限の chunk-size バッファ）。PLATEAU・Overpass からの大容量ダウンロードに直接関わる
  8. `certifi` 2026.7.22（`map/`）— GHSA-6q48-6c7w-9gw2（中間 CA の鍵が漏洩した emSign ルート CA を同梱）
- **適用内容**:
  1. `vite` `^5.4.11` → **`^8.3.5`**、`@vitejs/plugin-react` `^4.3.4` → **`^6.1.2`**（Rolldown / Oxc ベースへ移行）
  2. `tailwindcss` `^3.4.17` → **`^4.3.3`**、**`@tailwindcss/vite@^4.3.3`** を `vite.config.js` の plugins に追加。`postcss.config.js` と `tailwind.config.js` は不要になったため削除、`autoprefixer` と `postcss` も devDependencies から削除（Tailwind 4 内蔵の Lightning CSS が処理）
  3. `src/index.css` 先頭の `@tailwind base / components / utilities` → `@import "tailwindcss";`
  4. `puppeteer` `^25.10.0` → **`^25.16.0`**、`npx update-browserslist-db@latest` で `caniuse-lite` を更新
  5. `package.json` の `allowScripts` を `puppeteer@25.16.0` に更新（**ピン留めが古ままだと postinstall の Chromium 取得が黙ってスキップされる**。`npm install-scripts approve puppeteer` で更新できる）
  6. `map/requirements.txt` — `urllib3>=2.8.0` と `certifi>=2026.10.19` を明示追加（requests の内部依存なので記載しないと古い版が解決される）、`numpy>=2.5.4` / `pyproj>=3.8` / `shapely>=2.2` / `trimesh>=5.1.1` / `requests>=2.32.5` へ下限を引き上げ（実環境も同版へ更新済み）
- **Tailwind CSS 4 移行で必要になった補正**:
  1. **改行コード**: v4 のパーサは CRLF 改行で `CssSyntaxError: Invalid declaration` を起こすため、`src/index.css` を LF に正規化し `.gitattributes`（`*.css text eol=lf`）で恒久化（上記「留意事項」参照）
  2. **複数行に跨る宣言**: `.main, .sidebar` の `text-shadow:` を複数行値から 1 行へ正規化（v4 パーサでの解析失敗を避ける）
  3. **Preflight の挙動差**: v3 が定義していた `button { cursor: pointer }` は v4 に存在しないため、`@layer base` に `button:not(:disabled), [role="button"]:not(:disabled) { cursor: pointer; }` を追加して既存のカーソル挙動を維持（`MapControls.jsx` に `disabled` を持つボタンが 5 箇所あるため `:not(:disabled)` 付き）
  4. `tailwind.config.js` の `theme.extend`（`bg` / `navy` / `accent` / `font-sans`）は JSX・CSS のいずれからも参照されていなかったため、`@theme` への移植は行わず削除
- **変更後の検証（実施済み）**:
  1. `npm audit` → **found 0 vulnerabilities**。OSV 照会でも npm / PyPI ともに関連 advisory 0 件
  2. `npm run build` 成功（vite 8.3.5）。最終的な成果物は JS 893.06 kB（gzip 242.57 kB）、CSS 19.08 kB（gzip 4.93 kB）、ビルド 207 ms。※これは Phase 4（React 19 / three 0.186）適用後の値。更新前は JS 811.98 kB（gzip 222.26 kB）、CSS 19.31 kB（gzip 4.67 kB）、ビルド 1.60 s
  3. `npm run dev`（vite 8.3.5）が **295 ms** で起動、`/`・`/src/main.jsx`・`/src/index.css` が 200、`node_modules/.vite/deps` に react / react-dom の最適化結果が生成される（ジョクション経由ワークスペースで発生していた依存最適化クラッシュは再現せず。`vite.config.js` の `process.chdir(root)` はそのまま維持）
  4. `npm run preview` で `/`・Google Search Console 検証ファイル・`/map/manifest.json` が 200
  5. Python 側は urllib3 2.8.0 / certifi 2026.10.19 / numpy 2.5.4 / shapely 2.2.0 / pyproj 3.8.0 / trimesh 5.1.1 で、座標変換・shapely 演算・trimesh の GLB 往復を実行して異常なし
  6. 解決されるパッケージ総数が **156 → 59** に減少（esbuild / rollup / braces / chokidar / micromatch / fast-glob / postcss-selector-parser / autoprefixer / @babel/core が消え供給網の攻撃面が縮小）
- **Phase 4（追加適用）**: `three` `^0.185.1` → **`^0.186.1`**、`react` / `react-dom` `^18.3.1` → **`^19.3.1`**、`map/viewer` のベンダーコピー（`lib/three/`）を **0.169.0 → 0.186.1** に差し替え
  - r186 で本サイトに効く改善: 破棄済み Geometry の属性を削除（#33939・メモリリーク改善）、`Renderer.resetState()` 追加（#33877）、`BufferGeometry` のシリアライズ整理（#34044）、`toJSON()` の既定値チェック撤廃による軽量化（#34178）
  - ベンダー差し替えは `build/` と `examples/jsm/` を丸ごと入替（0.186 は `.min.js` の同梱が廃止され `three.core.js` へ分割されたため、旧 `.min.js` 群を削除して `build` 6 ファイル + `examples/jsm` 500 ファイルに更新）
  - **代償**: React 19 はバンドルが大きく、JS が 801.76 kB → **893.06 kB（gzip 217.47 → 242.57 kB）** に増加（three 0.186 の寄与は +12 kB のみ）。サイズを優先する場合は `npm i react@^18.3.1 react-dom@^18.3.1` で戻せる（いずれも advisory は無し）
  - **検証**: `map/viewer` は `vite preview` 経由（`?base=../map/`）で GLB 18 件が 200、canvas 1・駅ラベル 11・レイヤー切替 19・エラー無し。本サイトの地図モードも three 0.186 + React 19 でスクリーンショット 124 kB（更新前 132 kB と同等の描画量）、`pageerror` / `console.error` ゼロを確認
  - three の viewport/scissor 挙動変更（r186 以降「レンダーターゲットにバインドされている時は pixel ratio でスケールしない」）は、`MapBackground.jsx` が `setRenderTarget()` を使わず既定キャンバスへ直接描画しているため影響なし（PiP 俯瞰の `setViewport` / `setScissor` / `setScissorTest` はそのまま）
  - React 19 で削除された API（`ReactDOM.render` / `hydrate` / `unmountComponentAtNode` / string refs / `defaultProps` / `propTypes`）は本リポジトリで未使用。`main.jsx` の `ReactDOM.createRoot` と `<React.StrictMode>` は 19 でもそのまま有効（新 JSX トランスフォームは `@vitejs/plugin-react` が処理）
- **恒久化**: `.github/dependabot.yml`（npm `/`・pip `/map`・npm `/map/viewer` を毎週月曜 10:00 JST にチェック）、`package.json` の `audit` / `approve:scripts` スクリプト、`map/scripts/audit_deps.bat`（pip-audit）を追加
- **旧ブラウザへの注意表示**: Vite 8 の既定ビルドターゲットは据え置き、`index.html` に判定スクリプト（ES5・クラシック）と薄い赤字の注意文（11 px・`rgba(180, 40, 40, 0.55)`）を追加。詳細は上記「留意事項」
- **Tailwind の走査対象を限定**: v4 の自動検出は git 管理下なら何でも走査するため、`map/viewer/lib/three`（ベンダー 331 → 500 ファイル）まで読み込んで CSS が 19.31 → 24.46 → 26.22 kB に膨らんだ。`@import "tailwindcss" source(none)` + `@source` で旧 `content` と等価な `index.html` と `src/**/*.{js,jsx}` に限定し、CSS 19.08 kB・ビルド 2.35 s → 207 ms へ改善
- **留意事項**:
  - Vite 8 の既定ビルドターゲット（`baseline-widely-available`）は据え置いた。これより古いブラウザでは動作しない可能性があるため、`index.html` に注意文を表示する（上記「留意事項」参照）
  - `map/viewer` は開発用ツールで公開対象外。検証で `dist/viewer` へコピーしたまま `npm run deploy` すると丸ごと公開されるため、必ず `npm run build`（`emptyOutDir: true`）で `dist` を再生成してからデプロイする
- **公開（実施済み 2026-10-23）**: `main` へ `d22fb48`（523 ファイル、`map/viewer` の three ベンダー入替含む）を push。`npm run deploy` は vite 8.3.5 で再ビルド（36 modules / 209 ms、JS 893.06 kB・gzip 242.57 kB、CSS 19.08 kB・gzip 4.93 kB）後に `publish` へ `73f041d` を push し、`assets/index-BNrUcqLq.js` / `assets/index-C0Fhbv6a.css` へ更新（旧 `index-Cnq0sFEx.js` / `index-Ew1yXC0H.css` を削除）。https://www.cresome.tech/ の `index.html` が 1,621 → **2,925 bytes**（旧ブラウザ注意文を含む）になったことを実測で確認
### 2026-10-25: 右サイドメニューに「記事」セクションを追加（ローカルLLMベンチマーク記事）

- **要件**: 「トップ」〜「会社概要」より間隔を広げた「記事」をメニューに追加し、直下に記事の更新日付を表示。選択時はメイン領域を左ペイン（記事一覧: タイトル・日付）／右ペイン（本文）に構造化。最初の記事は自社内 3 台の環境設定リポジトリから取得したローカルLLM性能の一覧（順位・モデル名・重み名・decode・prefill・コンテキスト長・使用メモリ・機種名・OS・CPU・搭載RAM・推論エンジン・エンジンバージョン。全列ソート、ヘッダー行と 1 列目を固定、行クリックで詳細ポップアップ）。
- **ソースへの接続確認**
  1. Gitea `gitadmin/DGXSparkLLMEnv`・`gitadmin/Atom2LLM` は匿名 HTTP で README / raw / REST API とも取得可
  2. `https://github.com/cliclie/Whitebear2026-WSL2` は HTTPS だと 404（公開一覧 3 件にも Gitea にも同名リポジトリ無し）→ プライベートと判明。**SSH 公開鍵 `~/.ssh/id_ed25519.pub`（`SHA256:nQAp/SJ3sqsRjcliQbWgWM+8sdOOcZ08JsPedWWsltk`）を GitHub に登録**し、`ssh -T git@github.com` が `Hi cliclie!` を返すこと、`git ls-remote` / shallow clone で README が読めることを確認
- **追加・変更ファイル**
  - 新規: `scripts/fetch-llm-bench.mjs`（README 表の解析 → JSON 生成。`main()` は直接実行時のみ走る。パース関数は export して単体確認可能）
  - 新規: `src/data/articles/llm-bench.json`（37 環境分・生成物）、`src/data/articles/index.js`（記事登録）、`src/data/articles/useBench.js`（JSON の遅延読み込み）
  - 新規: `src/pages/Articles.jsx`、`src/pages/articles/LocalLlmBench.jsx`、`src/components/articles/BenchTable.jsx`、`src/components/articles/BenchDetailModal.jsx`
  - 変更: `src/App.jsx`（`PAGES` に `articles` / `spaced`、`navItems` に `spaced`・`sublabel`、`page-wrap--wide`）、`src/components/Sidebar.jsx`・`Drawer.jsx`（`.nav-group` ラッパーで間隔と更新日付）、`src/index.css`（メニュー・記事・ベンチ表・モーダル）、`package.json`（`bench:fetch`）
- **設計上の判断**
  - 公開サイトから社内 IP（`192.168.0.101`）を実行時に叩かないよう、ビルド時に JSON へ焼き込むスナップショット方式 adopted
  - 出典 URL は既定でバンドルに含めない（`PUBLISH_SOURCE_URL = false`）。生成 JSON・dist を grep して `192.168` が 0 件であることを確認。記事本文の出典欄は機種名テキストのみ、詳細ポップアップは出典行を非表示
  - ベンチ JSON を静的 import するとメインバンドル（three.js 由来）に 55 kB 追加され chunk 警告（900 kB）を悪化させるため、`useBench()` の動的 `import()` で別チャンク化（`llm-bench-*.js` 55.46 kB / gzip 10.12 kB。メインは 905.82 kB / gzip 246.43 kB で変更前と同水準）
  - 抽出規則: `<br>` 第1ブロック＝現行値（旧エンジン値を除外）、「平均 X」優先、`同上` は直前行を継承、範囲は上限、`14.2 + 1.4GB` は合計、MiB/GiB 併記は括弧内を優先（`（+163MB）` のような差分表記は除く）、`（空き …）` は捨てる。HuggingFace ID は README・起動スクリプトに実在する表記のみとし、推測は `null`（「—」表示）に留めた
- **検証（`vite preview` + puppeteer・1440×900 / 390×844）**
  1. メニュー: `NAV_TOPS = [167, 215, 264, 312, 385]`（通常 49px 間隔に対し「記事」は 73px）、`nav-sub = 2026-10-25`、全項目 `clientWidth/scrollWidth = 148/148`（折返し・切れなし）
  2. レイアウト: `page-wrap 1128px / 記事一覧 250px / 本文 844px`。モバイル（390px）は一覧 342px が上、本文が下（縦積み）
  3. 一覧: 37 行を描画。横 700px・縦 240px スクロール後も順位とモデル名の左固定が同一位置（`pinModelLeft = pinCellLeft = 399`）で、ヘッダー不透明化により下層行の透けなし
  4. ソート: prefill 降順で先頭 `5,916`、昇順で先頭 `292.4` かつ末尾 4 行が「—」（未計測は常に末尾）、順位列で `1,2,3` に復帰
  5. 詳細ポップアップ: 機種メタ + 諸元 + 原文表記 + 出典リンクを表示、Esc で閉じる。コンソールエラーなし
- **未公開**: `npm run deploy` は未実施（`main` へのコミット・push も未実施）
#### 2026-10-25 追補: 搭載RAM の確定と一覧の3点修正（公開前確認での指摘）

- **搭載RAM**: `whitebearatom2` = **32GB**、`Whitebear2026`（WSL2）= **86GB（WSL 割当）** に確定（実機情報）。`MACHINES` の `ram` を更新し、Whitebear2026 は README にあった物理 RAM 表記 127.3GiB から WSL 割当値へ変更
- **1. ブラウザ幅への追従**: `.page-wrap--wide` の `max-width: 1240px` を撤廃（`none`）し、`.bench-table` を `width: max-content; min-width: 100%` → **`width: 100%; min-width: 1591px`** に変更。`min-width: max-content` だと列の折返しは無視され、広い画面でも必要幅（約 2.3k px）で固定されたままだった。併せてテキスト系列（機種名 / OS / CPU / 搭載RAM / 推論エンジン / エンジン版 / 計測日 / 備考）と重み名を `white-space: normal` + `word-break: keep-all`（日本語を1文字ずつ割らない）に変更し、文章部だけ `max-width: 900px` を維持
  - 実測: コンテナ幅 842px(1440) / 1322px(1920) / 1962px(2560) に対し、テーブルは 1591 / 1591 / **1962（横スクロール 0）** と追従
- **2. 計測日列（右部）**: `measuredAt` を追加。README の「測定日: …」注記から `extractMeasuredDates` で自動抽出し、**Launcher 名と完全一致（前後が名前文字でない）だけ**を対象に「名前の後ろに並ぶ日付の末尾」を採用（`qwen38` が `qwen38swift` に部分一致する誤り、`strataQ3` の 3 段階再計測で最新 2026-10-25 が残らない問題を排除）。「全環境 / 全モード / 一括切替・一括計測」を含む注記はその行頭日付を未確定行へ展開（AI TOP ATOM の 17 行 = 2026-09-24、`qwen38flashnextexl3_3p05` のみ 2026-09-30）。whitebearatom2 は表ヘッダー「実行状況（2026-10-17 時点）」を全行へ（`headerDate`）。不明 6 行は空欄
- **3. 備考列（最右端）**: `note` を追加（既定は空欄）。JSON を直接編集すれば済み、`fetch-llm-bench.mjs` に**既存 JSON からの引き継ぎ**（`note` は常時、`measuredAt` は自動抽出できなかった行）を実装したので再生成でも消えない
- **検証**: 15 列描画（`heads` に計測日・備考を確認）、計測日降順で `2026-10-25 → 2026-10-17…`、備考は 37 行すべて空欄、詳細ポップアップに計測日・備考を表示、`npm run build` 成功、コンソールエラーなし
### 2026-10-25: ドキュメント整備と公開（記事セクション）

- **ドキュメント整備**: 記事機能の詳細（画面構成・記事追加手順・データ生成と3台のソース・一覧の列/固定/幅追従/ソート仕様・数値の代表値ルール・計測日と備考の運用・既知の制限・検証履歴）を **[ARTICLES.md](./ARTICLES.md)** に集約し、README の「記事」セクションは要約＋リンクへ整理（`WAVE.md` / `SPACESHIP.md` / `MAP.md` と同じ流儀に揃えた）
- **リポジトリの残務も併せてコミット**: 一時ログの無視（`.gitignore` に `dev_server.log` / `__*.log`）、Tailwind CSS v4 移行で参照されなくなった `tailwind.config.js` / `postcss.config.js` の削除（前回の遺漏）、`.clinerules/00-ClineTips.md` の追補
- **公開（実施済み 2026-10-25）**: `main` へ 4 コミット（`b05b69d` chore(gitignore) → `3bcb85d` chore → `e7c8ed6` docs(clinerules) → `c22388a` feat(articles)）を push（`ae87e25..c22388a`）。`npm run deploy` は vite 8.3.5 でビルド（245 ms、JS 906.50 kB・gzip 246.62 kB / llm-bench 54.63 kB・gzip 9.98 kB / CSS 26.17 kB・gzip 6.20 kB）後に `publish` へ `9af1c01` を push（`assets/index-BhHvqITJ.js` / `assets/index-DJdGyglj.css` / `assets/llm-bench-D0whHpqR.js` を追加、旧 `index-BNrUcqLq.js` / `index-C0Fhbv6a.css` を削除）
  - https://www.cresome.tech/ の `index.html` が新ハッシュを参照すること、main JS と llm-bench チャンクが 200 を返すこと（初回リクエストは Pages の配信遅延で 404、45 秒後に 200 を確認）、両アセットに `192.168` が 0 件であることを実測で確認
