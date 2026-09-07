/**
 * 背景エフェクト切替（波 / 宇宙船 / 地図）
 * 右サイドバー（デスクトップ）とドロワー（モバイル）の下部に配置。
 */
export default function BgSwitcher({ value, onChange }) {
  return (
    <div className="bg-switcher">
      <div className="bg-switcher-label">背景</div>
      <div className="bg-switcher-options">
        <button
          type="button"
          className={'bg-switcher-btn' + (value === 'wave' ? ' active' : '')}
          onClick={() => onChange('wave')}
        >
          波
        </button>
        <button
          type="button"
          className={
            'bg-switcher-btn' + (value === 'spacewars' ? ' active' : '')
          }
          onClick={() => onChange('spacewars')}
        >
          宇宙船
        </button>
        <button
          type="button"
          className={'bg-switcher-btn' + (value === 'map' ? ' active' : '')}
          onClick={() => onChange('map')}
        >
          地図
        </button>
      </div>
    </div>
  );
}
