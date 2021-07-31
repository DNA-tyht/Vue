import { createApp } from 'vue'
import App from './App.vue'
import axios from "axios";

createApp(App).mount('#app');

//全局配置
axios.defaults.baseURL = "http://152.136.185.210:7878/api/m5";
axios.defaults.timeout = 5000;

axios({
  url: "/home/multidata",
  method: "get",
}).then(res => {
  console.log(res);
})

axios({
  url: "/home/data",
  params: {
    type: "pop",
    page: 1
  },
}).then(res => {
  console.log(res);
})

//axios发送并发请求
axios.all([axios({
  url: "/home/multidata",
  method: "get",
}), axios({
  url: "/home/data",
  params: {
    type: "sell",
    page: 1
  },
})]).then(axios.spread((res1, res2) => {
  console.log(res1);
  console.log(res2);
}))

//数组
const obj = {
  name: "Song juhan",
  age: 25,
}
const {name, age} = obj;

//创建axios实例
const instance1 = axios.create({
  baseURL: "http://152.136.185.210:7878/api/m5",
  timeout: 5000,
});

instance1({
  url: "/home/multidate"
}).then(res => {
  console.log(res);
});

instance1({
  url: "/home/data",
  params: {
    type: "pop",
    page: 1
  }
}).then(res => {
  console.log(res);
});
//每个axios都有自己的配置
const instance2 = axios.create({
  baseURL: "",
  timeout: 5000,
})

//封装 request 模块
import {request} from "@/network/request";

request({
  url: "/home/multidata"
}, res => {
  console.log(res);
}, err => {
  console.log(err);
})

request({
  baseConfig: {

  },
  success: function (res) {

  },
  failure: function (err) {

  }
})

request({
  url: "",
}).then().catch()

//axios的拦截器
instance.interceptors.request.use(config => {
  return config; //将拦截到的请求返回
}, error => {});
instance.interceptors.response.use()