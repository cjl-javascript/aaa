;(function(){
    "use strict";
    $(".sr").on("mouseover",function(){
        
        $(this).css({
            borderTop:"2px solid red",
            borderBottom:0,
            background:"#fff",
            borderLeft:0,
            fontWeight:700,
            
        }).siblings().css({
            borderRight:"1px solid #dedede",
            borderTop:"1px solid #dedede",
            borderBottom:"1px solid #dedede",
        }).parent(".box").siblings("ul").css({
            display:"none",
        })
        $(this).parent(".box").siblings(".dingdan").css({
            display:"block"
        })
    })
    $(".sl").on("mouseover",function(){
        $(this).css({
        borderTop:"2px solid red",
        borderBottom:0,
        background:"#fff",
        borderLeft:0,
        fontWeight:700,
       
        }).siblings().css({
            borderRight:"1px solid #dedede",
            borderTop:"1px solid #dedede",
            borderBottom:"1px solid #dedede",
        }).parent(".box").siblings(".dingdan").css({
            display:"none",
        })
        $(this).parent(".box").siblings("ul").css({
            display:"block"
        })
    })

})();