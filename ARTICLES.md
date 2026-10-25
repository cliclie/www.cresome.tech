# 記事セクション（Articles）

右サイドメニューの「記事」から入る、測定記録・技術メモの一覧機能です。
実装は `src/pages/Articles.jsx`（ページ）と `src/data/articles/index.js`（記事登録）、本文は `src/pages/articles/` 配下に置きます。

## 画面構成

| 領域 | 内容 |
|---|---|
| 右サイドメニュー | 「トップ」〜「会社概要」より間隔を広げた「記事」（`.nav-group--spaced`）、直下に記事の最新更新日（`.nav-sub` = `LATEST_ARTICLE_DATE`）。デスクトップ（`Sidebar.jsx`）とモバイルのドロワー（`Drawer.jsx`）で共通描画 |
| 左ペイン | 記事一覧（更新日・タイトル・要約）。クリックで右ペインを切り替え |
| 右ペイン | 選択中記事の本文 |

- 2 列レイアウトは `.articles-layout`（`250px + minmax(0,1fr)`）。横幅 1080px 未満では縦積みに変わります。
- 記事ページだけ `.page-wrap--wide`（`max-width: none`）を当て、本文幅の上限を撤廃しています（ベンチマーク一覧をブラウザ幅に追従させるため）。文章部は `.article-body .lead` / `.article-meta` / `.article-note` に `max-width: 900px` を残し可読性を確保。
- **スクロールフェードインの制約**: `App.jsx` の `.reveal` 走査は初回マウント時のみです。記事切り替えで再生成される領域で `.reveal` を使うと `opacity: 0` のまま固まるため、`.article-body .reveal { opacity: 1; transform: none }` で常時表示にしています。

## 記事の追加手順

1. 本文コンポーネントを `src/pages/articles/` に作成する（例: `LocalLlmBench.jsx`）
2. `src/data/articles/index.js` の `ARTICLES` に登録する
   ```js
   { id: 'unique-id', title: 'タイトル', date: 'YYYY-MM-DD', summary: '一覧に出す一行', Body: Component }
   ```
   `date` が「記事」直下と一覧ペインに表示される更新日付です（新しい順に並ぶ）。
3. メニュー側の変更は不要（`App.jsx` の `PAGES` に `articles` を登録済み）

## データ生成（`scripts/fetch-llm-bench.mjs`）

```
npm run bench:fetch
```

自社内の環境設定リポジトリ 3 台の README を解析し、`src/data/articles/llm-bench.json` を生成します。

| 機種 | ソース | 参照する表 |
|---|---|---|
| AI TOP ATOM（GB10・統合メモリ128GB） | `http://192.168.0.101:3000/gitadmin/DGXSparkLLMEnv` | 「稼働 LLM モデル諸元・性能一覧 → 1. サマリー」 |
| whitebearatom2（R9700・VRAM32GB / RAM32GB） | `http://192.168.0.101:3000/gitadmin/Atom2LLM` | 「生成モデル」（decode / prefill / VRAM は「実行状況」列から抽出） |
| Whitebear2026（RTX 5090・WSL2 / RAM86GB割当） | `https://github.com/cliclie/Whitebear2026-WSL2` | 「稼働 LLM モデル諸元・性能一覧 → 1. サマリー」 |

- Gitea 2 台は匿名 HTTP（`/raw/main/README.md`）。GitHub はプライベートなので **SSH（`git@github.com`）で shallow clone** して読みます（鍵は `~/.ssh/id_ed25519.pub` を GitHub へ登録済み。`ssh -T git@github.com` が `Hi cliclie!` を返すこと）。
- オプション: `--wb-dir <clone済みパス>`（clone を省略）/ `--skip-github` / `--out <path>`
- **ビルド時スナップショット方式**: 公開サイトから社内 IP を実行時に叩きません。生成 JSON をコミットし、バンドルに焼き込みます。
- 失敗時: 表が見つからない・0 行なら非ゼロ終了し、既存 JSON を保持します（README 側の表構成変更の検知）。
- `main()` は直接実行時のみ走り、パース関数は export しているので単体で検証できます。
- 記事の遅延読み込み: JSON は `src/data/articles/useBench.js` の動的 `import()` で取得します（別チャンク ≈55 kB / gzip 10 kB。静的 import だと three.js 由来のメインバンドルに載る）。

### 出典 URL を載せるかどうか

`fetch-llm-bench.mjs` 冒頭の **`PUBLISH_SOURCE_URL`**（既定 `false`）で制御します。`false` のあいだは生成 JSON・画面のいずれにも社内アドレス（`192.168.0.101`）やリポジトリ URL を含めません。記事に出典リンクを出す場合は `true` にして `npm run bench:fetch` を再実行すると、一覧下の出典欄と詳細ポップアップに自動で反映されます。

## ベンチマーク一覧（記事1）

`src/components/articles/BenchTable.jsx` / `src/components/articles/BenchDetailModal.jsx`

### 列（全15・すべてソート可能）
順位 / モデル名（2行目に HuggingFace の `提供者/モデル名` とリンク）/ 重み名 / decode (T/s) / prefill (T/s) / コンテキスト長 / 使用メモリ (GB) / 機種名 / OS / CPU / 搭載RAM / 推論エンジン / エンジン版 / **計測日** / **備考**

