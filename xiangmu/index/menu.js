;(function(){
    "use strict";
    $(".fen").children(".num").children(".dl").removeClass("bc");

        $(".fen").children(".num").hover(function(){ 
            $(this).children(".dl").addClass("bc")
            $(this).find(".cd").css({
                display:"block"
            })
      
   }        
        ,function(){
            
            $(".fen").children(".num").children(".dl").removeClass("bc")
            $(this).find(".cd").css({
                display:"none"
            })
         }
         ) 
 
   
     
})();