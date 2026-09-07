# 作業ログ: www.cresome.tech 地図UI修正 (2026-09-07)

## 修正内容（承認済みプラン）
1. 「地図(beta)」→「地図」に変更
2. 地図選択時、オプション操作（始点選択等）をメインコンテンツ側のパネルへ移動
3. オプションパネル: 横並び・折り返し可・半透明白背景 / 文字色少し濃め / 文字サイズ少し大きめ
4. 地図の線色を薄く（現在の文字色程度）※ map data より上層（material 側）で変更
5. サブパネル追加: 選択中の歩行/俯瞰の未選択側を表示し、クリックで切替
6. 俯瞰モードを一人称風に変更:
   - カメラ位置は移動しない（固定視点位置）
   - ズーム / パン = 視界（FOV）の変化
   - 視点の上下左右回転は従来どおり維持
   - 経路のオレンジチューブは地面に貼り付けた平面・半透明表示

## 対象ファイル
- src/components/BgSwitcher.jsx — 「(beta)」ラベル削除
- src/components/Sidebar.jsx — MapControls をサイドバーから削除
- src/components/Drawer.jsx — MapControls をドロワーから削除
- src/components/MapControls.jsx — 横並び flex-wrap パネル＋サブパネルに再構築
- src/components/MapBackground.jsx — 俯瞰一人称視点 / 線色薄め / 平面化ルート
- src/App.jsx — MapControls をメインコンテンツ側に配置
- src/index.css — パネル / サブパネル / 横並びスタイル

## 進捗
- [x] プラン立案
- [x] 1. BgSwitcher.jsx を編集（(beta) 削除）
- [x] 2. Sidebar.jsx / Drawer.jsx から MapControls を削除
- [x] 3. MapControls.jsx を横並びパネル＋サブパネルに再構築
- [x] 4. App.jsx に MapControls をメイン側へ配置
- [x] 5. index.css にパネル/サブパネル/横並びスタイルを追加
- [x] 6. MapBackground.jsx を編集（俯瞰一人称視点 / 線色 / 平面化ルート）
- [x] 7. ビルド検証

## 第二弾修正（ユーザーレビューフィードバック 2026-09-07）
- [x] 1. サブパネル＝PiP（picture-in-picture）: 画面右下の小窓に「現在の表示モードの反対側」を表示
  - `MapBackground.jsx`: `pipRef` プロパティ＋第二カメラ（`pipCam`）を追加。メイン描画後に scissor 指定で PiP 領域をレンダリング
  - メイン=俯瞰 → PiP=歩行（ルートの現在位置・眼高・進行方向）/ メイン=歩行 → PiP=俯瞰（固定高所の既定カメラ）
  - `App.jsx`: `pipRef` を作成し `MapBackground` に渡す。`.map-pip` 容器＋モードラベル（反対側視点名）をレンダリング
  - 旧来の誤読による「⇄ 切替」ボタン（`MapControls.jsx` のサブパネル）を削除
- [x] 2. 操作パネル＋サブパネル（PiP）を画面下部に配置
  - `.map-controls`: sticky 上部 → `position: fixed; bottom`（左 256px / 右 288px でサイドバー・ドロワーを回避）
  - `.map-pip`: 右下 fixed（240×168）。モバイル（≤768px）は PiP 150×112 に縮小・パネル幅調整
- [x] 3. ルート / 現在位置球体の可視性を反転
  - 俯瞰 = 平面化ルート（`routeFlat`）＋現在位置球体（`movingDot`）を表示
  - 歩行 = 両方とも非表示（3D 管状ルート `routeLine` は常に非表示）
- [x] 4. 俯瞰视角を旧版の可動カメラに復帰（一時的な固定カメラ＋FOV 方式を撤去）
  - `AERIAL_H=350` / `AERIAL_TILT=0.6` の軌道カメラ（旧版と同一の初期配置）
  - ホイール=ズーム / 右ドラッグ=パン / WASD・矢印=回転 / Q・E=昇降 / R=全リセット（歩行も共通）
  - 旧版 Q/E の潜在バグ（未定義 `dirY` 参照）を修正
  - 歩行モードの挙動は変更なし
- [x] 5. `MapControls.jsx`: サブパネル切替ボタンのみ削除し、操作ヒントを共通説明に更新
- [x] 6. `index.css`: `.map-controls` を下部固定に変更。旧 `.map-controls-subpanel` スタイルを `.map-pip` スタイルに置換。モバイル調整
- [x] 7. ビルド検証（npm run build、成功）
- 注意: `d:\cresome.tech` は SynologyDrive 同期リンク。`read_files` のキャッシュとディスクの実内容が異なる場合があるため、編集前に PowerShell/Node で直接読み込みを確認する

## 第三弾修正（ユーザーレビューフィードバック 2026-09-07）
- [x] 1. 操作パネル＋PiP を左寄せ・画面下部に配置（背景切替ボタンと重ならない）
  - `App.jsx`: `.map-bottom` ラッパーで MapControls と `.map-pip` を一括固定
  - `index.css`: 新 `.map-bottom`（`fixed; left:16px; right:216px; bottom:16px; flex`）を追加。`.map-controls` / `.map-pip` は fixed を外して flex 子要素化（PiP は `position:relative` でラベルの absolute 基準）
  - 右サイドバー（200px）＋余白 16px を避けるため右端 216px で停止 → サイドバー下部の背景切替（BgSwitcher）と水平方向で重ならない
  - モバイル（≤640px）: 縦積み・左寄せ（パネル上 / PiP 下）、PiP 150×112
- [x] 2. PiP=歩行モード: オレンジのルートチューブは描画しない
  - メインループで `routeLine.visible = false` のまま PiP 歩行パスを描画（一時切替なし）
