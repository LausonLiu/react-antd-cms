import axios from "axios";

const request = axios.create({
    baseURL: "https://some-domain.com/api/",
    timeout: 2*1000,  //网络超时时间的设置
    // headers: {'Content-Type': 'application/json;charset=utf-8'}
})

//请求拦截
request.interceptors.request.use( config => {
    return config;
}, error => {
    return Promise.reject(error)
});

//响应拦截
request.interceptors.response.use( response => {
    return response.data;
}, error => {
    return Promise.reject(error)
});


export default request;