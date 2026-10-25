import { useEffect, useRef } from 'react';

/**
 * ベンチマーク行の詳細諸元ポップアップ
 *  - 背景クリック / Esc で閉じる
 *  - 開いたときに閉じるボタンへフォーカスを移す
 */
export default function BenchDetailModal({ row, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

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
    <div className="bench-modal-scrim" onClick={onClose}>
      <div
        className="bench-modal"
        role="dialog"
        aria-modal="true"
        aria-label={row.model + ' の詳細諸元'}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bench-modal-head">
          <h3 className="bench-modal-title">{row.model || row.launcher}</h3>
          <button
            type="button"
            className="bench-modal-close"
            aria-label="閉じる"
            onClick={onClose}
            ref={closeRef}
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
      </div>
    </div>
  );
}