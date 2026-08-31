import { useEffect, useRef } from 'react';

/**
 * Space Wars! 風背景アニメーション（装飾用・ベクター線描画）
 *
 * Canvas 2D で透明背景の上に、ネイビーの細い線のみで描く:
 * - ゆるかに漂う星点（プラネタリウム的星野）
 * - 自機（三角形・両翼。W: 前進（後方中央のメインスラスターからジェット噴射）
 *   / S: 後退減速（前方両舷スラスターから小さな霧）/ A・D: 回転（前後の舷側から
 *   RCS 小噴射）/ スペース: 弾発射（クールタイムなし。同時弾数 8 発まで）
 * - 敵機（クルーザー：前面は V 字開口の円、後方はテールフィン 2 本。AI 漂遊）
 *   - 慣性移動し、低頻度で旋回・前後スラスター噴射（加減速）。前方噴射は後方中央の
 *     単一ジェット（自機と同一）。旋回中は前後の舷側から RCS 小噴射
 *   - レーザー: 機首 0°（正面真直前）の方向にしか撃てない 4 連射（0.3 秒間隔）。
 *     照準はあいまいなリード予測（1 回リード + ランダム誤差）で、その予測位置が
 *     機首方向の狭い扇（±約 14°）かつ射程内（弾の到達距離）のときのみ発射。
 *     連射後 2 秒のクールタイム。
 *   - 誘導ミサイルを片舷 2 発・計 4 発装備。内側→外側・左→右の順で 3 秒かけて装填し、
 *     揃ったら 1 秒間隔で順次発射。ミサイルも慣性で飛行（左右旋回と前方噴射のみ、
 *     誘導性は悪め）、自機の着弾予測位置へ誘導。航行距離 3300px、画面外、または自機
 *     破壊時には自爆。安全信管解除後は敵機への偶発接触も当たり判定。消滅から 10 秒後に再装填
 * - ブラックホール（アスタリスク型の線画。薄い広い重力圏の円を持ち、
 *   圏内にいる船は距離の二乗に反比例した重力で引き寄せられる）
 * - 弾丸（短い直線）
 * - 当たり判定: 発射したビームが敵機・自機どちらかに当たると被弾船が爆発
 *   （ブラックホールに当たると弾は消滅）、
 *   船がブラックホールに触れる・自機と敵機が衝突すると爆発
 * - 爆発: 船を構成する各直線が船の中心から回転しながら放射状に飛び散り、
 *   しばらくしてフェードアウト。その後ランダムな位置にワープ演出で出現し、
 *   進行方向に速度を与える（初期表示時もワープ演出で出現）
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

// 自機の物理（宇宙空間のため摩擦なし・加速した速度は維持）
const ACCEL = 98; // 加速度（px/s^2）
const MAX_SPEED = 235; // 速度上限（ソフトキャップ。摩擦ではない）
const ROT_SPEED = 2.4; // 回転速度（rad/s）
const MAX_BULLETS = 8; // 同時存在する弾の数上限（自機＋敵機合計）
const BULLET_SPEED = 520; // 弾の速度（px/s）
const BULLET_LIFE = 1.2; // 弾の寿命（秒）

// 敵機レーザー（連射: 機首 0° 直前のみ・あいまいなリード予測・射程内のみ）
const LASER_BURST = 4; // 連射する発数
const LASER_GAP = 0.3; // 連射の間隔（秒）
const LASER_RELOAD = 2; // 4 発目が終わった後、次の連射までのクールタイム（秒）
const LASER_RANGE = BULLET_SPEED * BULLET_LIFE; // 有効射程（弾が飛べる距離）
const LASER_FIRE_CONE = 0.25; // 発射できる正面扇（機首 0° 中心 ±約 14°）
const LASER_LEAD = 0.6; // リード予測率（1 未満で予測を甘くする）
const LASER_AIM_ERR = 40; // 照準のランダム誤差（px。射線予測をあいまいにする）

// 当たり判定・爆発・ワープ
const EXP_DUR = 0.9; // 爆発（線分が散開・フェード）の持続時間（秒）
const WARP_DUR = 0.55; // ワープ演出の持続時間（秒）
const BH_HIT_R = 13; // ブラックホールとの接触判定半径
const SHIP_HIT_R = 20; // 自機・敵機の衝突判定距離
const BULLET_SHIP_HIT_R = 15; // 弾 vs 船の接触判定半径
const REAPPEAR_SPEED = 100; // 出現直後の進行方向の初速度（px/s）

// 敵機の慣性挙動（低頻度で方向転換・前後噴射を決める）
const ENEMY_ACCEL = 21; // 敵機・前方スラスターの加速度（px/s^2）
const ENEMY_BRAKE = 17; // 敵機・後方スラスターの減速度（px/s^2）
const ENEMY_MAX_SPEED = 34; // 敵機速度上限（px/s）
const ENEMY_TURN = 0.45; // 敵機の回転速度（rad/s）

// 誘導ミサイル（敵機。片舷 2 発×2 舷 = 4 発。内側→外側・左→右の順で 3 秒かけて装填）
const MISSILE_COUNT = 4;
const MISSILE_LOAD_EACH = 0.75; // 1 発あたりの装填時間（4 × 0.75 = 合計 3 秒）
const MISSILE_FIRE_GAP = 1; // 発射間隔（秒）
const MISSILE_RELOAD_WAIT = 10; // 最後のミサイル消滅後から装填再開までの秒数
const MISSILE_TURN = 0.85; // 誘導の旋回速度上限（rad/s・誘導性は悪め）
const MISSILE_ACCEL = 140; // ミサイルの前方噴射加速度（px/s^2）
const MISSILE_MAX_SPEED = 210; // ミサイル速度上限（px/s）
const MISSILE_RANGE = 3300; // 自爆する航行距離（px）
const MISSILE_HIT_R = 16; // ミサイル vs 自機の接触判定半径
const MISSILE_FUSE = 2; // 安全信管：発射後この秒数間は当たり判定なし（秒）
const MISSILE_FIRE_CONE = Math.PI / 4; // 発射条件: 予測射線と機首方向の許容角度（±45°・おおまかな判定）

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
    let laserShot = 0; // 現在の連射で撃った発数（0-3）
    let stars = [];
    let player = null;
    let enemy = null;
    let bullets = [];
    let missiles = [];
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
    const explode = (ship, segs, vx, vy) => {
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
      explosions.push({ x: ship.x, y: ship.y, vx, vy, t0: time, segs: es });
    };

    // 船を撃破する（死亡フラグを立て爆発演出を発火）
    const kill = (ship, segs, vx, vy) => {
      if (ship.dead) return;
      ship.dead = true;
      ship.deadUntil = time + EXP_DUR;
      explode(ship, segs, vx, vy);
    };

    // ランダム位置にワープ演出で再出現
    const respawn = (ship) => {
      const pos = randomRespawnPos();
      ship.x = pos.x;
      ship.y = pos.y;
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
      // 自機発射（スペース、クールタイムなし。同時弾数で上限）
      if (!player.dead && keys.space && bullets.length < MAX_BULLETS) {
        bullets.push({
          x: player.x + Math.cos(player.angle) * 20,
          y: player.y + Math.sin(player.angle) * 20,
          a: player.angle,
          life: 0,
          o: 'p',
        });
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
        if (enemy.thrust) {
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
          // 予測射線内に自機が入ったときのみ発射（目標の到達予測位置を大まかにリードして判定）
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
              born: time, // 安全信管用の発射時刻
              dist: 0,
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
        // 照準はあいまいなリード予測（1 回リード + ランダム誤差）で、予測位置が機首の狭い扇かつ射程内のときのみ
        if (time >= nextEnemyFire && !player.dead && bullets.length < MAX_BULLETS) {
          const d = Math.hypot(player.x - enemy.x, player.y - enemy.y);
          if (d <= LASER_RANGE) {
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
                life: 0,
                o: 'e',
              });
              laserShot += 1;
              nextEnemyFire =
                laserShot >= LASER_BURST ? time + LASER_RELOAD : time + LASER_GAP; // 4 発目後はクールタイム
              if (laserShot >= LASER_BURST) laserShot = 0;
            }
          }
        }
      }
      // 弾: 直線飛行し、寿命で消滅
      for (const m of bullets) {
        m.life += dt;
        m.x += Math.cos(m.a) * BULLET_SPEED * dt;
        m.y += Math.sin(m.a) * BULLET_SPEED * dt;
      }
      // ミサイル: 慣性誘導（左右旋回と前方噴射のみ・誘導性は悪め）
      // 自機の現在位置ではなく、着弾予測位置（射線予測: 自機の速度で到達時刻までの移動を予測）へ誘導
      for (const m of missiles) {
        let ix = player.x;
        let iy = player.y;
        for (let it = 0; it < 2; it++) {
          const d = Math.hypot(ix - m.x, iy - m.y);
          const t = d / MISSILE_MAX_SPEED; // 推定到達時間
          ix = player.x + player.velX * t; // 自機の着弾予測位置
          iy = player.y + player.velY * t;
        }
        const tx = Math.atan2(iy - m.y, ix - m.x);
        let da = ((tx - m.angle) % TAU + TAU) % TAU;
        if (da > Math.PI) da -= TAU;
        const mt = MISSILE_TURN * dt;
        m.angle += Math.max(-mt, Math.min(mt, da));
        m.velX += Math.cos(m.angle) * MISSILE_ACCEL * dt;
        m.velY += Math.sin(m.angle) * MISSILE_ACCEL * dt;
        let sp = Math.hypot(m.velX, m.velY);
        if (sp > MISSILE_MAX_SPEED) {
          const k = MISSILE_MAX_SPEED / sp;
          m.velX *= k;
          m.velY *= k;
          sp = MISSILE_MAX_SPEED;
        }
        m.x += m.velX * dt;
        m.y += m.velY * dt;
        m.dist += sp * dt;
      }
      // ミサイルの消滅: 自機命中（爆発）・敵機への偶発接触（爆発）・自機破壊時（全弾自爆）・
      // ブラックホール吸収（無音）・航行距離・画面外で自爆
      for (let i = missiles.length - 1; i >= 0; i--) {
        const m = missiles[i];
        // 自機が破壊された場合: 航行中のミサイルは全て自爆
        if (player.dead) {
          explode(m, MISSILE_SEGS, m.velX * 0.4, m.velY * 0.4);
          missiles.splice(i, 1);
          enemy.arms.lastEnd = time;
          continue;
        }
        const safe = time - m.born < MISSILE_FUSE; // 安全信管：発射直後は当たり判定なし
        const hitPlayer = !safe && Math.hypot(m.x - player.x, m.y - player.y) < MISSILE_HIT_R;
        // 信管解除後は、敵機にたまたま当たっても当たり判定とする（敵機が被弾・爆発）
        const hitEnemy = !safe && !enemy.dead && Math.hypot(m.x - enemy.x, m.y - enemy.y) < MISSILE_HIT_R;
        const absorbed = Math.hypot(m.x - bhcX, m.y - bhcY) < BH_HIT_R;
        const selfBoom = m.dist >= MISSILE_RANGE;
        const offScreen = m.x < -WRAP || m.x > width + WRAP || m.y < -WRAP || m.y > height + WRAP;
        if (!hitPlayer && !hitEnemy && !absorbed && !selfBoom && !offScreen) continue;
        if (hitPlayer) kill(player, PLAYER_SEGS, player.velX, player.velY);
        if (hitEnemy) kill(enemy, ENEMY_SEGS, enemy.velX, enemy.velY);
        if (hitPlayer || hitEnemy || selfBoom || offScreen) explode(m, MISSILE_SEGS, m.velX * 0.4, m.velY * 0.4);
        missiles.splice(i, 1);
        enemy.arms.lastEnd = time;
      }
      // 当たり判定: ビーム vs 船 / ビーム vs ブラックホール / 船 vs ブラックホール / 自機 vs 敵機
      for (let i = bullets.length - 1; i >= 0; i--) {
        const m = bullets[i];
        const target = m.o === 'p' ? enemy : player;
        if (!target.dead && Math.hypot(m.x - target.x, m.y - target.y) < BULLET_SHIP_HIT_R) {
          bullets.splice(i, 1);
          if (m.o === 'p') {
            kill(enemy, ENEMY_SEGS, enemy.velX, enemy.velY);
          } else {
            kill(player, PLAYER_SEGS, player.velX, player.velY);
          }
        } else if (Math.hypot(m.x - bhcX, m.y - bhcY) < BH_HIT_R) {
          bullets.splice(i, 1); // ブラックホールに吸収される
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
      bullets = bullets.filter((m) => m.life < BULLET_LIFE);
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

      // 重力圏（薄い広い円）
      const bhcX = width * BH_X;
      const bhcY = height * BH_Y;
      const gravR = Math.min(width, height) * GRAV_R_FRAC;
      ctx.lineWidth = 1;
      ctx.strokeStyle = `rgba(${LINE}, 0.1)`;
      ctx.beginPath();
      ctx.arc(bhcX, bhcY, gravR, 0, TAU);
      ctx.stroke();

      // ブラックホール本体（アスタリスク型の線画・ゆっくり回転）
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

      // 弾（短い線）
      ctx.strokeStyle = `rgba(${LINE}, 0.45)`;
      for (const m of bullets) {
        ctx.beginPath();
        ctx.moveTo(m.x - Math.cos(m.a) * 9, m.y - Math.sin(m.a) * 9);
        ctx.lineTo(m.x, m.y);
        ctx.stroke();
      }

      // ミサイル（短い線 + 尾部のちる小型噴射。機首方向を向き慣性で移動）
      ctx.strokeStyle = `rgba(${LINE}, 0.5)`;
      for (const m of missiles) {
        const c = Math.cos(m.angle);
        const s = Math.sin(m.angle);
        const flick = 3 + 2.5 * Math.abs(Math.sin(time * 28 + m.dist));
        ctx.beginPath();
        ctx.moveTo(m.x - c * 3.5, m.y - s * 3.5);
        ctx.lineTo(m.x + c * 3.5, m.y + s * 3.5);
        ctx.moveTo(m.x - c * 3.5, m.y - s * 3.5);
        ctx.lineTo(m.x - c * (3.5 + flick), m.y - s * (3.5 + flick));
        ctx.stroke();
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
        if (age < 0.4) {
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
        if (eAlpha >= 1 && enemy.thrust) {
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
      width = window.innerWidth;
      height = window.innerHeight;
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

    // キーボード操作（W: 前進 / S: 後進 / A・D: 回転 / スペース: 弾発射）
    const keyOf = (e) => (e.key === ' ' ? 'space' : e.key.toLowerCase());
    const isControlKey = (k) =>
      k === 'w' || k === 'a' || k === 's' || k === 'd' || k === 'space';
    const onKeyDown = (e) => {
      const k = keyOf(e);
      if (!isControlKey(k)) return;
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
      keys.w = false;
      keys.a = false;
      keys.s = false;
      keys.d = false;
      keys.space = false;
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
