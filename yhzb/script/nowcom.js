
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
		
		
		
		//���cookie
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
		//��ȡcookie
	    function getCookie(objName) {
	        var arrStr = document.cookie.split("; ");
	        for (var i = 0; i < arrStr.length; i++) {
	            var temp = arrStr[i].split("=");
	            if (temp[0] == objName)
	                return unescape(temp[1]);
	        }
	    }
		//ɾ��cookie
	    function delCookie(name) {
	        var date = new Date();
	        date.setTime(date.getTime() - 10000);
	        document.cookie = name + "=a; expires=" + date.toGMTString();
	    }
		//��ȡ����
	    function GetQueryString(name) {
	        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	        var r = window.location.search.substr(1).match(reg);
	        if (r != null) return unescape(r[2]); return null;
	    }
		
		
			
		
		//�ֻ�������֤
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
				alert('������������');
				return;
			}
		
			if (!username.match(/^[\u4e00-\u9fa5]{2,4}$/)) {
				alert('������2-4λ����������');
				return false;
			}

			if(mobile.length!=11){
				alert('�ֻ��ű�����11λ��');
				return;
			}
			if(checkMobile(mobile)==false){
				alert('��������ȷ���ֻ��ţ�');
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
							  
                //Bվ�ϱ�
                if (window.bilicm && window.bilicm.mbase) {
                    window.bilicm.mbase.send_data();
                }
							  
							window.location.href = "/free/success.asp?id=" + mobile;
						  }else if(data == 2){
							alert("�ֻ����Ѵ��ڣ�")
						  }else{
							alert("ע��ʧ�ܣ�")
						  }
					  },1000)
				}
			})
			 
		})
			
		$("#btn2").on("click",function(){
			var username=$.trim($("#names2").val());
			var mobile=$.trim($("#mb2").val());
			if(username==""){
				alert('������������');
				return;
			}
	
			if (!username.match(/^[\u4e00-\u9fa5]{2,4}$/)) {
				alert('������2-4λ����������');
				return false;
			}

			if(mobile.length!=11){
				alert('�ֻ��ű�����11λ��');
				return;
			}
			if(checkMobile(mobile)==false){
				alert('��������ȷ���ֻ��ţ�');
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
							alert("�ֻ����Ѵ��ڣ�")
						  }else{
							alert("ע��ʧ�ܣ�")
						  }
					  },1000)
				}
			})

    })
		 
				     //����ʱ
    var wait = 90;
    function time(o) {
        if (wait == 0) {
            o.removeAttribute("disabled");
            o.value = "��ȡ��֤��";
            wait = 90;
        } else {
            o.setAttribute("disabled", "disabled");
            o.value = "���»�ȡ(" + wait + ")";
            wait--;
            setTimeout(function () {
                time(o)
            },
                1000)
        }
    }

    //��ȡ��֤��
    $("#getCode").click(function () {
        var mobile = $.trim($("#mb").val());
        if (mobile.length != 11) {
            alert("��������ȷ���ֻ��ţ�");
            return;
        }
        if (checkMobile(mobile) == false) {
            alert("��������ȷ���ֻ��ţ�");
            return;
        }
      time(this);
        $.ajax({
            url: "https://3g.sakurajp.com.cn/api/LSendMsg.ashx?mobile=" + mobile,
            type: "get",
            dataType: "text",
            success: function (data) {
                if (data == "") {
                    alert("����ʧ�ܣ�")
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
				alert('������������');
				return;
			}
			if (username.length > 4 || username.length < 2 ){
				alert('����������������');
				return;
			}
			//if (!username.match(/^[\u4E00-\u9FA5a-zA-Z0-9_]{0,}$/)) {
			//	alert('�����������������ַ���');
			//	return;
			//}
			if (!username.match(/^[\u4e00-\u9fa5]{2,4}$/)) {
			alert('����������������');
				return false;
			}
			if (/^[0-9]*$/.test(username)) {
				alert('�������������֣�');
				return false;
			}
			if(mobile.length!=11){
				alert('�ֻ��ű�����11λ��');
				return;
			}
			if(checkMobile(mobile)==false){
				alert('��������ȷ���ֻ��ţ�');
				return;
			}
					var codeVal = getCookie("salt");
				var msg = $.trim($("#msg").val());
				if(msg != codeVal){
			
					alert("�ֻ���֤�벻��ȷ��");
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
							alert("�ֻ����Ѵ��ڣ�")
						  }else{
							alert("ע��ʧ�ܣ�")
						  }
					  },1000)
				}
			})
			 
		})		
	})
		
			