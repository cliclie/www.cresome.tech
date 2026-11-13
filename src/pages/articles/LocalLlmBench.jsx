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
        みどころは、今回の更新（2026-11-14）で AI TOP ATOM に 9 行追加されたこと。
        Ripple-65B Preview は NVFP4+SGLang で decode 3.93 T/s と全環境最遅クラスながら、DFlash2 投機で 10.11 T/s（2.59 倍）に改善。
        Nanbeige4.3-33B は DFLASH2 の同一構成 A/B で 6.59 → 11.36 T/s（1.72 倍）を実測し、
        Qwen3-Coder-Next 80B A3B の NVFP4 行は prefill 6,048 T/s で全 51 件中トップを記録しました。
        whitebearatom2 には Qwen3-VL-8B の OCR/VL 専用ラインが加わり、hipfire 0.4.6 は decode 154.6 T/s で全体 3 位を維持。
        全 51 件が一覧に掲載されています。
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