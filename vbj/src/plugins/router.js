import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Home from '../page/Home'
import Login from '../page/Login'
//import Reg from '../page/Reg'
//import User from '../page/User'
let User = () => import('../page/User.vue')
import Detail from '../page/Detail'
import Error from '../page/Error'
//import Echarts from '../page/Echarts'
let Echarts =() =>import('../page/Echarts.vue')
import Bdmap from '../page/Bdmap'

let routes=[
	{path:'/home',component:Home},
	{path:'/Login',component:Login},
	{path:'/Reg',component:r=> require(['../page/Reg.vue'],r)},
	{path:'/User',component:User},
	{path:'/Bdmap',component:Bdmap},
	{path:'/Echarts',component:Echarts},
	//{path:'/Detail/:id',component:Detail,name:'detail',props:true},
	{path:'/Detail/:id',component:Detail,name:'detail',props:(route)=>({id:route.params.id,dataName:route.query.dataName})},
	{path:'/',redirect:'/Home'},
	{path:'*',component:Error}
	
];


export default new VueRouter({routes})