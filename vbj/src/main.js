import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
//引入路由
import router from './plugins/router'
//引入异步交互插件axios的配件
import './plugins/axios';
//引入公共样式
import './assets/css/base.css'
//动画
import 'animate.css'
//引入状态管理
import store from './plugins/store'
//配置服务器地址
Vue.prototype.server =require ('./config/server')
//同步状态管理与本地存储
let local = window.localStorage.getItem('user')
if(local){
  store.commit('CHECK_USER',JSON.parse(local))
}

new Vue({
  render: h => h(App),
  router,store
}).$mount('#app')
