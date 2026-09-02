import { useEffect, useRef } from 'react';

/**
 * Space Wars! 風背景アニメーション（装飾用・ベクター線描画）
 *
 * Canvas 2D で透明背景の上に、ネイビーの細い線のみで描く:
 * - ゆるかに漂う星点（プラネタリウム的星野）
 * - 自機（三角形・両翼。W: 前進（後方中央のメインスラスターからジェット噴射）
 *   / S: 後退減速（前方両舷スラスターから小さな霧）/ A・D: 回転（前後の舷側から
 *   RCS 小噴射）/ スペース: レーザー連射（0.1 秒間隔・同時最大 8 発、完射後は 2 秒の
 *   クールタイム。キーを離すと残りの連射はキャンセル）
 * - 敵機（クルーザー：前面は V 字開口の円、後方はテールフィン 2 本。AI 漂遊）
 *   - 慣性移動し、低頻度で旋回・前後スラスター噴射（加減速）。前方噴射は後方中央の
 *     単一ジェット（自機と同一）。進行方向の速度が上限に達するまでは加速し、到達後は
 *     加速も噴射表示も停止。旋回中は前後の舷側から RCS 小噴射
 *   - レーザー: 機首 0°（正面真直前）の方向にしか撃てない 4 連射（0.3 秒間隔）。
 *     照準はあいまいなリード予測（1 回リード + ランダム誤差）で、その予測位置が
 *     機首方向の狭い扇（±約 14°）に入るたび発射。連射後 2 秒のクールタイム。
 *     弾は画面外に出た瞬間に消滅する。自機に当たると距離に応じて自機を鏡面として
 *     法線反射し、自機レーザーとして転換して飛んでいく（跳ね返されなかった場合は直撃）
 *   - 誘導ミサイルを片舷 2 発・計 4 発装備。内側→外側・左→右の順で 3 秒かけて装填し、
 *     揃ったら 1 秒間隔で順次発射。自機の到達予測位置（距離 ÷ ミサイル最大速度で進んだ位置）
 *     が機首方向 ±30° の内側にあるときのみ発射
 *   - ミサイルは 2 段構成: 発射後 0.7 秒は一段目ブースト（直線飛行・最大速度 210px/s に加速）。
 *     発射後 2 秒は安全信管作動（当たり判定なし）。以降は二段目誘導: 目標が前方（±90°）に
 *     いるときのみ「距離と進行方向」から計算した交戦点（最短で接触する地点）へ旋回速度
 *     制限で機首を向ける、いないときは直線飛行。燃料切れ（発射 5 秒後）で前方噴射・
 *     誘導を停止して直線飛行。加速中は後方中央の単一ジェット、旋回中は先頭/後部の
 *     左右両端にある誘導スラスター 4 箇所から後方外向き 45° へ噴射（自機/敵機と同じ差動）。
 *     航行中は後部に煙の軌跡が残ってじわっと消える。発射 10 秒後に自爆し、
 *     描画範囲外に出たら無音で消滅。安全信管解除後は敵機への偶発接触も当たり判定。
 *     消滅から 10 秒後に再装填
 * - ブラックホール（アスタリスク型の線画。
 *   重力圏内にいる船は距離の二乗に反比例した重力で引き寄せられる。圏の境界線は描画しない）
 * - 弾丸（短い直線。自機レーザーは射程制限なく画面外に出た瞬間に消滅。
 *   敵機レーザーは画面外に出た瞬間に消滅）
 * - 隕石（自機・敵機よりやや小さい不規則多角形。速度・方向ランダムで画面外から
 *   流れ込み、重力の影響を受けながら漂う。自機・敵機に当たると船と隕石がともに爆発。
 *   同時 1〜12 個、画面外へ出たりブラックホール核心に触れたりすると消滅）
 * - 当たり判定: 発射したビームが敵機・自機どちらかに当たると被弾船が爆発
 *   （ブラックホールに当たると弾は消滅）、
 *   船がブラックホールに触れる・自機と敵機が衝突すると爆発
 * - 爆発: 船を構成する各直線が船の中心から回転しながら放射状に飛び散り、
 *   しばらくしてフェードアウト。その後ランダムな位置にワープ演出で出現し、
 *   その場ではランダムな向きで向き直ったうえで、その向きに初速度を与えて直進する
 *   （初期表示時もワープ演出で出現）
 * コンテンツより奥側（z-index: 0）のフルビューポート固定 canvas
 * として配置する。
 *
 * 考慮事項:
 * - devicePixelRatio 対応（点がぼやけ・太らない）
 * - リサイズ時に canvas を再構築
 * - prefers-reduced-motion 指定時はアニメーションせず静止シーンを表示
 * - タブ非表示時は描画を停止（再表示時に再開）
 * - キーボードリスナーはアンマウント時に解除（他の背景モードでは無効）
 */

const TAU = Math.PI * 2;
const LINE = '31, 42, 84'; // ネイビー（--navy と一致）

const STAR_COUNT = 80;
const BH_X = 0.5; // ブラックホールの位置（ビューポート比率・画面中央）
const BH_Y = 0.5;
const GRAV_R_FRAC = 0.36; // 重力圏の半径（width/height の小数比）
const GRAV_STRENGTH = 420000; // 重力強度（距離の二乗に反比例して強くなる）
const GRAV_MIN_DIST = 25; // 重力計算の最小距離（特異点回避）
const WRAP = 40; // 画面端でのラップマージン
const PLAY_AREA_INSET = 64; // プレイエリアのインセット（px）。canvas はこの分だけ画面内側に配置（CSS の inset と一致）

// 自機の物理（宇宙空間のため摩擦なし・加速した速度は維持）
const ACCEL = 98; // 加速度（px/s^2）
const MAX_SPEED = 235; // 速度上限（ソフトキャップ。摩擦ではない）
const ROT_SPEED = 2.4; // 回転速度（rad/s）
const BULLET_SPEED = 520; // 弾の速度（px/s）

// 自機レーザー（連射: 0.1 秒間隔・最大 8 発。完射後は 2 秒クールタイム）
const PLAYER_LASER_BURST = 8; // 連射する発数
const PLAYER_LASER_GAP = 0.1; // 連射の間隔（秒）
const PLAYER_LASER_RELOAD = 2; // 8 発目が終わった後、次の連射までのクールタイム（秒）

// 敵機レーザー（連射: 機首 0° 直前のみ・あいまいなリード予測）
const LASER_BURST = 4; // 連射する発数
const LASER_GAP = 0.3; // 連射の間隔（秒）
const LASER_RELOAD = 2; // 4 発目が終わった後、次の連射までのクールタイム（秒）
const LASER_FIRE_CONE = 0.25; // 発射できる正面扇（機首 0° 中心 ±約 14°）
const LASER_LEAD = 0.6; // リード予測率（1 未満で予測を甘くする）
const LASER_AIM_ERR = 40; // 照準のランダム誤差（px。射線予測をあいまいにする）
const ENEMY_LASER_DEFLECT_RANGE = 800; // 跳ね返し確率が最大値に達する距離（px）
const ENEMY_LASER_DEFLECT_MAX = 0.4; // 最大の跳ね返し確率（距離が長いほど高くなる）

// 当たり判定・爆発・ワープ
const EXP_DUR = 0.9; // 爆発（線分が散開・フェード）の持続時間（秒）
const WARP_DUR = 0.55; // ワープ演出の持続時間（秒）
const BH_HIT_R = 13; // ブラックホールとの接触判定半径
const SHIP_HIT_R = 20; // 自機・敵機の衝突判定距離
const BULLET_SHIP_HIT_R = 15; // 弾 vs 船の接触判定半径
const BULLET_METEOR_HIT_PAD = 4; // 弾 vs 隕石の追加接触半径（隕石の半径に足す）
const BULLET_MISSILE_HIT_R = 10; // 弾 vs ミサイルの接触判定半径
const MISSILE_METEOR_HIT_PAD = 6; // ミサイル vs 隕石の追加接触半径（隕石の半径に足す）
const REAPPEAR_SPEED = 100; // 出現直後の進行方向の初速度（px/s）

