

$(function () {
    var cityname = $("#msgCityName");
    var cityId = QueryName("cityId");
    switch (cityId) {
        case "51":
            cityname.text("武汉");
			$("#telphone").attr("src","/template/All/images/whtel.jpg");
            break;
        case "52":
            cityname.text("长沙");
			$("#telphone").attr("src","/template/All/images/cstel.jpg");
            break;
		case "79":
			cityname.text("西安");
			$("#telphone").attr("src","/template/All/images/xiantel.jpg");
            break;
    }
	
	$(".zuixin ul li span").each(function(){
		var id=$(this).attr("data-id");
		if(id==1 ||id==2 || id==3){
			$(this).addClass("bgyellow").removeClass("bgray");
		}
	})
	$(".wenda ul li span").each(function(){
		var id=$(this).attr("data-id");
		if(id==1 ||id==2 || id==3){
			$(this).addClass("bgyellow").removeClass("bgray");
		}
	})
	$(".baike ul li span").each(function(){
		var id=$(this).attr("data-id");
		if(id==1 ||id==2 || id==3){
			$(this).addClass("bgyellow").removeClass("bgray");
		}
	})
    $(".slist ul").hide();
	
    $(".textselect").hover(function () {
        $("#listxiala").show();
    },function(){
		 $("#listxiala").hide();
	})
	
    $("#listxiala li").click(function () {
        var html = $(this).html();
		var id=$(this).attr("data-id");
		$(".textselect").attr("data-id",id)
        $(".textselect").html(html);
        $("#listxiala").hide();
    })

    $("#listxiala").hover(function () {
		 $(this).show();
    }, function () {
        $(this).hide();
    })
    $(".dingzhi").hover(function () {
        $("#dingzhisub").show();
    },function(){
		 $("#dingzhisub").hide();
	})
	
    $("#dingzhisub").hover(function () {
		 $("#dingzhisub").show();
    }, function () {
        $(this).hide();
    })

})
$(function () {
    var ID = QueryName("ID");
    var adname = QueryName("adname");
    var act = QueryName("act");
    var url, keybaidu, key360, p;
    url = window.location.href;
    keybaidu = QueryName("kw");
    key360 = QueryName("key360");
    p = "樱花官网";
    var CallAddr = "";
    /*******首页通用注册***********/

    $(".names").blur(function () {
        if ($(this).val()=="") {
            layer.tips("请输入姓名！", $(this));
            return;
        }
    })
    $(".mbs").blur(function () {
        if ($(this).val().length !=11) {
            layer.tips("请输入正确的手机号！", $(this));
            return;
        }
    })

    $(".login_btn").click(function () {
        var names = $(".names").val();
        var mb = $(".mbs").val();
        var email = $(".emails").val();
        var citys = $(".citys").val();
        var res = verifyCode.validate(document.getElementById("code_input").value);
        if (names.length == 0) {
            layer.tips('请输入姓名！',$(".names"));
            return false;
        }
		if (!names.match(/^[\u4E00-\u9FA5a-zA-Z0-9_]{0,}$/)) {
            layer.tips('姓名不允许有特殊字符！',$(".names"));
            return false;
        }
		if (/^[0-9]*$/.test(names)) {
		    layer.tips('姓名不允许纯数字！',$(".names"));
            return false;
		}
        if (!mobileOnly(mb)) {
            layer.tips('请输入正确的手机号！', $(".mbs"));
            return false;
        }
        if (!res){
            layer.tips('请输入正确的验证码！', $("#code_input"));
            return false;
        }
        // if (email != "") {
        //     if (!emailOnly(email)) {
        //         layer.tips('请输入正确的邮箱！', $(".emails"));
        //         return false;
        //     }
        // }
        //if (citys == "") {
            //layer.tips('请选择你所在的城市！', $(".citys"));
            //return false;
        //}
        AjaxRegister(names, mb, email, citys, ID, adname, act, '', keybaidu, key360, '樱花');
    })
    /**********申请免费日语课程注册**********/
    $("#btnSubmit1").click(function () {
        var CallAddr = "";
        var names = $(".names").val();
        var mb = $(".mbs").val();
        var email = $(".emails").val();
        var citys = $(".citys").find("option:selected").text();
        if (names == "") {
            layer.tips('请输入姓名！', $(".names"));
            return false;
        }
		if (!names.match(/^[\u4E00-\u9FA5a-zA-Z0-9_]{0,}$/)) {
            layer.tips('姓名不允许有特殊字符！',$(".names"));
            return false;
        }
		if (/^[0-9]*$/.test(names)) {
		    layer.tips('姓名不允许纯数字！',$(".names"));
            return false;
		}
        if (!mobileOnly(mb)) {
            layer.tips('请输入正确的手机号！', $(".mbs"));
            return false;
        }
        if (email != "") {
            if (!emailOnly(email)) {
                layer.tips('请输入正确的邮箱！', $(".emails"));
                return false;
            }
        }
        //if (citys == "选择城市") {
            //layer.msg('请选择你所在的城市！');
            //return false;
        //}
        AjaxRegister(names, mb, email, citys, ID, adname, act, '', keybaidu, key360, '樱花');
    })
	
	 $("#btnSubmit2").click(function () {
        var CallAddr = "";
        var names = $("#names").val();
        var mb = $("#mbs").val();
        var email = $("#emails").val();
        var citys = $("#citys").val();
        if (names == "") {
            layer.tips('请输入姓名！', $("#names"));
            return false;
        }
		if (!names.match(/^[\u4E00-\u9FA5a-zA-Z0-9_]{0,}$/)) {
            layer.tips('姓名不允许有特殊字符！',$("#names"));
            return false;
        }
		if (/^[0-9]*$/.test(names)) {
		    layer.tips('姓名不允许纯数字！',$("#names"));
            return false;
		}
        if (!mobileOnly(mb)) {
            layer.tips('请输入正确的手机号！', $("#mbs"));
            return false;
        }
        if (email != "") {
            if (!emailOnly(email)) {
                layer.tips('请输入正确的邮箱！', $("#emails"));
                return false;
            }
        }
        //if (citys == "") {
            //layer.msg('请选择你所在的城市！');
            //return false;
        //}
        AjaxRegister(names, mb, email, citys, ID, adname, act, '', keybaidu, key360, '樱花');
    })
    
})

