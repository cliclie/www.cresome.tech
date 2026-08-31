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
- 全ページ共通の背景エフェクト（3D 点波形 / Space Wars 風ベクターの 2 モード。詳細は「背景エフェクト」セクション）

## 配色

- メイン: `#FFFFFF`
- サブ（テキスト）: `#404080`
- アクセント: `#EF5B00`
- 詳細は [design.md](./design.md) を参照

## 背景エフェクト

全ページ共通の背景に、2 種類の装飾エフェクトを切り替え可能に表示しています（コンテンツより奥の固定レイヤー）。

- **背景の切替**: 右サイドバー（モバイルはドロワー）の下部に「背景」セクションを配置し、「波」と「宇宙船」の 2 ボタンで切替。選択は `localStorage`（`cresome.bgMode`）に保存されリロード後も維持される。デフォルトは「波」。
- **波モード（既定）**: `src/components/WaveBackground.jsx`
  - **描画方式**: Canvas 2D で XZ 平面の点グリッドをサイン波 4 種の合成で変形し、透視投影で 3D の点状波形として描画。背景は透明、点は薄い灰色で、波の山ほど濃く大きく・谷は淡く表示する。
- **宇宙船モード**: `src/components/SpaceWarsBackground.jsx`
  - **描画方式**: Space Wars!（Atari）風のベクター線画面を、サイトの白地に合わせるため薄ネイビー（`rgba(31,42,84,α)`）の 1px 線のみで描画。ブラックホール（アスタリスク型線画 + 薄い広い重力圏の円）・漂う星点・三角形の自機（両翼常時表示・スラスター噴霧エフェクト）・クルーザー型敵機（前面は V 字開口の円 + 後方のテールフィン 2 本。慣性移動で、低頻度で旋回し前方・後方スラスターで加減速。誘導ミサイル 4 発装備。AI 漂遊）・弾丸（短い線）・誘導ミサイルで構成。
  - **自機操作**: W: 前進（後方中央のメインスラスターから霧のようなジェット噴射）/ S: 後退減速（前方の両舷スラスターから小さな霧が断続噴出）/ A・D: 回転（前後の舷側から RCS 小噴射）/ スペース: 弾発射。摩擦なし（宇宙空間のため加速した速度が維持され、速度上限のみソフトキャップ）。衝突判定・スコアはなし（装飾背景）。
  - **ブラックホールの重力**: 重力圏（薄い広い円）内に入ると自機・敵機がブラックホールへ引き寄せられる。距離の二乗に反比例し、近づくほど強くなる。ブラックホールは画面中央に配置。
  - **敵機レーザー**: 機首 0°（正面真直前）の方向にしか撃てない 4 連射（0.3 秒間隔）。照準はあいまいなリード予測（1 回リード + ランダム誤差）で、その予測位置が機首方向の狭い扇（±約 14°）かつ射程内（弾の到達距離）のときのみ発射。連射後 2 秒のクールタイムを経て再連射可能。
  - **誘導ミサイル**: 敵機は片舷 2 発・計 4 発（スロットはテールフィンより後方・船体から離し舷外へオフセットした位置に片舷 2 発ずつ 2 ペアで横並び配置され、プレイヤー側からも装填状態が分かりやすい）を装備し、内側→外側・左→右の順で合計 3 秒かけて装填（装填中はスロットがフェードイン表示）。装填完了後、1 秒間隔で順次発射。発射直後の速度・方向は敵船と同じ。ただし自機の到達予測位置（リード角込み）が敵機の機首方向 ±45° の予測射線内に入ったときのみ発射（自機が後方にある場合は発射しない）。ミサイルも慣性で飛行し左右旋回と前方噴射のみ（誘導性は悪め・速度上限 210px/s）、自機の現在位置ではなく着弾予測位置（射線予測: 自機の速度による到達時刻までの移動分をリードした位置、イテレーション 2 回で推定）へ誘導する。3300px 航行すると自爆。画面外に出た場合も自爆する（その後は通常の再装填サイクルに移行）。発射後 2 秒間は安全信管が働き当たり判定はなし。ブラックホールに吸収されたり、自機に命中すると爆発。自機が破壊されたときは航行中のミサイルは全て自爆し、安全信管解除後は敵機にたまたま当たった場合も当たり判定として敵機が被弾爆発する。最後のミサイルが消滅してから 10 秒後に再装填。初期配置時・再出現時は 5 秒のクールダウン後に装填開始。
  - **当たり判定・爆発**: 発射したビームが自機・敵機のどちらかに当たると被弾船が爆発（ブラックホールに当たると弾は吸収される）。船がブラックホール本体に触れる、または自機と敵機が衝突しても爆発。爆発演出は船を構成する各直線が慣性を継いで船の中心から回転しながら放射状に飛び散り、約 0.9 秒後にフェードアウト。その後はランダム位置（重力圏の外側）にワープ演出（放射ライン＋拡大リング＋機体フェードイン）で再出現し、進行方向に初速度を与える。初期表示時もワープ演出で出現する。
  - キーボードリスナーはこのモードでのみ有効（アンマウント時に解除され、スペースの `preventDefault` もこのモードでのみページスクロールに影響）。
