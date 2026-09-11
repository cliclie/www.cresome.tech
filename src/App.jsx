import { useState, useEffect, useRef } from 'react';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Drawer from './components/Drawer';
import WaveBackground from './components/WaveBackground';
import SpaceWarsBackground from './components/SpaceWarsBackground';
import MapBackground from './components/MapBackground';
import MapControls from './components/MapControls';
import Home from './pages/Home';
import Business from './pages/Business';
import Flow from './pages/Flow';
import Company from './pages/Company';
import { START_POINT_IDS } from './data/stationPoints';

const PAGES = [
  { id: 'home', label: 'トップ', Component: Home },
  { id: 'business', label: '事業内容', Component: Business },
  { id: 'flow', label: '開発フロー', Component: Flow },
  { id: 'company', label: '会社概要', Component: Company },
];

// 地図モードのデフォルト設定
const MAP_CONFIG_KEY = 'cresome.mapConfig';
// 自動モード: 直近 10 回の選択履歴（"stationId:direction"）。localStorage に保存しセッションをまたいで重複防止
const MAP_AUTO_HISTORY_KEY = 'cresome.mapAutoHistory';
const MAP_AUTO_HISTORY_MAX = 10;
const defaultMapConfig = {
  stationId: 'otsuka',
  viewpoint: 'walking',
  direction: 1,
  speed: 5,
  playing: true,
  mode: 'auto',
};

// 自動モードの選択履歴を復元（不正データ → 空配列）
function loadAutoHistory() {
  try {
    const raw = window.localStorage.getItem(MAP_AUTO_HISTORY_KEY);
    const arr = raw ? JSON.parse(raw) : [];
    return Array.isArray(arr)
      ? arr.filter((s) => typeof s === 'string').slice(0, MAP_AUTO_HISTORY_MAX)
      : [];
  } catch {
    return [];
  }
}

