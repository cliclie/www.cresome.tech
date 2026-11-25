import BenchTable from '../../components/articles/BenchTable.jsx';
import useBench from '../../data/articles/useBench.js';

/**
 * 記事1: ローカル環境でローカルLLMをローカルな条件でベンチマーク
 * 一覧データは scripts/fetch-llm-bench.mjs が各環境設定リポジトリの README から生成する。
 */
export default function LocalLlmBench() {
  const bench = useBench();

  return (
    <article className="article-body">
      <p className="lead">
        いままで測定してきた、自社内のローカル環境で動作させているローカルLLMモデルの性能を一覧で表示します。
        単位 T/s はトークン毎秒（decode = 生成速度、prefill = 入力読み込み速度）です。
      </p>
      <p className="lead">
        みどころは、今回の更新（2026-11-25）で AI TOP ATOM に TensorFold native と Hibana が加わり、
        Whitebear2026 の出典が Gitea の <code>WSL-llm</code> へ移ったこと。
        新規 3 環境は Hibana d474b74（Qwen3.8 Flash-Next 125B A6B・NVFP4）が decode 120.95 T/s、
        TensorFold native 1.3.4 の 4bit が 51.75 T/s（1M context・parallel 1。native 262,144 / parallel 8 は 45.99）、
        8bit が 25.84 T/s です。
      </p>
      <p className="lead">
        Whitebear2026 は、2026-11-07 で停止した GitHub の性能一覧表に代わって Gitea の <code>WSL-llm</code> が正本になり、
        ここに一覧表は無いため README 本文に書かれた実測値を一覧にしています。
        Strata の IQ3_S（0.2.19 / engine 0.1.65）が decode 178.41 T/s で全 50 件首位、
        Inkling-2-Mini SQ-20（専用エンジン strata-inkling 0.1.66）が 80.9 T/s・prefill 1,989 T/s で続きます。
        本文に実測記載の無い 14 環境（<code>mimo</code> / <code>swift40</code> / <code>tabby</code> / <code>bonsai</code> / <code>llmjp</code> など）は一覧から外れたので、掲載は 50 件です。
        whitebearatom2 は hipfire 0.4.7 と llama.cpp b12651 を対測のうえ採用（prefill +1.8% / +7.9%）で、
        hipfire の decode 154.55 T/s は 27B 系エンジン中最速のまま。判定専用の Clef-Flash は b12651 で text 122〜173ms・VRAM 22.1GB に更新されています。
      </p>

      {bench && (
        <div className="article-meta reveal">
          <div className="article-meta-row">
            <span className="article-meta-label">測定環境</span>
            <span className="article-meta-value">
        {bench.machines.map((m) => m.short + '（' + m.memoryKind + '）').join(' / ')}
            </span>
          </div>
          <div className="article-meta-row">
            <span className="article-meta-label">測定条件</span>
            <span className="article-meta-value">
        単一リクエスト・decode 500 トークン / prefill 約 10,800 トークン・temperature 0
        （各環境の実測集計値。機種により測定日が異なります。Whitebear2026 の Strata 系は README の別条件で、
        bench_strata.py r7・256 tok 出力・median（prefill は 3.5K prompt）です）
            </span>
          </div>
          <div className="article-meta-row">
            <span className="article-meta-label">掲載件数</span>
            <span className="article-meta-value">
        {bench.rows.length} 環境（データ生成日 {bench.generatedAt}）
            </span>
          </div>
          <div className="article-meta-row">
            <span className="article-meta-label">出典</span>
            <span className="article-meta-value article-sources">
        {bench.sources.map((s) =>
          s.url ? (
            <a key={s.machineKey} href={s.url} target="_blank" rel="noreferrer noopener">
              {s.machine}
            </a>
          ) : (
            <span key={s.machineKey}>{s.machine}</span>
          )
        )}
            </span>
          </div>
        </div>
      )}

      <div className="reveal">
        <BenchTable />
      </div>

      {bench && (
        <>
          <p className="article-note reveal">{bench.note}</p>

          <h3 className="article-h3 reveal">メモリ値の読み方</h3>
          <div className="article-list reveal">
            {bench.machines.map((m) => (
        <p className="article-list-item" key={m.key}>
          <strong>{m.short}</strong>（{m.memoryKind}）: {m.memoryNote}
        </p>
            ))}
          </div>
        </>
      )}
    </article>
  );
}