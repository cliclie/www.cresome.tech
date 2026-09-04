import BgSwitcher from './BgSwitcher';
import MapControls from './MapControls';

export default function Drawer({
  items,
  open,
  onClose,
  onSelect,
  bgMode,
  onBgModeChange,
  mapConfig,
  onMapConfigChange,
  onMapReset,
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
        {bgMode === 'map' && mapConfig && (
          <MapControls
            stationId={mapConfig.stationId}
            onStationChange={(id) => onMapConfigChange({ stationId: id })}
            viewpoint={mapConfig.viewpoint}
            onViewpointChange={(v) => onMapConfigChange({ viewpoint: v })}
            direction={mapConfig.direction}
            onDirectionChange={(d) => onMapConfigChange({ direction: d })}
            speed={mapConfig.speed}
            onSpeedChange={(s) => onMapConfigChange({ speed: s })}
            playing={mapConfig.playing}
            onPlayingChange={(p) => onMapConfigChange({ playing: p })}
            onResetRoute={onMapReset}
          />
        )}
        <div className="drawer-foot">© cresome.tech</div>
      </aside>
    </>
  );
}