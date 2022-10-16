import { defineStore } from 'pinia';
import request from '@/request/http';

export const MHAccessTokenStore = defineStore({
  id: 'MHAccessTokenStore_app',
  state: () => ({
    access_token: '',
    expire_time: new Date(),
  }),
  persist: true,
  getters: {},
  actions: {
    async CreateAccesstoken() {
      const Accesstoken = await request({     
        url: './mhapi/access_token/refresh',
        method: 'post',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization:
              'Basic c2FueWFzaGFuaGFpbWVpc3U6T0NWZmN0S3dtZHlnTU9oRzJDTUVRbG9wSzRjbk9MRGU=',
          },
        data: {
            refresh_token: '9MUyAub764ErQlD35XBHresCFDUDbS5k0hBXtoLG' 
          },
    });
    // console.log(JSON.stringify(Accesstoken.data.data));
    
      this.access_token = Accesstoken.data.data.access_token;
      this.expire_time = Accesstoken.data.data.expire_time;
      console.log('成功更新accesstoken为:' + this.access_token);
      console.log('过期时间:' + this.expire_time);
      return Accesstoken.data.data.access_token;
    },
    UpdateAccesstoken() {
      const now = new Date();
      const old_time = new Date(this.expire_time);
      if (!this.access_token || now.getTime() > old_time.getTime()) {
        this.CreateAccesstoken();
      } else {
        console.log('不超时,使用原accesstoken为: ' + this.access_token);
        console.log('过期时间:' + this.expire_time);
      }
    },
    GetAccesstoken() {
      const now = new Date();
      const old_time = new Date(this.expire_time);
      if (!this.access_token || now.getTime() > old_time.getTime()) {
        const token = this.CreateAccesstoken();
        return token;

      } else {
        return this.access_token;
      }
    },
  },
});
