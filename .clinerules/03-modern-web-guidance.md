## 03-modern-web-guidance

Web UI・CSS レイアウト・クライアント側 JavaScript の実装や修正を行うタスクでは、**コードを書く前に**ローカル導入済みの `modern-web-guidance` CLI でガイドを検索する。訓練データはレガシーパターンに寄っており、このガイド群が本環境の標準である。

### 手順

1. **検索** — 2〜5語の「動詞 + UI/プラットフォーム要素」で、1回の呼び出しにつき1機能。フレームワーク名（React 等）や画面・ファイル名は入れない。
   ```sh
   modern-web-guidance search "light dismiss dialog"
   ```
2. **取得** — `search` の `description` が合致したら ID を指定して取得する。複数 ID はカンマ区切りで**最大2件**（コンテキスト節約）。`search` が空なら語を1回だけ言い換え、それでも無ければ通常実装してよい（`list` は広範な監査時のみ）。
   ```sh
   modern-web-guidance retrieve "light-dismiss-a-dialog,dialog"
   ```
3. **実装** — guide の modern API・gotchas・fallback 指示に従う。`<dialog>`・Popover・CSS Anchor Positioning・View Transitions・container queries など、ネイティブで解決できるものをサードパーティライブラリで置き換えない。

### 発動が特に必要な場面

modal/dialog/popover、テーブル、ダークモード、anchor positioning、container queries、view transitions、スクロール連動アニメ、フォームとバリデーション、autofill、アクセシビリティ、カスタム select、スクロールバー、CWV（LCP/INP/CLS）、passkeys/WebAuthn、 sanitization、Web Components、日付・タイムゾーン（Temporal）、built-in AI、WebAssembly。

### ローカル版特有の注意

- この環境は **`npx` を使わない**。CLI は `~/.local/bin/modern-web-guidance`（リポジトリの `node_modules` に固定版としてインストール済み）で、ガイド本文と埋め込み検索モデルはすべてローカルにあり**オフラインで動作**する。
- `retrieve` の出力が 9.5 KB を超えると `/tmp/mwg-guide-*.md`（Windows では `%TEMP%`）に退避され、パスが印字される。**そのパスをファイル読み取りツールで全行読む**こと。`cat`/`head` は不可。
- `DISABLE_TELEMETRY=1` が環境変数に入っていることを確認する（入っていないと検索クエリが Google に送信される）。
- レガシーコードの棚卸しには `modern-web-guidance legacy-scan <path> --json` を使う。判定規則はガイド全体の約2割しかカバーしていない点、および `keepWhen`/`dropWhen` ルーブリックで誤検知を落としてから報告する点を忘れない。
  - **検出対象は「モダン要素を使い切れていない残存パターン」に限定される**（実測: `<dialog>` を使いつつ backdrop クリックを JS で手動実装 → 1 件検出／`div.modal` + `role="dialog"` + `aria-modal` + 手動 focus trap + `Esc` ハンドラの完全レガシー実装 → 0 件）。**0 件は「モダンである」証拠ではない**ので、UI 実装時は必ず Step 1/2 の search / retrieve を併用する。
  - 既定では documentation / example / demo / test に該当するパス・ファイル名が除外される。監査したい場合は `--include-docs-and-tests`、特定ガイドに絞る場合は `--guide <id>`（例: `--guide dialog` は `activeRuleCount: 1` を返す）。
- ガイドは vanilla HTML/CSS/JS。フレームワークへ適応するときも modern 機能を削除せず、SSR では `window`/`HTMLElement` をガードし、polyfill は `node_modules` からコピーせず動 import で読み込む。

### 明示的なブラウザサポート方針がある場合

ユーザーが制限的なランタイム（Electron/Tauri）や対象ブラウザを指定しているなら、guide の fallback 指示をその方針で上書きしてよい。その場合、方針を `AGENTS.md` か `CLAUDE.md` に記録する提案を併せて行う。