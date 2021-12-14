import request from "../http/request";

export const getopenid = (params)=>{
    return request({
        url: '/test',
        method: 'post',
        data: params
    })
}
