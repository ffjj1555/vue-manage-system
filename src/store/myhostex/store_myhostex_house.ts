import { defineStore } from 'pinia';
import { mh_Http_get } from '@/request/myhostex/api_myhostex';
import {
  all_house_type_list,
  Price_house_type_list,
  accounts_list,
} from '@/utils/house/house_type';
// import { thirdparty } from '/@/store/modules/store_myhostex_house';

export const TempStore = defineStore({
  id: 'TempStore_app',
  state: () => ({
    tepArg: '',
  }),
  getters: {},
  actions: {},
});

//渠道账号、房源列表
export const thirdparty = defineStore({
  id: 'thirdparty_app',
  state: () => ({
    //渠道房源列表
    thirdparty_list: <any>[],
    //日历价格
    all_house_type_price: <any>[],
  }),
  persist: true,
  getters: {},
  actions: {
    //根据ID参数返回房型相关属性。
    get_house_type(house_type_id: number) {
      const temp = all_house_type_list.find((item) => {
        return item.id === house_type_id;
      });
      return temp;
    },
    get_Price_house_type_id(house_type_id: number) {
      if (house_type_id == 0) {
        const house_type_id_list: any[] = [];
        Price_house_type_list.forEach((item) => {
          house_type_id_list.push(item.id);
        });
        return house_type_id_list;
      } else {
        const house_type_id_list = Price_house_type_list.find((item) => {
          return item.id == 25148;
        });
        const show_house_type_id: any[] = [];
        show_house_type_id.push(house_type_id_list?.id);
        return show_house_type_id;
      }
    },
    get_all_house_type_id() {
      const all_house_type_id_list: any[] = [];
      all_house_type_list.forEach((item) => {
        all_house_type_id_list.push(item.id);
      });
      return all_house_type_id_list;
    },
    Get_thirdparty_list() {
      this.thirdparty_list = [];
      accounts_list.forEach(async (item, index) => {
        TempStore().tepArg = 'thirdparty_account_id=' + item.id;
        const Tlist = await mh_Http_get('thirdparty/listings?' + TempStore().tepArg);
        console.log(Tlist);
        const origin_house_list: any[] = [];
        const thirdparty_list_item = { thirdparty_account_id: 0, origin_house_list: <any>[] };
        
        Tlist.data.data.list.forEach(function (value, index) {
          const itemData = { origin_house_id: '', title: '' };
          itemData.origin_house_id = Tlist.data.data.list[index].origin_house_id;
          itemData.title = Tlist.data.data.list[index].title;
          origin_house_list.push(itemData);
        });
        thirdparty_list_item.thirdparty_account_id = item.id;
        thirdparty_list_item.origin_house_list = origin_house_list;
        this.thirdparty_list.push(thirdparty_list_item);
        console.log(this.thirdparty_list);
      });
    },
  },
});

//渠道房源列表
export const thirdparty_list = defineStore({
  id: 'thirdparty_list_app',
  state: () => ({
    list: [],
  }),
  getters: {},
  actions: {},
});
