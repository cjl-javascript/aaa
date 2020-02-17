;(function(){
    "use strict";
    $(".floor").children("p").on("click",function(){
        $("html").stop().animate({
            scrollTop:$(".f").eq($(this).index())[0].offsetTop
        })
    })
    
    $(".floor").children("h3").on("click",function(){
        $("html").stop().animate({
            scrollTop:0
        })
        
    });
    $(document).ready().find($(".floor")).css("display","none");
    $(document).on("mousewheel",function(){
        if($("html").scrollTop()<500){
            $(".floor").css("display","none")
        }else{
            $(".floor").css("display","block")
        }
    });
    $(".floor").children("p").hover(function(){
        $(this).css({
            cursor:"pointer"
        })
        
        $(this).addClass("active")
    },function(){
        $(this).removeClass("active")
    })
    $(".floor").children("h3").hover(function(){
        $(this).css({
            cursor:"pointer"
        })
        
        $(this).addClass("active")
    },function(){
        $(this).removeClass("active")
    })

    
})();