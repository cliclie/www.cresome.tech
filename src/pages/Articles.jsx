import { useState } from 'react';
import { ARTICLES_SORTED } from '../data/articles/index.js';

/**
 * 記事ページ
 * 左ペインに記事一覧（タイトル・日付）、右ペインに記事本文を並べる。
 * ※ App.jsx のスクロールフェードイン（.reveal）は初回マウント時のみ走査するため、
 *    記事の切り替えで再生成される領域では .reveal を使わない（opacity:0 のままになる）。
 */
export default function Articles() {
  const [selected, setSelected] = useState(ARTICLES_SORTED[0].id);
  const article = ARTICLES_SORTED.find((a) => a.id === selected) || ARTICLES_SORTED[0];
  const Body = article.Body;

  return (
    <>
      <h2 className="section-title">記事</h2>
      <p className="lead">
        自社内で取り組んでいる技術の測定記録とメモをまとめています。
      </p>

      <div className="articles-layout">
        <aside className="articles-pane" aria-label="記事一覧">
          <div className="articles-pane-title">記事一覧</div>
          {ARTICLES_SORTED.map((a) => (
            <button
              type="button"
              key={a.id}
              className={'article-item' + (a.id === article.id ? ' active' : '')}
              onClick={() => setSelected(a.id)}
              aria-current={a.id === article.id ? 'true' : undefined}
            >
              <span className="article-item-date">{a.date}</span>
              <span className="article-item-title">{a.title}</span>
              {a.summary && <span className="article-item-summary">{a.summary}</span>}
            </button>
          ))}
        </aside>

        <div className="articles-content" key={article.id}>
          <h3 className="article-title">{article.title}</h3>
          <p className="article-date">更新日 {article.date}</p>
          <Body />
        </div>
      </div>
    </>
  );
}