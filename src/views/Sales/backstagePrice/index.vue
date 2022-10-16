<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="24">
        <el-card shadow="hover" style="height: 402px">
          <el-tabs v-model="priecview" class="demo-tabs">
            <el-tab-pane label="User" name="first">
              <lineView />
            </el-tab-pane>
          </el-tabs>
        </el-card>
        <el-card shadow="hover" style="height: 552px" align="center">
          <el-tabs v-model="activeName" class="demo-tabs">
            <el-tab-pane label="第一步->" name="0"> <Step1 /> </el-tab-pane>
            <el-tab-pane label="第二步->" name="1"> 第二步 </el-tab-pane>
            <el-tab-pane label="第三步" name="2"> 第三步 </el-tab-pane>
          </el-tabs>
          <el-button type="primary" @click="next" >下一步</el-button>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts" name="dashboard">
import { reactive, ref } from "vue";
import type { TabsPaneContext } from "element-plus";
import lineView from "./components/lineView.vue";
import { Edit, Picture, Upload } from "@element-plus/icons-vue";
import { house_type_prices, get_search_date_list } from "@/store/myhostex/store_myhostex_prices";
import Step1 from "./components/Step1.vue";
get_search_date_list().getCharDate(); //生成查询日期列表，并存入house_type_prices().CharPricesDataList。
house_type_prices().get_OriginalPriceData(); //获取所有原始价格数据，载入index.vue时预先下载更新OriginalPriceData。
const priecview = ref("first");

const active = ref(0);
const activeName = ref("0");
console.log(active.value);

const next = () => {
  active.value++;
  activeName.value = "" + active.value;
  if (active.value > 2) {
    active.value = 0;
    activeName.value = "" + active.value;
  }
};
// const next = () => {
//   if (active.value++ > 2) active.value = 0
// }

const handleClick = (tab: TabsPaneContext, event: Event) => {};
</script>

<style>
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 18px;
  font-weight: 600;
}

</style>
