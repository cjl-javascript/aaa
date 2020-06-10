
		window._agl = window._agl || [];
        (function () {
            _agl.push(
                ['production', '_f7L2XwGXjyszb4d1e2oxPybgD']
            );
            (function () {
                var agl = document.createElement('script');
                agl.type ='text/javascript';
                agl.async = true;
                agl.src = 'https://fxgate.baidu.com/angelia/fcagl.js?production=_f7L2XwGXjyszb4d1e2oxPybgD';
                var s = document.getElementsByTagName('script')[0];
                s.parentNode.insertBefore(agl, s);
            })();
        })();
		
		
		
		//添加cookie
	    function addCookie(objName, objValue, objHours) {
	        var str = objName + "=" + escape(objValue);
	        if (objHours > 0) {
	            var date = new Date();
	            var ms = objHours * 3600 * 1000;
	            date.setTime(date.getTime() + ms);
	            str += "; expires=" + date.toGMTString();
	        }
	        document.cookie = str;
	    }
		//获取cookie
	    function getCookie(objName) {
	        var arrStr = document.cookie.split("; ");
	        for (var i = 0; i < arrStr.length; i++) {
	            var temp = arrStr[i].split("=");
	            if (temp[0] == objName)
	                return unescape(temp[1]);
	        }
	    }
		//删除cookie
	    function delCookie(name) {
	        var date = new Date();
	        date.setTime(date.getTime() - 10000);
	        document.cookie = name + "=a; expires=" + date.toGMTString();
	    }
		//获取参数
	    function GetQueryString(name) {
	        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	        var r = window.location.search.substr(1).match(reg);
	        if (r != null) return unescape(r[2]); return null;
	    }
		
		
			
		
		//手机号码验证
		function checkMobile(sMobile) {
	        if (!(/^1[3|4|5|6|7|8|9][0-9]\d{4,8}$/.test(sMobile))) {
	            return false;
	        } else {
	            return true;
	        }
	    }
		
		
		
		
	var mag;
	$(function(){
		var ID=GetQueryString("ID");
		var adname=GetQueryString("adname");
		var act=GetQueryString("act");
		var kw=GetQueryString("kw");
		var keybaidu=GetQueryString("keybaidu");
		var key360=GetQueryString("key360");
		var url = window.parent.location.href;
		
		
		$("#btn").on("click",function(){
			var username=$.trim($("#names").val());
			var mobile=$.trim($("#mb").val());
			if(username==""){
				alert('请输入姓名！');
				return;
			}
		
			if (!username.match(/^[\u4e00-\u9fa5]{2,4}$/)) {
				alert('请输入2-4位中文姓名！');
				return false;
			}

			if(mobile.length!=11){
				alert('手机号必须是11位！');
				return;
			}
			if(checkMobile(mobile)==false){
				alert('请输入正确的手机号！');
				return;
			}
			if(mag){
				alert(mag);
			}
			
			$.ajax({
				url: "/Api/actionResult3g.ashx?action=register",
				dataType: "text",
				type: "get",
				data: {"username":username,"mobile":mobile,"ID":ID,"adname":adname,"act":act,"kw":kw,"keybaidu":keybaidu,"key360":key360,"url":url,"p":""},
				success: function (data) {
				console.log(data)
					  setTimeout(function(){
						  if(data == 1){
							  window._agl && window._agl.push(['track', ['success', {t: 3}]])
							  
                //B站上报
                if (window.bilicm && window.bilicm.mbase) {
                    window.bilicm.mbase.send_data();
                }
							  
							window.location.href = "/free/success.asp?id=" + mobile;
						  }else if(data == 2){
							alert("手机号已存在！")
						  }else{
							alert("注册失败！")
						  }
					  },1000)
				}
			})
			 
		})
			
		$("#btn2").on("click",function(){
			var username=$.trim($("#names2").val());
			var mobile=$.trim($("#mb2").val());
			if(username==""){
				alert('请输入姓名！');
				return;
			}
	
			if (!username.match(/^[\u4e00-\u9fa5]{2,4}$/)) {
				alert('请输入2-4位中文姓名！');
				return false;
			}

			if(mobile.length!=11){
				alert('手机号必须是11位！');
				return;
			}
			if(checkMobile(mobile)==false){
				alert('请输入正确的手机号！');
				return;
			}
			if(mag){
				alert(mag);
			}
			
			$.ajax({
				url: "/Api/actionResult3g.ashx?action=register",
				dataType: "text",
				type: "get",
				data: {"username":username,"mobile":mobile,"ID":ID,"adname":adname,"act":act,"kw":kw,"keybaidu":keybaidu,"key360":key360,"url":url,"p":""},
				success: function (data) {
				console.log(data)
					  setTimeout(function(){
						  if(data == 1){
							window.location.href = "/free/success.asp?id=" + mobile;
						  }else if(data == 2){
							alert("手机号已存在！")
						  }else{
							alert("注册失败！")
						  }
					  },1000)
				}
			})

    })
		 
				     //倒计时
    var wait = 90;
    function time(o) {
        if (wait == 0) {
            o.removeAttribute("disabled");
            o.value = "获取验证码";
            wait = 90;
        } else {
            o.setAttribute("disabled", "disabled");
            o.value = "重新获取(" + wait + ")";
            wait--;
            setTimeout(function () {
                time(o)
            },
                1000)
        }
    }

    //获取验证码
    $("#getCode").click(function () {
        var mobile = $.trim($("#mb").val());
        if (mobile.length != 11) {
            alert("请输入正确的手机号！");
            return;
        }
        if (checkMobile(mobile) == false) {
            alert("请输入正确的手机号！");
            return;
        }
      time(this);
        $.ajax({
            url: "https://3g.sakurajp.com.cn/api/LSendMsg.ashx?mobile=" + mobile,
            type: "get",
            dataType: "text",
            success: function (data) {
                if (data == "") {
                    alert("发送失败！")
                } else {
                    
                    addCookie("salt", data, 1)
                }
            }
        })	
		})

		$("#btnvercode").on("click",function(){
			var username=$.trim($("#names").val());
			var mobile=$.trim($("#mb").val());
			if(username==""){
				alert('请输入姓名！');
				return;
			}
			if (username.length > 4 || username.length < 2 ){
				alert('请输入合理的姓名！');
				return;
			}
			//if (!username.match(/^[\u4E00-\u9FA5a-zA-Z0-9_]{0,}$/)) {
			//	alert('姓名不允许有特殊字符！');
			//	return;
			//}
			if (!username.match(/^[\u4e00-\u9fa5]{2,4}$/)) {
			alert('请输入合理的姓名！');
				return false;
			}
			if (/^[0-9]*$/.test(username)) {
				alert('姓名不允许纯数字！');
				return false;
			}
			if(mobile.length!=11){
				alert('手机号必须是11位！');
				return;
			}
			if(checkMobile(mobile)==false){
				alert('请输入正确的手机号！');
				return;
			}
					var codeVal = getCookie("salt");
				var msg = $.trim($("#msg").val());
				if(msg != codeVal){
			
					alert("手机验证码不正确！");
						return;
				}
			if(mag){
				alert(mag);
			}
			
			$.ajax({
				url: "/Api/actionResult3g.ashx?action=register",
				dataType: "text",
				type: "get",
				data: {"username":username,"mobile":mobile,"ID":ID,"adname":adname,"act":act,"kw":kw,"keybaidu":keybaidu,"key360":key360,"url":url,"p":""},
				success: function (data) {
				console.log(data)
					  setTimeout(function(){
						  if(data == 1){
							  	  delCookie("salt");
							  window._agl && window._agl.push(['track', ['success', {t: 3}]])
							window.location.href = "/free/success.asp?id=" + mobile;
						  }else if(data == 2){
							alert("手机号已存在！")
						  }else{
							alert("注册失败！")
						  }
					  },1000)
				}
			})
			 
		})		
	})
		
			