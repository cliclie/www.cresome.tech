import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { realpathSync } from 'node:fs';
import { resolve } from 'node:path';

/**
 * GitHub Pages (https://www.cresome.tech) 用のビルド構成
 *
 * - ソーステンプレートはリポジトリ直下の index.html（dev server でもそのまま利用）
 * - npm run build は dist/ へ出力（emptyOutDir: true は専用ディレクトリなので安全）
 * - npm run deploy が dist/ の成果物を publish ブランチへコピーして
 *   GitHub Pages として公開する（scripts/deploy.mjs）。
 */

// ワークスペースのパスがジョクション（シンボリックリンク）を介している場合、
// Vite の root（未解決パス）とモジュールID（realpath）が食い違って
// 「fileName must be neither absolute nor relative paths」エラーで
// ビルドが失敗するため、root を realpath に固定する。
const root = realpathSync(resolve(process.cwd()));

// 同じジョクション環境では Vite 5（esbuild 依存最適化）の `npm run dev` が
// 「TypeError: Cannot read properties of undefined (reading 'imports')」でクラッシュした。
// esbuild の metafile パスは解決後（realpath）の cwd 基準の相対パスになる一方、
// Vite の依存最適化は元の（ジョクション）cwd 基準で期待パスを計算するため照合に失敗する。
// process.chdir(root) で process.cwd() を root（realpath）と揃えて回避していた。
// Vite 8 は依存最適化が Rolldown ベースになり、このクラッシュは再現しない
// （node_modules/.vite/deps が生成され / と /src/main.jsx が 200 になることを確認済み）。
// とはいえ cwd と root を揃える処理自体は無害で、パス正規化の安全策としても効くため維持する
// （削除した際の挙動は未検証）。
process.chdir(root);

export default defineConfig({
  root,
  base: './',
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    chunkSizeWarningLimit: 900,
  },
});