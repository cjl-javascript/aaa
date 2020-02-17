import * as types from './types'


export default {
	[types.VIEW_LOADING]:(state,payload)=>state.bLoading=payload,
	
	[types.CHECK_USER]:(state,payload)=>state.user=payload,
	[types.UPEDATE_HOME]:(state,payload)=>state.home=payload,
	[types.UPEDATE_DETAIL]:(state,payload)=>state.detail=payload,

	// [type.muLike]:(state, payload) => state.muLike=payload,
		
	
	// [type.muLikeImg]:(state, payload) =>state.muLikeImg=payload,
	
	
}