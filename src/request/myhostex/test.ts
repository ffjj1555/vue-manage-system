
import request from '@/request/http';

export const fetchData = () => {
    return request({
        url: './table.json',
        method: 'get'
    });
};

export const link8888 = () => {
    console.log('link');
    
    return request({
        url: './api/wid',
        method: 'get'
    });
};
export async function link_token (){
    
    const accesstoken = await request({
        url: './mhapi/refresh_token/refresh',
        method: 'post',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization:
              'Basic c2FueWFzaGFuaGFpbWVpc3U6T0NWZmN0S3dtZHlnTU9oRzJDTUVRbG9wSzRjbk9MRGU=',
            'Hostex-Access-Token': 'bqljDtQLZQJ2YosnLZwKco7sloFTIM3C1mOua79T',
            'Hostex-Operator-Id': '33308',
            'cache-control': 'no-cache',
          },
    });
    console.log('accesstoken.data.access_token:' + JSON.stringify(accesstoken.data.data.refresh_token));
    
};