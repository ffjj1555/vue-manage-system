<template>
    <el-table :data="tableData" stripe style="width: 100%" border >
      <el-table-column prop="date" label="价格" width="100" />
      <el-table-column prop="address" label="房型名称" />
    </el-table>
    {{(props.price * props.id)}}
  </template>
  
  <script lang="ts" setup>
  import { reactive, ref, watch } from "vue";
import { TableData } from "./props";
  const props = defineProps({
  ...TableData,
});

  const tableData = reactive([
    {
      date: (props.price * props.id),
      address: '三居洋房',
    },
  ])
  watch(()=> props.price, (newval, oldval)=>{
    console.log('newval:' + newval);
    console.log('oldval:' + oldval);
    tableData[0].date = (newval * props.id)
        
  })
  </script>
  