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
        みどころは、今回の更新（2026-11-18）で AI TOP ATOM に llama.cpp 経路の Unsloth Dynamic 3.1 GGUF が 4 本加わったこと。
        27B の UD-Q4_K_XL は現用 FP8（vLLM）比で decode +49.9%（29.09 T/s）に MemAvailable 51.9 → 69.1 GB の改善、
        同一コーパスの PPL も FP8 1.9379 に対し 1.8687 と 3.6% 良好でした。
        一方 Flash-Next 側の UD-Q3_K_XL は現用 EXL3 4.05bpw 47.33 T/s 比 −31%（32.65 T/s）にとどまり、現用維持の判定です。
        UD-Q4_K_XL の Flash-Next 行は内蔵 MTP と mmproj、ctx 262,144 を GB10 の統合メモリに同時に積めず（MemAvailable 2 GB・swap 12 GB）、
        ctx 65,536・MTP なしの品質計測専用ラインになっています。
        全 55 件が一覧に掲載されています。
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
              （各環境の実測集計値。機種により測定日が異なります）
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