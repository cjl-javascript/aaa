$(function () {
	$(".xuqiu>div").hover(function () {
		$(this).find("div").show();
	}, function () {
		$(this).find("div").hide();
	})
	$(".div4>div").hover(function () {
		$(this).find("img").show();
	}, function () {
		$(this).find("img").hide();
	})


	var btop = $(window).scrollTop();
	if (btop >= 606) {
		$(".form2").show();
	} else {
		$(".form2").hide();
	}
	$(window).scroll(function () {
		var btop = $(window).scrollTop();
		if (btop >= 606) {
			$(".form2").show();
		} else {
			$(".form2").hide();
		}

	})
	//遮罩层
	window.onload=function () {
		
		$(".zc").on("click",function(){
			$("#bg,.zck").css("display","block"); //点击页面出现遮罩层
			$("body").css({overflow:"hidden"})
			})
			$("#bg").on("click",function(){
				$("#bg,.zck").css("display","none");//点击遮罩层，遮罩层消失
				$("body").css({overflow:"visible"})
			})
	  }

		
	// pc页面换移动端页面
	var url=window.location.search;
	
	var mobileAgent = new Array("iphone", "ipod", "ipad", "android", "mobile", "blackberry", "webos", "incognito", "webmate", "bada", "nokia", "lg", "ucweb", "skyfire");
	var browser = navigator.userAgent.toLowerCase();
	var isMobile = false;
	for (var i = 0; i < mobileAgent.length; i++) {
		if (browser.indexOf(mobileAgent[i]) != -1) {
			isMobile = true;
			location.href = 'https://3g.sakurajp.com.cn/free/201808kaoji2_wap.asp'+url;
			break;
		}
	}


})