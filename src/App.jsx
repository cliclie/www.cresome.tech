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

const PAGES = [
  { id: 'home', label: 'トップ', Component: Home },
  { id: 'business', label: '事業内容', Component: Business },
  { id: 'flow', label: '開発フロー', Component: Flow },
  { id: 'company', label: '会社概要', Component: Company },
];

// 地図モードのデフォルト設定
const MAP_CONFIG_KEY = 'cresome.mapConfig';
const defaultMapConfig = {
  stationId: 'otsuka',
  viewpoint: 'walking',
  direction: 1,
  speed: 5,
  playing: true,
};

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
      const saved = window.localStorage.getItem(MAP_CONFIG_KEY);
      return saved ? { ...defaultMapConfig, ...JSON.parse(saved) } : defaultMapConfig;
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

  // 停止（始点に戻る）: トークンを増やすたびに MapBackground がルートをリセット
  const [mapResetToken, setMapResetToken] = useState(0);
  const resetMapRoute = () => setMapResetToken((n) => n + 1);

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
          resetToken={mapResetToken}
        />
      )}
      <Sidebar
        items={navItems}
        onSelect={showPage}
        bgMode={bgMode}
        onBgModeChange={setBgMode}
        mapConfig={mapConfig}
        onMapConfigChange={updateMapConfig}
        onMapReset={resetMapRoute}
      />
      <Topbar onMenu={() => setDrawerOpen(true)} />
      <Drawer
        items={navItems}
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        onSelect={showPage}
        bgMode={bgMode}
        onBgModeChange={setBgMode}
        mapConfig={mapConfig}
        onMapConfigChange={updateMapConfig}
        onMapReset={resetMapRoute}
      />

      <main className="main">
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