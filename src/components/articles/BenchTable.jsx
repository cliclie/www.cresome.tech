import { useMemo, useState } from 'react';
import useBench from '../../data/articles/useBench.js';
import BenchDetailModal from './BenchDetailModal.jsx';

/**
 * ローカルLLMベンチマーク一覧
 *  - 全列ソート可能（ヘッダークリックで昇降順を切り替え）
 *  - ヘッダー行と先頭2列（順位・モデル名）を固定表示、それ以外は縦横スクロール
 *  - 行をクリックすると詳細諸元をポップアップ表示
 */
const COLUMNS = [
  { key: 'rank', label: '順位', kind: 'num', pin: 0, first: 1, width: '58px' },
  { key: 'model', label: 'モデル名', kind: 'text', pin: 1, first: -1, width: '240px' },
  { key: 'weights', label: '重み名', kind: 'text', first: 1 },
  { key: 'decode', label: 'decode (T/s)', kind: 'num', first: -1 },
  { key: 'prefill', label: 'prefill (T/s)', kind: 'num', first: -1 },
  { key: 'context', label: 'コンテキスト長', kind: 'num', first: -1 },
  { key: 'memory', label: '使用メモリ (GB)', kind: 'num', first: -1 },
  { key: 'machine', label: '機種名', kind: 'text', first: 1, wrap: true },
  { key: 'os', label: 'OS', kind: 'text', first: 1, wrap: true },
  { key: 'cpu', label: 'CPU', kind: 'text', first: 1, wrap: true },
  { key: 'ram', label: '搭載RAM', kind: 'text', first: 1, wrap: true },
  { key: 'engine', label: '推論エンジン', kind: 'text', first: 1, wrap: true },
  { key: 'engineVersion', label: 'エンジン版', kind: 'text', first: 1, wrap: true },
  { key: 'measuredAt', label: '計測日', kind: 'text', first: -1, wrap: true },
  { key: 'note', label: '備考', kind: 'text', first: 1, wrap: true },
];

const PIN_OFFSET = ['0px', '58px'];

function isEmpty(v) {
  return v === null || v === undefined || v === '';
}

/**
 * 列ソート。値の無い行（未計測・未記載）は昇降順どちらでも常に末尾へ寄せる。
 */
function sortRows(list, col, dir) {
  const tie = (x, y) => {
    const r = String(x.model ?? '').localeCompare(String(y.model ?? ''), 'ja', {
      numeric: true,
    });
    return r !== 0 ? r : String(x.id).localeCompare(String(y.id));
  };
  return [...list].sort((x, y) => {
    const a = x[col.key];
    const b = y[col.key];
    if (isEmpty(a) && isEmpty(b)) return tie(x, y);
    if (isEmpty(a)) return 1;
    if (isEmpty(b)) return -1;
    const r =
      col.kind === 'num'
        ? Number(a) - Number(b)
        : String(a).localeCompare(String(b), 'ja', { numeric: true });
    return r !== 0 ? r * dir : tie(x, y);
  });
}

export default function BenchTable() {
  const bench = useBench();
  if (!bench) {
    return <p className="bench-hint">ベンチマークデータを読み込んでいます…</p>;
  }
  return <BenchTableInner bench={bench} />;
}

function BenchTableInner({ bench }) {
  const [sort, setSort] = useState({ key: 'rank', dir: 1 });
  const [detail, setDetail] = useState(null);

  const rows = useMemo(() => {
    const col = COLUMNS.find((c) => c.key === sort.key) || COLUMNS[0];
    return sortRows(bench.rows, col, sort.dir);
  }, [bench, sort]);

  const onSort = (col) => {
    setSort((prev) =>
      prev.key === col.key
        ? { key: col.key, dir: -prev.dir }
        : { key: col.key, dir: col.first }
    );
  };

  const num = (v) => (v === null || v === undefined ? '—' : v.toLocaleString('ja-JP'));

  return (
    <>
      <BenchTableBody
        rows={rows}
        sort={sort}
        num={num}
        onSort={onSort}
        onOpen={setDetail}
      />
      {detail && <BenchDetailModal row={detail} onClose={() => setDetail(null)} />}
    </>
  );
}

/** テーブル本体（ヘッダー行と先頭2列を固定する） */
function BenchTableBody({ rows, sort, num, onSort, onOpen }) {
  return (
    <>
      <div className="bench-scroll" role="region" aria-label="ベンチマーク一覧" tabIndex="0">
        <table className="bench-table">
          <thead>
            <tr>
              {COLUMNS.map((col) => (
                <th
                  key={col.key}
                  scope="col"
                  className={
                    'bench-th' +
                    (col.pin !== undefined ? ' bench-pin bench-pin-' + col.pin : '') +
                    (col.pin === 0 ? ' bench-col-rank' : '')
                  }
                  style={{
                    left: col.pin !== undefined ? PIN_OFFSET[col.pin] : undefined,
                    minWidth: col.width,
                  }}
                  aria-sort={
                    sort.key === col.key ? (sort.dir === 1 ? 'ascending' : 'descending') : 'none'
                  }
                >
                  <button
                    type="button"
                    className="bench-sort"
                    onClick={() => onSort(col)}
                    title={col.label + ' でソート'}
                  >
                    <span>{col.label}</span>
                    <span className="bench-sort-mark">
                      {sort.key === col.key ? (sort.dir === 1 ? '▲' : '▼') : '⇅'}
                    </span>
                  </button>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr
                key={r.id}
                className="bench-row"
                tabIndex={0}
                onClick={() => onOpen(r)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onOpen(r);
                  }
                }}
              >
                <td className="bench-td bench-pin bench-pin-0 bench-col-rank">{num(r.rank)}</td>
                <td className="bench-td bench-pin bench-pin-1 bench-model">
                  <span className="bench-model-name">{r.model || '—'}</span>
                  <span className="bench-model-id">
                    {r.modelId ? (
                      <a
                        href={'https://huggingface.co/' + r.modelId}
                        target="_blank"
                        rel="noreferrer noopener"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {r.modelId}
                      </a>
                    ) : (
                      '—'
                    )}
                  </span>
                </td>
                <td className="bench-td bench-clip" title={r.weights || ''}>
                  {r.weights || '—'}
                </td>
                <td className="bench-td bench-num" title={r.decodeText}>
                  {num(r.decode)}
                </td>
                <td className="bench-td bench-num" title={r.prefillText}>
                  {num(r.prefill)}
                </td>
                <td className="bench-td bench-num">{num(r.context)}</td>
                <td className="bench-td bench-num">
                  {num(r.memory)}
                  <span className="bench-mem-kind">{r.memoryKind}</span>
                </td>
                <td className="bench-td bench-wrap">{r.machine}</td>
                <td className="bench-td bench-wrap">{r.os || '—'}</td>
                <td className="bench-td bench-wrap">{r.cpu || '—'}</td>
                <td className="bench-td bench-wrap">{r.ram || '—'}</td>
                <td className="bench-td bench-wrap">{r.engine || '—'}</td>
                <td className="bench-td bench-wrap">{r.engineVersion || '—'}</td>
                <td className="bench-td bench-wrap bench-date">{r.measuredAt || ''}</td>
                <td className="bench-td bench-wrap bench-note">{r.note || ''}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="bench-hint">
        列ヘッダーでソート、行をクリックすると詳細諸元を表示します。「順位」は decode 速度の代表値順です。
        一覧はブラウザ幅に追従して広がりますが、15 列あるため横幅が約 1600px を下回ると横向きスクロールが表示されます。
      </p>
    </>
  );
}