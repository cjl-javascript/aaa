import * as types from './types';
import axios from 'axios';
export default {
	[types.VIEW_LOADING]:({state,commit},payload)=>{
		commit(types.VIEW_LOADING,payload)
	},
	[types.CHECK_USER]:({state,commit},{username,password})=>{
		return axios({
			url:'/api/login',
			method:'post',
			data:{
				username,password,
				save:true
			}
		}).then(
			res=>{
				commit(types.CHECK_USER,res.data);//同步1
				localStorage.setItem('user',JSON.stringify(res.data))//同步2
				return{
					mess:res.data.msg,
					err:res.data.err
				}
			}
		)
		
	},
	[types.UPEDATE_HOME]:({state,commit},payload)=>{
		axios({
			url:'/api/home',
			params:{
				_page:1,
				_limit:10
			}
		}).then(
				res=>commit(types.UPEDATE_HOME,res.data.data)
		)
		
	},
	[types.UPEDATE_DETAIL]:({state,commit},{dataName,id})=>{
		axios({
			url:`/api/${dataName}/${id}`
		}).then(
			res=>commit(types.UPEDATE_DETAIL,res.data.data)
		)
		
	},

	
}