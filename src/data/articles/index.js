import LocalLlmBench from '../../pages/articles/LocalLlmBench.jsx';

/**
 * 記事一覧（新しい順に並べる）。
 * 追加方法: ページコンポーネントを src/pages/articles/ に置き、ここで登録する。
 * date は「記事本文の更新日」右サイドメニューの「記事」直下と一覧ペインに表示する。
 */
export const ARTICLES = [
  {
    id: 'local-llm-benchmark',
    title: 'ローカル環境でローカルLLMをローカルな条件でベンチマーク',
    date: '2026-10-25',
    summary: '自社内3台のローカル環境で実測した推論性能の一覧',
    Body: LocalLlmBench,
  },
];

/** 記事の最新更新日（サイドメニュー表示用） */
export const LATEST_ARTICLE_DATE = ARTICLES.reduce(
  (max, a) => (a.date > max ? a.date : max),
  ''
);

/** 表示用（新しい順） */
export const ARTICLES_SORTED = [...ARTICLES].sort((a, b) =>
  b.date.localeCompare(a.date)
);