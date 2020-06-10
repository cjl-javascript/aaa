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


    //显示验证码
    yzm = GetParms("vc");
    if (yzm != "t") {
        $(".yzm").hide();
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
            url: "../api/LSendMsg.ashx?mobile=" + mobile,
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


    $(".leyu").click(function () {
        leyuclick();
    })

    //弹出框注册
    $(".btn_Popup").click(function () {
        //测试版
        // PopupRegister('预约报名', 400, 350, '/ad/popupRegister.html');
        //正式版
        PopupRegister('预约报名', 400, 350, '/adm/popupRegister.html?' + cutParms);
    })

    $("#btnsubmit").click(function () {
        btnwaittime(this);
        return Register("names", "mb");
    })

    $("#btnsubmit2").click(function () {
        btnwaittime(this);
        return Register("names2", "mb2");
    })


    $("#btnsubmitYZM").click(function () {
        btnwaittime(this);
        return Register("names", "mb");
    })

    //点击按钮锚点
    $(".btnanchor").click(function () {
        $("html, body").animate({
            scrollTop: $("#registerdiv").offset().top
        }, { duration: 0, easing: "swing" });
        return false;
    });
    var _hmt = _hmt || [];
    (function () {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?204fbfe40c8b90adb6de4520a6194ec9";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
    })();
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


//弹出层事件
function popupClick() {

    PopupRegister('预约报名', 400, 350, '/adm/popupRegister.html?' + cutParms);
}

//弹出层注册
function popupRegister() {

    return Register("popupnames", "popupmb");
}
//注册成功提示信息
function GetMsg(msg_value) {
    msg = msg_value;
}
//是否弹出图片提示赋值
function GetlayerImgInfo(layerImgInfo_value) {
    layerImgInfo = layerImgInfo_value;
}
//普通注册
function Register(nameID, mobileID) {
    var dname = $("#" + nameID);
    var dmobile = $("#" + mobileID);
    var username = $.trim(dname.val());
    var mobile = $.trim(dmobile.val());
    if (username == "") {
        layer.tips('请输入姓名！', dname);
        return false;
    }
    if (username.length >= 8) {
        layer.tips('姓名长度超过8位！', dname);
        return false;
    }
    if (!username.match(/^[\u4E00-\u9FA5a-zA-Z0-9_]{0,}$/)) {
        layer.tips('姓名不允许有特殊字符！', dname);
        return false;
    }
    if (/^[0-9]*$/.test(username)) {
        layer.tips('姓名不允许纯数字！', dname);
        return false;
    }
    if (mobile.length != 11) {
        layer.tips('手机号必须是11位！', dmobile);
        return false;
    }
    if (mobileOnly(mobile) == false) {
        layer.tips('请输入正确的手机号！', dmobile);
        return false;
    }

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



    AjaxRegister(username, mobile, '', '', ID, adname, act, '', kw, key360, '留学');

    return true;
}

//注册方法
function AjaxRegister(name, mobile, email, seladdr, ID, adname, act, calladdr, k, key360, m) {

    $.ajax({
        url: "/Api/actionResult_PV.ashx?action=register",
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
                layer.msg('对不起,该手机号已存在!', { icon: 8 });
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
    //留学移动
    window.open("http://chat.looyuoms.com/chat/chat/p.do?c=20003150&f=10091887&g=10076794", "_blank", "width=800,height=530,left=200,top=120")
}

//不遮挡输入框

function inputFocus() {
    
    setTimeout(function () {
        window.scrollTo(0, document.body.clientHeight);
    }, 500);
}



