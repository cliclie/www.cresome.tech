import BgSwitcher from './BgSwitcher';

export default function Drawer({
  items,
  open,
  onClose,
  onSelect,
  bgMode,
  onBgModeChange,
}) {
  return (
    <>
      <div className={'scrim' + (open ? ' open' : '')} onClick={onClose}></div>
      <aside className={'drawer' + (open ? ' open' : '')}>
        <div className="drawer-top">
          <div className="brand"></div>
          <button
            className="drawer-close"
            aria-label="閉じる"
            onClick={onClose}
          ></button>
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
        <div className="drawer-foot">© cresome.tech</div>
      </aside>
    </>
  );
}