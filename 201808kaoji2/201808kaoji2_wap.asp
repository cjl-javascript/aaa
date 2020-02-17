<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="GB2312">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="renderer" content="webkit">
	<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no"/>
	<title>【樱花国际日语】选择高考日语，轻松冲击135分</title>
	<META content="上海日语,日语培训,日语培训中心" name="Keywords">
	<META content="上海日语,日语培训,日语,学习日语,学日语,日语培训中心，经验丰富的全外教,一流的教学环境, 学习时间由你决定, 快来咨询报名吧.……" name="Description">
	<META content="上海日语,日语培训,日语培训中心" name="COPYRIGHT">
	<script type="text/javascript" src="/free/js/jquery.js"></script>
	<script type="text/javascript" src="/free/js/nowcom.js"></script>
	<script type="text/javascript" src="/free/js/leyu.js"></script>
	<style>
		
		/*form开始*/
		body{
			position: relative;
		}
		#form{padding: 6% 0 12% 0;background-color: #000;color: #fff;}
		.mc{ display:block;float:left;width:20%; line-height:2.4;font-weight: bold;font-size:16px;}
		.bgcl{width:80%; float:right; border:1px solid #333;-moz-border-radius:50px;-webkit-border-radius:50px;border-radius:50px;text-indent:18px;margin-bottom:8%;font-size:16px;line-height:2;background-color: #fff;box-sizing: border-box;outline: none;}
		.btn{width:100%;background:#b50d0d;-moz-border-radius:50px;-webkit-border-radius:50px;border-radius:50px;font-size:16px;color:#000; text-align:center; line-height:2.4; border: none;font-weight: bold;outline:none;letter-spacing: 1px;color: #fff;letter-spacing: 3px;}
		/*form结束*/

		/* 遮罩层 */
		#bg{
  position: absolute;
  background-color: rgba(0,0,0,0.5);
  z-index: 100;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: none;
  }
  .zck{
    width:4.7rem;
    height:3.5rem;
    position: fixed;
    border:2px solid #b60e0e;
    padding:.5rem;
    left: 0;
    top:0;
    right:0;
    bottom:0;
    margin:auto;
    z-index:102;
    background-color: #fff;
    display:none;
	}
	/* 关闭乐语 */
	#doyoo_panel,#doyoo_mon_inner,#doyoo_monitor{
		display: none !important;
	}
	</style>

</head>
<!--#include file="Lib/conn.asp"-->

<body>

<!--#include file="header.asp"-->	

	<div class="main">
		<div><img src="images/201808kaoji2/riyukaoji_wap_01.jpg" alt=""></div>
		<div><img src="images/201808kaoji2/riyukaoji_wap_02.jpg" alt=""></div>
		<div>
			<form id="form" name="form">
				<div style="width:75%;margin:0 auto;">
					<div>
						<div style="overflow:hidden;"><div class="mc">姓名:</div><input name="names" class="bgcl" id="names" type="text"></div>
						<div style="overflow:hidden;"><div class="mc">手机:</div><input name="mb" class="bgcl" id="mb" type="text" maxlength="14"></div>
					</div>
					<div style="text-align: center;"><input type="button" id="btn" name="btn" value="立即报名" class="btn"/></div>
				</div>
			</form>
		</div>
		<div><img src="images/201808kaoji2/riyukaoji_wap_03.jpg" alt=""></div>
		<div><img src="images/201808kaoji2/riyukaoji_wap_04.jpg" alt=""></div>
		<div><img src="images/201808kaoji2/riyukaoji_wap_05.jpg" alt=""></div>
		<div><img src="images/201808kaoji2/riyukaoji_wap_06.jpg" alt=""></div>
		<div style="position: relative;">
			<img src="images/201808kaoji2/riyukaoji_wap_07.jpg" alt="">
			<div class="zc" style="position: absolute;width: 33%;height: 53%;left: 34%;top: 21%;"></div>
		</div>
		<div><img src="images/201808kaoji2/riyukaoji_wap_08.jpg" alt=""></div>
		<div><img src="images/201808kaoji2/riyukaoji_wap_09.jpg" alt=""></div>	
		<div><img src="images/201808kaoji2/riyukaoji_wap_10.jpg" alt=""></div>
		<div><img src="images/201808kaoji2/riyukaoji_wap_11.jpg" alt=""></div>
		<div class="zc"><img src="images/201808kaoji2/riyukaoji_wap_12.jpg" alt=""></div>
	</div>

<!--#include file="script.asp"-->	
<!--弹出层时背景层DIV-->

<div id="bg">
</div> 
<div class="zck">
	<div ><div class="mc">姓名:</div><input name="names" class="bgcl" id="names2" type="text"></div>
	<div ><div class="mc">手机:</div><input name="mb" class="bgcl" id="mb2" type="text" maxlength="14"></div>

<div style="text-align: center;"><input type="button" id="btn2" name="btn" value="立即报名" class="btn"/></div>
</body>
<script>
	//遮罩层
	
	$(".zc").on("click",function(){
		$("#bg,.zck").css("display","block"); //点击页面出现遮罩层
		//  $("body").css({overflow:"hidden"})
		 $('.zck,#bg').bind("touchmove",function(e){
                e.preventDefault();
     });
		})
		$("#bg").on("click",function(){
			$("#bg,.zck").css("display","none");//点击遮罩层，遮罩层消失
			//  $("body").css({overflow:"visible"})
		})

</script>
</html>
