$(function(){
	var cityName = GetParms("cityid");
	$(".leyu").on("click",function(){
		if (cityName == "beijing") {
			window.open("http://chat.looyuoms.com/chat/chat/p.do?c=20003150&f=10089139&g=10076788","_blank","width=800,height=530,left=200,top=120")
		}else if(cityName == "hangzhou"){
			window.open("http://chat.looyuoms.com/chat/chat/p.do?c=20003150&f=10089214&g=10076790","_blank","width=800,height=530,left=200,top=120")
		}else if(cityName == "wuhan"){
			window.open("http://chat.looyuoms.com/chat/chat/p.do?c=20003150&f=10089347&g=10076780","_blank","width=800,height=530,left=200,top=120")
		}else if(cityName == "changsha"){
			window.open("http://chat.looyuoms.com/chat/chat/p.do?c=20003150&f=10089348&g=10076781","_blank","width=800,height=530,left=200,top=120")
		}else if(cityName == "nanchang"){
			window.open("http://chat.looyuoms.com/chat/chat/p.do?c=20003150&f=10089349&g=10076782","_blank","width=800,height=530,left=200,top=120")
		}else if(cityName == "nanchang"){
			window.open("http://chat.looyuoms.com/chat/chat/p.do?c=20003150&f=10089349&g=10076782","_blank","width=800,height=530,left=200,top=120")
		}else if(cityName == "dalian" || cityName == "shenyang"){
			window.open("http://chat.looyuoms.com/chat/chat/p.do?c=20003150&f=10089231&g=10076791","_blank","width=800,height=530,left=200,top=120")
		}else if(cityName == "guangzhou"){
			window.open("http://chat.looyuoms.com/chat/chat/p.do?c=20003150&f=10089088&g=10076789","_blank","width=800,height=530,left=200,top=120")
		}else if(cityName == "chengdu" || cityName == "chongqing"){
			window.open("http://chat.looyuoms.com/chat/chat/p.do?c=20003150&f=10089232&g=10076792","_blank","width=800,height=530,left=200,top=120")
		}else if(cityName == "suzhou"){
			window.open("http://chat.looyuoms.com/chat/chat/p.do?c=20003150&f=10089333&g=10076768","_blank","width=800,height=530,left=200,top=120")
		}else if(cityName == "ningbo"){
			window.open("http://chat.looyuoms.com/chat/chat/p.do?c=20003150&f=10089736&g=10076777","_blank","width=800,height=530,left=200,top=120")
		}else {
			window.open("http://chat.looyuoms.com/chat/chat/p.do?c=20003150&f=10089121&g=10076787","_blank","width=800,height=530,left=200,top=120")
		}
	})
})
