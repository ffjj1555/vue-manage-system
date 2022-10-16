import {MHAccessTokenStore} from '@/store/myhostex/store_AccessToken_myhostex';
import request from '@/request/http';

export async function mh_Http_get(url:string){
  MHAccessTokenStore().GetAccesstoken();
  const data = await request({     
    url: './mhapi' + url,
    method: 'get',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization:
        'Basic c2FueWFzaGFuaGFpbWVpc3U6T0NWZmN0S3dtZHlnTU9oRzJDTUVRbG9wSzRjbk9MRGU=',
      'Hostex-Access-Token': MHAccessTokenStore().access_token,
      'Hostex-Operator-Id': '33308',
      'cache-control': 'no-cache',
    },
});
// console.log(data);
return data;  
};
export async function mh_Http_post(url: string, data: any){
  MHAccessTokenStore().GetAccesstoken();
  const Rdata = await request({     
    url: './mhapi' + url,
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization:
        'Basic c2FueWFzaGFuaGFpbWVpc3U6T0NWZmN0S3dtZHlnTU9oRzJDTUVRbG9wSzRjbk9MRGU=',
      'Hostex-Access-Token': MHAccessTokenStore().access_token,
      'Hostex-Operator-Id': '33308',
      'cache-control': 'no-cache',
    },
    data: data,
});
// console.log(data);
return Rdata;  
}
