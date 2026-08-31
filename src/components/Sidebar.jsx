import logo from '../../images/cresome_logo.svg';
import BgSwitcher from './BgSwitcher';

export default function Sidebar({ items, onSelect, bgMode, onBgModeChange }) {
  return (
    <aside className="sidebar">
      <div className="brand">
        <img src={logo} alt="cresome" />
        <div className="brand-name">クリサム株式会社</div>
      </div>

      <nav className="nav">
        {items.map((it) => (
          <div
            key={it.id}
            className={'nav-item' + (it.active ? ' active' : '')}
            data-nav={it.id}
            onClick={() => onSelect(it.id)}
          >
            {it.label}
          </div>
        ))}
      </nav>

      <BgSwitcher value={bgMode} onChange={onBgModeChange} />

      <div className="sidebar-foot">
        © cresome.tech<br />
        Cresome Technical Works
      </div>
    </aside>
  );
}