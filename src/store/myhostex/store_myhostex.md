渠道房源数组
传入参数：thirdparty_account_id=101476

所需存储参数：
thirdparty_account_id：101476
"origin_house_id": "32812212"
"title": "大床房 ",
数组结构：
    thirdparty_list: [
      {
        thirdparty_account_id: 234765,
        origin_house_list: [{origin_house_id: "688761283", title: "两居豪华泡池套房"}],
      },




价格数组所需参数：
date: "2022-09-23"
house_type_id: 24988
origin_house_id: "4818921"
price: 863（sale_price: 981）

传入参数：
  house_type_ids：    //房型id
  日期
数组结构：
[
  {
  house_type_ids：    //房型id
  house_type：    //房型名称
  thirdparty_accounts:  //渠道账号名称
  thirdparty_accounts_id:  //渠道账号id
  origin_house_id: "4818921"//渠道房源id
  price:[,,,,,,]//价格列表
  },
]


        <VisitAnalysis :Datelist="get_search_date_list()" />


        this.accounts_list.forEach(async (item, index) => {
        console.log('第一层循环始点。' + index);
        console.log('this.thirdparty_list:' + this.thirdparty_list);

        TempStore().tepArg = 'thirdparty_account_id=' + item.id;
        const Tlist = await MHapi('Get_thirdparty_list');
        console.log('item.id:' + item.id);
        console.log(Tlist);
        const origin_house_list: any[] = [];
        Tlist.data.list.forEach(function (value, index) {
          const itemData = { origin_house_id: '', title: '' };
          itemData.origin_house_id = Tlist.data.list[index].origin_house_id;
          itemData.title = Tlist.data.list[index].title;
          origin_house_list.push(itemData);
        });
        console.log(item.id);
        thirdparty_list_data.thirdparty_account_id = item.id;
        thirdparty_list_data.origin_house_list = origin_house_list;
        // this.thirdparty_list.push(thirdparty_list_data as any);
        lll.push(thirdparty_list_data as any);
        console.log('第一层循环终点。' + index);
        console.log(this.thirdparty_list);
        console.log('lll:' + lll[index].thirdparty_account_id);
        console.log('lll:' + lll[index].origin_house_list);
      });

//价格控制房型列表
    Price_house_type_list: [
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
