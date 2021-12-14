import axios from 'axios'
import adapter from './lib/adapter'
import errorCode from './errorCode'
import store  from "./store";

const request = axios.create({
    baseURL : 'http://localhost:8081',
    timeout: 6000
});

request.defaults.adapter = adapter
request.defaults.retry = 5; // 设置请求次数
request.defaults.retryDelay = 1000;// 重新请求时间间隔

// 跨域请求，允许保存cookie
request.defaults.withCredentials = true

//http request拦截
request.interceptors.request.use(config => {
    console.log("--------------")
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
    console.log("===============")
    return config
}, error => {
    return Promise.reject(error)
})


// HTTP response拦截
request.interceptors.response.use(res => {
    console.log("-=-=-=-=-=-=-=-=")

    const status = Number(res.status) || 200
    const message = res.data.msg || errorCode[status] || errorCode['default']
    if (status === 401) {
        // store.dispatch('FedLogOut').then(() => {
        //     router.push({path: '/login'})
        // })
        return
    }
    if (status !== 200 || res.data.code === 1) {
        return Promise.reject(error)
    }

    return res
}, error => {
    return Promise.reject(error)
})

export default request
