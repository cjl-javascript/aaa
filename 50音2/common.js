var ID = "";
var adname = "";
var act = "";
var mag = "";
//验证码默认关闭
var yzm = "f";
//倒计时--验证码
var wait = 60;
//按钮等待
var btnwait = 2;
$(function () {
    ID = GetParms("ID");
    adname = GetParms("adname");
    act = GetParms("act");
    var kw = GetParms("kw");
    var keybaidu = GetParms("keybaidu");
    var key360 = GetParms("key360");
    var answer = 0;

    $("#btnsubmit").click(function () {
        var username = $.trim($("#names").val());
        var mobile = $.trim($("#mb").val());
        var seladdr = $.trim($("#area").find("option:selected").text());

        if (!username.match(/^[\u4e00-\u9fa5]{2,4}$/)) {
            layer.tips('请输入2-4位中文姓名！', $("#names"));
            return false;
        }
        if (mobile.length != 11) {
            layer.tips('手机号必须是11位！', $("#mb"));
            return false;
        }
        if (mobileOnly(mobile) == false) {
            layer.tips('请输入正确的手机号！', $("#mb"));
            return false;
        }

        //if(seladdr=="" || seladdr=="选择城市"){
        //layer.msg("请选择城市");
        //return false;
        //}

        AjaxRegister(username, mobile, '', seladdr, ID, adname, act, '', kw, key360, '樱花', mag);
    })
    //获取验证码
    $("#btncode").click(function () {
        var mobile = $.trim($("#mb").val());
        if (mobileOnly(mobile) == false) {
            layer.msg('请输入正确的手机号!', { icon: 8 });
            return;
        }
        time(this);
        $.ajax({
            url: "/api/LSendMsg.ashx?mobile=" + mobile,
            type: "get",
            dataType: "text",
            success: function (data) {
                if (data == "") {
                    layer.msg('验证码发送失败!', { icon: 8 });
                } else {

                    setCookie("salt", data, 1, '', '', '');
                }
            }
        })

    })
    //验证码等待 60秒
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
    $("#btnsubmit1").click(function () {
        var username = $.trim($("#names").val());
        var mobile = $.trim($("#mb").val());
        var seladdr = $.trim($("#area").find("option:selected").text());

        if (!username.match(/^[\u4e00-\u9fa5]{2,4}$/)) {
            layer.tips('请输入2-4位中文姓名！', $("#names"));
            return false;
        }
        if (mobile.length != 11) {
            layer.tips('手机号必须是11位！', $("#mb"));
            return false;
        }
        if (mobileOnly(mobile) == false) {
            layer.tips('请输入正确的手机号！', $("#mb"));
            return false;
        }

        //if(seladdr=="" || seladdr=="选择城市"){
        //layer.msg("请选择城市");
        //return false;
        //}
        if (yzm == "t") {
            var code = $.trim($("#YZMcode").val());
            var codeVal = getCookie("salt");
            if (code == "") {
                layer.tips('请输入验证码！', $("#YZMcode"));
                return false;
            }
            if (code != codeVal) {
                layer.tips('您输入的验证码不正确！', $("#YZMcode"));
                return false;
            }
        }
        AjaxRegister(username, mobile, '', seladdr, ID, adname, act, '', kw, key360, '樱花', mag);
    })

    $("#btnsubmit2").click(function () {
        var username = $.trim($("#names2").val());
        var mobile = $.trim($("#mb2").val());
        var seladdr = $.trim($("#area2").find("option:selected").text());
        if (!username.match(/^[\u4e00-\u9fa5]{2,4}$/)) {
            layer.tips('请输入2-4位中文姓名！', $("#names2"));
            return false;
        }
        if (/^[0-9]*$/.test(username)) {
            layer.tips('姓名不允许纯数字！', $("#names2"));
            return false;
        }
        if (mobile.length != 11) {
            layer.tips('手机号必须是11位！', $("#mb2"));
            return false;
        }
        if (mobileOnly(mobile) == false) {
            layer.tips('请输入正确的手机号！', $("#mb2"));
            return false;
        }

        //if(seladdr=="" || seladdr=="选择城市"){
        //layer.msg("请选择城市");
        //return false;
        //}

        answer = AjaxRegister(username, mobile, '', seladdr, ID, adname, act, '', kw, key360, '樱花', mag);
    })
})
function AjaxRegister(a, b, c, d, e, f, g, h, k, l, m, mag) {

    var flag = 0;
    $.ajax({
        url: "/Api/actionResult.ashx?action=register",
        dataType: "text",
        type: "post",
        data: { "username": a, "mobile": b, "email": c, "seladdr": d, "ID": e, "adname": f, "act": g, "calladdr": h, "age": 0, "keybaidu": k, "key360": l, "P": m, "url": window.parent.location.href },
        beforeSend: function () {
            layer.load(2);
        },
        success: function (data) {
            setTimeout(function () {
                layer.closeAll();
                flag = data;
                if (mag == "") {

                } else {
                    alert(mag);
                }
                if (data == "1") {
                    layer.msg("恭喜您，注册成功！", { icon: 1 }, function () {
                        parent.location.href = '/free/tiaozhuan.html';
                    })
                } else if (data == "2") {
                    layer.msg('对不起,该手机号已存在!', { icon: 8 });
                } else {
                    layer.msg("注册失败!", { icon: 8 })
                }
            }, 1500)
        }
    })
    return flag;
}

//获取参数
function GetParms(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}
// 手机号码验证
var mobileOnly = function (str) {
    var regMobile = /^1(3[0-9]|4[01456879]|5[0-35-9]|6[2567]|7[0-8]|8[0-9]|9[0-35-9])\d{8}$/;
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
function Opdg(t, w, h, s) {
    layer.open({
        type: 2,
        title: t,
        area: [w + "px", h + "px"],
        fix: true, //不固定
        maxmin: false,
        content: s + "?ID=" + ID + "&adname=" + adname + "&act=" + act
    });
}
//classname 是css样式名    intval 1000是一秒钟
function OpenClass(classname, intval, url, t, w, h) {
    layer.open({
        type: 1,
        title: t,
        shade: [0.8],
        skin: 'layui-layer-rim', //加上边框
        area: [w + 'px', h + 'px'], //宽高
        content: $(classname).html()
    });

    setTimeout(function () {
        layer.closeAll();
        parent.location.href = url;
    }, intval)
}
//弹出注册表单
// 之前
// function PopupRegister(t, w, h, r) {
//     layer.open({
//         type: 2,
//         title: t,
//         area: [w + "px", h + "px"],
//         fix: true, //不固定
//         maxmin: false,
//         content: r+"?ID="+ID+"&adname="+adname+"&act="+act
//     });
// }
function PopupRegister(t, w, h, r) {
    layer.open({
        type: 2,
        title: t,
        area: [w + "px", h + "px"],
        fix: true, //不固定
        maxmin: false,
        content: r
    });
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
//默认选中城市
$(function () {
    var cityName = GetParms("cityid");
    $("#area option[data-city=" + cityName + "]").attr("selected", 'selected');

})

//百度统计代码---语培

var _hmt = _hmt || [];
(function () {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?9afe53ca909bd0bba8e614e9f824bc1f";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})();



