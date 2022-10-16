<template>
  <div class="container">
    <div class="form-box">
      <el-form ref="formRef" :rules="rules" :model="form" label-width="80px">
        <el-form-item label="表单名称" prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        {{ MHAccessTokenStore().access_token }}
        {{ ts.Token }}
        <el-form-item label="表格" prop="table">
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="date" label="数据名称" width="180" />
            <el-table-column prop="address" label="数值" />
          </el-table>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit(formRef)">表单提交</el-button>
          <el-button @click="onReset(formRef)">重置表单</el-button>
          <el-button @click="link8888">远程访问8888</el-button>
          <el-button @click="MHAccessTokenStore().CreateAccesstoken()">CreateAccesstoken</el-button>
          <el-button @click="MHAccessTokenStore().UpdateAccesstoken()">UpdateAccesstoken</el-button>
          <el-button @click="cuonst()">{{ tableData[1].address }},{{ i }}</el-button>
          <el-button @click="Promise()">Promise</el-button>
          <el-button @click="GetAccesstoken()">GetAccesstoken</el-button>
          <el-button @click="Gethouse()">Gethouse</el-button>
          <el-button @click="Message()">ElMessage</el-button>
          <el-button @click="thirdparty().Get_thirdparty_list()">Get_thirdparty_list</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts" name="baseform">
import { reactive, ref, nextTick } from "vue";
import { ElMessage } from "element-plus";
import type { FormInstance, FormRules } from "element-plus";
import { link8888, link_token } from "@/request/myhostex/test";
import { MHAccessTokenStore } from "@/store/myhostex/store_AccessToken_myhostex";
import { thirdparty } from "@/store/myhostex/store_myhostex_house";
import { mh_Http_get } from '@/request/myhostex/api_myhostex'
const i = ref(0);
const ts = reactive({Token: MHAccessTokenStore().access_token});
function cuonst() {
  tableData[1].address++;
  // i.value++;
  console.log(tableData[1].address);
}

const tableData = reactive([
  {
    date: "AccessTokenStor",

    address: MHAccessTokenStore().access_token,
  },
  {
    date: "22222",

    address: 0,
  },
]);

const rules: FormRules = {
  name: [{ required: true, message: "请输入表单名称", trigger: "blur" }],
};
const formRef = ref<FormInstance>();
const form = reactive({
  name: "",
  tableData: tableData,
});
// 提交
const onSubmit = (formEl: FormInstance | undefined) => {
  // 表单校验
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      console.log(form);
      ElMessage.success("提交成功！");
    } else {
      return false;
    }
  });
};
// 重置
const onReset = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};
function rand(m: number, n: number) {
  return Math.ceil(Math.random() * (n - m + 1)) + m - 1;
}
function Promise() {
  setTimeout(() => {
    let n = rand(1, 100);
    if (n <= 30) {
      alert("没中奖。");
    } else {
      alert("恭喜中奖。");
    }
  }, 1000);
  console.log("并行流程。");

}
function GetAccesstoken() {
  ts.Token = MHAccessTokenStore().GetAccesstoken();
  console.log(ts.Token);
  // return toekn;
}
function Gethouse() {
  GetAccesstoken();
  // ts.Token = MHAccessTokenStore().GetAccesstoken();
  console.log('Token:' + ts.Token);
  // return toekn;
}
function Message() {
  ElMessage('this is a message.');

}
</script>
