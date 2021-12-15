import axios from 'axios'
import adapter from './lib/adapter'
import errorCode from './errorCode'
import store  from "./store";

let url;
//自动切换环境
if(process.env.NODE_ENV === 'development'){
    url = 'http://localhost:4000'
}else{
    url = 'https://pi.ibalbal.com:800'
}

const request = axios.create({
    baseURL: url
});

request.defaults.adapter = adapter


// 跨域请求，允许保存cookie
request.defaults.withCredentials = true

//http request拦截
request.interceptors.request.use(config => {
    const isToken = (config.headers || {}).isToken === false
    let token =  store.getters.access_token
    if (token && !isToken) {
        config.headers['Authorization'] = 'Bearer ' + token// token
    }
    // headers中配置serialize为true开启序列化
    if (config.methods === 'post' && config.headers.serialize) {
        config.data = serialize(config.data)
        delete config.data.serialize
    }
    return config
}, error => {
    return Promise.reject(error)
})


// HTTP response拦截
request.interceptors.response.use(res => {
    //去除首位空格
    res.errMsg = res.errMsg.trim();
    //异常处理
    if(res.errMsg.indexOf('request:fail') != -1 || res.errMsg.indexOf('request:fail timeout') != -1 ){
        uni.showToast({
            title: errorCode[res.errMsg],
            duration: 3000,
            icon: 'error'
        })
        return Promise.reject(errorCode[res.errMsg])
    }
    const status = Number(res.status) || 200
    const message = res.data.message || errorCode[status] || errorCode['default']
    if (status === 401) {
        // store.dispatch('FedLogOut').then(() => {
        //     router.push({path: '/login'})
        // })
        return
    }
    if (status !== 200 || res.data.code === 1) {
        return Promise.reject(new Error(message))
    }

    return res
}, error => {
    return Promise.reject(new Error(error))
})

export default request
