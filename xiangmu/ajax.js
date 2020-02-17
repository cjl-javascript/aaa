// ajax({
//     type:"get",
//     url:"",
//     success:function(){},
//     error:function(){},
//     data:{},
//      timeout:毫秒数//默认500，延迟时间，超出时间，错误，主要用于jsonp身上


// })

function ajax(options) {
    // 2.解析参数，处理默认参数
    let  {type, url, error, success, data,timeout}  =options;
    type = type || "get";
    data = data || {};
    timeout = timeout || 500;
 // 3.解析要发送的数据
    var str = "";
    for (var i in data) {
        str += `${i}=${data[i]}&`;
    }
    // 4.根据发送方式处理url
    //jsonp 处理url和数据
    
    if (type == 'get' || type=="jsonp") {
        var d = new Date();
        url = url + "?" + str + "__qft=" + d.getTime();
    }
    //区分jsonp和 ajax的功能
    if(type === "jsonp"){
        var script=document.createElement("script");
        script.src=url;
        document.body.appendChild(script);
        window[data[data.columnName]]=function(res){
            success && success(res);
            error =null;
        }
        //jsonp的失败(超时)
        setTimeout(() => {
            error && error("timeout");
            success=null;
        }, timeout);
    }else{
        // 5.开启ajax
    var xhr = new XMLHttpRequest();
    xhr.open(type, url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            success(xhr.responseText);
        } else if (xhr.readyState == 4 && xhr.status != 200) {
            // 6.首先保证ajax的过程结束了，如果http给失败，才是真正的失败
            error && error(xhr.status);
        }
    }
    // 7.根据发送方式，决定发送的信息
    if (type == "get") {
        xhr.send();
    } else if (type == "post") {
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send(str);
    }
}
}










