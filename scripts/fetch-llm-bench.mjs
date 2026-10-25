#!/usr/bin/env node
/**
 * ローカルLLMベンチマーク データ生成スクリプト
 *
 * データソース（自社内の環境設定リポジトリ 3台分）:
 *   1. AI TOP ATOM（WhitebearATOM1 / NVIDIA GB10・統合メモリ128GB）
 *      Gitea  http://192.168.0.101:3000/gitadmin/DGXSparkLLMEnv  README.md
 *      →「### 1. サマリー（推論エンジン × モデル × 性能）」表
 *   2. whitebearatom2（i9-12900KF / AMD Radeon AI PRO R9700・VRAM 32GB）
 *      Gitea  http://192.168.0.101:3000/gitadmin/Atom2LLM        README.md
 *      →「## 生成モデル」表（decode / prefill / VRAM は「実行状況」列から抽出）
 *   3. Whitebear2026（Core Ultra 7 270K Plus / RTX 5090・VRAM 32GB / WSL2）
 *      GitHub https://github.com/cliclie/Whitebear2026-WSL2      README.md（プライベート）
 *      →「### 1. サマリー（推論エンジン × モデル × 性能）」表
 *      ※ プライベートのため HTTPS では取得不可。SSH（git@github.com）で shallow clone する。
 *         認証鍵が用意できない環境では `--wb-dir <clone済みパス>` で既存クローンを使う。
 *
 * 出力: src/data/articles/llm-bench.json（記事に同梱する静的データ）
 *   - 公開サイトに社内 IP への実行時リクエストは発生させない（ビルド時スナップショット方式）
 *   - 数値はすべて原文（README）の実測値。抽出できないセルは null（表示は「—」）
 *
 * 使い方:
 *   node scripts/fetch-llm-bench.mjs
 *   node scripts/fetch-llm-bench.mjs --wb-dir C:\path\to\Whitebear2026-WSL2
 */

import { execFileSync } from 'node:child_process';
import { promises as fs, readFileSync, rmSync, existsSync, realpathSync } from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DEFAULT_OUT = path.join(ROOT, 'src', 'data', 'articles', 'llm-bench.json');

// ============================================================
// 出典 URL を記事（公開バンドル）に載せるかどうか
//   false: JSON・画面に出典 URL を含めない。Gitea 2台は社内 IP（192.168.0.101）のため、
//          公開サイトへ社内アドレスとリポジトリ名を漏らさない既定値。
//   true : 生成 JSON に sourceUrl を含め、記事本文と詳細ポップアップに出典リンクを出す。
// ============================================================
const PUBLISH_SOURCE_URL = false;