// 敵機の慣性挙動（低頻度で方向転換・前後噴射を決める）
const ENEMY_ACCEL = 14; // 敵機・前方スラスターの加速度（px/s^2）。約 3 秒の噴射で最大速度に到達（41/14 ≒ 2.9 秒）
const ENEMY_BRAKE = 17; // 敵機・後方スラスターの減速度（px/s^2）
const ENEMY_MAX_SPEED = 41; // 敵機速度上限（px/s）
const ENEMY_TURN = 0.45; // 敵機の回転速度（rad/s）

// 誘導ミサイル（敵機。片舷 2 発×2 舷 = 4 発。内側→外側・左→右の順で 3 秒かけて装填）
const MISSILE_COUNT = 4;
const MISSILE_LOAD_EACH = 0.75; // 1 発あたりの装填時間（4 × 0.75 = 合計 3 秒）
const MISSILE_FIRE_GAP = 1; // 発射間隔（秒）
const MISSILE_RELOAD_WAIT = 10; // 最後のミサイル消滅後から装填再開までの秒数
const MISSILE_TURN = 0.85; // 誘導の旋回速度上限（rad/s・誘導性は悪め）
const MISSILE_ACCEL = 140; // ミサイルの前方噴射加速度（px/s^2）
const MISSILE_MAX_SPEED = 210; // ミサイル速度上限（px/s）
const MISSILE_BOOST = 0.7; // 一段目ブースト時間（この間直線飛行・最大速度へ加速）
const MISSILE_SAFE = 2; // 安全信管時間（この間当たり判定なし）
const MISSILE_FUEL_TIME = 5; // 燃料総時間（これを超えると前方噴射・誘導を停止して直線飛行）
const MISSILE_LIFE = 10; // 発射後この秒数が経つと自爆
const MISSILE_HIT_R = 16; // ミサイル vs 自機の接触判定半径
const MISSILE_FIRE_CONE = Math.PI / 6; // 発射条件: 自機の到達予測位置と機首方向の許容角度（±30°）
const MISSILE_GAS_ANGLE = Math.PI / 4; // 誘導スラスター 4 箇所の噴出角度（後方外向き・初期 45°・調整用）
const MISSILE_TRAIL_LIFE = 0.6; // 煙の軌跡の持続時間（秒）
const MISSILE_TRAIL_DT = 0.02; // 軌跡ポイントのサンプリング間隔（秒）

// 隕石（ランダム漂遊する背景要素。速度・方向ランダム・画面外から出現・重力の影響あり・当たり判定あり）
const METEOR_MAX = 12; // 同時存在する隕石数の上限（1〜12 個でランダム漂遊）
const METEOR_SIZE_MIN = 8; // 半径最小（px）。自機・敵機よりやや小さめ
const METEOR_SIZE_MAX = 11; // 半径最大（px）
const METEOR_SPEED_MIN = 40; // 速度最小（px/s）
const METEOR_SPEED_MAX = 110; // 速度最大（px/s）
const METEOR_SPAWN_MIN = 3; // ランダム生成の間隔の下限（秒）
const METEOR_SPAWN_MAX = 8; // ランダム生成の間隔の上限（秒）
const METEOR_SHIP_HIT_R = 12; // 隕石 vs 自機・敵機の接触判定の追加半径
const METEOR_OFFSCREEN = 80; // 画面外からの削除マージン（px）

// 自機を構成する線分（機体中心原点・機首 +x 方向のローカル座標）
const PLAYER_SEGS = [
  [[16, 0], [-11, 9]],
  [[-11, 9], [-5, 3.5]],
  [[-5, 3.5], [-8, 0]],
  [[-8, 0], [-5, -3.5]],
  [[-5, -3.5], [-11, -9]],
  [[-11, -9], [16, 0]],
];

// 敵機を構成する線分（前面の V 字開口円弧を 9 区間に分割 + V 字 + テールフィン）
const ENEMY_SEGS = (() => {
  const segs = [];
  const N = 9;
  const a0 = 1.06;
  const a1 = TAU - 1.06;
  for (let i = 0; i < N; i++) {
    const t0 = a0 + ((a1 - a0) * i) / N;
    const t1 = a0 + ((a1 - a0) * (i + 1)) / N;
    segs.push([
      [8 * Math.cos(t0), 8 * Math.sin(t0)],
      [8 * Math.cos(t1), 8 * Math.sin(t1)],
    ]);
  }
  segs.push(
    [[3.9, 7], [11, 0]],
    [[11, 0], [3.9, -7]],
    [[-7, 4], [-17, 8]],
    [[-17, 8], [-27, 8]],
    [[-7, -4], [-17, -8]],
    [[-17, -8], [-27, -8]]
  );
  return segs;
})();

// ミサイルを構成する線分（小さな機体 + テールフィン 2 本。機首 +x 方向）
const MISSILE_SEGS = [
  [[-3, 0], [3, 0]],
  [[-3, -2], [-6, -4]],
  [[-3, 2], [-6, 4]],
];

// ミサイル発射スロット（機体ローカル座標。テールフィンより後方に船体から離して横並び・舷外へオフセット。配列順 = 装填・発射順: 左内・右内・左外・右外）
const MISSILE_SLOTS = [
  { x: -30, y: -13 },
  { x: -30, y: 13 },
  { x: -30, y: -21 },
  { x: -30, y: 21 },
];

// 範囲付き乱数
const rnd = (min, max) => min + Math.random() * (max - min);

