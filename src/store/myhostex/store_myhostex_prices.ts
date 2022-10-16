import { defineStore } from 'pinia';
import { mh_Http_get, mh_Http_post } from '@/request/myhostex/api_myhostex';
import { thirdparty } from "@/store/myhostex/store_myhostex_house";
import { all_house_type_list } from '@/utils/house/house_type';

export const TempStore = defineStore({
  id: 'TempStore_app',
  state: () => ({
    tepArg: '',
    PriceData: {
      house_type_id_list: [0],
      price: 0,
      begin: '',
      end: '',
    },
  }),
  getters: {},
  actions: {},
});

export const house_type_prices = defineStore({
  id: 'house_type_prices',
  state: () => ({
    OriginalPriceData: <any>[], //所有原始价格数据，载入index.vue时预先下载更新。
    CharPricesDataList: <any>[],
  }),
  persist: true,
  getters: {},
  actions: {
    //获取所有原始房价数据表
    async get_OriginalPriceData() {
      const house_type_list = all_house_type_list.map((item) => {
        return item.id;
      });

      const OriginalPriceData = await mh_Http_get(
          '/calendar/query?house_type_ids=[' +
          house_type_list +
          ']&begin=' +
          get_search_date_list().firstFullDate +
          '&end=' +
          get_search_date_list().lastFullDate,
      );
      // console.log('OriginalPriceData:' + OriginalPriceData.data.data.calendar_list[0].house_type_id);

      this.OriginalPriceData = OriginalPriceData.data.data.calendar_list;
    },

    //修改在线渠道房源价格。
    async Set_OriginalPrice() {
      const house_type_list = all_house_type_list.map((item) => {
        return item.id;
      });

      const OriginalPriceData = await mh_Http_get(
          '/calendar/query?house_type_ids=[' +
          house_type_list +
          ']&begin=' +
          get_search_date_list().firstFullDate +
          '&end=' +
          get_search_date_list().lastFullDate,
      );
      console.log(OriginalPriceData);

      this.OriginalPriceData = OriginalPriceData;
    },
    //价格ID列表中的房型在线价格。
    Set_OriginalPriceList(person: {
      house_type_id_list: number[];
      price: number;
      begin: string;
      end: string;
    }) {
      person.house_type_id_list.forEach(async (house_type_id) => {
        const data = {
          house_type_id: house_type_id,
          thirdparty_type: 247527,
          begin: person.begin,
          end: person.end,
          daily_price: person.price,
        };
        const set_price_MG = await mh_Http_post('calendar/set_price', data );
        console.log(set_price_MG);
      });
    }, //修改基础价格
    // params = {
    //   house_type_id: 24988,
    //   origin_house_id: '633f40a85c1db247f01d8240',
    //   begin: '2022-10-10',
    //   end: '2022-10-11',
    //   daily_price: 300,
    // },
    async set_price_test(params: any) {
      const set_price_MG = await mh_Http_post('calendar/set_price', params );
      console.log(set_price_MG);
    },

    //根据thirdpartyid，房型ID获取EChar数据列表。
    get_CharPricesData(ShowHouseTypeIdList: any[]) {
      const CharPricesDataList: any[] = [];

      ShowHouseTypeIdList.forEach((typeItem: number) => {
        const Temp_calendar_List = this.OriginalPriceData.filter((value) => {
          return value.house_type_id === typeItem;
        });
        const Temp_price_list: any[] = [];
        Temp_calendar_List[0].calendar.forEach((value) => {
          if (value.prices[0].sale_price) {
            Temp_price_list.push(Math.round(value.prices[0].sale_price * 0.5492));
          } else {
            Temp_price_list.push(Math.round(value.prices[0].price * 0.5492));
          }
        });
        CharPricesDataList.push({
          name: thirdparty().get_house_type(typeItem)?.title,
          data: Temp_price_list,
          type: "line",
          smooth: true,
          showSymbol: false,
          symbol: "circle",
          symbolSize: 10,
          emphasis: {
            focus: "series",
            itemStyle: {
              borderWidth: 2,
              borderColor: "#E0E3FF",
            },
          },
        });
      });
      return CharPricesDataList;
    },
  },
});

//日历日期列表
export const get_search_date_list = defineStore({
  id: 'get_search_date_list_app',
  state: () => ({
    Datelist: ['0'],
    FullDatelist: ['0'],
  }),
  persist: true,
  getters: {
    firstFullDate(): string {
      return this.FullDatelist[0];
    },
    lastFullDate(): string {
      return this.FullDatelist[this.FullDatelist.length - 1];
    },
  },
  actions: {
    getCharDate() {
      const daymis = 24 * 3600 * 1000;
      const today = new Date();
      let now = new Date(today.getTime());
      let i = 0;
      const MDlist: any[] = [];
      const YMDlist: any[] = [];

      for (; i < 120; i++) {
        const MD = now.getMonth() + 1 + '-' + now.getDate();
        const SMD = MD as string;
        const YMD = now.getFullYear() + '-' + SMD;
        const SYMD = YMD as string;
        MDlist.push(SMD);
        YMDlist.push(SYMD);
        now = new Date(now.getTime() + daymis);
      }
      this.Datelist = MDlist;
      this.FullDatelist = YMDlist;
    },
  },
});
