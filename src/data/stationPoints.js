/**
 * 地図モードの 7駅 / 10始点 定義（路線グループ別）
 *
 * - MapControls.jsx: 始点ボタンの表示
 * - App.jsx: localStorage に保存された stationId の妥当性検証
 *
 * 各 item.id は MapBackground.jsx の ROUTE_NAMES（manifest の station 名）と対応する。
 */
export const STATION_GROUPS = [
  {
    line: 'JR山手線',
    items: [{ id: 'otsuka', label: '大塚駅' }],
  },
  {
    line: '有楽町線',
    items: [
      { id: 'higashi_ikebukuro', label: '東池袋駅' },
      { id: 'gokokuji', label: '護国寺駅' },
    ],
  },
  {
    line: '丸ノ内線',
    items: [
      { id: 'shin_otsuka_1', label: '新大塚 1番出口' },
      { id: 'shin_otsuka_2', label: '新大塚 2番出口' },
    ],
  },
  {
    line: '荒川線',
    items: [
      { id: 'otsuka_ekimae', label: '大塚駅前' },
      { id: 'koubara_waseda', label: '向原（早稲田側）' },
      { id: 'koubara_micorowa', label: '向原（三ノ輪側）' },
      { id: 'hie_4chome_waseda', label: '東池袋四丁目（早稲田側）' },
      { id: 'hie_4chome_micorowa', label: '東池袋四丁目（三ノ輪側）' },
    ],
  },
];

export const START_POINT_IDS = STATION_GROUPS.flatMap((g) =>
  g.items.map((i) => i.id),
);
