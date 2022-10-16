// import {} from '/@/utils/house/house_type';
//价格控制房型列表
export const Price_house_type_list = [
  {
    id: 25165,
    title: '园景3居洋房(不开伙)',
    allAvailable: 40,
    link_pirce_id: [24988, 25165, 7311, 31799, 35209],
    areaId: 1,
  },
  {
    id: 25148,
    title: '3居别墅(无麻将)',
    allAvailable: 18,
    link_pirce_id: [25251, 25148, 37290, 7279, 31800, 16823, 37290],
    areaId: 1,
  },
  {
    id: 7307,
    title: '6居别墅',
    allAvailable: 13,
    link_pirce_id: [35210, 25369, 7307, 7312, 28400, 7504, 16819, 26552],
    areaId: 1,
  },
  { id: 16821, title: '铂悦3居', allAvailable: 4, link_pirce_id: [28389, 16821], areaId: 2 },
  {
    id: 26553,
    title: '铂悦4居',
    allAvailable: 5,
    link_pirce_id: [26553],
    areaId: 2,
  },
  {
    id: 31056,
    title: '铂悦5居',
    allAvailable: 4,
    link_pirce_id: [31056],
    areaId: 2,
  },
];
//物理房型列表
export const Practical_house_type_list = [
  {
    id: 25165,
    title: '园景3居洋房(不开伙)',
    allAvailable: 12,
    link_pirce_id: [25165, 24988],
    areaId: 1,
  },
  {
    id: 7311,
    title: '山景3居洋房(开伙)',
    allAvailable: 26,
    link_pirce_id: [7311, 31799],
    areaId: 1,
  },
  {
    id: 16823,
    title: '复式4居洋房',
    allAvailable: 1,
    link_pirce_id: [16823],
    areaId: 1,
  },
  {
    id: 35210,
    title: '5居别墅无泳池',
    allAvailable: 3,
    link_pirce_id: [35210],
    areaId: 1,
  },
  {
    id: 37290,
    title: '联排3居泳池别墅',
    allAvailable: 3,
    link_pirce_id: [37290],
    areaId: 3,
  },
  {
    id: 25148,
    title: '3居别墅(无麻将)',
    allAvailable: 6,
    link_pirce_id: [25148],
    areaId: 1,
  },
  {
    id: 7279,
    title: '3居别墅(麻将+厨房)',
    allAvailable: 11,
    link_pirce_id: [7279, 31800],
    areaId: 1,
  },
  {
    id: 7307,
    title: '6居别墅',
    allAvailable: 13,
    link_pirce_id: [7307],
    areaId: 1,
  },
  {
    id: 7312,
    title: '7居别墅',
    allAvailable: 3,
    link_pirce_id: [7312],
    areaId: 1,
  },
  {
    id: 28400,
    title: '8居别墅台球',
    allAvailable: 1,
    link_pirce_id: [28400],
    areaId: 1,
  },
  {
    id: 7504,
    title: '8居别墅KTV',
    allAvailable: 1,
    link_pirce_id: [7504],
    areaId: 1,
  },
  {
    id: 16819,
    title: '豪华5居',
    allAvailable: 1,
    link_pirce_id: [16819],
    areaId: 1,
  },
  {
    id: 26552,
    title: '豪华6居',
    allAvailable: 1,
    link_pirce_id: [26552],
    areaId: 3,
  },
  {
    id: 28389,
    title: '铂悦3居泡池',
    allAvailable: 2,
    link_pirce_id: [28389],
    areaId: 2,
  },
  {
    id: 16821,
    title: '铂悦3居',
    allAvailable: 2,
    link_pirce_id: [16821],
    areaId: 2,
  },
  {
    id: 26553,
    title: '铂悦4居',
    allAvailable: 5,
    link_pirce_id: [26553],
    areaId: 2,
  },
  {
    id: 31056,
    title: '铂悦5居',
    allAvailable: 4,
    link_pirce_id: [31056],
    areaId: 2,
  },
];
//小区列表
export const areaList = [
  { areaId: 1, areaName: '远洋山海二期' },
  { areaId: 2, areaName: '铂悦亚龙湾' },
  { areaId: 3, areaName: '西山渡一期' },
];

