/**
 * 地図モードの制御UI（メインコンテンツ側の上書きパネル）
 *
 * 地図モード選択時にメインコンテンツ上部へ表示されるオプション操作パネル。
 * 横並びレイアウト（幅不足時は折り返し）+ 半透明白背景。
 *
 * - 始点選択（7駅 / 10始点）
 * - 視点切替（歩行 / 俯瞰）（サブパネル PiP: 地図 canvas に現在の表示モードの反対側を小窓表示）
 * - 向き切替（駅→クリサム / クリサム→駅）
 * - 再生制御（音楽プレーヤー風、一段独立）:
 *   ▶ 再生 / ■ 停止（先頭へ）/ ⏸ 一時停止 /
 *   ⏪ 早戻し（速度-2 m/s）/ 速度表示 / スライダー（移動量）/
 *   移動距離表示 / ⏩ 早送り（速度+2 m/s）
 * - カメラ操作ヒント（1行）
 */

import { STATION_GROUPS } from '../data/stationPoints';

export default function MapControls({
  stationId,
  onStationChange,
  viewpoint,
  onViewpointChange,
  direction,
  onDirectionChange,
  speed,
  onSpeedUp,
  onSpeedDown,
  playing,
  onPlay,
  onPause,
  onStop,
  progressM = 0,
  routeLenM = 0,
  onScrub,
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
              {group.stations.map((st) =>
                st.exits ? (
                  <div
                    key={st.name}
                    className="map-controls-station-subgroup"
                  >
                    <span className="map-controls-station-name">
                      {st.name}
                    </span>
                    {st.exits.map((exit) => (
                      <button
                        key={exit.id}
                        type="button"
                        className={
                          'map-controls-btn' +
                          (stationId === exit.id ? ' active' : '')
                        }
                        onClick={() => onStationChange(exit.id)}
                      >
                        {exit.label}
                      </button>
                    ))}
                  </div>
                ) : (
                  <button
                    key={st.id}
                    type="button"
                    className={
                      'map-controls-btn' +
                      (stationId === st.id ? ' active' : '')
                    }
                    onClick={() => onStationChange(st.id)}
                  >
                    {st.name}
                  </button>
                ),
              )}
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

      <div className="map-controls-group map-controls-hint">
        <span className="map-controls-sublabel">カメラ操作</span>
        <span className="map-controls-hint-text">
          ドラッグ: 視点回転 / ホイール: ズーム / 右ドラッグ: パン /
          WASD・矢印: 回転 / Q・E: 上下 / R: リセット
        </span>
      </div>

      <div className="map-controls-group map-controls-group-row">
        <span className="map-controls-sublabel">再生</span>
        <div className="map-controls-player">
          <button
            type="button"
            className="map-controls-player-btn"
            title="再生"
            aria-label="再生"
            onClick={onPlay}
          >
            <span className="map-controls-icon map-controls-icon-play" />
          </button>
          <button
            type="button"
            className="map-controls-player-btn"
            title="停止（先頭へ戻る）"
            aria-label="停止（先頭へ戻る）"
            onClick={onStop}
          >
            <span className="map-controls-icon map-controls-icon-stop" />
          </button>
          <button
            type="button"
            className="map-controls-player-btn"
            title="一時停止"
            aria-label="一時停止"
            onClick={onPause}
          >
            <span className="map-controls-icon map-controls-icon-pause" />
          </button>
          <button
            type="button"
            className="map-controls-player-btn"
            title="早戻し（速度 -2 m/s）"
            aria-label="早戻し（速度を下げる）"
            onClick={onSpeedDown}
          >
            <span className="map-controls-icon map-controls-icon-rw" />
          </button>
          <span className="map-controls-speed">{speed.toFixed(1)} m/s</span>
          <input
            type="range"
            className="map-controls-slider map-controls-slider-progress"
            min={0}
            max={Math.max(routeLenM, 1)}
            step={1}
            value={Math.min(progressM, routeLenM || 0)}
            disabled={routeLenM <= 0}
            onChange={(e) => onScrub(parseInt(e.target.value, 10))}
            aria-label="移動量（メートル）"
          />
          <span className="map-controls-progress-label">
            {routeLenM > 0 ? `${progressM} / ${routeLenM} m` : '--'}
          </span>
          <button
            type="button"
            className="map-controls-player-btn"
            title="早送り（速度 +2 m/s）"
            aria-label="早送り（速度を上げる）"
            onClick={onSpeedUp}
          >
            <span className="map-controls-icon map-controls-icon-ff" />
          </button>
        </div>
      </div>
    </div>
  );
}