- [x] 3. PiP=俯瞰モード: 歩行点の周囲 200m を真上から表示（視野扇＋二階調線色）
  - `MapBackground.jsx`:
    - 定数追加 `PI_AERIAL_RADIUS=200` / `PI_AERIAL_H`（60° FOV で半径 200m になる高さ≈346m）/ `PI_FAN_HALF_ANGLE=30°`
    - PiP カメラ: `up=(0,0,-1)`（北=画面上方向）、歩行点の真上 `PI_AERIAL_H` から真下へ
    - 視野扇メッシュ（半径 200m・60° の円扇・オレンジ 0.14）＋縁線（0.5）を `heading` で毎フレーム回転
    - 二階調線色: `renderer.localClippingEnabled=true`、`lineMats[]`（ルートチューブ・路線・道路ライン）に不透明度 45% 化＋白色方向 lerp を `setLineMatsLight()` で適用
    - 2 パス描画（scissor 内）: パス1=全線系を薄くして全体描画 → パス2=`autoClear` OFF で ±30° ウェッジのクリップ平面（`THREE.Plane` 2枚）内にだけ線系を元色で再描画
    - 描画後 `setClipDisabled()`（constant=巨大値）でクリップ無効化。メッシュ/チューブ/クリップを毎フレーム更新
- [x] 4. ビルド検証（npm run build、成功）

## 第四弾修正（ユーザーレビューフィードバック 2026-09-07）
- [x] 1. PiP 俯瞰モードの表示半径 200m → 50m に縮小
  - `PI_AERIAL_RADIUS = 50`、`PI_AERIAL_H` は自動再計算（≈86.6m）
- [x] 2. 視界外ラインの減光を「少し薄く」に調整
  - `setLineMatsLight` の減光係数 0.45 → 0.7（視界外も見える程度に調整）
- [x] 3. ファンメッシュの目立ちすぎを軽減
  - 塗り `opacity: 0.14 → 0.1`、縁線 `opacity: 0.5 → 0.4`
- [x] 4. ルート可視性をビュー単位で厳密制御
  - フレーム開始時に `routeLine` / `routeFlat` / `movingDot` を全 non-visible にリセット
  - メイン俯瞰ビューの描画直前だけ `routeFlat` / `movingDot` を ON にし、描画後 OFF
  - PiP 俯瞰パスで `routeLine` を一時 ON → 描画後 OFF
  - PiP 歩行パスではルート関連は一切描画しない（チューブ非表示の要望に対応）
- [x] 5. ビルド検証（npm run build、成功）

## 第五弾修正（ユーザーレビューフィードバック 2026-09-07 / PiP 俯瞰の視界外が見えない件）
- 報告: 「路線と視界内は強調表示されているが、視界外は見えていない。修正方法を間違えているように思える」
- 分析: 前回の減光方式では「基本不透明度(0.35/0.4) × 減光(0.7〜0.85)」で二重に薄くなり、
  視界外の線（建物アウトライン #333 / 道路 #DDD）が小窓ではほぼ消えていた
- [x] 1. PiP 俯瞰の二階調線色を固定値で管理（GLB 実データ確認済み: 全線系は頂点色 #333/#555、alpha=1）
  - `PI_LINE_OUT=0.75`（視界外: 視界内より少し薄いが十分見える）/ `PI_LINE_IN=1.0`（視界内: フルカラー）
  - パス1: `setClipDisabled()`（クリップ残留排除）＋視界外レベルで全体描画 → 建物・道路・路線すべて視界外でも表示
  - パス2: `autoClear` OFF＋±30° ウェッジクリップで、視界内の線系のみフルカラーで再描画（視界内だけ濃く）
  - 描画後 `setLineMatsLevel('base')` でメインビュー用の基本不透明度へ復元
  - `setLineMatsLight()` / `opacityHi` を撤去し `setLineMatsLevel('out'|'in'|'base')` に統合
- [x] 2. 線系の基本不透明度を上げ（路線 0.35→0.5 / 道路 0.4→0.55）
- [x] 3. 歩行 PiP に橙色ルートが漏れる問題の再検証
  - 原因は `routeFlat`（平面化ルート）がメイン俯瞰で ON のまま PiP まで描画されていたこと
  - 可視性を「フレーム開始で全 OFF → メイン描画時に必要な分だけ ON → 描画後 OFF / PiP 俯瞰で routeLine だけ一時 ON」の明示制御に変更済み
- [x] 4. ビルド検証（npm run build、成功）

## 第六弾修正（2026-09-07 / PiP 俯瞰: 視界内=背景色・視界外=薄い線色）
- 報告: 「視界内を背景と同じ線色にして、視界外を背景より薄い線色にしてください。オレンジの扇型は非表示で」
- [x] 1. 二階調方式を「視界内=強調」→「視界内=背景色（線なし）」に反転
  - パス1: クリップ無効＋視界外レベル（base × PI_LINE_OUT=0.75）で全体描画 → 視界外は薄い線色
  - パス2: `autoClear` OFF ＋ ±30° ウェッジクリップ（扇内のみ）＋白色マテリアルに交換して再描画 → 視界内の線系が背景（白）と同化して見えない
  - `setWedgeInversePlanes()`（2平面 AND では扇外の非凸領域を表現できないため）を撤去
  - `grayLineObjs`（Map: obj → 元マテリアル）で線系オブジェクトを管理、パス2で白色マテリアルに交換→描画後元へ復元
- [x] 2. ルートチューブ（オレンジ）はクリップ・減光の対象外化（lineMats 登録・clippingPlanes 付与を削除）
  → PiP 俯瞰でも視界内・視界外を問わず常に描画
- [x] 3. 扇型メッシュ（fanMesh / fanEdge）は `visible=false` で非表示
- [x] 4. ビルド検証（npm run build、成功）
