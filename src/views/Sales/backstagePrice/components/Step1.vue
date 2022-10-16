<template>
<div style="height: 30px">
  <el-row :gutter="20">
    <el-col :span="4">请输入价格： <el-input-number v-model="num" class="mx-4" :min="1" :max="20000" controls-position="right" @change="handleChange" /></el-col>
    <el-col :span="6"><DatePicker class="mx-4" /></el-col>
    <el-col :span="12">{{num}}</el-col>
  </el-row>
</div>
  <el-divider />
  <el-row :gutter="20">
    <el-col :span="2"></el-col>
    <el-col :span="6"><Table :price="num" :id="2"  /></el-col>
    <el-col :span="6"><Table :price="num" :id="3" /></el-col>
    <el-col :span="6"><Table :price="num" :id="4" /></el-col>
    <el-col :span="2"></el-col>
  </el-row>
  <!-- <button @click="count += 1">+1</button> -->
</template>

<script setup lang="ts">
import { ref } from 'vue'
import DatePicker from "./DatePicker.vue"
import Table from "./Table.vue"

const num = ref(1)
const handleChange = (value: number) => {
  console.log(value)
  console.log(num.value)
}
</script>

<style scoped>
h1 {
  font-size: 16px;
}
</style>