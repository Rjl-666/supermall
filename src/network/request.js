import axios from 'axios'

export function request(config) {
        //  1.创建实例
        const axios1 = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000
        })

        //2. axios拦截器
        //请求拦截
        axios1.interceptors.request.use(config => {
            return config
        }, err => {
            // console.log(err);
        });

        //响应拦截
        axios1.interceptors.response.use(res => {
            // console.log(res);
            return res
        }, err => {
            console.log(err);
        })

        //3.发送真正的网络请求
        return axios1(config)   //这玩意本身就返回一个promise
}


