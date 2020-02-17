import Vue from 'vue'
import axios from "axios"
import store from './store'
//import vm from '../main'
//axios.defaults.withCredentials=true;
//整体携带跨源凭证
//拦截器
axios.interceptors.request.use(function(config){
	//console.log('拦截器')
	store.dispatch('VIEW_LOADING',true)
	return config;
	//vm.bloading=true;
},function(error){
	return Promise.reject(error)
});
axios.interceptors.response.use(function(response){
	//console.log('拦截器')
	//vm.bloading=false;
	store.dispatch('VIEW_LOADING',false)
	return response;
},function(error){
	return Promise.reject(error)
});


Vue.prototype.$axios=axios;
window.axios=axios
