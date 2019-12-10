//入口文件
import Vue from 'vue'
//导入路由的包
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//导入vue-resource
import VueResource from 'vue-resource'
//安装vue-resource
Vue.use(VueResource)
//导入mui央样式
import './lib/mui/css/mui.min.css'
//导入miniui组件
import {Header,Swipe, SwipeItem } from 'mint-ui'
Vue.component(Header.name,Header)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

//导入自己的router模块
import router from './router.js'
//导入app组件
import app from './App.vue'
var vm  = new Vue({
    el: '#app',
    render:c => c(app),
    router  //挂载路由对象
})