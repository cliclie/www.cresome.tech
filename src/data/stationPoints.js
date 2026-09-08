/**
 * 地図モードの経路定義（路線 → 駅 → 出口 の3階層）
 *
 * - MapControls.jsx: 始点ボタンの表示（出口名 = ボタン、駅名 = ラベル）
 * - App.jsx: localStorage に保存された stationId の妥当性検証
 *
 * 各 id は MapBackground.jsx の ROUTE_NAMES（manifest の station 名）と対応する。
 * exits なし（都電の停留所など）は駅名そのものがボタンになる。
 */
export const STATION_GROUPS = [
  {
    line: 'JR山手線',
    stations: [
      { name: '大塚駅', exits: [{ id: 'otsuka', label: '南口' }] },
    ],
  },
  {
    line: '有楽町線',
    stations: [
      { name: '東池袋駅', exits: [{ id: 'higashi_ikebukuro', label: '4番出口' }] },
      { name: '護国寺', exits: [{ id: 'gokokuji', label: '1番出口' }] },
    ],
  },
  {
    line: '丸ノ内線',
    stations: [
      {
        name: '新大塚',
        exits: [
          { id: 'shin_otsuka_1', label: '1番出口' },
          { id: 'shin_otsuka_2', label: '2番出口' },
        ],
      },
    ],
  },
  {
    line: '都電荒川線',
    stations: [
      { name: '大塚駅前', id: 'otsuka_ekimae' },
      {
        name: '向原',
        exits: [
          { id: 'koubara_waseda', label: '早稲田方面' },
          { id: 'koubara_micorowa', label: '三ノ輪方面' },
        ],
      },
      {
        name: '東池袋四丁目',
        exits: [
          { id: 'hie_4chome_waseda', label: '早稲田方面' },
          { id: 'hie_4chome_micorowa', label: '三ノ輪方面' },
        ],
      },
    ],
  },
];

export const START_POINT_IDS = STATION_GROUPS.flatMap((g) =>
  g.stations.flatMap((st) =>
    st.exits ? st.exits.map((e) => e.id) : [st.id],
  ),
);