//全部房型列表
export const all_house_type_list = [
  {
    id: 24988,
    title: '2居洋房(不开伙)',
    alg: function (price: number) {
      const Oprice = price * 0.9;
      return Oprice;
    },
    minPrice: 198,
  },
  {
    id: 25165,
    title: '园景3居洋房(不开伙)',
    alg: function (price: number) {
      const Oprice = price;
      return Oprice;
    },
    minPrice: 258,
  },
  {
    id: 7311,
    title: '山景3居洋房(开伙)',
    alg: function (price: number) {
      const Oprice = price * 1.1;
      return Oprice;
    },
    minPrice: 298,
  },
  {
    id: 16823,
    title: '复式4居洋房',
    alg: function (price: number) {
      const Oprice = price * 2;
      return Oprice;
    },
    minPrice: 588,
  },
  {
    id: 35209,
    title: '3居别墅无泳池',
    alg: function (price: number) {
      const Oprice = price * 1.5;
      return Oprice;
    },
    minPrice: 500,
  },
  {
    id: 35210,
    title: '5居别墅无泳池',
    alg: function (price: number) {
      const Oprice = price * 2;
      return Oprice;
    },
    minPrice: 800,
  },
  {
    id: 25251,
    title: '2居别墅',
    alg: function (price: number) {
      const Oprice = price * 2.5 - 100;
      return Oprice;
    },
    minPrice: 600,
  },
  {
    id: 37290,
    title: '联排3居泳池别墅',
    alg: function (price: number) {
      const Oprice = price * 2.5 - 100;
      return Oprice;
    },
    minPrice: 600,
  },
  {
    id: 25148,
    title: '3居别墅(无麻将)',
    alg: function (price: number) {
      const Oprice = price * 2.5;
      return Oprice;
    },
    minPrice: 700,
  },
  {
    id: 7279,
    title: '3居别墅(麻将+厨房)',
    alg: function (price: number) {
      const Oprice = price * 2.5 + 160;
      return Oprice;
    },
    minPrice: 860,
  },
  {
    id: 25369,
    title: '5居别墅',
    alg: function (price: number) {
      const Oprice = price * 3.6 - 150;
      return Oprice;
    },
    minPrice: 1000,
  },
  {
    id: 7307,
    title: '6居别墅',
    alg: function (price: number) {
      const Oprice = price * 3.6;
      return Oprice;
    },
    minPrice: 1000,
  },
  {
    id: 7312,
    title: '7居别墅',
    alg: function (price: number) {
      const Oprice = price * 5;
      return Oprice;
    },
    minPrice: 1500,
  },
  {
    id: 28400,
    title: '8居别墅台球',
    alg: function (price: number) {
      const Oprice = price * 6.5;
      return Oprice;
    },
    minPrice: 2000,
  },
  {
    id: 7504,
    title: '8居别墅KTV',
    alg: function (price: number) {
      const Oprice = price * 6.5;
      return Oprice;
    },
    minPrice: 2000,
  },
  {
    id: 16819,
    title: '豪华5居',
    alg: function (price: number) {
      const Oprice = price * 5;
      return Oprice;
    },
    minPrice: 1500,
  },
  {
    id: 26552,
    title: '豪华6居',
    alg: function (price: number) {
      const Oprice = price * 6.5;
      return Oprice;
    },
    minPrice: 2000,
  },
  {
    id: 28389,
    title: '铂悦3居泡池',
    alg: function (price: number) {
      const Oprice = price * 2.5;
      return Oprice;
    },
    minPrice: 600,
  },
  {
    id: 16821,
    title: '铂悦3居',
    alg: function (price: number) {
      const Oprice = price * 3.2;
      return Oprice;
    },
    minPrice: 800,
  },
  {
    id: 26553,
    title: '铂悦4居',
    alg: function (price: number) {
      const Oprice = price * 4.4;
      return Oprice;
    },
    minPrice: 1000,
  },
  {
    id: 31056,
    title: '铂悦海景5居',
    alg: function (price: number) {
      const Oprice = price * 5.6;
      return Oprice;
    },
    minPrice: 1500,
  },
  {
    id: 31057,
    title: '铂悦豪华海景5居',
    alg: function (price: number) {
      const Oprice = price * 7;
      return Oprice;
    },
    minPrice: 2000,
  },
  {
    id: 31799,
    title: '3居洋房潜水套餐',
    alg: function (price: number) {
      const Oprice = price * 1 + 230;
      return Oprice;
    },
    minPrice: 500,
  },
  {
    id: 31800,
    title: '3居别墅潜水套餐',
    alg: function (price: number) {
      const Oprice = price * 2.5 + 250;
      return Oprice;
    },
    minPrice: 1100,
  },
];
//铂悦房型列表
export const by_house_type_list = [
  { id: 28389, title: '铂悦3居泡池' },
  { id: 16821, title: '铂悦3居' },
  { id: 26553, title: '铂悦4居' },
  { id: 31056, title: '铂悦海景5居' },
  { id: 31057, title: '铂悦豪华海景5居' },
];

//渠道账号列表
export const accounts_list = [
  { id: 234765, username: '名苑携程', T_name: '名苑携程', discounts: 0.55 },
  { id: 234766, username: '美墅携程', T_name: '美墅携程', discounts: 0.55 },
  { id: 224927, username: '15308921555@189.cn', T_name: '名苑途家', discounts: 0.55 },
  { id: 233426, username: 'SYTYWBS', T_name: '西山渡美团酒店', discounts: 0.55 },
  { id: 238120, username: '19943358886', T_name: '铂悦美团酒店', discounts: 0.55 },
  { id: 186136, username: '亚龙湾山海美墅(3218751)', T_name: '美墅美团民宿', discounts: 0.55 },
  { id: 247091, username: '山海居携程', T_name: '山海居携程', discounts: 0.55 },
  { id: 243592, username: '17786983813', T_name: '山海居途家', discounts: 0.55 },
  { id: 247527, username: '三亚名苑美墅(33308)', T_name: '住客云', discounts: 0.55 },
];
