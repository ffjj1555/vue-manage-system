<template>
  <div class="demo-date-picker">
    <div class="block">
      <span class="demonstration">请选择日期范围：<el-date-picker v-model="value1" type="daterange" range-separator="To" start-placeholder="Start date" end-placeholder="End date" :size="size" /></span>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const size = ref<"" | "large" | "small">("");
const value1 = ref("");

const shortcuts = [
  {
    text: "Last week",
    value: () => {
      const end = new Date();
      const start = new Date();
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
      return [start, end];
    },
  },
  {
    text: "Last month",
    value: () => {
      const end = new Date();
      const start = new Date();
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
      return [start, end];
    },
  },
  {
    text: "Last 3 months",
    value: () => {
      const end = new Date();
      const start = new Date();
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
      return [start, end];
    },
  },
];
</script>

<style scoped>
.demo-date-picker {
  display: flex;
  width: 100%;
  padding: 0;
  flex-wrap: wrap;
}
.demo-date-picker .block {
  /* padding: 10px 0; */
  text-align: center;
  border-right: solid 1px var(--el-border-color);
  flex: 1;
}
.demo-date-picker .block:last-child {
  border-right: none;
}
.demo-date-picker .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 18px;
  /* margin-bottom: 20px; */
}
</style>