- **配置**: フルビューポートの固定 canvas（`.wave-bg` = `position: fixed; inset: 0; z-index: 0; pointer-events: none`、`src/index.css` 参照）。`.main`(z-1) / サイドバー・トップバー(z-40) / ドロワー(z-50) より奥にあるため既存 UI への変更は不要。サイドバー背景は透明のためその内側にも見える。カード等は白背景のため本文の可読性は維持。
- **品質・性能**:
  - `devicePixelRatio`（最大 2）による解像度補正と、リサイズ時の canvas 再構築
  - 距離によるフェード（地平線付近・手前端でフェードアウトし描画負荷も軽減）
  - `prefers-reduced-motion` 指定時はアニメーションを止め、静止波形のみ表示
  - タブ非表示時は描画停止（`visibilitychange` で復帰時に再開）
  - 新規依存ライブラリなし（Canvas 2D + 原生 JS の `requestAnimationFrame` ループ）

## 作業記録

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
  3. 旧 GitHub URL は GitHub の自動リダイレクト（301）で新 URL に移動すること、新 URL は正常（200）であることを確認
- **留意事項**:
  - `scripts/deploy.mjs` は publish ワークツリーのパスをフォルダ名から導出するため、改名後は新しいワークツリー `www.cresome.tech-publish-wt` が作成・使用される（旧 `cresome-hp-publish-wt` は参照されない）
  - 旧 URL（`cresome.tech-HP/...`）は自動リダイレクトにより開けるが、今後は新 URL を使用すること

### 2026-08-24: `npm run dev` クラッシュの修正（vite.config.js に `process.chdir(root)` を追加）

- **症状**: `npm run dev` 起動直後に `TypeError: Cannot read properties of undefined (reading 'imports')`（Vite の依存関係最適化処理）でサーバーがクラッシュする、またはサイレントに依存最適化が死に `node_modules/.vite` が生成されない状態になる
- **原因**: ワークスペースがジョクション経由（`d:\cresome.tech` → `D:\SynologyDrive\...`）で開かれている環境では、esbuild の metafile パス（解決後 = realpath の cwd 基準の相対パス）と、Vite の依存関係最適化が元の（ジョクション）cwd 基準で計算する期待パスが一致せず、照合に失敗する
- **修正**: `vite.config.js` で `process.chdir(root)` を呼び、`process.cwd()` を `root`（realpath）と揃える（既存の root 固定設定を補完する追加）
- **検証（実施済み）**: 依存関係最適化が完了し `node_modules/.vite/deps` が生成される、`/` と `/src/main.jsx` が 200 を返し最適化済み deps への参照になる、`npm run build` も引き続き成功すること

### 2026-08-27: 背景エフェクトを実装し 3D 点波形へ刷新（WaveBackground）

- **実装** (`bf9459b`): `src/components/WaveBackground.jsx` を新規作成し `App.jsx` でマウント。Canvas 2D + 原生 JS（`requestAnimationFrame` ループ）で背景エフェクトを描画（新規依存ライブラリなし）。
- **刷新** (`e7f9f33`): 当初案の「3 本の薄い波線（線引き描画）」から、透視投影した 3D の点グリッド波形へ置き換え（サイン波 4 種合成・点は薄い灰色で山ほど濃く大きく／谷は淡く・距離によるフェード・グロー表現は `shadowBlur` ではなく 2 層描画で代用）。
- **配置**: `.wave-bg`（`position: fixed; inset: 0; z-index: 0; pointer-events: none`）でコンテンツより奥に表示。既存 UI への変更は不要。

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

### 2026-08-27: README 整理（「追加機能予定: 背景の波線エフェクト」セクションを実装状況に整合）

- **背景**: README の「追加機能予定: 背景の波線エフェクト」セクションが当初の計画（「薄い灰色の線 3 本・線引き描画」）のまま実装済みの 3D 点波形エフェクト（`bf9459b` / `e7f9f33`）と乖離していた。また波エフェクトの実装作業自体に作業記録のエントリがなかった
- **変更内容** (`d6c7b37`):
  1. 該当セクションを「背景エフェクト」に変更し、実装内容（`WaveBackground.jsx`・透視投影の点グリッド・サイン波 4 種合成・2 層描画のグロー・距離フェード等）と整合
  2. 「サイト構成」に背景エフェクトの項目を追加
  3. 波エフェクトの実装・刷新の作業記録エントリを追加
