<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="GB2312">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="renderer" content="webkit">
	<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no"/>
	<title>��ӣ����������¾��䶯������</title>
	<META content="�Ϻ�����,������ѵ,������ѵ����" name="Keywords">
	<META content="�Ϻ�����,������ѵ,����,ѧϰ����,ѧ����,������ѵ���ģ�����ḻ��ȫ���,һ���Ľ�ѧ����, ѧϰʱ���������, ������ѯ������.����" name="Description">
	<META content="�Ϻ�����,������ѵ,������ѵ����" name="COPYRIGHT">
	<script type="text/javascript" src="/free/js/jquery.js"></script>
	<script type="text/javascript" src="/free/js/nowcom.js"></script>
	<style>
		
		/*form��ʼ*/
		.bgcl{width:75%; float:right; border:1px solid #ccc;-moz-border-radius:3px;-webkit-border-radius:3px;border-radius:3px;text-indent:5px;margin-bottom:5%;font-size:16px;line-height:2;background-color: #efefef;box-sizing: border-box;}
		.btn{width:100%;background:#0076e4;-moz-border-radius:7px;-webkit-border-radius:7px;border-radius:7px;font-size:16px;color:#fff; text-align:center; line-height:2; border:1px solid #000;font-weight: bold;box-shadow:0 2px 0 #fef72b;outline:none;}
		.mc{ display:block;float:left;width:16%; line-height:2.3;font-weight: bold;font-size: 16px;}
		/*form����*/

		.main{background-image: url("images/images20170920/bg_repeat.png");}
		.box{width: 85%;margin: 0 auto;overflow: hidden;}
		.ques{overflow: hidden;}
		.ques div{float: left;font-size: 12px;}
		.ans{overflow: hidden;}
		.ans-con{float: left;font-size: 12px;}
		.ans-con div{margin-top: 5px;overflow: hidden;}
		#labelId{display: inline-block;width:14px;height:14px;border-radius:20px;border: 2px solid #0076e4;position: relative;}
		.checked{background-color: #0076e4;}
		.checked:after {
		    content: '\00a0';
		    display: inline-block;
		    border: 3px solid #fff;
		    border-top-width: 0;
		    border-right-width: 0; 
		    width: 8px;
		    height: 5px;
		    -webkit-transform: rotate(-50deg);
		    position: absolute;
		    top:2px;
		    left:2px;
		}
		span{margin-left: 8px;line-height: 18px;}
	</style>
<script>
	
	$(function(){
		$(".ans-con div").on("click",function(){
			$(this).find('label').addClass("checked");
			$(this).siblings().find("label").removeClass("checked");
		})
		
	})
	var mag = "��һ��𰸣�A \n�ڶ���𰸣�B \n������𰸣�B \n������𰸣�A";
	
</script>
</head>
<!--#include file="Lib/conn.asp"-->

<body>

<!--#include file="header.asp"-->	

<div class="main">
	<div><img src="images/images20170920/201709dmrw_wap_01.png" alt=""></div>
	<!-- <div><img src="images/images20170920/201709dmrw_wap_02.png" alt=""></div> -->
	<div><img src="images/images20170920/201709dmrw_wap_03.png" alt=""></div>
	<div class="box">
		<div class="ques">
			<div style="width: 51%;">1���Ȿ����˭��ֿ����</div>
			<div style="width: 49%;">2����λ��������ı������۾���</div>
		</div>
		<div class="ans">
			
			<div class="ans-con" style="width: 51%;">
				<div><label class="left" id="labelId"></label><span class="left">A��������</span></div>
				<div><label class="left" id="labelId"></label><span class="left">B������С��</span></div>
			</div>
			<div class="ans-con" style="width: 49%;">
				<div><label class="left" id="labelId"></label><span class="left">A����ڣ����</span></div>
				<div><label class="left" id="labelId"></label><span class="left">B��־���°�</span></div>
			</div>
		</div>
	</div>
	<div style="margin-top:10px;"><img src="images/images20170920/201709dmrw_wap_04.png" alt=""></div>
	<div class="box">
		<div class="ques">
			<div style="width: 51%;">3���ⶥ��ñ��˭�ı�־��</div>
			<div style="width: 49%;">4����������������뵽˭��</div>
		</div>
		<div class="ans">
			<div class="ans-con" style="width: 51%;">
				<div><label class="left" id="labelId"></label><span class="left">A��Լ������ʿ������</span></div>
				<div><label class="left" id="labelId"></label><span class="left">B��·��</span></div>
			</div>
			<div class="ans-con" style="width: 49%;">
				<div><label class="left" id="labelId"></label><span class="left">A��Ƥ����</span></div>
				<div><label class="left" id="labelId"></label><span class="left">B�������</span></div>
			</div>
		</div>
	</div>
	<div style="margin-bottom: 10%;">
		<form id="form1" name="form1">
			<div style="width:76%;margin:0 auto;">
				<div style="margin-top:12%;">
					<div style="overflow:hidden;"><div class="mc">����:</div><input name="names" class="bgcl" id="names" type="text"></div>
					<div style="overflow:hidden;"><div class="mc">�ֻ�:</div><input name="mb" class="bgcl" id="mb" type="text" maxlength="14"></div>
				</div>
				<div style="text-align: center;"><input type="button" id="btn" name="btn" value="�ύ��" class="btn"/></div>
			</div>
		</form>
	</div>
	<div><img src="images/images20170920/201709dmrw_wap_05.png" alt=""></div>
	<div><img src="images/images20170920/201709dmrw_wap_06.png" alt=""></div>
</div>
		

<!--#include file="script3.asp"-->	

</body>
</html>
