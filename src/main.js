// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import routeConfig from './router-config'
import querystring from 'querystring'
import store from './store.js'
import axios from './axios/index' //引入axios
import Es6Promise from 'es6-promise'


Vue.prototype.$post = axios.post;
Vue.prototype.$get = axios.get;
// axios.defaults.headers.post['Content-Type']='application/x-www-form-urlencoded';

// axios.interceptors.request.use(function (config) {
//   if(config.method === "post"){
//       config.data = querystring.stringify(config.data)
//   }
//   return config;
// },function (error) {
//   return Promise.reject(error);
// });

//加载路由中间件
Vue.use(VueRouter)
Vue.use(VueResource)

Es6Promise.polyfill();//解决IE兼容问题

//定义路由
const router = new VueRouter({
  routes: routeConfig
})

new Vue({
  router,
  store,
  el: "#app",
  render: h => h(App)
})