function AjaxRegister(a, b, c, d, e, f, g, h, k, l, m) {
    $.ajax({
        url: "/Api/actionResult.ashx?action=register",
        dataType: "text",
        type: "post",
        data: { "username": a, "mobile": b, "email": c, "seladdr": d, "ID": e, "adname": f, "act": g, "age": 0, "kw": k, "key360": l, "P": m, "url": encodeURIComponent(window.location.href) },
        success: function (data) {
            if (data == "1") {
                layer.msg("恭喜您，注册成为会员！", { icon: 1 }, function () {
                    parent.location.href = '/free/tiaozhuan.html';
                })
            } else if (data == "2") {
                layer.msg('对不起,该手机号已存在!', { icon: 8 });
            } else {
                layer.msg("注册失败!", { icon: 8 })
            }
        }
    })
}

function loading() {
    layer.load();
}
function getRootPath() {
    var curWwwPath = window.document.location.href;
    var pathName = window.document.location.pathname;
    var pos = curWwwPath.indexOf(pathName);
    var localhostPaht = curWwwPath.substring(0, pos);
    var projectName = pathName.substring(0, pathName.substr(1).indexOf('/') + 1);
    return (localhostPaht + projectName);
}

function QueryName(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}
var mobileOnly = function (str) {
    var regMobile = /^0{0,1}(13[0-9]|14[0-9]|15[0-9]|16[0-9]|17[0-9]|18[0-9]|19[0-9])[0-9]{8}$/;
    if (regMobile.test(str)) {
        return true;
    } else {
        return false;
    }
}
//纯数字验证
var numOnly = function (str) {
    var regNum = /^[0-9]{1,20}$/;
    if (regNum.test(str)) {
        return true;
    } else {
        return false;
    }
}

//电话号码验证
var telOnly = function (str) {
    var regTel = /^(\d{3,4}-)?\d{7,9}$/g;
    if (regTel.test(str))
        return true;
    else
        return false;
}
//电子邮件验证
var emailOnly = function (str) {
    var regEmail = /[_a-zA-Z\d\-\.]+@[_a-zA-Z\d\-]+(\.[_a-zA-Z\d\-]+)+$/;
    if (regEmail.test(str)) {
        return true;
    } else {
        return false;
    }
}
//弹出层
function Diloag(t, w, h, s) {
    layer.open({
        type: 2,
        title: t,
        area: [w + "px", h + "px"],
        fix: true, //不固定
        maxmin: false,
        content: s
    });
}

//百度统计代码---语培 

var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?9afe53ca909bd0bba8e614e9f824bc1f";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();

// 验证码
$(document).ready(function(){
    $("head").append('<script src="/templates/main/js/yzm.js"></script>');
    if($('#login_btn').length > 0){
        $('body').append('<script>var verifyCode = new GVerify("v_container");</script>')    
    }   
})
  



