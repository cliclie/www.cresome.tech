import { useEffect, useRef } from 'react';

/**
 * ベンチマーク行の詳細諸元ポップアップ
 *  - ネイティブ <dialog> + showModal(): フォーカストラップ / Esc / 背景の inert 化はブラウザが処理
 *  - closedby="any" でライトディミット（背景クリックで閉じる）
 *  - closedby 非対応ブラウザ（Safari 等）は背景クリック検出でフォールバック
 */
export default function BenchDetailModal({ row, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    d.showModal();
    if (!('closedBy' in HTMLDialogElement.prototype)) {
      // Fallback for browsers without closedby support
      const onBackdropClick = (e) => {
        // 背景クリック時は event target が dialog 本体になる
        if (e.target !== d) return;
        const rect = d.getBoundingClientRect();
        const isDialogContent =
          rect.top <= e.clientY &&
          e.clientY <= rect.top + rect.height &&
          rect.left <= e.clientX &&
          e.clientX <= rect.left + rect.width;
        if (!isDialogContent) d.close();
      };
      d.addEventListener('click', onBackdropClick);
      return () => d.removeEventListener('click', onBackdropClick);
    }
  }, []);

  const specs = [
    ['機種名', row.machine],
    ['OS', row.os],
    ['CPU', row.cpu],
    ['GPU / メモリ', row.gpu],
    ['搭載RAM', row.ram],
    ['モデル名', row.model],
    ['HuggingFace ID', row.modelId],
    ['重み名', row.weights],
    ['重みサイズ', row.weightSize ? row.weightSize + ' GB' : ''],
    ['decode', row.decodeText],
    ['prefill', row.prefillText],
    ['コンテキスト / KV', row.contextText],
    ['使用メモリ', row.memoryText],
    ['推論エンジン', row.engineText],
    ['エンジンバージョン', row.engineVersion],
    ['計測日', row.measuredAt],
    ['備考', row.note],
    ['投機デコード', row.speculative],
    ['API ポート', row.port],
  ];

  return (
    <dialog
      ref={dialogRef}
      className="bench-modal"
      closedby="any"
      aria-label={row.model + ' の詳細諸元'}
      onClose={onClose}
    >
        <div className="bench-modal-head">
          <h3 className="bench-modal-title">{row.model || row.launcher}</h3>
          <button
            type="button"
            className="bench-modal-close"
            aria-label="閉じる"
            onClick={() => dialogRef.current?.close()}
          >
            ×
          </button>
        </div>
        <p className="bench-modal-sub">
          {row.machine} ・ {row.engine}
          {row.engineVersion ? ' ' + row.engineVersion : ''} ・ 順位 {row.rank}
        </p>

        <dl className="bench-specs">
          {specs
            .filter(([, v]) => v !== null && v !== undefined && v !== '')
            .map(([k, v]) => (
              <div className="bench-spec" key={k}>
                <dt>{k}</dt>
                <dd>
                  {k === 'HuggingFace ID' ? (
                    <a
                      href={'https://huggingface.co/' + v}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      {v}
                    </a>
                  ) : (
                    v
                  )}
                </dd>
              </div>
            ))}
        </dl>

        {row.memoryNote && (
          <p className="bench-modal-note">メモリ: {row.memoryNote}</p>
        )}

        {row.raw && (
          <details className="bench-modal-raw">
            <summary>出典（環境設定リポジトリの原文表記）</summary>
            <dl className="bench-specs">
              {Object.entries(row.raw)
                .filter(([, v]) => v)
                .map(([k, v]) => (
                  <div className="bench-spec" key={k}>
                    <dt>{k}</dt>
                    <dd>{v}</dd>
                  </div>
                ))}
            </dl>
          </details>
        )}

        {row.sourceUrl && (
        <p className="bench-modal-src">
          出典:{' '}
          <a href={row.sourceUrl} target="_blank" rel="noreferrer noopener">
            {row.sourceUrl}
          </a>
        </p>
      )}
    </dialog>
  );
}