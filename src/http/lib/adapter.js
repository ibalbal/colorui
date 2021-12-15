import settle from "axios/lib/core/settle"
import buildURL from "axios/lib/helpers/buildURL"

// 同时发送异步代码的次数，防止一次点击中有多次请求
let ajaxTimes = 0

/* axios适配器配置 */
const adapter = function (config) {
    ajaxTimes++;
    // 显示加载中 效果
    uni.showLoading({
        title: "加载中",
        mask: true,
    });
    return new Promise((resolve, reject) => {
        uni.request({
            method: config.method.toUpperCase(),
            url: buildURL(config.baseURL+config.url, config.params, config.paramsSerializer),
            header: config.headers,
            data: config.data,
            dataType: config.dataType,
            responseType: config.responseType,
            sslVerify: config.sslVerify,
            complete: function complete(response) {
                response = {
                    data: response.data,
                    status: response.statusCode,
                    errMsg: response.errMsg,
                    header: response.header,
                    config: config
                };
                settle(resolve, reject, response);
                ajaxTimes--;
                if(ajaxTimes===0){
                    //  关闭正在等待的图标
                    uni.hideLoading();
                }
            }
        })
    })
}

export default adapter;
