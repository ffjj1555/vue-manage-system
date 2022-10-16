<template>
  <div class="container">
    <div class="form-box">
                <el-button @click="getdatelist()">设置日期范围</el-button>
                <el-button @click="logprice()">读取全部在线价格</el-button>
                <el-button @click="get_CharPricesData()">读取表格data</el-button>

    </div>
  </div>
</template>

<script setup lang="ts" name="baseform">
import { reactive, ref, nextTick } from "vue";
import { ElMessage } from "element-plus";
import type { FormInstance, FormRules } from "element-plus";
import { house_type_prices, get_search_date_list } from '@/store/myhostex/store_myhostex_prices'
import { thirdparty } from '@/store/myhostex/store_myhostex_house'

function getdatelist(){
  get_search_date_list().getCharDate();
};
function logprice(){
  house_type_prices().get_OriginalPriceData();
};
function get_CharPricesData(){
  const idlist = thirdparty().get_Price_house_type_id(0);
  console.log(idlist);
  
  house_type_prices().get_CharPricesData(idlist)
  console.log(house_type_prices().CharPricesDataList); 

};


</script>