// ============================================================
// 機種メタ情報（性能表に載らない項目。各 README の冒頭記述のみを根拠にする）
// ============================================================
const MACHINES = [
  {
    key: 'atom1',
    machine: 'GIGABYTE AI TOP ATOM（WhitebearATOM1）',
    machineShort: 'AI TOP ATOM',
    os: 'Ubuntu 24.04',
    cpu: 'NVIDIA GB10',
    gpu: 'GB10（sm_121・ドライバ 580.178.04）',
    ram: '128GB（CPU/GPU 共有）',
    memoryKind: '統合メモリ',
    memoryNote:
      '起動後アイドル時の MemAvailable（ホスト 121.6GiB 中の空き）。値が大きいほど余裕がある＝消費が少ない',
    sourceKind: 'gitea',
    sourceUrl: 'http://192.168.0.101:3000/gitadmin/DGXSparkLLMEnv',
    rawUrl: 'http://192.168.0.101:3000/gitadmin/DGXSparkLLMEnv/raw/main/README.md',
    table: 'summary',
  },
  {
    key: 'atom2',
    machine: 'whitebearatom2（自作 / Radeon AI PRO R9700）',
    machineShort: 'whitebearatom2',
    os: 'Ubuntu 26.04',
    cpu: 'Intel Core i9-12900KF',
    gpu: 'AMD Radeon AI PRO R9700 32GB（gfx1201 / RDNA4）',
    ram: '32GB',
    memoryKind: 'VRAM',
    memoryNote: 'ディスクリート GPU の実測 VRAM（32.6GB 中・sysfs サンプリング）',
    sourceKind: 'gitea',
    sourceUrl: 'http://192.168.0.101:3000/gitadmin/Atom2LLM',
    rawUrl: 'http://192.168.0.101:3000/gitadmin/Atom2LLM/raw/main/README.md',
    table: 'atom2',
  },
  {
    key: 'wb2026',
    machine: 'Whitebear2026（WSL2 / RTX 5090）',
    machineShort: 'Whitebear2026',
    os: 'WSL2 Ubuntu 26.04（Windows ホスト）',
    cpu: 'Intel Core Ultra 7 270K Plus',
    gpu: 'NVIDIA RTX 5090 32GB（sm_120・CUDA 13.1 / ドライバ 615.71）',
    ram: '86GB（WSL 割当）',
    memoryKind: 'VRAM',
    memoryNote: 'アイドル時の VRAM 実測（32GB 中）。Strata 系は RAM に Expert を page-lock する',
    sourceKind: 'github',
    sourceUrl: 'https://github.com/cliclie/Whitebear2026-WSL2',
    cloneUrl: 'git@github.com:cliclie/Whitebear2026-WSL2.git',
    table: 'summary',
  },
];
// HuggingFace の「提供者/モデル名」。README 本文・起動スクリプト・compose に実在する ID のみ。
// 判明しないものは null（一覧では「—」とし、詳細ポップアップに原文表記を残す）。
const MODEL_IDS = {
  // ---- AI TOP ATOM（DGXSparkLLMEnv） ----
  'atom1:nemo': 'nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-NVFP4',
  'atom1:qwen38': 'Qwen/Qwen3.8-27B',
  'atom1:qwen38bf16': 'Qwen/Qwen3.8-27B',
  'atom1:qwen38nvfp4': 'nvidia/Qwen3.8-27B-NVFP4',
  'atom1:qwen38sglang': 'RadixArk/Qwen3.8-27B-NVFP4',
  'atom1:qwen38sglangeagle': 'RadixArk/Qwen3.8-27B-NVFP4',
  'atom1:qwen38sglangdflash': 'RadixArk/Qwen3.8-27B-NVFP4',
  'atom1:qwen38sglangdspark': 'RadixArk/Qwen3.8-27B-DSpark',
  'atom1:qwen38flashnext_nvfp4': 'nvidia/Qwen3.8-Flash-Next-NVFP4',
  'atom1:qwen38swift': 'ukisai/Swift-Qwen3.8-27b',
  'atom1:qwen38swift_dflash': 'ukisai/Swift-Qwen3.8-27b',
  'atom1:mimo9b': 'prithivMLmods/MiMo-V2.6-Distill-Qwen-9B-FP8',
  // ---- whitebearatom2（Atom2LLM） ----
  'atom2:qwen38radiance': 'amd/Qwen3.8-27B-Quark-AWQ-MXFP4',
  'atom2:qwen38sglangrocm': 'amd/Qwen3.8-27B-Quark-AWQ-MXFP4',
  'atom2:qwen38gguf': 'unsloth/Qwen3.8-27B-GGUF',
  'atom2:gptoss': 'openai/gpt-oss-20b',
  'atom2:magn': 'unsloth/Qwen3.8-27B-GGUF',
  // ---- Whitebear2026（Whitebear2026-WSL2） ----
  'wb2026:swift40': 'erlidev/Swift-Qwen3.8-27B-EXL3',
  'wb2026:swift35': 'erlidev/Swift-Qwen3.8-27B-EXL3',
  'wb2026:swiftqwen38': 'ukisai/Swift-Qwen3.8-27B-NVFP4',
  'wb2026:mimo': 'prithivMLmods/MiMo-V2.6-Distill-Qwen-9B-FP8',
  'wb2026:bonsai': 'PrismML-Eng/Bonsai-demo',
  'wb2026:llmjp': 'llm-jp/llm-jp-4.1-33b-thinking',
  'wb2026:qwen9': 'TheMelonGod/Qwen3.5-9B-exl3',
  'wb2026:strata15': 'ukisai/Swift-1.5-Qwen3.8-Flash-Next-GSQ-RCO-IQ2_XS',
  'wb2026:strataS4': 'nitinpanj/Swift-Qwen3.8-Flash-Next-Q4_0-Q8out-v3-GGUF',
  'wb2026:strataU4': 'unsloth/Qwen3.8-Flash-Next-GGUF',
  'wb2026:strataQ3': 'ukisai/Swift-1.5-Qwen3.8-Flash-Next-GSQ-RCO-GGUF',
  'wb2026:strataC1': 'ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-Coder-GGUF',
};

// 推論エンジン名の候補（複合表記は parseEngine で寄せる）
const ENGINE_NAMES = [
  'vLLM-Radiance',
  'TensorRT-LLM',
  'ExLlamaV3',
  'exllamav3',
  'SGLang',
  'llama.cpp',
  'Magnitude',
  'Strata',
  'TabbyAPI',
  'vLLM',
];

// ============================================================
// Markdown 表・セル解析ユーティリティ
// ============================================================

/** 行をセルに分割する（先頭・末尾の `|` を除く） */
function splitRow(line) {
  return line
    .replace(/^\|/, '')
    .replace(/\|$/, '')
    .split('|')
    .map((s) => s.trim());
}

/** `|---|:--:|` などの区切り行か */
function isSeparatorRow(cells) {
  return (
    cells.length > 0 &&
    cells.every((c) => /^:?-{2,}:?$/.test(c.replace(/\s+/g, '')))
  );
}

/**
 * ヘッダーに全てのキー語を含む最初の表を抽出する
 * @returns {{header: string[], rows: string[][]}|null}
 */
