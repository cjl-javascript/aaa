var ID = "";
var adname = "";
var act = "";
var mag = "";
var kw = "";
var keybaidu = "";
var key360 = "";
var cutParms = "";
var msg = "";
//验证码默认关闭
var yzm = "f";
//倒计时--验证码
var wait = 60;
//按钮等待
var btnwait = 2;
//注册类型 默认日语
var pType=2;



$(function () {
    ID = GetParms("ID");
    adname = GetParms("adname");
    act = GetParms("act");
    kw = GetParms("kw");
    keybaidu = GetParms("keybaidu");
    key360 = GetParms("key360");
    cutParms = CutParms();


    //显示验证码
    yzm = GetParms("vc");
    if (yzm != "t") {
        $(".yzm").hide();
    }

    //获取验证码
    $("#btncode").click(function () {
        var mobile = $.trim($("#Orders_Tel").val());
        if (mobileOnly(mobile) == false) {
           alert('请输入正确的手机号!');
            return;
        }
        time(this);
        $.ajax({
            url: "https://www.sakurajp.com.cn/api/XsjSendMsg.ashx?mobile=" + mobile,
            type: "get",
            dataType: "text",
            success: function (data) {
                if (data == "") {
                    alert('验证码发送失败!');
                } else {

                    setCookie("salt", data, 1, '', '', '');
                }
            }
        })

    })
	
	    $("#btncode1").click(function () {
        var mobile = $.trim($("#Orders_Tel2").val());
        if (mobileOnly(mobile) == false) {
           alert('请输入正确的手机号!');
            return;
        }
        time(this);
        $.ajax({
            url: "https://www.sakurajp.com.cn/api/XsjSendMsg.ashx?mobile=" + mobile,
            type: "get",
            dataType: "text",
            success: function (data) {
                if (data == "") {
                    alert('验证码发送失败!');
                } else {

                    setCookie("salt", data, 1, '', '', '');
                }
            }
        })

    })



    $("#btnsubmit").click(function () {
        btnwaittime(this);
        return Register("Orders_Name", "Orders_Tel");
    })
    $("#btnsubmit4").click(function () {
        btnwaittime(this);
        return RegisterLX("Orders_Name", "Orders_Tel");
    })
    $("#btnsubmit5").click(function () {
        btnwaittime(this);
        return RegisterLX2("Orders_Name2", "Orders_Tel2");
    })
    $("#btnsubmit3").click(function () {
        btnwaittime(this);
        return Register("Orders_Name3", "Orders_Tel3");
    })

    $("#btnsubmit2").click(function () {
        btnwaittime(this);
        return Register("Orders_Name2", "Orders_Tel2");
    })
    $("#btnsubmit1").click(function () {
        btnwaittime(this);
        return Register("Orders_Name1", "Orders_Tel1");
    })

    $("#btnsubmitYZM").click(function () {
        btnwaittime(this);
		    if (yzm == "t") {
        var code = $.trim($("#YZMcode").val());
        var codeVal = getCookie("salt");
        if (code == "") {
            alert('请输入验证码！');
            return false;
        }
        if (code != codeVal) {
            alert('您输入的验证码不正确！');
            return false;
        }
    }
        return Register("Orders_Name", "Orders_Tel");
    })
	
	
	    $("#btnsubmitYZM1").click(function () {
        btnwaittime(this);
		    if (yzm == "t") {
        var code = $.trim($("#YZMcode1").val());
        var codeVal = getCookie("salt");
        if (code == "") {
            alert('请输入验证码！');
            return false;
        }
        if (code != codeVal) {
            alert('您输入的验证码不正确！');
            return false;
        }
    }
		
		
        return Register("Orders_Name1", "Orders_Tel1");
    })
//英语注册
    $("#btnsubmit_PEP").click(function () {
        btnwaittime(this);
		pType=3;
        return Register("Orders_Name", "Orders_Tel");
    })

})

function time(o) {
    if (wait == 0) {
        o.removeAttribute("disabled");
        o.value = "获取验证码";
        wait = 60;
    } else {
        o.setAttribute("disabled", "disabled");
        o.value = wait + "s后可重发";
        wait--;
        setTimeout(function () {
            time(o)
        },
            1000)
    }
}

//按钮等待 3秒
function btnwaittime(o) {
    if (btnwait == 0) {
        o.removeAttribute("disabled");
        btnwait = 2;
    } else {
        o.setAttribute("disabled", "disabled");
        btnwait--;
        setTimeout(function () {
            btnwaittime(o)
        },
            1000)
    }
}

