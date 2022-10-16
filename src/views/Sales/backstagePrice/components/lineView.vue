<template>
  <div>
    <e-charts :option="option" class="chart" style="width: 100%; height: 280px"></e-charts>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, Ref } from "vue";
import { house_type_prices, get_search_date_list } from "@/store/myhostex/store_myhostex_prices";
import { AVbasicProps } from "./props";
import { Price_house_type_list } from "@/utils/house/house_type";

const props = defineProps({
  ...AVbasicProps,
});

const ShowHouseTypeIdList: any[] = [];
if (props.house_type_id === 0) {
  Price_house_type_list.forEach((value) => {
    ShowHouseTypeIdList.push(value.id);
  });
} else {
  ShowHouseTypeIdList.push(props.house_type_id);
}

const CharPricesDataList = house_type_prices().get_CharPricesData(ShowHouseTypeIdList);
const chartRef = ref<HTMLDivElement | null>(null);
const option = {
  grid: { left: "1%", right: "1%", top: "2%", bottom: 30, containLabel: true },
  legend: {
    bottom: 0,
    icon: "circle",
    textStyle: {
      color: "#4E5969",
    },
  },
  xAxis: {
    type: "category",
    data: get_search_date_list().Datelist, //X轴数据入口
    boundaryGap: false,
    axisLine: {
      lineStyle: {
        color: "#A9AEB8",
      },
    },
    axisTick: {
      show: true,
      alignWithLabel: true,
      lineStyle: {
        color: "#86909C",
      },
    },
    axisLabel: {
      color: "#86909C",
    },
  },
  yAxis: [
    {
      type: "value",
      // max: 6000,
      splitNumber: 10,
      axisTick: {
        show: false,
      },
      // axisLine: {
      //   show: false,
      // },
      splitArea: {
        show: true,
        areaStyle: {
          color: ["rgba(255,255,255,0.2)", "rgba(226,226,226,0.2)"],
        },
      },
    },
  ],
  tooltip: {
    show: true,
    trigger: "axis",
    className: "echarts-tooltip-diy",
  },
  series: house_type_prices().get_CharPricesData(ShowHouseTypeIdList),
};
</script>

<style scoped></style>