- **固定表示**: ヘッダー行（`position: sticky; top: 0`）と先頭2列（順位 `left: 0`、モデル名 `left: 58px`）。交差部はヘッダーが前（`z-index: 5`）。ヘッダー地色は不透明（`#f3f4f7`）にして、スクロールで下を通過する行が透けないようにしています。
- **幅の追従**: `.bench-table` は `width: 100%` + `min-width: 1591px`。`min-width: max-content` にすると列の折返しが無視され、広い画面でも必要幅（約 2.3k px）で固定されたままになるため数値で下限を決めています。テキスト系列は `white-space: normal` + `word-break: keep-all`（日本語を1文字ずつ割らない）＋ `overflow-wrap: anywhere`（長い英数字語は切る）。
- **ソート**: ヘッダー押下で列切替（`first` が初回方向。性能値は降順、名称は昇順、計測日は新しい順）、再押下で反転。`aria-sort` を付与。値の無い行（未計測・未記載）は昇降順を問わず末尾。
- **行クリック**で詳細ポップアップ（`role="dialog"`、閉じるボタンへフォーカス移動、`Esc` / 背景クリックで閉じる）。原文表記は「出典（環境設定リポジトリの原文表記）」として折りたたみ表示。

### 数値の代表値ルール（抽出の勘所）
- `<br>` で区切られた**第1ブロック＝現行値**。旧エンジン値（`0.1.40.3: 120.7〜166.2` 等）を順位に使うのを防ぎます
- 「平均 X」があれば X、無ければ第1ブロック内の最大値
- `同上` は直前行を継承。範囲（`〜`）は上限。`14.2 + 1.4GB` は合計。MiB/GiB 併記は括弧内を優先（`（+163MB）` などの差分表記は除く）。`（空き …）` は捨てる
- **順位**は decode 代表値の降順で採番（`null` は末尾）

### 計測日と備考の運用
- `measuredAt` は README の「測定日: …」注記から `extractMeasuredDates` で自動抽出します。
  - 名前は**完全一致**（前後が `[A-Za-z0-9_]` でない）だけを対象にします（`qwen38` が `qwen38swift…` に部分一致して別行の日付を拾う誤りの防止）
  - 「全環境 / 全モード / 一括切替・一括計測」を含む注記は、行頭の測定日を未確定の全行へ展開（AI TOP ATOM の 17 行 = 2026-09-24、`qwen38flashnextexl3_3p05` のみ 2026-09-30）
  - 同じ名前の再計測が複数書かれると**後勝ち**（`strataQ3` = 2026-10-25）
  - whitebearatom2 は「測定日」注記が無いため、表ヘッダー「実行状況（2026-10-17 時点）」を `headerDate` で全行に適用
- `note`（備考）は自動生成しません（既定は空欄）。
- **手動追記は再生成でも消えません**: `fetch-llm-bench.mjs` が既存 JSON を読み、`note` は常時、`measuredAt` は自動抽出できなかった行について既存値を維持します。`Whitebear2026` の `strata15` / `strataS4` / `strataU4` / `llmjp` / `qwen9` / `exl` の計測日は、README に個別記載が無いため JSON を直接編集して補ってください。

## 既知の制限

- HuggingFace ID は README・起動スクリプトに実在する表記のみ登録しています（`MODEL_IDS`）。原文に提供者名が無い行（`tabby` / `exl` / `Muse` / `qwen38flashnextexl3*` / `glm53flash*`）は `null` のまま一覧に「—」を出します（推測で埋めない）。
- AI TOP ATOM の「使用メモリ」は README の定義どおり**アイドル時の MemAvailable（空き）**で、値が大きいほど余裕があります（機種ごとに `.bench-mem-kind` と記事下部の凡例で明示）。
- 数値は各 README の実測集計値です。環境状態が違う値の絶対比較はできないため、一覧・記事本文に注記を置いています。
- README 側の表ヘッダー名（`ランチャー` / `decode` / `prefill` / `切替コマンド` 等）を変えると抽出に失敗します（その場合は非ゼロ終了し、既存 JSON はそのまま残ります）。

## 検証履歴

### 2026-10-25 初出
- ソース疎通: Gitea 2 台は匿名 HTTP で README / raw / API 取得可。GitHub は HTTPS 404 → SSH 鍵登録後 `Hi cliclie!`、shallow clone で README 取得可（37 環境）
- puppeteer（`vite preview`）: メニュー間隔 `NAV_TOPS = [167, 215, 264, 312, 385]`（通常 49px に対し記事は 73px）、`nav-sub = 2026-10-25`、`clientWidth/scrollWidth = 148/148`（折返し・切れなし）
- レイアウト 1440px: `page-wrap 1128px / 一覧 250px / 本文 844px`。390px では一覧 342px が上、本文が下
- 固定: 横 700px・縦 240px スクロール後も `pinModelLeft = pinCellLeft = 399`
- ソート: prefill 降順で先頭 `5,916`、昇順で先頭 `292.4` かつ末尾 4 行「—」、順位列 `1,2,3`
- dist 内に `192.168` は 0 件。`npm run audit` は 0 vulnerabilities

### 2026-10-25 追補（公開前確認での指摘）
- 搭載RAM: whitebearatom2 = 32GB、Whitebear2026 = 86GB（WSL 割当）に確定
- 一覧をブラウザ幅に追従（`max-width: none` + `width: 100%` / `min-width: 1591px`）。実測 1440→1591/842、1920→1591/1322、2560→**1962/1962（横スクロール 0）**
- 計測日・備考の 2 列を追加（37 行で計測日あり 31 / 空欄 6、備考は全行空欄）。計測日降順は `2026-10-25 → 2026-10-17 …`