//普通注册
function Register(nameID, mobileID) {
    var dname = $("#" + nameID);
    var dmobile = $("#" + mobileID);
    var username = $.trim(dname.val());
    var mobile = $.trim(dmobile.val());
    if (username == "") {
        alert('请输入姓名！');
        return false;
    }
    if (username.length >= 8) {
       alert('姓名长度超过8位！');
       return false;
    }
    if (!username.match(/^[\u4E00-\u9FA5a-zA-Z0-9_]{0,}$/)) {
       alert('姓名不允许有特殊字符！');
       return false;
    }
    if (/^[0-9]*$/.test(username)) {
       alert('姓名不允许纯数字！');
       return false;
    }
    if (mobile.length != 11) {
        alert('手机号必须是11位！');
        return false;
    }
    if (mobileOnly(mobile) == false) {
        alert('请输入正确的手机号！');
        return false;
    }

    if (yzm == "t") {
        var code = $.trim($("#YZMcode").val());
        var codeVal = getCookie("salt");
        if (code == "") {
            alert('请输入验证码！');
            return false;
        }
        if (code != codeVal) {
            alert('您输入的验证码不正确！');
            return false;
        }
    }

    AjaxRegister(username, mobile, '', '', ID, adname, act, '', kw, key360, pType);

    return true;
}
//留学注册
function RegisterLX(nameID, mobileID) {
    var dname = $("#" + nameID);
    var dmobile = $("#" + mobileID);
    var username = $.trim(dname.val());
    var mobile = $.trim(dmobile.val());
    if (username == "") {
        alert('请输入姓名！');
        return false;
    }
    if (username.length >= 8) {
       alert('姓名长度超过8位！');
       return false;
    }
    if (!username.match(/^[\u4E00-\u9FA5a-zA-Z0-9_]{0,}$/)) {
       alert('姓名不允许有特殊字符！');
       return false;
    }
    if (/^[0-9]*$/.test(username)) {
       alert('姓名不允许纯数字！');
       return false;
    }
    if (mobile.length != 11) {
        alert('手机号必须是11位！');
        return false;
    }
    if (mobileOnly(mobile) == false) {
        alert('请输入正确的手机号！');
        return false;
    }

    if (yzm == "t") {
        var code = $.trim($("#YZMcode").val());
        var codeVal = getCookie("salt");
        if (code == "") {
            alert('请输入验证码！');
            return false;
        }
        if (code != codeVal) {
            alert('您输入的验证码不正确！');
            return false;
        }
    }

    AjaxRegister(username, mobile, '', '', ID, adname, act, '', kw, key360, 1);

    return true;
}
//留学注册2
function RegisterLX2(nameID, mobileID) {
    var dname = $("#" + nameID);
    var dmobile = $("#" + mobileID);
    var username = $.trim(dname.val());
    var mobile = $.trim(dmobile.val());
    if (username == "") {
        alert('请输入姓名！');
        return false;
    }
    if (username.length >= 8) {
       alert('姓名长度超过8位！');
       return false;
    }
    if (!username.match(/^[\u4E00-\u9FA5a-zA-Z0-9_]{0,}$/)) {
       alert('姓名不允许有特殊字符！');
       return false;
    }
    if (/^[0-9]*$/.test(username)) {
       alert('姓名不允许纯数字！');
       return false;
    }
    if (mobile.length != 11) {
        alert('手机号必须是11位！');
        return false;
    }
    if (mobileOnly(mobile) == false) {
        alert('请输入正确的手机号！');
        return false;
    }

    if (yzm == "t") {
        var code = $.trim($("#YZMcode2").val());
        var codeVal = getCookie("salt");
        if (code == "") {
            alert('请输入验证码！');
            return false;
        }
        if (code != codeVal) {
            alert('您输入的验证码不正确！');
            return false;
        }
    }

    AjaxRegister(username, mobile, '', '', ID, adname, act, '', kw, key360, 1);

    return true;
}
//注册方法
function AjaxRegister(name, mobile, email, seladdr, ID, adname, act, calladdr, k, key360, m) {

    $.ajax({
        url: "https://www.sakurajp.com.cn/Api/xsjResult.ashx?action=register",
        dataType: "text",
        type: "post",
        data: { "username": name, "mobile": mobile, "email": email, "seladdr": seladdr, "ID": ID, "adname": adname, "act": act, "calladdr": calladdr, "age": 0, "keybaidu": k, "key360": key360, "P": m, "url": window.parent.location.href },
        beforeSend: function () {  
        },
        success: function (data) {
            if (data == "1") {
                alert("注册成功");
            } else if (data == "2") {
                alert("对不起,该手机号已存在!");
            } else {
                alert("注册失败");  
            }
        }
    })
}

//获取参数
function GetParms(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}
//截取参数

function CutParms() {
    var reg2 = /([^?]+)$/;
    var r = window.location.search.substr(1).match(reg2);
    if (r != null) return r[1]; return null;
}

// 手机号码验证
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


function getCookie(name) {
    var start = document.cookie.indexOf(name + "=");
    var len = start + name.length + 1;
    if ((!start) && (name != document.cookie.substring(0, name.length))) {
        return null;
    }
    if (start == -1) return null;
    var end = document.cookie.indexOf(';', len);
    if (end == -1) end = document.cookie.length;
    return unescape(document.cookie.substring(len, end));
}

function setCookie(name, value, expires, path, domain, secure) {
    var today = new Date();
    today.setTime(today.getTime());
    if (expires) {
        expires = expires * 1000 * 60 * 60 * 24;
    }
    var expires_date = new Date(today.getTime() + (expires));
    document.cookie = name + '=' + escape(value) +
        ((expires) ? ';expires=' + expires_date.toGMTString() : '') + //expires.toGMTString()  
        ((path) ? ';path=' + path : '') +
        ((domain) ? ';domain=' + domain : '') +
        ((secure) ? ';secure' : '');
}







