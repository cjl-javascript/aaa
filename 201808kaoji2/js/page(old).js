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
	var mobileAgent = new Array("iphone", "ipod", "ipad", "android", "mobile", "blackberry", "webos", "incognito", "webmate", "bada", "nokia", "lg", "ucweb", "skyfire");
	var browser = navigator.userAgent.toLowerCase();
	var isMobile = false;
	for (var i = 0; i < mobileAgent.length; i++) {
		if (browser.indexOf(mobileAgent[i]) != -1) {
			isMobile = true;
			location.href = 'https://3g.sakurajp.com.cn/free/201808kaoji2_wap.asp?cityid=quanguo&ID=baidu&adname=ss&act=DMgkk&kw=7173394%2b(2019)%d7%a2%b2%e1%b4%ca%2b%b3%a3%d3%c3%c8%d5%d3%ef%2b%c8%d5%d3%ef%d1%a7%cf%b0';
			break;
		}
	}


})