export default function App() {
  const [current, setCurrent] = useState('home');
  const [leaving, setLeaving] = useState(false);
  const [entering, setEntering] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [bgMode, setBgMode] = useState(
    () =>
      window.localStorage.getItem('cresome.bgMode') || 'wave'
  );

  // 地図モードの設定（駅・視点・向き・速度）
  const [mapConfig, setMapConfig] = useState(() => {
    try {
      const raw = window.localStorage.getItem(MAP_CONFIG_KEY);
      const saved = raw ? JSON.parse(raw) : {};
      return {
        ...defaultMapConfig,
        ...saved,
        // 旧バージョンの駅 ID（例: 旧 shin_otsuka）は無効なのでデフォルトへ
        stationId: START_POINT_IDS.includes(saved.stationId)
          ? saved.stationId
          : defaultMapConfig.stationId,
        // mode なしの旧データは既定の自動へ
        mode: saved.mode === 'manual' ? 'manual' : defaultMapConfig.mode,
      };
    } catch {
      return defaultMapConfig;
    }
  });

  const transitioningRef = useRef(false);

  // 背景モードの永続化
  useEffect(() => {
    window.localStorage.setItem('cresome.bgMode', bgMode);
  }, [bgMode]);

  // 地図設定の永続化
  useEffect(() => {
    window.localStorage.setItem(MAP_CONFIG_KEY, JSON.stringify(mapConfig));
  }, [mapConfig]);

  // reveal（フェードイン）: 表示された要素を IntersectionObserver で検出
  useEffect(() => {
    const els = document.querySelectorAll('.reveal:not(.in)');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el, i) => {
      el.style.transitionDelay = (i % 5) * 70 + 'ms';
      io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  const showPage = (id) => {
    if (id === current || transitioningRef.current) return;
    transitioningRef.current = true;
    setDrawerOpen(false);
    setLeaving(true);
    setTimeout(() => {
      setCurrent(id);
      setLeaving(false);
      setEntering(true);
      setTimeout(() => {
        setEntering(false);
        transitioningRef.current = false;
      }, 560);
    }, 340);
  };

  const navItems = PAGES.map((p) => ({
    id: p.id,
    label: p.label,
    active: p.id === current,
  }));

  const updateMapConfig = (updates) => {
    setMapConfig((prev) => ({ ...prev, ...updates }));
  };

  // 停止（始点へリセット）: MapBackground が公開した seekTo を呼ぶ
  const mapApiRef = useRef(null);

  // ルート進行度（メートル）: スライダー表示用（MapBackground が整数m変化時に報告）
  const [mapProgress, setMapProgress] = useState({ m: 0, len: 0 });
  // 開始カウントダウン（3/2/1、進行中は null）: 歩行視点側のオーバーレイ表示用
  const [mapCountdown, setMapCountdown] = useState(null);

  // サブパネル（PiP）ウィンドウの ref（MapBackground が描画）
  const pipRef = useRef(null);

  // 自動モード: 直近選択履歴（重複防止用）
  const autoHistoryRef = useRef(null);
  if (autoHistoryRef.current === null) autoHistoryRef.current = loadAutoHistory();

  // 自動モード: 直近 10 回に選んだ始点＋方向を除いた組み合わせをランダムに選び、履歴へ記録
  const pickAutoCombo = () => {
    const combos = START_POINT_IDS.flatMap((id) => [
      { stationId: id, direction: 1 },
      { stationId: id, direction: -1 },
    ]);
    const recent = autoHistoryRef.current;
    const available = combos.filter(
      (c) => !recent.includes(`${c.stationId}:${c.direction}`),
    );
    const pool = available.length > 0 ? available : combos;
    const pick = pool[Math.floor(Math.random() * pool.length)];
    autoHistoryRef.current = [
      `${pick.stationId}:${pick.direction}`,
      ...recent,
    ].slice(0, MAP_AUTO_HISTORY_MAX);
    try {
      window.localStorage.setItem(
        MAP_AUTO_HISTORY_KEY,
        JSON.stringify(autoHistoryRef.current),
      );
    } catch {
      // 書き込み失敗は無視（履歴が永続化されなくなるだけ）
    }
    return pick;
  };

  // 自動モード: 地図表示へ入る／自動へ切替るとき即再抽選
  // （前セッションの自動選択＝履歴先頭 がそのまま表示中なら引き継ぎ）
  useEffect(() => {
    if (bgMode !== 'map' || mapConfig.mode !== 'auto') return;
    if (
      autoHistoryRef.current[0] ===
      `${mapConfig.stationId}:${mapConfig.direction}`
    ) {
      return;
    }
    const pick = pickAutoCombo();
    updateMapConfig({ stationId: pick.stationId, direction: pick.direction });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bgMode, mapConfig.mode]);

  // 自動モード: ルートループ開始（MapBackground.onRouteLoop）で始点・向きを再抽選
  const onMapRouteLoop = () => {
    if (mapConfig.mode !== 'auto') return;
    const pick = pickAutoCombo();
    updateMapConfig({ stationId: pick.stationId, direction: pick.direction });
  };

  return (
    <>
      {bgMode === 'wave' ? (
        <WaveBackground />
      ) : bgMode === 'spacewars' ? (
        <SpaceWarsBackground />
      ) : (
        <MapBackground
          stationId={mapConfig.stationId}
          viewpoint={mapConfig.viewpoint}
          direction={mapConfig.direction}
          speed={mapConfig.speed}
          playing={mapConfig.playing}
          apiRef={mapApiRef}
          onProgress={(m, len) => setMapProgress({ m, len })}
          onCountdown={(cd) => setMapCountdown(cd)}
          onRouteLoop={onMapRouteLoop}
          pipRef={pipRef}
        />
      )}
      <Sidebar
        items={navItems}
        onSelect={showPage}
        bgMode={bgMode}
        onBgModeChange={setBgMode}
      />
      <Topbar onMenu={() => setDrawerOpen(true)} />
      <Drawer
        items={navItems}
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        onSelect={showPage}
        bgMode={bgMode}
        onBgModeChange={setBgMode}
      />

      <main className="main">
        {bgMode === 'map' && mapConfig && (
          <>
            {mapConfig.viewpoint === 'walking' && mapCountdown != null && (
              <div className="map-countdown" key={mapCountdown} aria-hidden="true">
                {mapCountdown}
              </div>
            )}
            <div className="map-bottom">
              <MapControls
                mode={mapConfig.mode}
                onModeChange={(m) => updateMapConfig({ mode: m })}
                stationId={mapConfig.stationId}
                onStationChange={(id) => updateMapConfig({ stationId: id })}
                viewpoint={mapConfig.viewpoint}
                onViewpointChange={(v) => updateMapConfig({ viewpoint: v })}
                direction={mapConfig.direction}
                onDirectionChange={(d) => updateMapConfig({ direction: d })}
                speed={mapConfig.speed}
                onSpeedUp={() =>
                  updateMapConfig({ speed: Math.min(14, mapConfig.speed + 2) })
                }
                onSpeedDown={() =>
                  updateMapConfig({ speed: Math.max(1.4, mapConfig.speed - 2) })
                }
                playing={mapConfig.playing}
                onPlay={() => updateMapConfig({ playing: true })}
                onPause={() => updateMapConfig({ playing: false })}
                onStop={() => {
                  if (mapApiRef.current) mapApiRef.current.seekTo(0);
                  updateMapConfig({ playing: false });
                }}
                progressM={mapProgress.m}
                routeLenM={mapProgress.len}
                onScrub={(m) => mapApiRef.current?.seekTo(m)}
              />
              <div className="map-pip" ref={pipRef}>
                <span className="map-pip-label">
                  {mapConfig.viewpoint === 'aerial' ? '歩行' : '俯瞰'}
                </span>
                {mapConfig.viewpoint === 'aerial' && mapCountdown != null && (
                  <span className="map-pip-countdown" key={mapCountdown} aria-hidden="true">
                    {mapCountdown}
                  </span>
                )}
              </div>
            </div>
          </>
        )}
        <div className="page-wrap">
          {PAGES.map(({ id, Component }) => (
            <section
              key={id}
              id={'page-' + id}
              className={
                'page' +
                (id === current ? ' active' : '') +
                (id === current && leaving ? ' leave' : '') +
                (id === current && entering ? ' enter' : '')
              }
            >
              <Component />
            </section>
          ))}
        </div>
      </main>
    </>
  );
}