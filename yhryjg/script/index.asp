<!--#include file="inc/conn.asp"-->
<!DOCTYPE html>
<html lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<title>樱花国际日语——中国卓越日语培训专家</title>
	<meta name="keywords" content="日语培训,日语培训中心,日语学习,日语学习,学日语,日语能力考,日语学校,日语考试,日语口语,日本留学" />
	<meta name="description" content="独创多媒体课件、全外教阵容、日式小班环境、自由定课、随到随学、日本文化拓展、中国人学日语的全新解决方案" />
	<meta name="viewport" content="width=device-width, user-scalable=no">
	<link rel="shortcut icon" href="images/logo.ico"/>
	<link rel="stylesheet" href="css/style.css" />
	<script src="js/jquery-1.9.1.min.js"></script>
	<script type="text/javascript" src="js/TouchSlide.1.1.js"></script>
</head>
<body>
<!--首页-->
	<div class="main">
		<!--#include file="head.asp"-->
		<div class="index_content">
			<div class="banner">
				<div id="slideBox" class="slideBox" >
					<div class="bd">
						<ul>
						
							
							<li>
								<a class="pic" title="日语考级攻略" target="_blank" href="https://3g.sakurajp.com.cn/free/201808kaoji2_wap.asp?cityid=quanguo"><img src="http://www.sakurajp.com.cn/upload/201808/16/201808161812471236.jpg" /></a>
							</li>
							
				
							
							<li>
								<a class="pic" title="恶搞创作型日文" target="_blank" href="https://3g.sakurajp.com.cn/free/201805cairiwen_wap.asp?cityid=quanguo"><img src="http://www.sakurajp.com.cn/upload/201805/24/201805241643184581.jpg" /></a>
							</li>
							
					
							
							<li>
								<a class="pic" title="这个日语课程有点牛" target="_blank" href="https://3g.sakurajp.com.cn/free/201803kecheng_wap.asp?cityid=quanguo"><img src="http://www.sakurajp.com.cn/upload/20180404/201804041820366576.jpg" /></a>
							</li>
							
							<li>
								<a class="pic" title="动漫日语奇葩说" target="_blank" href="http://3g.sakurajp.com.cn/free/201801qps02_wap.asp?cityid=quanguo"><img src="http://www.sakurajp.com.cn/upload/20180112/201801121736386273.jpg" /></a>
							</li>
							
							<li>
								<a class="pic" title="动漫日语大考堂" target="_blank" href="http://3g.sakurajp.com.cn/free/ry02.asp?cityid=quanguo"><img src="http://www.sakurajp.com.cn/upload/20171106/201711061656414430.jpg" /></a>
							</li>
							
							<li>
								<a class="pic" title="搞笑日语" target="_blank" href="http://3g.sakurajp.com.cn/free/201708hahaha_wap.asp?cityid=quanguo"><img src="http://www.sakurajp.com.cn/upload/20171106/201711061654430009.jpg" /></a>
							</li>
							
							<li>
								<a class="pic" title="玩转日语50音" target="_blank" href="http://3g.sakurajp.com.cn/free/201710wsy_wap.asp"><img src="http://www.sakurajp.com.cn/upload/20171106/201711061645497008.jpg" /></a>
							</li>

						</ul>
					</div>
					<div class="hd" style="left: 50%;margin-left: -60px;">
						<ul></ul>
					</div>
				</div>
					<script type="text/javascript">
						TouchSlide({ 
							slideCell:"#slideBox",
							titCell:".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
							mainCell:".bd ul", 
							effect:"leftLoop", 
							autoPage:true,//自动分页
							autoPlay:true, //自动播放
							delayTime:500, //执行一次效果用多少毫秒
							interTime:3000 //隔多少毫秒后执行下一个效果
						});
					</script>
			</div>
	

			<div class="menu">
				<div class="box">
		            <a href="class_lists.asp"><img src="images/class.png" /></a>
		            <a href="https://lx.liuxuejp.com.cn/mobile/" target="_Blank"><img src="images/liuxue.png" /></a>
		            <a href="xuanke.asp"><img src="images/yuyue.png" /></a>
        		</div>
       			<div class="box">
       				<a href="50yintu/50-1.html"><img src="images/あ.png" /></a>
		            <a href="citys.asp"><img src="images/map.png" /></a>
		            <a href="question.asp"><img src="images/Q&A.png" /></a>
        		</div>
			</div>
		</div>
		<!--#include file="foot.asp"-->
	</div>
	
	<!--qq-->
	<a class="qq" style="display: none;width: 15%;position: fixed;right: 0;top: 15%;" href="http://wpa.b.qq.com/cgi/wpa.php?ln=2&uin=800024885"><img src="https://3g.sakurajp.com.cn/images/qq02.png"></a>
	<!--qq-->
	<script>
		function GetQueryString(cityid){
			var reg = new RegExp("(^|&)"+ cityid +"=([^&]*)(&|$)");
			var r = window.location.search.substr(1).match(reg);
			if(r!=null)return  unescape(r[2]); return null;
		}					
		$(function(){
			var cityName = GetQueryString("cityid");
			if(cityName == 1){
				$(".qq").css("display","inline-block")
			}

		})
	</script>
	
<!--首页over-->	
</body>
</html>