- **検証（実施済み）**: README 全体を読み返し整合性を確認。README のみの変更（ソース変更なし）のため再ビルド・再デプロイは不要

### 2026-08-27: `.gitignore` に `.clinerules/01-always.md` を追加

- **変更** (`311eb5d`): `.clinerules/01-always.md`（AI ツール用の編集ルールファイル）を Git の管理対象外とし `.gitignore` に追加
- **検証（実施済み）**: `git check-ignore -v` で `.gitignore` の該当ルールにヒットすること、および `git status` で未追跡ファイルから消えたことを確認

### 2026-08-31: 背景エフェクトに Space Wars! 風モードを追加し、右メニュー下部に切替 UI を設置

- **背景**: 既存の 3D 点波形背景に加え、Atari 『Asteroids』（Space Wars! 系譜）風のベクター線画面を第 2 の背景として追加する要望。切替手段は右メニューの下部に配置する指定。
- **実装**:
  1. `src/components/SpaceWarsBackground.jsx` を新規作成。Canvas 2D で背景透明のまま、薄ネイビー（`rgba(31,42,84,α)`）の 1px ベクター線で、ブラックホール（脈動する円）・漂う星点・三角形の自機（W: 前進 / S: 後進 / A・D: 回転 / スペース: 弾発射。宇宙空間のため摩擦なしで加速した速度は維持、速度上限のみソフトキャップ）・C 字開口部の円形敵機（AI 漂遊・稀に発射）・弾丸（短い線）を描画。キーボードリスナーはアンマウント時に解除（他の背景モードでは無効）。`WaveBackground.jsx` と同じ骨格（DPR 補正・リサイズ再構築・`prefers-reduced-motion` 時は静止描画・タブ非表示時停止）
  2. `src/components/BgSwitcher.jsx` を新規作成。「背景: 波 / スペースウォー」の 2 ボタン切替 UI
  3. `App.jsx` に `bgMode` state を追加し `localStorage`（`cresome.bgMode`）に永続化。モードに応じた背景コンポーネントを条件分岐でマウント
  4. `Sidebar.jsx` / `Drawer.jsx`（モバイル）のフッター直前に `BgSwitcher` を配置（デスクトップ・モバイル両対応）
  5. `src/index.css`: `.wave-bg` と `.sw-bg` を同一スタイルで統合、`bg-switcher` 関連スタイル追加。切替 UI を最下部に固定するため `.sidebar-foot` / `.drawer-foot` の `margin-top: auto` を `14px` に変更
  6. 実機映像を参照した挙動修正: 自機は三角形の二本の足を翼として常時表示。W（前進加速）は後方中央のメインスラスターから霧が断続噴出するジェット、S（後退減速）は機体前方の両舷スラスターから小さな霧が断続噴出。ブラックホールはアスタリスク（*）型線画に変更し、薄い広い重力圏の円を持たせて距離の二乗に反比例した重力（近づくほど強く、圏内では自機・敵機を引き寄せ）を実装
  7. 敵機形状を実機に合わせ修正: 前面を V 字開口（先端が機首）の円弧 + 後方を外側に張り出したテールフィン 2 本のクルーザー型に変更（テールフィンの向きを実機に合わせて後方へ修正・弾の発射開始位置も機首から突き出す位置にずらし）
  8. 当たり判定・爆発・再出現を実装: ビームが自機・敵機に当たると被弾船が爆発、ブラックホール本体接触・自機 vs 敵機の衝突も爆発（ブラックホールは弾を吸収）する。爆発は船を構成する各直線が慣性を継いで中心から回転しながら放射状に散り、0.9 秒でフェードアウト。爆発後は重力圏外のランダム位置にワープ演出（放射ライン＋拡大リング＋フェードイン）で再出現し、進行方向に初速度を付与（初期表示時もワープ演出を実施）
  9. 敵機を慣性ベースの挙動に変更: 速度（velX/velY）を持たせ摩擦なしの慣性移動とし、低頻度（数秒おき）で旋回方向と前後スラスター噴射（加速・減速）を決定。減速スラスターは機首前方から噴射表示。重力は速度に加算されるよう変更し、速度は ENEMY_MAX_SPEED（70px/s）でソフトキャップ
  10. 誘導ミサイルを実装: 敵機が 4 発（片舷 2 発）を内側→外側・左→右の順で 3 秒かけて装填し（スロットがフェードイン表示）、0.5 秒間隔で順次発射。ミサイルも慣性で飛行（左右旋回と前方噴射のみ・旋回速度上限 0.85rad/s で誘導性は悪め・速度上限 210px/s）、航行距離 1100px で自爆。ブラックホールには吸収され、自機に命中すると爆発。最後のミサイル消滅から 10 秒後に再装填（kill() を explode()/kill() に分離しミサイルの爆発でも線分散開演出を共用）
  11. 微調整: 敵機の噴射エフェクトを太く暗くし表示されやすく修正。自機・敵機の加速度と速度上限を 70% に引き下げ（自機 ACCEL 140→98・MAX_SPEED 480→336、敵機 ACCEL 30→21・BRAKE 24→17・MAX_SPEED 70→49、出現初速度 220→154px/s）し全体的な動きを遅くした。ブラックホールを画面中央（0.5/0.5）へ移動
  12. 誘導ミサイルの微調整: スロットをテールフィン少し外側に等間隔配置（プレイヤー側から装填状態が分かる位置）に移動。発射間隔を 0.5→1 秒に倍化。発射直後の速度・方向を敵船と同じに変更。安全信管（発射後 2 秒間は当たり判定なし）を追加。初期配置時・再出現（リスポーン）時に装填開始を 5 秒待たせるクールダウンを追加。さらに両船の最大速度を 30% 引き下げ（MAX_SPEED 336→235、ENEMY_MAX_SPEED 49→34）
  13. 誘導ミサイルの微調整（2回目）: スロットをテールフィンより後方・船体から離した位置（x=-28/-36、y=±14）に移動しプレイヤー側からより分かりやすくした。航続距離を 3 倍（MISSILE_RANGE 1100→3300px）に延長。発射条件を追加: 自機が敵機の前方 180° 範囲内（±90°）にいるときのみ発射し、自機が後方にある場合は発射を保留
  14. 誘導ミサイルの微調整（3回目）: スロットを両舷からさらに離した位置（y=±14）へ移動。発射条件を「前方 180°」から「予測射線（自機の到達予測位置＝距離÷ミサイル最大速度のリード角込み）が機首方向 ±45°（MISSILE_FIRE_CONE）内」に変更。自機の初期・リスポーン時の初速を低めに設定（REAPPEAR_SPEED 154→100px/s）
  15. 誘導ミサイルを横並び配置へ変更: スロットを船体の幅方向（左右舷方向）に横並びで配置（x=-30 固定、y=±10/±18・片舷 2 発ずつ）。敵船のロケット噴射エフェクト（前方・後方スラスター）を船体から少し離して浮いたように表示
  16. 誘導ミサイルの配置をスクリーンショット基準で確定: 幅方向（船体に垂直）の並べ方を維持しつつペアを舷外へオフセットし片舷 2 発ずつ 2 ペアを明確に離した配置に（x=-30、y=±13/±21）
  17. ミサイルの誘導目標を「自機の現在位置」から「着弾予測位置」に変更: 射線予測（自機の速度 velX/velY で、ミサイルの推定到達時間 d÷MISSILE_MAX_SPEED 分の移動を予測）をイテレーション 2 回で推定し、その予測位置へ旋回誘導
  18. レーザー・ミサイルの挙動変更: 敵機レーザーを照準予測（自機の到達予測位置・イテレーション 2 回）を狙う 4 連射に変更し、斉射後 2 秒のクールタイムで再斉射。自機の発射クールタイムを撤去（同時弾数のみ制限）。同時弾数上限を 4→8、レーザーの寿命を 0.9→1.2 秒（射程約 468→624px）に延伸。誘導ミサイルは画面外（WRAP マージン外）に出た場合も自爆し、再装填サイクルに移行
  19. 敵機レーザーを機首 0° 専用に変更: 弾の発射方向を照準角から機首方向（正面真直前）に固定し、発射扇を ±45°→±約 14°（LASER_FIRE_CONE 0.25rad）に狭縮。照準の射線予測をあいまい化（イテレーション 2 回の正確予測から、リード率 0.6 の 1 回リード + ±40px ランダム誤差に変更）し、当たりすぎた挙動を緩和
  20. ミサイルの当たり判定拡張: 自機が破壊されたときは航行中のミサイルは全て自爆。安全信管（2 秒）解除後は、敵機にたまたま当たった場合も当たり判定として敵機が被弾爆発
  21. エフェクト調整: 敵機の前方加速エフェクトを後方中央の単一ジェット（自機と同一の 3 段霧噴出）に変更。両機に旋回時 RCS 小噴射を追加（右回転: 先頭左側・後部右側 / 左回転: 先頭右側・後部左側）。メニューサイドバーの背景モード名を「スペースウォー」から「宇宙船」に変更（BgSwitcher.jsx）
- **検証（実施済み）**: `npm run build` 成功（vite build、42 modules transformed、エラーなし）
- **コミットハッシュ**: `3b15e46`
