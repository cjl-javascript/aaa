var ID = "";
var adname = "";
var act = "";
var mag = "";
var kw = "";
var keybaidu = "";
var key360 = "";
var cutParms = "";
var msg = "";
var username = "";
var mobile = "";
//验证码默认关闭
var yzm = "f";
//倒计时--验证码
var wait = 60;
//按钮等待
var btnwait = 2;
//提示信息带图片 需在页面事先编辑 模板页 animeAna.axps
var layerImgInfo = false;
window._agl = window._agl || [];
(function () {
    _agl.push(
        ['production', '_f7L2XwGXjyszb4d1e2oxPybgD']
    );
    (function () {
        var agl = document.createElement('script');
        agl.type = 'text/javascript';
        agl.async = true;
        agl.src = 'https://fxgate.baidu.com/angelia/fcagl.js?production=_f7L2XwGXjyszb4d1e2oxPybgD';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(agl, s);
    })();
})();

$(function () {
    ID = GetParms("ID");
    adname = GetParms("adname");
    act = GetParms("act");
    kw = GetParms("kw");
    keybaidu = GetParms("keybaidu");
    key360 = GetParms("key360");
    cutParms = CutParms();

    $(".leyu").click(function () {
        leyuclick();
    })

    $(".leyu_mobile").click(function () {
        Mobileleyuclick();
    })

    //点击按钮注册
    $("#btnsubmit").click(function () {
        btnwaittime(this);
        return Register1("names", "mb");
    })
    $("#btnsubmit2").click(function () {
        btnwaittime(this);
        return Register2("names2", "mb2");
    })
    $("#btnsubmit3").click(function () {
        btnwaittime(this);
        return Register3("names3", "mb3");
    })
    $("#btnsubmit4").click(function () {
        btnwaittime(this);
        return Register4("names4", "mb4");
    })
    //显示验证码
    yzm = GetParms("vc");
    if (yzm != "t") {
        $(".yzm").css("display", "none");
    }
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
     //获取验证码2
     $("#btncode2").click(function () {
        var mobile = $.trim($("#mb2").val());
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
    //获取验证码3
    $("#btncode3").click(function () {
        var mobile = $.trim($("#mb3").val());
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
     //获取验证码4
     $("#btncode4").click(function () {
        var mobile = $.trim($("#mb4").val());
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
//注册成功提示信息
function GetMsg(msg_value) {
    msg = msg_value;
}
//是否弹出图片提示赋值
function GetlayerImgInfo(layerImgInfo_value) {
    layerImgInfo = layerImgInfo_value;
}

//语培注册1
function Register1(nameID, mobileID) {
    var dname = $("#" + nameID);
    var dmobile = $("#" + mobileID);
    username = $.trim(dname.val());
    mobile = $.trim(dmobile.val());
    if (username == "") {
        layer.msg('请输入姓名！', { icon: 8 });
        return false;
    }
    if (username.length >= 8) {
        layer.msg('姓名长度超过8位！', { icon: 8 });
        return false;
    }
    if (!username.match(/^[\u4E00-\u9FA5a-zA-Z0-9_]{0,}$/)) {
        layer.msg('姓名不允许有特殊字符！', { icon: 8 });
        return false;
    }
    if (/^[0-9]*$/.test(username)) {
        layer.msg('姓名不允许纯数字！', { icon: 8 });
        return false;
    }
    if (mobile.length != 11) {
        layer.msg('手机号必须是11位！', { icon: 8 });
        return false;
    }
    if (mobileOnly(mobile) == false) {
        layer.msg('请输入正确的手机号！', { icon: 8 });
        return false;
    }
    if (yzm == "t") {

        var code = $.trim($("#YZMcode").val());
        var codeVal = getCookie("salt");
        if (code == "") {
            layer.msg('请输入验证码！', { icon: 8 });
            return false;
        }
        if (code != codeVal) {
            layer.msg('您输入的验证码不正确！', { icon: 8 });
            return false;
        }
    }
    AjaxRegister(username, mobile,'', '', ID, adname, act, '', kw, key360, '');

    return true;
}
//语培注册2
function Register2(nameID, mobileID) {
    var dname = $("#" + nameID);
    var dmobile = $("#" + mobileID);
    username = $.trim(dname.val());
    mobile = $.trim(dmobile.val());
    if (username == "") {
        layer.msg('请输入姓名！', { icon: 8 });
        return false;
    }
    if (username.length >= 8) {
        layer.msg('姓名长度超过8位！', { icon: 8 });
        return false;
    }
    if (!username.match(/^[\u4E00-\u9FA5a-zA-Z0-9_]{0,}$/)) {
        layer.msg('姓名不允许有特殊字符！', { icon: 8 });
        return false;
    }
    if (/^[0-9]*$/.test(username)) {
        layer.msg('姓名不允许纯数字！', { icon: 8 });
        return false;
    }
    if (mobile.length != 11) {
        layer.msg('手机号必须是11位！', { icon: 8 });
        return false;
    }
    if (mobileOnly(mobile) == false) {
        layer.msg('请输入正确的手机号！', { icon: 8 });
        return false;
    }
    if (yzm == "t") {

        var code = $.trim($("#YZMcode2").val());
        var codeVal = getCookie("salt");
        if (code == "") {
            layer.msg('请输入验证码！', { icon: 8 });
            return false;
        }
        if (code != codeVal) {
            layer.msg('您输入的验证码不正确！', { icon: 8 });
            return false;
        }
    }
    AjaxRegister(username, mobile,'', '', ID, adname, act, '', kw, key360, '');

    return true;
}
//语培注册3
function Register3(nameID, mobileID) {
    var dname = $("#" + nameID);
    var dmobile = $("#" + mobileID);
    username = $.trim(dname.val());
    mobile = $.trim(dmobile.val());
    if (username == "") {
        layer.msg('请输入姓名！', { icon: 8 });
        return false;
    }
    if (username.length >= 8) {
        layer.msg('姓名长度超过8位！', { icon: 8 });
        return false;
    }
    if (!username.match(/^[\u4E00-\u9FA5a-zA-Z0-9_]{0,}$/)) {
        layer.msg('姓名不允许有特殊字符！', { icon: 8 });
        return false;
    }
    if (/^[0-9]*$/.test(username)) {
        layer.msg('姓名不允许纯数字！', { icon: 8 });
        return false;
    }
    if (mobile.length != 11) {
        layer.msg('手机号必须是11位！', { icon: 8 });
        return false;
    }
    if (mobileOnly(mobile) == false) {
        layer.msg('请输入正确的手机号！', { icon: 8 });
        return false;
    }
    if (yzm == "t") {

        var code = $.trim($("#YZMcode3").val());
        var codeVal = getCookie("salt");
        if (code == "") {
            layer.msg('请输入验证码！', { icon: 8 });
            return false;
        }
        if (code != codeVal) {
            layer.msg('您输入的验证码不正确！', { icon: 8 });
            return false;
        }
    }
    AjaxRegister(username, mobile,'', '', ID, adname, act, '', kw, key360, '');

    return true;
}
//语培注册4
function Register4(nameID, mobileID) {
    var dname = $("#" + nameID);
    var dmobile = $("#" + mobileID);
    username = $.trim(dname.val());
    mobile = $.trim(dmobile.val());
    if (username == "") {
        layer.msg('请输入姓名！', { icon: 8 });
        return false;
    }
    if (username.length >= 8) {
        layer.msg('姓名长度超过8位！', { icon: 8 });
        return false;
    }
    if (!username.match(/^[\u4E00-\u9FA5a-zA-Z0-9_]{0,}$/)) {
        layer.msg('姓名不允许有特殊字符！', { icon: 8 });
        return false;
    }
    if (/^[0-9]*$/.test(username)) {
        layer.msg('姓名不允许纯数字！', { icon: 8 });
        return false;
    }
    if (mobile.length != 11) {
        layer.msg('手机号必须是11位！', { icon: 8 });
        return false;
    }
    if (mobileOnly(mobile) == false) {
        layer.msg('请输入正确的手机号！', { icon: 8 });
        return false;
    }
    if (yzm == "t") {

        var code = $.trim($("#YZMcode4").val());
        var codeVal = getCookie("salt");
        if (code == "") {
            layer.msg('请输入验证码！', { icon: 8 });
            return false;
        }
        if (code != codeVal) {
            layer.msg('您输入的验证码不正确！', { icon: 8 });
            return false;
        }
    }
    AjaxRegister(username, mobile,'', '', ID, adname, act, '', kw, key360, '');

    return true;
}
//注册方法
function AjaxRegister(name, mobile, email, seladdr, ID, adname, act, calladdr, k, key360, m) {

    $.ajax({
        url: "/Api/actionResult.ashx?action=register",
        dataType: "text",
        type: "post",
        data: { "username": name, "mobile": mobile, "email": email, "seladdr": seladdr, "ID": ID, "adname": adname, "act": act, "calladdr": calladdr, "age": 0, "keybaidu": k, "key360": key360, "P": m, "url": window.parent.location.href },
        beforeSend: function () {
            layer.load(1, {
                shade: [0.1, '#fff'],
                time: 3000
            }
            );
        },
        success: function (data) {

            layer.closeAll();
            if (data == "1") {
                window._agl && window._agl.push(['track', ['success', { t: 3 }]])
                //B站上报
                if (window.bilicm && window.bilicm.mbase) {
                    window.bilicm.mbase.send_data();
                }

                if (layerImgInfo == false) {
                    layer.msg(msg + "恭喜您，注册成功！", { icon: 1 }, function () {
                        parent.location.href = '/free/success.asp';
                    })
                } else {
                    layer.open({
                        type: 1,
                        skin: 'layui-layer-demo', //样式类名
                        closeBtn: 0, //不显示关闭按钮
                        anim: 2,
                        shadeClose: true, //开启遮罩关闭
                        title: '恭喜您，注册成功',
                        /*           area: ['300px', '450px'],*/
                        time: 3000, //2秒后自动关闭
                        content: $('#layerOpenContent'),
                        end: function () {
                            parent.location.href = '/free/success.asp';
                        }

                    });
                }

            } else if (data == "2") {
                layer.msg('您已提交过信息，经鉴定是真爱!', { icon: 8 },
                    function () {
                        parent.location.href = '/free/success.asp';
                    });

            } else {
                layer.msg("注册失败!", { icon: 8 })
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

//页面调用乐语
function leyuclick() {
    var cityName = GetParms("cityid");

    if (cityName == "beijing") {
        window.open("http://chat.looyuoms.com/chat/chat/p.do?c=20003150&f=10089139&g=10076788", "_blank", "width=800,height=530,left=200,top=120")
    } else if (cityName == "hangzhou") {
        window.open("http://chat.looyuoms.com/chat/chat/p.do?c=20003150&f=10089214&g=10076790", "_blank", "width=800,height=530,left=200,top=120")
    } else if (cityName == "wuhan") {
        window.open("http://chat.looyuoms.com/chat/chat/p.do?c=20003150&f=10089347&g=10076780", "_blank", "width=800,height=530,left=200,top=120")
    } else if (cityName == "changsha") {
        window.open("http://chat.looyuoms.com/chat/chat/p.do?c=20003150&f=10089348&g=10076781", "_blank", "width=800,height=530,left=200,top=120")
    } else if (cityName == "nanchang") {
        window.open("http://chat.looyuoms.com/chat/chat/p.do?c=20003150&f=10089349&g=10076782", "_blank", "width=800,height=530,left=200,top=120")
    } else if (cityName == "nanchang") {
        window.open("http://chat.looyuoms.com/chat/chat/p.do?c=20003150&f=10089349&g=10076782", "_blank", "width=800,height=530,left=200,top=120")
    } else if (cityName == "dalian" || cityName == "shenyang") {
        window.open("http://chat.looyuoms.com/chat/chat/p.do?c=20003150&f=10089231&g=10076791", "_blank", "width=800,height=530,left=200,top=120")
    } else if (cityName == "guangzhou") {
        window.open("http://chat.looyuoms.com/chat/chat/p.do?c=20003150&f=10089088&g=10076789", "_blank", "width=800,height=530,left=200,top=120")
    } else if (cityName == "chengdu" || cityName == "chongqing") {
        window.open("http://chat.looyuoms.com/chat/chat/p.do?c=20003150&f=10089232&g=10076792", "_blank", "width=800,height=530,left=200,top=120")
    } else if (cityName == "suzhou") {
        window.open("http://chat.looyuoms.com/chat/chat/p.do?c=20003150&f=10089333&g=10076768", "_blank", "width=800,height=530,left=200,top=120")
    } else if (cityName == "ningbo") {
        window.open("http://chat.looyuoms.com/chat/chat/p.do?c=20003150&f=10089736&g=10076777", "_blank", "width=800,height=530,left=200,top=120")
    } else if (cityName == "quanguo") {
        window.open("http://chat.looyuoms.com/chat/chat/p.do?c=20003150&f=10089121&g=10076787", "_blank", "width=800,height=530,left=200,top=120")
    } else {
        window.open("http://chat.looyuoms.com/chat/chat/p.do?c=20003150&f=10089121&g=10076787", "_blank", "width=800,height=530,left=200,top=120")
    }


}
//调用乐语
function removeleyu() {
    var cityName = GetParms("cityid");
    if (cityName == "beijing") {
        $("head").append('<script type="text/javascript" charset="utf-8" src="https://gate.soperson.com/20003150/10089139.js"></script>');
    } else if (cityName == "hangzhou") {
        $("head").append('<script type="text/javascript" charset="utf-8" src="https://gate.soperson.com/20003150/10089139.js"></script>');
    } else if (cityName == "wuhan") {
        $("head").append('<script type="text/javascript" charset="utf-8" src="https://gate.soperson.com/20003150/10089139.js"></script>');
    } else if (cityName == "changsha") {
        $("head").append('<script type="text/javascript" charset="utf-8" src="https://gate.soperson.com/20003150/10089139.js"></script>');
    } else if (cityName == "nanchang") {
        $("head").append('<script type="text/javascript" charset="utf-8" src="https://gate.soperson.com/20003150/10089139.js"></script>');
    } else if (cityName == "nanchang") {
        $("head").append('<script type="text/javascript" charset="utf-8" src="https://gate.soperson.com/20003150/10089139.js"></script>');
    } else if (cityName == "dalian" || cityName == "shenyang") {
        $("head").append('<script type="text/javascript" charset="utf-8" src="https://gate.soperson.com/20003150/10089139.js"></script>');
    } else if (cityName == "guangzhou") {
        $("head").append('<script type="text/javascript" charset="utf-8" src="https://gate.soperson.com/20003150/10089139.js"></script>');
    } else if (cityName == "chengdu" || cityName == "chongqing") {
        $("head").append('<script type="text/javascript" charset="utf-8" src="https://gate.soperson.com/20003150/10089139.js"></script>');
    } else if (cityName == "suzhou") {
        $("head").append('<script type="text/javascript" charset="utf-8" src="https://gate.soperson.com/20003150/10089139.js"></script>');
    } else if (cityName == "ningbo") {
        $("head").append('<script type="text/javascript" charset="utf-8" src="https://gate.soperson.com/20003150/10089139.js"></script>');
    } else if (cityName == "quanguo") {
        $("head").append('<script type="text/javascript" charset="utf-8" src="https://gate.soperson.com/20003150/10089139.js"></script>');
    } else if (cityName == null) {
        $("head").append('<script type="text/javascript" charset="utf-8" src="https://gate.soperson.com/20003150/10089139.js"></script>');
    }
    else {
        return;
    }
}
removeleyu()


//乐语弹出半屏
function Mobileleyuclick() {
    var cityName = GetParms("cityid");
    if (cityName == "beijing") {
        doyoo.util.openChat('g=10076788');
    } else if (cityName == "hangzhou") {
        doyoo.util.openChat('g=10076790');
    } else if (cityName == "wuhan") {
        doyoo.util.openChat('g=10076780');
    } else if (cityName == "changsha") {
        doyoo.util.openChat('g=10076781');
    } else if (cityName == "nanchang") {
        doyoo.util.openChat('g=10076782');
    }
    else if (cityName == "dalian" || cityName == "shenyang") {
        doyoo.util.openChat('g=10076791');
    } else if (cityName == "guangzhou") {
        doyoo.util.openChat('g=10076789');
    } else if (cityName == "chengdu" || cityName == "chongqing") {
        doyoo.util.openChat('g=10076792');
    } else if (cityName == "suzhou") {
        doyoo.util.openChat('g=10076768');
    } else if (cityName == "ningbo") {
        doyoo.util.openChat('g=10076777');
    } else if (cityName == "quanguo") {
        doyoo.util.openChat('g=10076787');
    } else {
        doyoo.util.openChat('g=10076787');
    }

}






//不遮挡输入框
function inputFocus() {
    setTimeout(function () {
        window.scrollTo(0, document.body.clientHeight);
    }, 500);
}
