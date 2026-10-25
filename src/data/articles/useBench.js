import { useEffect, useState } from 'react';

/**
 * ベンチマークデータ（scripts/fetch-llm-bench.mjs が生成する JSON）を遅延読み込みする。
 * 静的 import だとメインバンドル（three.js 由来で既に大きい）に 70KB 超が乗るため、
 * 記事を開いたときだけ別チャンクとして取得する。
 */
let cache = null;
const listeners = new Set();

export default function useBench() {
  const [data, setData] = useState(cache);

  useEffect(() => {
    if (cache) {
      setData(cache);
      return undefined;
    }
    let alive = true;
    listeners.add(setData);
    import('./llm-bench.json')
      .then((m) => {
        cache = m.default || m;
        if (!alive) return;
        listeners.forEach((cb) => cb(cache));
      })
      .catch(() => {
        if (alive) setData(null);
      })
      .finally(() => listeners.delete(setData));
    return () => {
      alive = false;
      listeners.delete(setData);
    };
  }, []);

  return data;
}