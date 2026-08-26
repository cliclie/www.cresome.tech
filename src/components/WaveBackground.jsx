import { useEffect, useRef } from 'react';

/**
 * 背景の波線アニメーション（装飾用・線のみ描画）
 *
 * Canvas 2D でサイン波を 3 本描画する。塗りつぶしはせず、
 * 薄い灰色の線のみで表す。コンテンツより奥側（z-index: 0）の
 * フルビューポート固定 canvas として配置する。
 *
 * 考慮事項:
 * - devicePixelRatio 対応（線がぼやけ・太らない）
 * - リサイズ時に canvas を再構築
 * - prefers-reduced-motion 指定時はアニメーションせず静止波線を表示
 * - タブ非表示時は描画を停止（再表示時に再開）
 */

// 各波線の設定
//   y:     垂直位置（ビューポート高さの割合）— 画面中央より上に寄せ、互いに重なる間隔で配置
//   amp:   振幅（px）— 波長に比例して設定（波長が長い → 振幅が大きい）
//   len:   波長（px）
//   speed: 速さ（rad/s）
//   phase: 初期位相（rad）
//   alpha: 不透明度
const WAVES = [
  { y: 0.34, amp: 29, len: 600, speed: 0.5, phase: 0.0, alpha: 0.55 },
  { y: 0.38, amp: 22, len: 460, speed: 0.34, phase: 2.2, alpha: 0.4 },
  { y: 0.42, amp: 15, len: 320, speed: 0.44, phase: 4.4, alpha: 0.3 },
];

// 波線の色（薄い灰色、RGB）
const WAVE_RGB = '205, 208, 220';

export default function WaveBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext('2d');
    if (!ctx) return undefined;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let rafId = null;
    let lastTime = null;
    let time = 0; // 経過時間（秒）
    let width = 0;
    let height = 0;

    // 波線をすべて描画（線引きのみ）
    const drawFrame = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.lineWidth = 1.5;
      ctx.lineJoin = 'round';
      for (const w of WAVES) {
        ctx.strokeStyle = `rgba(${WAVE_RGB}, ${w.alpha})`;
        ctx.beginPath();
        const baseY = height * w.y;
        for (let x = 0; x <= width + 5; x += 5) {
          const y =
            baseY + w.amp * Math.sin((x / w.len) * Math.PI * 2 + time * w.speed + w.phase);
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
    };

    // canvas サイズを再構築して描画（devicePixelRatio を反映）
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      drawFrame();
    };

    const tick = (now) => {
      if (lastTime !== null) {
        time += Math.min((now - lastTime) / 1000, 0.1);
      }
      lastTime = now;
      drawFrame();
      rafId = requestAnimationFrame(tick);
    };

    const stop = () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
    };

    const start = () => {
      if (rafId === null && !reducedMotion.matches) {
        lastTime = null;
        rafId = requestAnimationFrame(tick);
      }
    };

    // タブ非表示時は描画停止、再表示時は再開
    const onVisibility = () => {
      if (document.hidden) stop();
      else start();
    };

    // reduced motion 設定が変わったらアニメーション / 静止を切替
    const onMotionChange = () => {
      stop();
      if (reducedMotion.matches) drawFrame();
      else start();
    };

    resize();
    window.addEventListener('resize', resize);
    document.addEventListener('visibilitychange', onVisibility);
    reducedMotion.addEventListener('change', onMotionChange);
    start();

    return () => {
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', onVisibility);
      reducedMotion.removeEventListener('change', onMotionChange);
      stop();
    };
  }, []);

  return <canvas ref={canvasRef} className="wave-bg" aria-hidden="true" />;
}