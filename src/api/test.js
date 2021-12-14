import request from "../http/request";

export const getopenid = (openid)=>{
    return request({
        url: '/douyin/wxMiniIbalbalUser/'+openid,
        method: 'get'
    })
}