export default function SpaceWarsBackground() {
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
    let nextEnemyFire = 3; // 敵機の次に発射する時刻
    let laserShot = 0; // 敵機の現在の連射で撃った発数（0-3）
    let nextPlayerFire = 0; // 自機レーザーの次に発射する時刻
    let playerLaserShot = 0; // 自機の現在の連射で撃った発数（0-7）
    let stars = [];
    let player = null;
    let enemy = null;
    let bullets = [];
    let missiles = [];
    let meteors = [];
    let nextMeteor = 0; // 次の隕石生成時刻
    let explosions = [];
    const keys = { w: false, a: false, s: false, d: false, space: false };

    // 星・自機・敵機を画面サイズに応じて生成
    const buildWorld = () => {
      stars = Array.from({ length: STAR_COUNT }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: rnd(0.5, 1.3),
        a: rnd(0.05, 0.16),
        vx: rnd(-1.5, 1.5),
        vy: rnd(-1, 1),
      }));
      player = {
        x: width * 0.3,
        y: height * 0.45,
        angle: -Math.PI / 2, // 上を向く
        velX: 0,
        velY: 0,
        warp: { t0: time }, // 初期表示時にもワープ演出
        pendingBoost: true,
      };
      enemy = {
        x: width * 0.75,
        y: height * 0.3,
        angle: rnd(0, TAU),
        velX: 0,
        velY: 0,
        turn: 0, // 現在の回転速度（rad/s）
        thrust: false, // 前方スラスター噴射中
        brake: false, // 後方スラスター噴射中
        brakeUntil: 0,
        nextAction: time + rnd(2, 4), // 次の操縦判断の時刻
        arms: {
          phase: 'idle', // idle → loading → firing → waiting
          nextLoad: time + 5, // 装填開始予定時刻（初期配置時は 5 秒のクールダウン）
          loadStart: 0, // 装填開始時刻
          fireIdx: 0, // 発射済みミサイル数
          nextFire: 0, // 次の発射時刻
          lastEnd: 0, // 最後のミサイル消滅時刻
        },
        warp: { t0: time + 0.15 },
        pendingBoost: true,
      };
      nextMeteor = time + rnd(1, 3); // 最初の隕石はロード後 1〜3 秒で出現
    };

    // 画面端でのラップアラウンド
    const wrap = (o) => {
      if (o.x < -WRAP) o.x = width + WRAP;
      else if (o.x > width + WRAP) o.x = -WRAP;
      if (o.y < -WRAP) o.y = height + WRAP;
      else if (o.y > height + WRAP) o.y = -WRAP;
    };

    // 小さな霧の塊（低透明度の円。フレームごとに乱数で揺らぐ）
    const puff = (x, y, r, a) => {
      if (a <= 0.01) return;
      ctx.fillStyle = `rgba(${LINE}, ${a})`;
      ctx.beginPath();
      ctx.arc(x, y, Math.max(r, 0.4), 0, TAU);
      ctx.fill();
    };

    // 旋回用 RCS 小噴射: 先頭・後部の舷側 2 か所から外側へ小さな霧を 2 つずつ
    // frontSide / rearSide は舷側の符号（+1: +y 側、-1: -y 側）
    const rcsPuffs = (frontSide, rearSide, phase) => {
      const flick = 0.4 + 0.6 * Math.abs(Math.sin(time * 24 + phase));
      for (let i = 0; i < 2; i++) {
        const d = 2.5 + i * 3;
        const r = (1.6 + i * 1.2) * (0.75 + 0.5 * Math.random());
        const a = (0.22 - i * 0.08) * flick;
        puff(8, frontSide * (4.5 + d) + (Math.random() - 0.5), r, a);
        puff(-8, rearSide * (5 + d) + (Math.random() - 0.5), r, a);
      }
    };

    // ミサイルの加速噴射: 後方中央の単一ジェット（自機/敵機と同様・小型版）。
    // 後端（x = -3.5）から後方へ 3 段の puff。後方に行くほど大きくなり薄くなる
    const missileThrustPuffs = (phase) => {
      const flick = 0.4 + 0.6 * Math.abs(Math.sin(time * 26 + phase));
      for (let i = 0; i < 3; i++) {
        const d = 2.5 + i * 2.5;
        const r = (1.5 + i * 1.0) * (0.75 + 0.5 * Math.random());
        const a = (0.26 - i * 0.06) * flick;
        puff(-3.5 - d, (Math.random() - 0.5) * 1.2, r, a);
      }
    };

    // ミサイルの誘導スラスター噴射（ノズル 4 箇所）:
    // 先頭の左右両端（x = +2.5）＋後部の左右両端（x = -2.5）。
    // 各ノズルは機体軸に対して後方外向き（MISSILE_GAS_ANGLE = 45°）へ puff が流れ、
    // 差動は自機/敵機 RCS と同じ（右旋回: 先頭左＋後部右、左旋回: 先頭右＋後部左）
    const missileGuidePuffs = (turnDir, phase) => {
      const frontSide = turnDir > 0 ? -1 : 1;
      const rearSide = turnDir > 0 ? 1 : -1;
      const flick = 0.4 + 0.6 * Math.abs(Math.sin(time * 24 + phase));
      const cd = Math.cos(MISSILE_GAS_ANGLE); // 後方方向への成分
      const sd = Math.sin(MISSILE_GAS_ANGLE); // 外向き方向への成分
      for (let i = 0; i < 2; i++) {
        const d = 2 + i * 2.5;
        const r = (1.4 + i * 0.9) * (0.75 + 0.5 * Math.random());
        const a = (0.24 - i * 0.08) * flick;
        puff(2.5 - cd * d, frontSide * (1.2 + sd * d) + (Math.random() - 0.5) * 0.8, r, a);
        puff(-2.5 - cd * d, rearSide * (1.2 + sd * d) + (Math.random() - 0.5) * 0.8, r, a);
      }
    };

    // 隕石を 1 個生成（画面外から出現・進行方向も速度もランダム・不規則多角形の岩）
    const spawnMeteor = () => {
      const r = rnd(METEOR_SIZE_MIN, METEOR_SIZE_MAX);
      const m = 40; // 画面外からの出現マージン
      const side = Math.floor(Math.random() * 4); // 0 上 / 1 右 / 2 下 / 3 左
      let x;
      let y;
      let base;
      if (side === 0) { x = rnd(0, width); y = -m; base = Math.PI / 2; }
      else if (side === 1) { x = width + m; y = rnd(0, height); base = Math.PI; }
      else if (side === 2) { x = rnd(0, width); y = height + m; base = -Math.PI / 2; }
      else { x = -m; y = rnd(0, height); base = 0; }
      const ang = base + rnd(-1.2, 1.2); // 画面内側を向いた方向に ±約 69° のばらつき
      const sp = rnd(METEOR_SPEED_MIN, METEOR_SPEED_MAX);
      // 不規則な多角形（7〜9 頂点）の岩の形状をローカル座標で生成
      const n = 7 + Math.floor(Math.random() * 3);
      const pts = [];
      for (let i = 0; i < n; i++) {
        const a = (i / n) * TAU;
        const rr = r * rnd(0.72, 1.18);
        pts.push([Math.cos(a) * rr, Math.sin(a) * rr]);
      }
      meteors.push({
        x,
        y,
        velX: Math.cos(ang) * sp,
        velY: Math.sin(ang) * sp,
        r,
        angle: rnd(0, TAU),
        angleV: rnd(-0.7, 0.7), // ゆっくりしたランダムな自転
        pts,
        segs: pts.map((p, i2) => [p, pts[(i2 + 1) % pts.length]]), // 爆発（線分散開）用の線分
      });
    };

    // 重力圏の外側・画面端からのマージン内にあるランダムな位置
    const randomRespawnPos = () => {
      const bhcX = width * BH_X;
      const bhcY = height * BH_Y;
      const safe = Math.min(width, height) * GRAV_R_FRAC * 0.8;
      for (let i = 0; i < 12; i++) {
        const x = 60 + Math.random() * Math.max(width - 120, 1);
        const y = 60 + Math.random() * Math.max(height - 120, 1);
        if (Math.hypot(x - bhcX, y - bhcY) > safe) return { x, y };
      }
      return { x: width * 0.2, y: height * 0.2 };
    };

    // 爆発演出（各線分が中心から回転しながら放射状に散る。対象は船・ミサイルの両方）
    const explode = (ship, segs, vx, vy, noRing = false) => {
      const c = Math.cos(ship.angle);
      const s = Math.sin(ship.angle);
      const es = segs.map(([p, q]) => {
        const ax = p[0] * c - p[1] * s;
        const ay = p[0] * s + p[1] * c;
        const bx = q[0] * c - q[1] * s;
        const by = q[0] * s + q[1] * c;
        const mx = (ax + bx) / 2;
        const my = (ay + by) / 2;
        return {
          ax,
          ay,
          bx,
          by,
          ang0: Math.atan2(my, mx),
          r0: Math.max(Math.hypot(mx, my), 4),
          vr: 50 + Math.random() * 110,
          w: (Math.random() < 0.5 ? -1 : 1) * (1.5 + Math.random() * 3),
        };
      });
      explosions.push({ x: ship.x, y: ship.y, vx, vy, t0: time, segs: es, noRing });
    };

    // 船を撃破する（死亡フラグを立て爆発演出を発火）
    const kill = (ship, segs, vx, vy) => {
      if (ship.dead) return;
      ship.dead = true;
      ship.deadUntil = time + EXP_DUR;
      explode(ship, segs, vx, vy);
    };

    // ランダム位置にワープ演出で再出現（新しいランダムな向きで向き直し、その向きへ初速度）
    const respawn = (ship) => {
      const pos = randomRespawnPos();
      ship.x = pos.x;
      ship.y = pos.y;
      ship.angle = Math.random() * TAU; // ランダムな向きで向き直す
      ship.velX = 0; // 死亡時の旧速度をクリアし、船体表示と運動方向を一致させる
      ship.velY = 0;
      ship.dead = false;
      ship.warp = { t0: time };
      ship.pendingBoost = true;
    };

    // ワープ演出（放射状の線 + 拡大リング。最後にかけて機体フェードイン）
    const drawWarpFx = (ship) => {
      const t = (time - ship.warp.t0) / WARP_DUR;
      if (t < 0 || t >= 1 || reducedMotion.matches) return;
      const a = 0.4 * (1 - t);
      ctx.lineWidth = 1;
      ctx.strokeStyle = `rgba(${LINE}, ${a})`;
      ctx.beginPath();
      for (let i = 0; i < 8; i++) {
        const ang = ship.angle + (i * TAU) / 8 + time * 2.5;
        const r0 = 6 + 10 * t;
        const r1 = r0 + 12 + 40 * t;
        ctx.moveTo(ship.x + Math.cos(ang) * r0, ship.y + Math.sin(ang) * r0);
        ctx.lineTo(ship.x + Math.cos(ang) * r1, ship.y + Math.sin(ang) * r1);
      }
      ctx.stroke();
      ctx.strokeStyle = `rgba(${LINE}, ${0.3 * (1 - t)})`;
      ctx.beginPath();
      ctx.arc(ship.x, ship.y, 4 + 50 * t, 0, TAU);
      ctx.stroke();
    };

    // ワープ演出中の機体アルファ（後半にかけてフェードイン。reduced-motion 時は常時 1）
    const warpAlpha = (ship) => {
      if (!ship.warp || reducedMotion.matches) return 1;
      const t = (time - ship.warp.t0) / WARP_DUR;
      return t < 0.55 ? 0 : Math.min((t - 0.55) / 0.45, 1);
    };

    // 物理更新（dt 秒）
    const step = (dt) => {
      for (const s of stars) {
        s.x += s.vx * dt;
        s.y += s.vy * dt;
        if (s.x < -2) s.x += width + 4;
        else if (s.x > width + 2) s.x -= width + 4;
        if (s.y < -2) s.y += height + 4;
        else if (s.y > height + 2) s.y -= height + 4;
      }
      // 自機の物理（死んでいる間はスキップ）
      if (!player.dead) {
        // W/S で加速・減速、A/D で回転。慣性を維持（摩擦なし）
        const dirX = Math.cos(player.angle);
        const dirY = Math.sin(player.angle);
        if (keys.w) {
          player.velX += dirX * ACCEL * dt;
          player.velY += dirY * ACCEL * dt;
        }
        if (keys.s) {
          player.velX -= dirX * ACCEL * dt;
          player.velY -= dirY * ACCEL * dt;
        }
        const sp = Math.hypot(player.velX, player.velY);
        if (sp > MAX_SPEED) {
          const k = MAX_SPEED / sp;
          player.velX *= k;
          player.velY *= k;
        }
        player.x += player.velX * dt;
        player.y += player.velY * dt;
        if (keys.a) player.angle -= ROT_SPEED * dt;
        if (keys.d) player.angle += ROT_SPEED * dt;
        wrap(player);
      }
      // ブラックホールの重力（距離の二乗に反比例。重力圏内なら引き寄せられる）
      const bhcX = width * BH_X;
      const bhcY = height * BH_Y;
      const gravR = Math.min(width, height) * GRAV_R_FRAC;
      const gravAt = (o) => {
        const dx = bhcX - o.x;
        const dy = bhcY - o.y;
        const dist = Math.hypot(dx, dy);
        if (dist >= gravR || dist === 0) return null;
        const d = Math.max(dist, GRAV_MIN_DIST);
        const a = Math.min(GRAV_STRENGTH / (d * d), 900);
        return { x: (dx / dist) * a, y: (dy / dist) * a };
      };
      const pg = gravAt(player);
      if (pg) {
        player.velX += pg.x * dt;
        player.velY += pg.y * dt;
      }
      // 自機レーザー連射（0.1 秒間隔・同時 8 発まで。完射後は 2 秒クールタイム。
      // キーを離すと残りの連射をキャンセルし、次は最初から連射し直す）
      if (!player.dead) {
        const playerBullets = bullets.reduce((n, b) => n + (b.o === 'p' ? 1 : 0), 0);
        if (keys.space && time >= nextPlayerFire && playerLaserShot < PLAYER_LASER_BURST && playerBullets < PLAYER_LASER_BURST) {
          bullets.push({
            x: player.x + Math.cos(player.angle) * 20,
            y: player.y + Math.sin(player.angle) * 20,
            a: player.angle,
            o: 'p',
          });
          playerLaserShot += 1;
          if (playerLaserShot >= PLAYER_LASER_BURST) {
            playerLaserShot = 0;
            nextPlayerFire = time + PLAYER_LASER_RELOAD; // 完射後はクールタイム
          } else {
            nextPlayerFire = time + PLAYER_LASER_GAP;
          }
        }
        if (!keys.space && playerLaserShot > 0) {
          playerLaserShot = 0;
          nextPlayerFire = 0; // キー離下で連射・クールタイムをリセット
        }
      } else {
        playerLaserShot = 0; // 被弾時は連射状態をリセット
        nextPlayerFire = 0;
      }
      // 敵機: 慣性ベース。低頻度で旋回・前後噴射を決める（死んでいる間はスキップ）
      if (!enemy.dead) {
        if (time >= enemy.nextAction) {
          const r = Math.random();
          enemy.turn = r < 0.3 ? ENEMY_TURN : r < 0.55 ? -ENEMY_TURN : 0;
          const t = Math.random();
          if (t < 0.45) {
            enemy.thrust = true;
            enemy.brake = false;
          } else if (t < 0.62) {
            enemy.thrust = false;
            enemy.brake = true;
            enemy.brakeUntil = time + rnd(1, 2);
          } else {
            enemy.thrust = false;
            enemy.brake = false;
          }
          enemy.nextAction = time + rnd(3, 7);
        }
        if (enemy.brake && time >= enemy.brakeUntil) enemy.brake = false;
        enemy.angle += enemy.turn * dt;
        // 加速停止は「進行方向（機首方向）の速度が最高速度に達したとき」のみ。
        // 横方向の慣性移動中や、機首を反転させて減速（逆進）している場合はスラスターを維持できる
        const eFwd = enemy.velX * Math.cos(enemy.angle) + enemy.velY * Math.sin(enemy.angle);
        if (enemy.thrust && eFwd < ENEMY_MAX_SPEED) {
          enemy.velX += Math.cos(enemy.angle) * ENEMY_ACCEL * dt;
          enemy.velY += Math.sin(enemy.angle) * ENEMY_ACCEL * dt;
        }
        if (enemy.brake) {
          enemy.velX -= Math.cos(enemy.angle) * ENEMY_BRAKE * dt;
          enemy.velY -= Math.sin(enemy.angle) * ENEMY_BRAKE * dt;
        }
        const eg = gravAt(enemy);
        if (eg) {
          enemy.velX += eg.x * dt;
          enemy.velY += eg.y * dt;
        }
        const esp = Math.hypot(enemy.velX, enemy.velY);
        if (esp > ENEMY_MAX_SPEED) {
          const k = ENEMY_MAX_SPEED / esp;
          enemy.velX *= k;
          enemy.velY *= k;
        }
        enemy.x += enemy.velX * dt;
        enemy.y += enemy.velY * dt;
        wrap(enemy);
        // 誘導ミサイルの装填・発射状態機械（idle → loading → firing → waiting）
        const arms = enemy.arms;
        if (arms.phase === 'idle' && time >= arms.nextLoad) {
          arms.phase = 'loading';
          arms.loadStart = time;
        } else if (arms.phase === 'loading' && time - arms.loadStart >= MISSILE_COUNT * MISSILE_LOAD_EACH) {
          arms.phase = 'firing';
          arms.fireIdx = 0;
          arms.nextFire = time + 0.4;
        } else if (arms.phase === 'firing') {
          // 発射から自機到達までの推定時間（距離 ÷ ミサイル最大速度）だけ進んだ自機の
          // 予測位置が、機首方向 ±30° 内にあるときのみ発射
          let inAimLine = false;
          if (!player.dead) {
            const dist = Math.hypot(player.x - enemy.x, player.y - enemy.y);
            const tLead = dist / MISSILE_MAX_SPEED; // ミサイルが目標距離まで到達する推定時間
            const leadX = player.x + player.velX * tLead; // 自機の到達予測位置
            const leadY = player.y + player.velY * tLead;
            const aim = Math.atan2(leadY - enemy.y, leadX - enemy.x);
            let relA = ((aim - enemy.angle) % TAU + TAU) % TAU;
            if (relA > Math.PI) relA -= TAU;
            inAimLine = Math.abs(relA) <= MISSILE_FIRE_CONE;
          }
          if (inAimLine && time >= arms.nextFire && arms.fireIdx < MISSILE_COUNT) {
            const slot = MISSILE_SLOTS[arms.fireIdx];
            const c = Math.cos(enemy.angle);
            const s = Math.sin(enemy.angle);
            missiles.push({
              x: enemy.x + slot.x * c - slot.y * s,
              y: enemy.y + slot.x * s + slot.y * c,
              angle: enemy.angle, // 発射直後の速度・方向は敵船と同じ
              velX: enemy.velX,
              velY: enemy.velY,
              born: time, // 発射時刻（安全信管・燃料・自爆タイマー用）
              turnDir: 0, // 旋回方向（誘導スラスター噴射の表示用: -1 / 0 / +1）
              trail: [], // 煙の軌跡ポイント { x, y, t }
              trailAt: 0, // 前回の軌跡記録時刻
            });
            arms.fireIdx += 1;
            arms.nextFire = time + MISSILE_FIRE_GAP;
          }
          if (arms.fireIdx >= MISSILE_COUNT) arms.phase = 'waiting';
        } else if (arms.phase === 'waiting' && missiles.length === 0 && time - arms.lastEnd >= MISSILE_RELOAD_WAIT) {
          arms.phase = 'idle';
          arms.nextLoad = time;
        }
        // 敵機レーザー: 0.3 秒間隔の 4 連射。機首 0°（正面真直前）にしか撃てない。
        // 照準はあいまいなリード予測（1 回リード + ランダム誤差）。射程は画面外までなので距離制限は不要。
        // 機首方向の扇に入るあいまい照準のときのみ発射
        if (time >= nextEnemyFire && !player.dead) {
          const d = Math.hypot(player.x - enemy.x, player.y - enemy.y);
          // あいまいな到達予測: リード率 0.6 の 1 回リード + ランダム誤差
          const t = d / BULLET_SPEED;
          const px = player.x + player.velX * t * LASER_LEAD + rnd(-LASER_AIM_ERR, LASER_AIM_ERR);
          const py = player.y + player.velY * t * LASER_LEAD + rnd(-LASER_AIM_ERR, LASER_AIM_ERR);
          const aim = Math.atan2(py - enemy.y, px - enemy.x);
          let relA = ((aim - enemy.angle) % TAU + TAU) % TAU;
          if (relA > Math.PI) relA -= TAU;
          if (Math.abs(relA) <= LASER_FIRE_CONE) {
            bullets.push({
              x: enemy.x + Math.cos(enemy.angle) * 14,
              y: enemy.y + Math.sin(enemy.angle) * 14,
              a: enemy.angle, // 機首 0°（正面真直前）のみ
              o: 'e',
            });
            laserShot += 1;
            nextEnemyFire =
              laserShot >= LASER_BURST ? time + LASER_RELOAD : time + LASER_GAP; // 4 発目後はクールタイム
            if (laserShot >= LASER_BURST) laserShot = 0;
          }
        }
      }
      // 弾: 直線飛行し、画面外に出た瞬間に消滅（自機・敵機ともに射程制限なし）
      for (let i = bullets.length - 1; i >= 0; i--) {
        const m = bullets[i];
        m.x += Math.cos(m.a) * BULLET_SPEED * dt;
        m.y += Math.sin(m.a) * BULLET_SPEED * dt;
        if (
          m.x < -WRAP || m.x > width + WRAP || m.y < -WRAP || m.y > height + WRAP
        ) {
          bullets.splice(i, 1);
        }
      }
      // ミサイル: 2 段構成（一段目 ブースト 0.7 秒、直線・最大速度到達 → 二段目 誘導。安全信管 2 秒は当たり判定なし）
      // 誘導は慣性: 「距離と進行方向」から計算した交戦点（最短で接触する地点）へ機首を回す
      // 目標が前方（±90°）にないとき・燃料切れ・自機破壊中・自機描画範囲外は直線飛行
      for (const m of missiles) {
        const age = time - m.born;
        const outOfFuel = age >= MISSILE_FUEL_TIME; // 燃料切れ: 前方噴射・誘導をやめ直線飛行
        const targetGone =
          player.dead ||
          player.x < 0 || player.x > width ||
          player.y < 0 || player.y > height;
        const canGuide = age >= MISSILE_BOOST && !outOfFuel && !targetGone; // 一段目ブースト終了後のみ誘導
        if (canGuide) {
          // 誘導は目標（現在位置）が機首の前方 ±90° 内にあるときのみ行う
          const toTarget = Math.atan2(player.y - m.y, player.x - m.x);
          let relT = ((toTarget - m.angle) % TAU + TAU) % TAU;
          if (relT > Math.PI) relT -= TAU;
          if (Math.abs(relT) <= Math.PI / 2) {
            // 交戦点: 相対位置 d = P - M、相対速度 w = Vp - Vm のとき、
            // t* = -(d・w)/|w|^2 が両者が最近接する時刻（最短で接触する地点）
            const dx = player.x - m.x;
            const dy = player.y - m.y;
            const wx = player.velX - m.velX;
            const wy = player.velY - m.velY;
            const w2 = wx * wx + wy * wy;
            let t = w2 < 1e-6 ? 0 : -(dx * wx + dy * wy) / w2;
            if (t < 0) t = 0; // 目標を「追い越す」場合は現在位置へ
            const ix = player.x + player.velX * t;
            const iy = player.y + player.velY * t;
            const tx = Math.atan2(iy - m.y, ix - m.x);
            let da = ((tx - m.angle) % TAU + TAU) % TAU;
            if (da > Math.PI) da -= TAU;
            const mt = MISSILE_TURN * dt;
            const turn = Math.max(-mt, Math.min(mt, da));
            m.turnDir = Math.abs(da) > 0.05 ? (da > 0 ? 1 : -1) : 0; // 有効な旋回中は誘導スラスター噴射表示
            m.angle += turn;
          } else {
            m.turnDir = 0; // 前方に目標がない: 直線飛行・旋回噴射なし
          }
        } else {
          m.turnDir = 0; // ブースト中・燃料切れ・目標不在は直線飛行
        }
        if (!outOfFuel) {
          m.velX += Math.cos(m.angle) * MISSILE_ACCEL * dt;
          m.velY += Math.sin(m.angle) * MISSILE_ACCEL * dt;
        }
        const sp = Math.hypot(m.velX, m.velY);
        if (sp > MISSILE_MAX_SPEED) {
          const k = MISSILE_MAX_SPEED / sp;
          m.velX *= k;
          m.velY *= k;
        }
        m.x += m.velX * dt;
        m.y += m.velY * dt;
        // 煙の軌跡: 後方の位置を一定間隔で記録し、持続時間が過ぎた古い点を破棄
        if (!outOfFuel && time - m.trailAt >= MISSILE_TRAIL_DT) {
          m.trail.push({ x: m.x, y: m.y, t: time });
          m.trailAt = time;
        }
        while (m.trail.length && time - m.trail[0].t > MISSILE_TRAIL_LIFE) m.trail.shift();
      }
      // ミサイルの消滅: 自機命中（爆発）・敵機への偶発接触（爆発）・ブラックホール吸収（無音）・
      // 10 秒経過で自爆（爆発）・描画範囲外は無音で消滅（爆発なし）
      for (let i = missiles.length - 1; i >= 0; i--) {
        const m = missiles[i];
        const safe = time - m.born < MISSILE_SAFE; // 安全信管: 当たり判定なし
        const hitPlayer = !safe && !player.dead && Math.hypot(m.x - player.x, m.y - player.y) < MISSILE_HIT_R;
        // 信管解除後は、敵機にたまたま当たっても当たり判定とする（敵機が被弾・爆発）
        const hitEnemy = !safe && !enemy.dead && Math.hypot(m.x - enemy.x, m.y - enemy.y) < MISSILE_HIT_R;
        const absorbed = Math.hypot(m.x - bhcX, m.y - bhcY) < BH_HIT_R;
        const selfBoom = time - m.born >= MISSILE_LIFE; // 10 秒経過で自爆
        const offScreen = m.x < 0 || m.x > width || m.y < 0 || m.y > height; // 描画範囲外は無音で消滅
        if (!hitPlayer && !hitEnemy && !absorbed && !selfBoom && !offScreen) continue;
        if (hitPlayer) kill(player, PLAYER_SEGS, player.velX, player.velY);
        if (hitEnemy) kill(enemy, ENEMY_SEGS, enemy.velX, enemy.velY);
        if (hitPlayer || hitEnemy || selfBoom) explode(m, MISSILE_SEGS, m.velX * 0.4, m.velY * 0.4, true);
        missiles.splice(i, 1);
        enemy.arms.lastEnd = time;
      }
      // 隕石: ランダム生成（同時 1〜12 個・上限 12 ・無い場合は約 1.5 秒以内に再出現）
      if (time >= nextMeteor) {
        if (meteors.length < METEOR_MAX) {
          spawnMeteor();
          nextMeteor = time + rnd(METEOR_SPAWN_MIN, METEOR_SPAWN_MAX);
        } else {
          nextMeteor = time + 0.5; // 上限に達している間はやや早めに再チェック
        }
      } else if (meteors.length === 0) {
        nextMeteor = time + Math.min(nextMeteor - time, 1.5); // 隕石が 0 個なら 1.5 秒以内に出現させる
      }
      for (let i = meteors.length - 1; i >= 0; i--) {
        const mt = meteors[i];
        const mg = gravAt(mt); // 隕石も重力の影響を受ける
        if (mg) {
          mt.velX += mg.x * dt;
          mt.velY += mg.y * dt;
        }
        mt.x += mt.velX * dt;
        mt.y += mt.velY * dt;
        mt.angle += mt.angleV * dt;
        // 当たり判定: 自機・敵機に当たると船と隕石がともに爆発
        let boom = false;
        if (!player.dead && Math.hypot(mt.x - player.x, mt.y - player.y) < mt.r + METEOR_SHIP_HIT_R) {
          kill(player, PLAYER_SEGS, player.velX, player.velY);
          boom = true;
        }
        if (!enemy.dead && Math.hypot(mt.x - enemy.x, mt.y - enemy.y) < mt.r + METEOR_SHIP_HIT_R) {
          kill(enemy, ENEMY_SEGS, enemy.velX, enemy.velY);
          boom = true;
        }
        if (!boom && Math.hypot(mt.x - bhcX, mt.y - bhcY) < BH_HIT_R + mt.r) boom = true; // ブラックホール核心に触れると壊滅
        const gone =
          mt.x < -METEOR_OFFSCREEN || mt.x > width + METEOR_OFFSCREEN ||
          mt.y < -METEOR_OFFSCREEN || mt.y > height + METEOR_OFFSCREEN;
        if (boom) explode(mt, mt.segs, mt.velX * 0.4, mt.velY * 0.4, true);
        if (boom || gone) meteors.splice(i, 1);
      }
      // 隕石同士の当たり判定: 接触するとともに爆発
      {
        const hit = new Set();
        for (let i = 0; i < meteors.length; i++) {
          for (let j = i + 1; j < meteors.length; j++) {
            const a = meteors[i];
            const b = meteors[j];
            if (Math.hypot(a.x - b.x, a.y - b.y) < a.r + b.r) {
              hit.add(i);
              hit.add(j);
            }
          }
        }
        if (hit.size > 0) {
          for (const idx of hit) {
            explode(meteors[idx], meteors[idx].segs, meteors[idx].velX * 0.4, meteors[idx].velY * 0.4, true);
          }
          meteors = meteors.filter((_, idx) => !hit.has(idx));
        }
      }

      // 当たり判定: ビーム vs 船 / ブラックホール / 隕石 / ミサイル
      for (let i = bullets.length - 1; i >= 0; i--) {
        const m = bullets[i];
        let removeBullet = false;
        const target = m.o === 'p' ? enemy : player;
        if (!target.dead && Math.hypot(m.x - target.x, m.y - target.y) < BULLET_SHIP_HIT_R) {
          if (m.o === 'p') {
            removeBullet = true;
            kill(enemy, ENEMY_SEGS, enemy.velX, enemy.velY);
          } else {
            // 跳ね返し判定: 敵機との距離が長いほど跳ね返す確率が高い
            const dist = Math.hypot(player.x - enemy.x, player.y - enemy.y);
            const deflectProb = ENEMY_LASER_DEFLECT_MAX * Math.min(1, dist / ENEMY_LASER_DEFLECT_RANGE);
            if (Math.random() >= deflectProb) {
              removeBullet = true;
              kill(player, PLAYER_SEGS, player.velX, player.velY);
            } else {
              // 反射: プレイヤーを鏡面としてレーザーを反射（法線反射）
              const nx = m.x - player.x;
              const ny = m.y - player.y;
              const nd = Math.hypot(nx, ny) || 1;
              const nnx = nx / nd;
              const nny = ny / nd;
              const vx = Math.cos(m.a);
              const vy = Math.sin(m.a);
              const dot = vx * nnx + vy * nny;
              m.a = Math.atan2(vy - 2 * dot * nny, vx - 2 * dot * nnx);
              m.o = 'p'; // 自機弾に転換（敵機への命中判定が有効になる）
              m.x = player.x + nnx * (BULLET_SHIP_HIT_R + 2);
              m.y = player.y + nny * (BULLET_SHIP_HIT_R + 2);
            }
          }
        }
        if (!removeBullet && Math.hypot(m.x - bhcX, m.y - bhcY) < BH_HIT_R) {
          removeBullet = true; // ブラックホールに吸収される
        }
        if (!removeBullet) {
          // ビーム vs 隕石
          for (let j = meteors.length - 1; j >= 0; j--) {
            const mt = meteors[j];
            if (Math.hypot(m.x - mt.x, m.y - mt.y) < mt.r + BULLET_METEOR_HIT_PAD) {
              explode(mt, mt.segs, mt.velX * 0.4, mt.velY * 0.4, true);
              meteors.splice(j, 1);
              removeBullet = true;
              break;
            }
          }
        }
        if (!removeBullet) {
          // ビーム vs ミサイル
          for (let j = missiles.length - 1; j >= 0; j--) {
            const ms = missiles[j];
            if (Math.hypot(m.x - ms.x, m.y - ms.y) < BULLET_MISSILE_HIT_R) {
              explode(ms, MISSILE_SEGS, ms.velX * 0.4, ms.velY * 0.4, true);
              missiles.splice(j, 1);
              enemy.arms.lastEnd = time;
              removeBullet = true;
              break;
            }
          }
        }
        if (removeBullet) bullets.splice(i, 1);
      }
      // ミサイル vs 隕石（安全信管解除後のみ当たり判定）
      for (let i = missiles.length - 1; i >= 0; i--) {
        const ms = missiles[i];
        if (time - ms.born < MISSILE_SAFE) continue;
        for (let j = meteors.length - 1; j >= 0; j--) {
          const mt = meteors[j];
          if (Math.hypot(ms.x - mt.x, ms.y - mt.y) < mt.r + MISSILE_METEOR_HIT_PAD) {
            explode(ms, MISSILE_SEGS, ms.velX * 0.4, ms.velY * 0.4, true);
            explode(mt, mt.segs, mt.velX * 0.4, mt.velY * 0.4, true);
            missiles.splice(i, 1);
            meteors.splice(j, 1);
            enemy.arms.lastEnd = time;
            break;
          }
        }
      }
      if (!player.dead && Math.hypot(player.x - bhcX, player.y - bhcY) < BH_HIT_R) {
        kill(player, PLAYER_SEGS, player.velX, player.velY);
      }
      if (!enemy.dead && Math.hypot(enemy.x - bhcX, enemy.y - bhcY) < BH_HIT_R) {
        kill(enemy, ENEMY_SEGS, enemy.velX, enemy.velY);
      }
      if (
        !player.dead &&
        !enemy.dead &&
        Math.hypot(player.x - enemy.x, player.y - enemy.y) < SHIP_HIT_R
      ) {
        kill(player, PLAYER_SEGS, player.velX, player.velY);
        kill(enemy, ENEMY_SEGS, enemy.velX, enemy.velY);
      }
      // 爆発が終わったらランダム位置にワープで再出現
      if (player.dead && time >= player.deadUntil) respawn(player);
      if (enemy.dead && time >= enemy.deadUntil) {
        respawn(enemy);
        enemy.arms = { phase: 'idle', nextLoad: time + 5, loadStart: 0, fireIdx: 0, nextFire: 0, lastEnd: 0 }; // 再出現時は 5 秒クールダウン
        laserShot = 0; // レーザー連射の状態をリセット
        nextEnemyFire = time + 3;
      }
      // ワープが終わったら進行方向の初速度を与える
      if (player.pendingBoost && time >= player.warp.t0 + WARP_DUR) {
        player.velX = Math.cos(player.angle) * REAPPEAR_SPEED;
        player.velY = Math.sin(player.angle) * REAPPEAR_SPEED;
        player.pendingBoost = false;
      }
      if (enemy.pendingBoost && time >= enemy.warp.t0 + WARP_DUR) {
        enemy.velX = Math.cos(enemy.angle) * ENEMY_MAX_SPEED;
        enemy.velY = Math.sin(enemy.angle) * ENEMY_MAX_SPEED;
        enemy.pendingBoost = false;
      }
      // 終了した爆発を削除
      explosions = explosions.filter((e) => time - e.t0 < EXP_DUR);
    };

    const drawFrame = () => {
      ctx.clearRect(0, 0, width, height);

      // 星
      for (const s of stars) {
        ctx.fillStyle = `rgba(${LINE}, ${s.a})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, TAU);
        ctx.fill();
      }

      // ブラックホール本体（アスタリスク型の線画・ゆっくり回転。重力圏の大きな円は描画しない）
      const bhcX = width * BH_X;
      const bhcY = height * BH_Y;
      ctx.lineWidth = 1;
      const rot = time * 0.25;
      ctx.strokeStyle = `rgba(${LINE}, 0.42)`;
      for (let i = 0; i < 3; i++) {
        const ang = rot + (i * TAU) / 3;
        const L = 14;
        ctx.beginPath();
        ctx.moveTo(bhcX - Math.cos(ang) * L, bhcY - Math.sin(ang) * L);
        ctx.lineTo(bhcX + Math.cos(ang) * L, bhcY + Math.sin(ang) * L);
        ctx.stroke();
      }
      // 本体周りの薄い輪
      ctx.strokeStyle = `rgba(${LINE}, 0.14)`;
      ctx.beginPath();
      ctx.arc(bhcX, bhcY, 9, 0, TAU);
      ctx.stroke();

      // 隕石（不規則多角形の線画・ゆっくり自転する漂遊要素）
      ctx.strokeStyle = `rgba(${LINE}, 0.4)`;
      for (const mt of meteors) {
        const c = Math.cos(mt.angle);
        const s = Math.sin(mt.angle);
        ctx.beginPath();
        mt.pts.forEach(([px, py], i2) => {
          const wx = mt.x + px * c - py * s;
          const wy = mt.y + px * s + py * c;
          if (i2 === 0) ctx.moveTo(wx, wy);
          else ctx.lineTo(wx, wy);
        });
        ctx.closePath();
        ctx.stroke();
      }

      // 弾（短い線）
      ctx.strokeStyle = `rgba(${LINE}, 0.45)`;
      for (const m of bullets) {
        ctx.beginPath();
        ctx.moveTo(m.x - Math.cos(m.a) * 9, m.y - Math.sin(m.a) * 9);
        ctx.lineTo(m.x, m.y);
        ctx.stroke();
      }

      // ミサイルの煙の軌跡（後方に残ってじわっと消える霧。新しい点ほど小さく濃く）
      for (const m of missiles) {
        for (const p of m.trail) {
          const f = 1 - (time - p.t) / MISSILE_TRAIL_LIFE; // 1（新）→ 0（古）
          if (f <= 0) continue;
          puff(p.x, p.y, 1.1 + (1 - f) * 2.2, 0.14 * f);
        }
      }
      // ミサイル（短い線。ブースト → 誘導の 2 段飛行。加速噴射＋誘導スラスター噴射）
      ctx.strokeStyle = `rgba(${LINE}, 0.5)`;
      for (let i = 0; i < missiles.length; i++) {
        const m = missiles[i];
        const c = Math.cos(m.angle);
        const s = Math.sin(m.angle);
        ctx.beginPath();
        ctx.moveTo(m.x - c * 3.5, m.y - s * 3.5);
        ctx.lineTo(m.x + c * 3.5, m.y + s * 3.5);
        ctx.stroke();
        ctx.save();
        ctx.translate(m.x, m.y);
        ctx.rotate(m.angle);
        // 加速噴射: 後方中央の単一ジェット（自機/敵機と同様）。最高速度到達後・燃料切れ後は出さない
        if (time - m.born < MISSILE_FUEL_TIME && Math.hypot(m.velX, m.velY) < MISSILE_MAX_SPEED) {
          missileThrustPuffs(i * 0.6);
        }
        // 誘導スラスター噴射: 右旋回は先頭左＋後部右、左旋回は先頭右＋後部左
        if (m.turnDir !== 0) {
          missileGuidePuffs(m.turnDir, i * 0.6);
        }
        ctx.restore();
      }

      // 爆発（船を構成する直線が慣性を継いで回転しながら放射状に散り、フェードアウト）
      ctx.lineWidth = 1;
      for (const e of explosions) {
        const age = time - e.t0;
        if (age < 0 || age >= EXP_DUR) continue;
        const fade = age < 0.5 ? 1 : 1 - (age - 0.5) / (EXP_DUR - 0.5);
        const alpha = 0.5 * fade;
        const cx = e.x + e.vx * age;
        const cy = e.y + e.vy * age;
        if (!e.noRing && age < 0.4) {
          ctx.strokeStyle = `rgba(${LINE}, ${0.35 * (1 - age / 0.4)})`;
          ctx.beginPath();
          ctx.arc(cx, cy, 5 + age * 220, 0, TAU);
          ctx.stroke();
        }
        ctx.strokeStyle = `rgba(${LINE}, ${alpha})`;
        ctx.beginPath();
        for (const g of e.segs) {
          const th = g.ang0 + g.w * age;
          const dist = g.r0 + g.vr * age;
          const mx = cx + Math.cos(th) * dist;
          const my = cy + Math.sin(th) * dist;
          const phi = g.w * 0.5 * age;
          const cph = Math.cos(phi);
          const sph = Math.sin(phi);
          const hx = (g.bx - g.ax) / 2;
          const hy = (g.by - g.ay) / 2;
          const rx = hx * cph - hy * sph;
          const ry = hx * sph + hy * cph;
          ctx.moveTo(mx - rx, my - ry);
          ctx.lineTo(mx + rx, my + ry);
        }
        ctx.stroke();
      }

      // 敵機（クルーザー：前面は V 字開口の円（V の先端が機首）、後方はテールフィン 2 本）
      if (!enemy.dead) {
        const eAlpha = warpAlpha(enemy);
        ctx.lineWidth = 1;
        ctx.save();
        ctx.translate(enemy.x, enemy.y);
        ctx.rotate(enemy.angle);
        ctx.strokeStyle = `rgba(${LINE}, ${0.32 * eAlpha})`;
        // 前面体：前方に V 字開口を持つ円弧（V の先端が機首）
        ctx.beginPath();
        ctx.arc(0, 0, 8, 1.06, TAU - 1.06); // 約 131° の V 字開口
        ctx.moveTo(3.9, 7);
        ctx.lineTo(11, 0);
        ctx.lineTo(3.9, -7);
        ctx.stroke();
        // 後方：外側に張り出し、後方へ伸びるテールフィン 2 本
        ctx.beginPath();
        ctx.moveTo(-7, 4);
        ctx.lineTo(-17, 8);
        ctx.lineTo(-27, 8);
        ctx.moveTo(-7, -4);
        ctx.lineTo(-17, -8);
        ctx.lineTo(-27, -8);
        ctx.stroke();
        // 前方スラスター: 後方中央の単一ジェット（自機と同一。霧が断続噴出）
        // 加速停止条件（step と同一: 進行方向の速度が最高速度）に合せて噴射演出も止める
        const eFwd = enemy.velX * Math.cos(enemy.angle) + enemy.velY * Math.sin(enemy.angle);
        if (eAlpha >= 1 && enemy.thrust && eFwd < ENEMY_MAX_SPEED) {
          const flick = 0.4 + 0.6 * Math.abs(Math.sin(time * 26));
          for (let i = 0; i < 3; i++) {
            const d = 5 + i * 5;
            const r = (3 + i * 2.4) * (0.75 + 0.5 * Math.random());
            puff(-9 - d, (Math.random() - 0.5) * 2.4, r, (0.26 - i * 0.06) * flick);
          }
        }
        // 後方スラスター: 前方から噴射する（船体から少し離して）
        if (eAlpha >= 1 && enemy.brake) {
          const f = (0.26 + 0.16 * Math.abs(Math.cos(time * 26))) * eAlpha;
          ctx.strokeStyle = `rgba(${LINE}, ${f})`;
          ctx.beginPath();
          ctx.moveTo(12, 3);
          ctx.lineTo(18, 4.5);
          ctx.moveTo(12, -3);
          ctx.lineTo(18, -4.5);
          ctx.stroke();
        }
        // 旋回時 RCS 小噴射: 右回転（時計回り）は先頭左側・後部右側、左回転は先頭右側・後部左側
        if (eAlpha >= 1 && enemy.turn !== 0) {
          rcsPuffs(enemy.turn > 0 ? -1 : 1, enemy.turn > 0 ? 1 : -1, 0.7);
        }
        // ミサイル発射スロット（片舷 2 発。装填中はフェードイン、発射後は消滅）
        const arms = enemy.arms;
        if (arms.phase === 'loading' || arms.phase === 'firing') {
          MISSILE_SLOTS.forEach((slot, i) => {
            const p =
              arms.phase === 'firing'
                ? i >= arms.fireIdx ? 1 : 0
                : Math.min(Math.max((time - arms.loadStart - i * MISSILE_LOAD_EACH) / MISSILE_LOAD_EACH, 0), 1);
            if (p <= 0) return;
            ctx.strokeStyle = `rgba(${LINE}, ${0.32 * p * eAlpha})`;
            ctx.beginPath();
            ctx.moveTo(slot.x - 2.5, slot.y);
            ctx.lineTo(slot.x + 2.5, slot.y);
            ctx.stroke();
          });
        }
        ctx.restore();
        if (enemy.warp) drawWarpFx(enemy);
      }

      // 自機（三角形。二本の足を翼として常時表示）
      if (!player.dead) {
        const pAlpha = warpAlpha(player);
        ctx.save();
        ctx.translate(player.x, player.y);
        ctx.rotate(player.angle);
        ctx.strokeStyle = `rgba(${LINE}, ${0.5 * pAlpha})`;
        ctx.beginPath();
        ctx.moveTo(16, 0); // 鼻先
        ctx.lineTo(-11, 9); // 左翼先
        ctx.lineTo(-5, 3.5); // 左翼内側
        ctx.lineTo(-8, 0); // 後部ノッチ（メインスラスター位置）
        ctx.lineTo(-5, -3.5); // 右翼内側
        ctx.lineTo(-11, -9); // 右翼先
        ctx.closePath();
        ctx.stroke();
        // メインスラスター（後方中央）: 前進加速時に霧が断続噴出するジェット
        if (pAlpha >= 1 && keys.w) {
          const flick = 0.4 + 0.6 * Math.abs(Math.sin(time * 26));
          for (let i = 0; i < 3; i++) {
            const d = 5 + i * 5;
            const r = (3 + i * 2.4) * (0.75 + 0.5 * Math.random());
            puff(-9 - d, (Math.random() - 0.5) * 2.4, r, (0.26 - i * 0.06) * flick);
          }
        }
        // 両舷スラスター（前方の翼上）: 後退減速時に小さく霧が断続噴出
        if (pAlpha >= 1 && keys.s) {
          const flick = 0.4 + 0.6 * Math.abs(Math.cos(time * 24));
          [6, -6].forEach((sy) => {
            for (let i = 0; i < 2; i++) {
              const d = 3 + i * 3.5;
              const r = (1.7 + i * 1.1) * (0.75 + 0.5 * Math.random());
              puff(
                9 + d,
                sy * (1 + 0.16 * d) + (Math.random() - 0.5) * 1.2,
                r,
                (0.2 - i * 0.07) * flick
              );
            }
          });
        }
        // 旋回時 RCS 小噴射: 右回転（D）は先頭左側・後部右側、左回転（A）は先頭右側・後部左側
        if (pAlpha >= 1 && (keys.a || keys.d)) {
          rcsPuffs(keys.d ? -1 : 1, keys.d ? 1 : -1, 1.3);
        }
        ctx.restore();
        if (player.warp) drawWarpFx(player);
      }
    };

    // canvas サイズを再構築して描画（devicePixelRatio を反映）
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth - 2 * PLAY_AREA_INSET;
      height = window.innerHeight - 2 * PLAY_AREA_INSET;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (!player) buildWorld();
      drawFrame();
    };

    const tick = (now) => {
      if (lastTime !== null) {
        const dt = Math.min((now - lastTime) / 1000, 0.1);
        time += dt;
        step(dt);
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

    // タブ非表示時は描画停止（非表示中にキーを離した場合 keyup が届かないためキー状態もクリア）、再表示時は再開
    const onVisibility = () => {
      if (document.hidden) {
        stop();
        clearKeys();
      } else start();
    };

    // reduced motion 設定が変わったらアニメーション / 静止を切替
    const onMotionChange = () => {
      stop();
      if (reducedMotion.matches) drawFrame();
      else start();
    };

    // キーボード操作（W: 前進 / S: 後進 / A・D: 回転 / スペース: レーザー連射）
    // e.code（物理キー）で判定するため、日本語 IME・CapsLock・キーボードレイアウトに依存しない
    // Ctrl / Meta / Alt 押下中の keydown は無視: ショートカット（Ctrl+S・Alt+Tab 等）で
    // ブラウザが横取りし keyup がページに届かなくなり、キー状態が固着するのを防ぐ
    const keyOf = (e) => {
      switch (e.code) {
        case 'KeyW':
          return 'w';
        case 'KeyA':
          return 'a';
        case 'KeyS':
          return 's';
        case 'KeyD':
          return 'd';
        case 'Space':
          return 'space';
        default:
          return '';
      }
    };
    const isControlKey = (k) =>
      k === 'w' || k === 'a' || k === 's' || k === 'd' || k === 'space';
    const clearKeys = () => {
      keys.w = false;
      keys.a = false;
      keys.s = false;
      keys.d = false;
      keys.space = false;
    };
    const onKeyDown = (e) => {
      const k = keyOf(e);
      if (!isControlKey(k)) return;
      if (e.ctrlKey || e.metaKey || e.altKey) return; // ショートカット経由の keyup 欠落による固着防止
      const t = e.target;
      if (
        t &&
        (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable)
      )
        return;
      keys[k] = true;
      if (k === 'space') e.preventDefault(); // ページスクロールを防止
    };
    const onKeyUp = (e) => {
      const k = keyOf(e);
      if (isControlKey(k)) keys[k] = false;
    };
    const onWindowBlur = () => {
      clearKeys();
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);
    window.addEventListener('blur', onWindowBlur);
    document.addEventListener('visibilitychange', onVisibility);
    reducedMotion.addEventListener('change', onMotionChange);
    start();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup', onKeyUp);
      window.removeEventListener('blur', onWindowBlur);
      document.removeEventListener('visibilitychange', onVisibility);
      reducedMotion.removeEventListener('change', onMotionChange);
      stop();
    };
  }, []);

  return <canvas ref={canvasRef} className="sw-bg" aria-hidden="true" />;
}
