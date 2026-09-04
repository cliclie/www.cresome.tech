import logo from '../../images/cresome_logo.svg';
import BgSwitcher from './BgSwitcher';
import MapControls from './MapControls';

export default function Sidebar({ items, onSelect, bgMode, onBgModeChange, mapConfig, onMapConfigChange, onMapReset }) {
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

      <div className="sidebar-foot">
        © cresome.tech<br />
        Cresome Technical Works
      </div>
    </aside>
  );
}