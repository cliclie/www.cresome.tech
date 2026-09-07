/**
 * 地図モードの制御UI（メインコンテンツ側の上書きパネル）
 *
 * 地図モード選択時にメインコンテンツ上部へ表示されるオプション操作パネル。
 * 横並びレイアウト（幅不足時は折り返し）+ 半透明白背景。
 *
 * - 始点選択（7駅 / 10始点）
 * - 視点切替（歩行 / 俯瞰）（サブパネル PiP: 地図 canvas に現在の表示モードの反対側を小窓表示）
 * - 向き切替（駅→クリサム / クリサム→駅）
 * - 速度スライダー（徒歩 1.4 m/s 〜 車 14 m/s）
 * - 再生制御（音楽プレーヤー風: ▶/⏸ 中断・再開、⏮ 停止=始点へ戻る）
 * - カメラ操作ヒント（マウス / キーボード）
 */

import { STATION_GROUPS } from '../data/stationPoints';

const SPEED_MIN = 1.4; // 徒歩
const SPEED_MAX = 14;  // 車

export default function MapControls({
  stationId,
  onStationChange,
  viewpoint,
  onViewpointChange,
  direction,
  onDirectionChange,
  speed,
  onSpeedChange,
  playing = true,
  onPlayingChange,
  onResetRoute,
}) {
  return (
    <div className="map-controls">
      <div className="map-controls-group">
        <span className="map-controls-sublabel">始点</span>
        {STATION_GROUPS.map((group) => (
          <div key={group.line} className="map-controls-station-group">
            <span className="map-controls-station-group-label">
              {group.line}
            </span>
            <div className="map-controls-station-items">
              {group.items.map((st) => (
                <button
                  key={st.id}
                  type="button"
                  className={
                    'map-controls-btn' +
                    (stationId === st.id ? ' active' : '')
                  }
                  onClick={() => onStationChange(st.id)}
                >
                  {st.label}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="map-controls-group">
        <span className="map-controls-sublabel">視点</span>
        <div className="map-controls-toggle">
          <button
            type="button"
            className={
              'map-controls-btn' + (viewpoint === 'walking' ? ' active' : '')
            }
            onClick={() => onViewpointChange('walking')}
          >
            歩行
          </button>
          <button
            type="button"
            className={
              'map-controls-btn' + (viewpoint === 'aerial' ? ' active' : '')
            }
            onClick={() => onViewpointChange('aerial')}
          >
            俯瞰
          </button>
        </div>
      </div>

      <div className="map-controls-group">
        <span className="map-controls-sublabel">向き</span>
        <div className="map-controls-toggle">
          <button
            type="button"
            className={
              'map-controls-btn' + (direction === 1 ? ' active' : '')
            }
            onClick={() => onDirectionChange(1)}
          >
            駅 → 社
          </button>
          <button
            type="button"
            className={
              'map-controls-btn' + (direction === -1 ? ' active' : '')
            }
            onClick={() => onDirectionChange(-1)}
          >
            社 → 駅
          </button>
        </div>
      </div>

      <div className="map-controls-group">
        <span className="map-controls-sublabel">
          速度（{speed.toFixed(1)} m/s）
        </span>
        <input
          type="range"
          className="map-controls-slider"
          min={SPEED_MIN}
          max={SPEED_MAX}
          step={0.1}
          value={speed}
          onChange={(e) => onSpeedChange(parseFloat(e.target.value))}
        />
        <div className="map-controls-slider-labels">
          <span>徒歩</span>
          <span>車</span>
        </div>
      </div>

      <div className="map-controls-group">
        <span className="map-controls-sublabel">再生</span>
        <div className="map-controls-player">
          <button
            type="button"
            className="map-controls-player-btn"
            title="停止（最初へ）"
            aria-label="停止（最初へ）"
            onClick={onResetRoute}
          >
            <span className="map-controls-icon map-controls-icon-rewind" />
          </button>
          <button
            type="button"
            className={
              'map-controls-player-btn map-controls-player-main' +
              (playing ? '' : ' paused')
            }
            title={playing ? '中断' : '再開（再生）'}
            aria-label={playing ? '中断' : '再開（再生）'}
            onClick={() => onPlayingChange(!playing)}
          >
            <span
              className={
                'map-controls-icon ' +
                (playing ? 'map-controls-icon-pause' : 'map-controls-icon-play')
              }
            />
          </button>
        </div>
      </div>

      <div className="map-controls-group map-controls-hint">
        <span className="map-controls-sublabel">カメラ操作</span>
        <div className="map-controls-hint-text">
          ドラッグ: 視点回転 / ホイール: ズーム / 右ドラッグ: カメラパン
          <br />
          WASD・矢印: 視点回転 / Q/E: 上下移動 / R: リセット
        </div>
      </div>
    </div>
  );
}
