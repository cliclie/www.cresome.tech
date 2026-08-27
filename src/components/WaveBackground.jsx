import { useEffect, useRef } from 'react';

/**
 * 背景の 3D 波形アニメーション（装飾用・点グリッド描画）
 *
 * Canvas 2D で、XZ 平面上の規則的な点グリッドをサイン波の合成で
 * 変形させ、透視投影で 3D の点状波形として描画する。
 * 背景は透明、点は濃い灰色。波の山は明るく・大きく、谷は淡く。
 * コンテンツより奥側（z-index: 0）のフルビューポート固定 canvas
 * として配置する。
 *
 * 考慮事項:
 * - devicePixelRatio 対応（点がぼやけ・太らない）
 * - リサイズ時に canvas を再構築
 * - 距離によるフェード（地平線付近と手前端で消し、描画負荷も軽減）
 * - prefers-reduced-motion 指定時はアニメーションせず静止波形を表示
 * - タブ非表示時は描画を停止（再表示時に再開）
 */

const TAU = Math.PI * 2;

// 点の色（濃い灰色、RGB）
const DOT_RGB = '200, 200, 210';
// const DOT_RGB = '0, 0, 0'; // デバッグ用（黒点で描画負荷を確認）

// 透視投影の定数（世界座標基準。カメラは z=0 上方 CAM_H に位置）
const Z_NEAR = 150; // 手前側の z（画面下端付近）
const Z_FAR = 1000; // 奥側の z（地平線付近）
const STEP = 24; // グリッド間隔（世界）
const CAM_H = 240; // カメラの高さ
const FOCAL = 600; // 焦点距離
const HORIZON_Y = 0.20; // 地平線（画面高さの割合）— 縦画面でも上から広がる
const MAX_RADIUS = 1; // 点の最大半径（px）
const AMP_REF = 40; // 山判定用の振幅基準値

// 波形の高さ（世界座標）。サイン波 4 種の合成で 3D のうねりを表現
// 速度はすべて低速（rad/s）で、ゆっくり滑らかに動き続ける
const waveY = (x, z, t) =>
  64 * Math.sin(x * 0.006 + z * 0.002 + t * 0.3) +
  24 * Math.sin(z * 0.009 - t * 0.22 + 1.7) +
  12 * Math.sin((x + z) * 0.004 + t * 0.18 + 3.9) +
  6 * Math.sin((z - x * 0.6) * 0.005 - t * 0.14);

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

    // 3D 波形の点グリッドを描画（奥の行から手前の行へ順に描画）
    const drawFrame = () => {
      ctx.clearRect(0, 0, width, height);
      const horizon = height * HORIZON_Y;
      const cx = width / 2;

      for (let z = Z_FAR; z >= Z_NEAR; z -= STEP) {
        const s = FOCAL / z; // 透視スケール
        // この z 行が画面横幅を覆うよう必要な世界 x の半分（少し余裕を確保）
        const xHalf = ((width / 2 + 20) * z) / FOCAL;
        let xStep = STEP;
        // 奥では点の詰まりすぎ、手前では間隔の広すぎを防止するため
        // 実ピクセル間隔を 11〜42px に収めるようステップを調整
        const pxGap = xStep * s;
        if (pxGap < 11) xStep = 11 / s;
        else if (pxGap > 42) xStep = 42 / s;

        const cols = Math.ceil(xHalf / xStep);
        const fade =
          Math.min(1, (z - Z_NEAR) / 220) * Math.min(1, (Z_FAR - z) / 320);
        if (fade <= 0.02) continue;

        for (let i = -cols; i <= cols; i++) {
          const x = i * xStep;
          const y = waveY(x, z, time);
          const sx = cx + x * s;
          const sy = horizon + (CAM_H - y) * s;
          if (sx < -20 || sx > width + 20 || sy < -20 || sy > height + 20) continue;

          // 波の山ほど濃く（高さ因子 0〜1）
          const hf = Math.min(1, Math.max(0, (y / AMP_REF + 1) / 2));
          const alpha = fade * (0.16 + 0.52 * hf);
          if (alpha <= 0.02) continue;

          const r = Math.min(1.8 * s, MAX_RADIUS);

          // ぼかし（グロー）表現: 大きな低透明度の円を重ねて光りのように見せる
          // （shadowBlur は数千点で描画コストが高いため、2層描画で代用）
          ctx.fillStyle = `rgba(${DOT_RGB}, ${alpha * 0.25})`;
          ctx.beginPath();
          ctx.arc(sx, sy, r * 3, 0, TAU);
          ctx.fill();

          // コア部分（本体の点）
          ctx.fillStyle = `rgba(${DOT_RGB}, ${alpha})`;
          ctx.beginPath();
          ctx.arc(sx, sy, r, 0, TAU);
          ctx.fill();
        }
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