function extractTable(md, headerKeys) {
  const lines = md.split(/\r?\n/);
  for (let i = 0; i < lines.length - 1; i++) {
    const head = lines[i].trim();
    if (!head.startsWith('|')) continue;
    if (!isSeparatorRow(splitRow(lines[i + 1].trim()))) continue;
    const cells = splitRow(head);
    if (!headerKeys.every((k) => cells.some((c) => c.includes(k)))) continue;
    const rows = [];
    for (let j = i + 2; j < lines.length; j++) {
      const t = lines[j].trim();
      if (!t.startsWith('|')) break;
      rows.push(splitRow(t));
    }
    return { header: cells, rows };
  }
  return null;
}

/** Markdown / HTML の装飾を取り除いて可読な平文にする */
function stripMd(text) {
  return String(text ?? '')
    .replace(/<br\s*\/?>/gi, ' / ')
    .replace(/\*\*/g, '')
    .replace(/`/g, '')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/\s+/g, ' ')
    .trim();
}

/** `<br>` で区切られた「現行値」ブロック（＝最初のブロック） */
function firstBlock(text) {
  return String(text ?? '').split(/<br\s*\/?>/i)[0];
}

function toNum(raw) {
  const n = parseFloat(String(raw).replace(/,/g, ''));
  return Number.isFinite(n) ? n : null;
}

/** 範囲表記（A〜B / A~B）を上限に寄せる */
function collapseRange(text) {
  return String(text ?? '').replace(/([\d,.]+)\s*[〜~]\s*([\d,.]+)/g, '$2');
}

/** 全角・半角括弧の中身を除去する */
function dropParen(text) {
  return String(text ?? '')
    .replace(/（[^）]*）/g, ' ')
    .replace(/\([^)]*\)/g, ' ');
}

/** メモリ単位の GB 換算 */
const UNIT_TO_GB = [
  { re: /^gib$/i, k: 1.073741824 },
  { re: /^mib$/i, k: 0.001048576 },
  { re: /^tb$/i, k: 1000 },
  { re: /^gb$/i, k: 1 },
  { re: /^mb$/i, k: 0.001 },
];

/**
 * 「14.2 + 1.4GB」「30,720〜30,819 MiB 使用 / 1,368 MiB 空き」等から GB 換算値を作る
 *  1. `<br>` 第1ブロック（現行値）
 *  2. 「/」区切りの第1項（第2項以降は「空き」「使用時」などの別条件）
 *  3. 単位付き数値を合計（範囲は上限、`+` 連結は合計）
 * @returns {{value: number|null, unit: string}}
 */
/**
 * 「14.2 + 1.4GB」「25,861 MiB（24.5GiB・アイドル時）」「実 VRAM 23.1GB・空き 9.5GB」等から
 * GB 換算値を作る。
 *  mode='memory': `<br>` 第1ブロック → 「空き/free/残り」より前 → 「/」第1項。
 *      括弧内に単位付き数値がちょうど1件だけある場合はそれを優先（MiB と GiB の併記対策）
 *  mode='weight': 括弧を除去し、範囲は上限・`+` 連結は合計
 * @returns {{value: number|null, unit: string}}
 */
function sumUnits(text) {
  const re = /(\d[\d,]*(?:\.\d+)?)\s*(GiB|MiB|TB|GB|MB)\b/gi;
  let m;
  let total = 0;
  let hits = 0;
  while ((m = re.exec(text)) !== null) {
    const n = toNum(m[1]);
    const u = UNIT_TO_GB.find((x) => x.re.test(m[2]));
    if (n === null || !u) continue;
    total += n * u.k;
    hits++;
  }
  return hits === 0 ? null : Math.round(total * 100) / 100;
}

function countUnits(text) {
  return (String(text).match(/\d[\d,]*(?:\.\d+)?\s*(?:GiB|MiB|TB|GB|MB)\b/gi) || []).length;
}

/**
 * 重みサイズの合計（「14.2 + 1.4GB」→ 15.6GB）。
 * 単位が無い断片は、その断片が数値のみ（型番を含まない）場合に限って文全体の単位を適用する
 * ——「GGUF UD-Q4_K_XL」のような型番の数字を誤計上しないため。
 */
function sumWeighted(text) {
  const t = dropParen(text);
  // 「0.63GB」のように数字に直結した単位も拾えるよう、末尾境界だけにする
  const lastUnit = (t.match(/(GiB|MiB|TB|GB|MB)(?![A-Za-z])/gi) || []).pop();
  let total = 0;
  let hits = 0;
  for (const frag of t.split('+')) {
    const withUnit = sumUnits(collapseRange(frag));
    if (withUnit !== null) {
      total += withUnit;
      hits++;
      continue;
    }
    const bare = frag.trim();
    if (!lastUnit || !/^[\d,.]+$/.test(bare)) continue;
    const conv = UNIT_TO_GB.find((x) => x.re.test(lastUnit));
    const n = toNum(collapseRange(bare));
    if (conv && n !== null) {
      total += n * conv.k;
      hits++;
    }
  }
  return hits === 0 ? null : Math.round(total * 100) / 100;
}

function parseSize(text, mode = 'memory', label = '') {
  const plain = stripMd(text);
  if (!plain || /^[—\-–]/.test(plain)) return { value: null, unit: '' };
  if (/実測なし|未実施|非代表|設定のみ/.test(plain)) return { value: null, unit: '' };

  let scope = stripMd(firstBlock(text));
  if (label) {
    const at = scope.search(new RegExp(label, 'i'));
    if (at < 0) return { value: null, unit: '' };
    scope = scope.slice(at);
  }
  const slashFirst = scope.split(/\s*\/\s*/)[0] || '';
  const head =
    slashFirst
      .split(/[・;；]/)
      .filter((s) => s && !/空き|free|残り/.test(s))[0] || '';
  const pIdx = head.search(/[（(]/);
  const outer = (pIdx >= 0 ? head.slice(0, pIdx) : head).trim();
  const inner = pIdx >= 0 ? head.slice(pIdx) : '';

  if (mode === 'weight') {
    const v = sumWeighted(outer);
    return v === null ? { value: null, unit: '' } : { value: v, unit: 'GB' };
  }

  // 括弧内が単位付き1件のみ（MiB と GiB の併記）なら括弧内を優先する。
  // 「（+163MB）」のような差分表記は優先しない
  if (inner && countUnits(inner) === 1 && !/では|旧|以前/.test(inner) && !/[（(]\s*[+\-±]/.test(inner)) {
    const v = sumUnits(collapseRange(inner));
    if (v !== null) return { value: v, unit: 'GB' };
  }
  const direct = sumUnits(collapseRange(outer));
  if (direct !== null) return { value: direct, unit: 'GB' };

  // 「29,020 / 32,607 MiB」型: 単位は後続項に付くため、その単位を第1項の数値に適用する
  const unit = (scope.match(/(GiB|MiB|TB|GB|MB)(?![A-Za-z])/i) || [])[1];
  const num = (collapseRange(outer).match(/\d[\d,]*(?:\.\d+)?/) || [])[0];
  const conv = unit ? UNIT_TO_GB.find((x) => x.re.test(unit)) : null;
  if (num && conv) {
    return { value: Math.round(toNum(num) * conv.k * 100) / 100, unit: 'GB' };
  }
  return { value: null, unit: '' };
}

/**
 * decode / prefill の T/s 代表値。
 *  label 指定時（Atom2LLM のように1セルへ混在する場合）は label 直後の最初の値を使う。
 *  未指定時は「平均 X」があれば X、無ければ第1ブロック内の最大値（旧エンジン値の混入を防ぐ）。
 */
function parseRate(text, label = '') {
  const block = stripMd(firstBlock(text));
  if (!block) return null;
  if (label) {
    const re = new RegExp(label + '\\s*(?:平均\\s*)?(\\d[\\d,]*(?:\\.\\d+)?)(?:\\s*/\\s*\\d[\\d,]*(?:\\.\\d+)?)?\\s*T/s', 'i');
    const m = block.match(re);
    return m ? toNum(m[1]) : null;
  }
  if (/実測なし|未実施|非代表|設定参照/.test(block)) return null;
  const values = [];
  const re = /(\d[\d,]*(?:\.\d+)?)\s*T\/s/gi;
  let m;
  while ((m = re.exec(block)) !== null) {
    const n = toNum(m[1]);
    if (n !== null) {
      values.push({
        n,
        idx: m.index,
        tail: block.slice(m.index + m[0].length, m.index + m[0].length + 8),
      });
    }
  }
  if (values.length === 0) return null;
  for (const v of values) {
    const before = block.slice(Math.max(0, v.idx - 10), v.idx);
    if (/平均|加重平均/.test(before) || /平均/.test(v.tail)) return v.n;
  }
  return Math.max(...values.map((v) => v.n));
}

/** コンテキスト長（262,144 / 64K（softCapMaxTokens 65536） / 1,000,000 (YaRN) 等） */
function parseContext(text) {
  const block = stripMd(firstBlock(text));
  if (!block) return null;
  const big = block.match(/\d{1,3}(?:,\d{3})+|\d{5,}/);
  if (big) return toNum(big[0]);
  const k = block.match(/(\d+(?:\.\d+)?)\s*K(?![a-z])/i);
  if (k) return Math.round(toNum(k[1]) * 1024);
  const m = block.match(/(\d+(?:\.\d+)?)\s*M(?![a-z])/i);
  if (m) return Math.round(toNum(m[1]) * 1024 * 1024);
  return null;
}

/** 推論エンジン表記 → { engine, engineVersion } */
function parseEngine(text) {
  const plain = stripMd(text);
  if (!plain) return { engine: null, engineVersion: '' };
  const found = [];
  for (const name of ENGINE_NAMES) {
    const canon = name.toLowerCase() === 'exllamav3' ? 'ExLlamaV3' : name;
    const re = new RegExp(name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
    if (re.test(plain) && !found.includes(canon)) found.push(canon);
  }
  const labels = [];
  if (found.includes('ExLlamaV3') && found.includes('TabbyAPI')) {
    labels.push('TabbyAPI + ExLlamaV3');
  } else {
    if (found.includes('TabbyAPI')) labels.push('TabbyAPI');
    if (found.includes('ExLlamaV3')) labels.push('ExLlamaV3');
  }
  for (const name of ['vLLM-Radiance', 'TensorRT-LLM', 'SGLang', 'llama.cpp', 'Magnitude', 'Strata', 'vLLM']) {
    if (!found.includes(name) || labels.includes(name)) continue;
    // 「vLLM-Radiance 1.0.394（vLLM 0.30.0 …）」は同一エンジンの別表記なので vLLM を並べない
    if (name === 'vLLM' && found.includes('vLLM-Radiance')) continue;
    labels.push(name);
  }
  const engine = labels.length ? labels.join(' + ') : plain;

  const primary = [...found].sort((a, b) => b.length - a.length)[0] || '';
  const esc = primary.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const at = esc ? plain.search(new RegExp(esc, 'i')) : -1;
  const near = at >= 0 ? plain.slice(at, at + primary.length + 40) : plain;
  // イメージパス（ghcr.io/... 等）や括弧内の注記をバージョン候補から除外する
  const clean = near.replace(/[A-Za-z0-9._-]+\/[A-Za-z0-9._/:@-]+/g, ' ');
  const verRe =
    /(dev-[A-Za-z0-9][A-Za-z0-9-]*|v?\d+\.\d+(?:\.\d+)*(?:[-.][A-Za-z0-9]+)*|b\d{4,}|nightly-[A-Za-z0-9-]+|[a-f0-9]{7,8})/i;
  const outsideParen = clean.replace(/（[^）]*）?|\([^)]*\)?/g, ' ');
  const vm = outsideParen.match(verRe) || clean.match(verRe);
  return { engine, engineVersion: vm ? vm[1] : '' };
}

/** 「同上」で始まるセルを直前行の値で補う（括弧内の補足は raw に残す） */
function inherit(cell, prev) {
  const plain = stripMd(cell);
  if (/^(同上|同左)/.test(plain)) return prev || plain;
  return plain;
}

/** ランチャー表記（`./qwen38radiance.sh` / **`swift40`**（既定））→ 英数字キー */
function parseLauncher(text) {
  const plain = stripMd(text).replace(/^\.\//, '');
  const m = plain.match(/([A-Za-z0-9_][A-Za-z0-9_.-]*)/);
  if (!m) return plain;
  return m[1].replace(/\.sh$/i, '');
}

/** README の測定日注記を検出する正規表現 */
const MEASURED_DATE_LINE = /測定日/;

/**
 * README の「測定日: …」注記から launcher 名 → YYYY-MM-DD の対応を作る。
 *  - 「全環境 / 全モード / 一括計測」を示す語があれば、行内の最初の日付を未確定の全行に適用する
 *  - 各 launcher 名について、名前の直後に来る最初の日付を採用する（`xxx 行のみ 2026-09-29` 対策）
 *  - 名前は完全一致（前後が名前文字でない）だけを対象にし、`qwen38` が `qwen38swift` に
 *    部分一致で誤マッチするのを防ぐ。同じ名前の再計測が複数出る場合は後勝ち（＝最新が残る）
 */
function extractMeasuredDates(md, launchers) {
  const map = {};
  const names = [...new Set(launchers)].sort((a, b) => b.length - a.length);
  /** 節の中に名前が完全一致で含まれるか（前後が名前文字なら別名前の一部なので除外） */
  const hasName = (seg, n) => {
    let from = 0;
    let at = -1;
    while ((at = seg.indexOf(n, from)) >= 0) {
      const before = at === 0 ? '' : seg[at - 1];
      const afterCh = at + n.length >= seg.length ? '' : seg[at + n.length];
      if (!/[A-Za-z0-9_]/.test(before) && !/[A-Za-z0-9_]/.test(afterCh)) return true;
      from = at + n.length;
    }
    return false;
  };
  for (const line of md.split(/\r?\n/)) {
    if (!MEASURED_DATE_LINE.test(line)) continue;
    const text = stripMd(line);
    // 「、」で切られた各節 = 1つの測定日記載。節内で最後に現れた日付をその節の名前に適用する
    for (const seg of text.split('、')) {
      const dates = [...seg.matchAll(/\d{4}-\d{2}-\d{2}/g)].map((x) => x[0]);
      if (dates.length === 0) continue;
      if (/全環境|全モード|一括切替|一括計測/.test(seg)) {
        for (const n of names) if (!map[n]) map[n] = dates[0];
      }
      for (const n of names) if (hasName(seg, n)) map[n] = dates[dates.length - 1];
    }
  }
  return map;
}

/** 表ヘッダーの「実行状況（2026-10-17 時点）」等から全行共通の測定日を取り出す */
function headerDate(header) {
  for (const cell of header || []) {
    const m = stripMd(cell).match(/(\d{4}-\d{2}-\d{2})/);
    if (m) return m[1];
  }
  return '';
}

/** ヘッダー名から列索引を探す（見つからなければ -1） */
function colIndex(header, keys) {
  for (const k of keys) {
    const i = header.findIndex((h) => h.includes(k));
    if (i >= 0) return i;
  }
  return -1;
}

/** 「モデル（量子化形式）」→ { model, weights } */
function splitModelCell(text) {
  const plain = stripMd(text);
  const m = plain.match(/^(.*?)[（(]([^（）()]+)[）)]\s*$/);
  if (m && m[1].trim() && m[2].trim()) {
    return { model: m[1].trim(), weights: m[2].trim() };
  }
  return { model: plain, weights: '' };
}

// ============================================================
// ソース取得
// ============================================================

/** Gitea の raw README を HTTPS で取得する */
async function fetchGiteaReadme(machine) {
  const res = await fetch(machine.rawUrl, { redirect: 'follow' });
  if (!res.ok) throw new Error(`${machine.rawUrl} → HTTP ${res.status}`);
  return res.text();
}

/**
 * GitHub（プライベート）の README を取得する。
 * SSH で shallow clone → 読み取り後に削除する。
 * @param {string} cloneUrl
 * @param {string} [reuseDir] 既存クローンディレクトリ（指定時は clone しない）
 */
function fetchGithubReadme(cloneUrl, reuseDir) {
  const dir = reuseDir || path.join(os.tmpdir(), 'cresome-llm-bench-' + Date.now());
  if (!reuseDir) {
    execFileSync('git', ['clone', '--quiet', '--depth', '1', '--single-branch', cloneUrl, dir], {
      stdio: ['ignore', 'ignore', 'inherit'],
    });
  }
  try {
    return readFileSync(path.join(dir, 'README.md'), 'utf8');
  } finally {
    if (!reuseDir) rmSync(dir, { recursive: true, force: true });
  }
}

// ============================================================
// 行ビルダー
// ============================================================

/** DGXSparkLLMEnv / Whitebear2026-WSL2 の「1. サマリー（推論エンジン × モデル × 性能）」表 */
function buildSummaryRows(machine, table, md) {
  const h = table.header;
  const i = {
    launcher: colIndex(h, ['ランチャー']),
    engine: colIndex(h, ['推論エンジン']),
    model: colIndex(h, ['モデル']),
    weight: colIndex(h, ['重み']),
    ctx: colIndex(h, ['コンテキスト']),
    spec: colIndex(h, ['投機']),
    memory: colIndex(h, ['メモリ実測', 'VRAM 実測', 'VRAM実測', 'メモリ']),
    decode: colIndex(h, ['decode']),
    prefill: colIndex(h, ['prefill']),
    port: colIndex(h, ['Port', 'ポート']),
  };
  const cell = (row, key) => (i[key] >= 0 ? row[i[key]] ?? '' : '');

  const measured = extractMeasuredDates(
    md,
    table.rows.map((r) => parseLauncher(cell(r, 'launcher'))).filter(Boolean)
  );

  // 「同上」は直前行の値を継承する
  const prev = { engine: '', model: '', weight: '', ctx: '', spec: '', memory: '' };
  const rows = [];
  for (const raw of table.rows) {
    if (raw.length < 4) continue;
    const launcher = parseLauncher(cell(raw, 'launcher'));
    if (!launcher) continue;

    prev.engine = inherit(cell(raw, 'engine'), prev.engine);
    prev.model = inherit(cell(raw, 'model'), prev.model);
    prev.weight = inherit(cell(raw, 'weight'), prev.weight);
    prev.ctx = inherit(cell(raw, 'ctx'), prev.ctx);
    prev.spec = inherit(cell(raw, 'spec'), prev.spec);
    prev.memory = inherit(cell(raw, 'memory'), prev.memory);

    const { model, weights } = splitModelCell(prev.model);
    const eng = parseEngine(prev.engine);
    const weightSize = parseSize(prev.weight, 'weight');
    const memory = parseSize(prev.memory, 'memory');

    rows.push({
      id: `${machine.key}:${launcher}`,
      machineKey: machine.key,
      machine: machine.machineShort,
      launcher,
      model,
      modelId: MODEL_IDS[`${machine.key}:${launcher}`] || null,
      weights: weights || stripMd(prev.weight),
      weightSize: weightSize.value,
      decode: parseRate(cell(raw, 'decode')),
      decodeText: stripMd(cell(raw, 'decode')) || '—',
      prefill: parseRate(cell(raw, 'prefill')),
      prefillText: stripMd(cell(raw, 'prefill')) || '—',
      context: parseContext(prev.ctx),
      contextText: stripMd(prev.ctx) || '—',
      memoryKind: machine.memoryKind,
      memoryNote: machine.memoryNote,
      memory: memory.value,
      memoryText: stripMd(prev.memory) || '—',
      engine: eng.engine,
      engineVersion: eng.engineVersion,
      engineText: stripMd(prev.engine) || '—',
      speculative: stripMd(prev.spec) || '—',
      measuredAt: measured[launcher] || '',
      note: '',
      port: (cell(raw, 'port').match(/\d{4,5}/) || [''])[0],
      os: machine.os,
      cpu: machine.cpu,
      ram: machine.ram,
      gpu: machine.gpu,
      sourceUrl: PUBLISH_SOURCE_URL ? machine.sourceUrl : null,
      raw: {
        ランチャー: launcher,
        推論エンジン: stripMd(cell(raw, 'engine')),
        モデル: stripMd(cell(raw, 'model')),
        重み: stripMd(cell(raw, 'weight')),
        'コンテキスト / KV': stripMd(cell(raw, 'ctx')),
        投機デコード: stripMd(prev.spec),
        メモリ: stripMd(cell(raw, 'memory')),
        decode: stripMd(cell(raw, 'decode')),
        prefill: stripMd(cell(raw, 'prefill')),
        Port: stripMd(cell(raw, 'port')),
      },
    });
  }
  return rows;
}

/** Atom2LLM の「生成モデル」表（decode / prefill / VRAM は「実行状況」列に埋まっている） */
function buildAtom2Rows(machine, table) {
  const h = table.header;
  const i = {
    launcher: colIndex(h, ['切替コマンド']),
    service: colIndex(h, ['サービス']),
    port: colIndex(h, ['APIポート', 'ポート']),
    model: colIndex(h, ['モデル']),
    quant: colIndex(h, ['量子化']),
    engine: colIndex(h, ['エンジン']),
    ctx: colIndex(h, ['最大コンテキスト']),
    kv: colIndex(h, ['KVキャッシュ']),
    status: colIndex(h, ['実行状況']),
  };
  const cell = (row, key) => (i[key] >= 0 ? row[i[key]] ?? '' : '');
  const pick = (text, label) =>
    (stripMd(text).match(new RegExp(label + '\\s*([\\d.,〜~\\-\\s/T]+?)(?:・|。|$)', 'i')) || ['', '—'])[1].trim() || '—';

  const rows = [];
  for (const raw of table.rows) {
    if (raw.length < 5) continue;
    const launcher = parseLauncher(cell(raw, 'launcher'));
    // RAG の Embedding は生成LLM の性能測定対象外
    if (!launcher || launcher === 'rag') continue;

    const status = stripMd(cell(raw, 'status'));
    const eng = parseEngine(cell(raw, 'engine'));
    const mem = parseSize(status, 'memory', 'VRAM');
    const engineText = stripMd(cell(raw, 'engine'));
    rows.push({
      id: `${machine.key}:${launcher}`,
      machineKey: machine.key,
      machine: machine.machineShort,
      launcher,
      model: stripMd(cell(raw, 'model')),
      modelId: MODEL_IDS[`${machine.key}:${launcher}`] || null,
      weights: stripMd(cell(raw, 'quant')),
      weightSize: parseSize(cell(raw, 'quant'), 'weight').value,
      decode: parseRate(status, 'decode'),
      decodeText: pick(status, 'decode'),
      prefill: parseRate(status, 'prefill'),
      prefillText: pick(status, 'prefill'),
      context: parseContext(cell(raw, 'ctx')),
      contextText: stripMd(cell(raw, 'ctx')) || '—',
      memoryKind: machine.memoryKind,
      memoryNote: machine.memoryNote,
      memory: mem.value,
      memoryText: mem.value ? mem.value + 'GB（実測）' : '—',
      engine: eng.engine,
      engineVersion: eng.engineVersion,
      engineText: engineText || '—',
      speculative: /MTP|DFlash|drafter|投機/i.test(engineText + status)
        ? stripMd(cell(raw, 'kv')) || '—'
        : '—',
      measuredAt: headerDate(table.header),
      note: '',
      port: (cell(raw, 'port').match(/\d{4,5}/) || [''])[0],
      os: machine.os,
      cpu: machine.cpu,
      ram: machine.ram,
      gpu: machine.gpu,
      sourceUrl: PUBLISH_SOURCE_URL ? machine.sourceUrl : null,
      raw: {
        切替コマンド: stripMd(cell(raw, 'launcher')),
        サービス: stripMd(cell(raw, 'service')),
        モデル: stripMd(cell(raw, 'model')),
        量子化: stripMd(cell(raw, 'quant')),
        エンジン: engineText,
        最大コンテキスト: stripMd(cell(raw, 'ctx')),
        KVキャッシュ: stripMd(cell(raw, 'kv')),
        APIポート: stripMd(cell(raw, 'port')),
        実行状況: status,
      },
    });
  }
  return rows;
}

// ============================================================
// 出力
// ============================================================

function argValue(name) {
  const i = process.argv.indexOf('--' + name);
  return i >= 0 && process.argv[i + 1] && !process.argv[i + 1].startsWith('--')
    ? process.argv[i + 1]
    : null;
}

async function main() {
  const out = argValue('out') ? path.resolve(ROOT, argValue('out')) : DEFAULT_OUT;
  const wbDir = argValue('wb-dir');
  const skipGithub = process.argv.includes('--skip-github');

  const rows = [];
  const sources = [];
  for (const machine of MACHINES) {
    let md;
    if (machine.sourceKind === 'gitea') {
      console.log('[bench] Gitea 取得: ' + machine.rawUrl);
      md = await fetchGiteaReadme(machine);
    } else {
      if (skipGithub) {
        console.log('[bench] GitHub をスキップしました（--skip-github）');
        continue;
      }
      console.log(
        '[bench] GitHub clone: ' + machine.cloneUrl + (wbDir ? '（既存クローン利用: ' + wbDir + '）' : '')
      );
      md = fetchGithubReadme(machine.cloneUrl, wbDir);
    }

    const table =
      machine.table === 'atom2'
        ? extractTable(md, ['切替コマンド', 'エンジン', '最大コンテキスト'])
        : extractTable(md, ['ランチャー', 'decode', 'prefill']);
    if (!table) {
      throw new Error(
        `${machine.sourceUrl} の README に性能一覧表が見つかりません（表のヘッダー構成変更を確認してください）`
      );
    }
    const built =
      machine.table === 'atom2'
        ? buildAtom2Rows(machine, table)
        : buildSummaryRows(machine, table, md);
    if (built.length === 0) {
      throw new Error(`${machine.sourceUrl} の性能一覧表から行を解析できませんでした`);
    }
    console.log('[bench] ' + machine.machineShort + ': ' + built.length + ' 行');
    rows.push(...built);
    sources.push({
      machineKey: machine.key,
      machine: machine.machineShort,
      url: PUBLISH_SOURCE_URL ? machine.sourceUrl : null,
      rows: built.length,
    });
  }

  // 手動運用の列（備考）と、自動抽出できなかった計測日は既存 JSON の値を維持する
  try {
    const prev = JSON.parse(await fs.readFile(out, 'utf8'));
    const byId = new Map((prev.rows || []).map((r) => [r.id, r]));
    for (const r of rows) {
      const old = byId.get(r.id);
      if (!old) continue;
      if (old.note) r.note = old.note;
      if (!r.measuredAt && old.measuredAt) r.measuredAt = old.measuredAt;
    }
  } catch {
    // 既存 JSON が無い／読めない場合は自動抽出のみで書き出す
  }

  // 順位: decode 代表値の降順（計測値の無い行は末尾）
  const ranked = [...rows].sort((a, b) => {
    const av = a.decode === null ? -1 : a.decode;
    const bv = b.decode === null ? -1 : b.decode;
    if (bv !== av) return bv - av;
    return String(a.model).localeCompare(String(b.model), 'ja');
  });
  const ranks = new Map();
  ranked.forEach((r, idx) => ranks.set(r.id, idx + 1));
  for (const r of ranked) r.rank = ranks.get(r.id);
  // 保存順も順位順（decode 降順）に揃える
  rows.length = 0;
  rows.push(...ranked);

  const data = {
    generatedAt: new Date().toISOString().slice(0, 10),
    note:
      '自社内のローカルLLM環境 3台で実測した推論性能の一覧。数値は各環境設定リポジトリ README の集計値（decode 500 トークン / prefill 約 10,800 トークン 基準）。環境状態が異なる値は比較できないため、絶対値の比較は同一セッションの対測値に限る。',
    machines: MACHINES.map((m) => ({
      key: m.key,
      name: m.machine,
      short: m.machineShort,
      os: m.os,
      cpu: m.cpu,
      gpu: m.gpu,
      ram: m.ram,
      memoryKind: m.memoryKind,
      memoryNote: m.memoryNote,
      url: PUBLISH_SOURCE_URL ? m.sourceUrl : null,
    })),
    sources,
    rows,
  };

  await fs.mkdir(path.dirname(out), { recursive: true });
  await fs.writeFile(out, JSON.stringify(data, null, 2) + '\n', 'utf8');
  console.log('[bench] 出力: ' + path.relative(ROOT, out) + '（' + rows.length + ' 行）');
}

// 直接実行時のみ生成を行う（パース関数をテストから import できるようにする）。
// ワークスペースがジョクション経由の場合、argv のパスと import.meta.url が実パスで食い違うため
// realpath を揃えて比較する。
if (process.argv[1]) {
  const self = path.resolve(fileURLToPath(import.meta.url));
  const invoked = path.resolve(process.argv[1]);
  const same =
    self === invoked ||
    (existsSync(self) && existsSync(invoked) && realpathSync(self) === realpathSync(invoked));
  if (same) {
    main().catch((err) => {
      console.error('[bench] 失敗しました:', err.message || err);
      process.exit(1);
    });
  }
}

export {
  parseSize,
  parseRate,
  parseEngine,
  parseContext,
  parseLauncher,
  sumWeighted,
  extractTable,
  extractMeasuredDates,
  headerDate,
};