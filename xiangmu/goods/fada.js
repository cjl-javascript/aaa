;(function(){
    "use strict";
    
        var oSmall = document.querySelector('.big');
        var oMove = document.querySelector('.move');
        var oBig = document.getElementById('big');
        var oLook_big = document.querySelector('.look_big');
    
        oSmall.onmouseover = function () {
            oMove.style.display = "block";
            oBig.style.display='block';
        }
        oSmall.onmouseleave = function () {
            oMove.style.display = 'none';
            oBig.style.display='none';
        }
        oSmall.onmousemove = function (eve) {
           var  e = eve || window.event;
            var x = e.pageX;
            var y = e.pageY;
            //console.log(x, y)
            var oMoveLeft = x - oSmall.offsetLeft - oMove.offsetWidth / 2;
            var oMoveTop = y - oSmall.offsetTop - oMove.offsetHeight / 2;
            //console.log(oMoveTop)
            var maxLeft=oSmall.clientWidth-oMove.clientWidth;
            var maxTop=oSmall.clientHeight-oMove.clientHeight;
            if(oMoveLeft<0){
                oMoveLeft=0;
            }
            if(oMoveLeft>maxLeft){
                oMoveLeft=maxLeft;
            }
            if(oMoveTop<0){
                oMoveTop=0;
            }
            if(oMoveTop>maxTop){
                oMoveTop=maxTop;
            }
            oMove.style.left = oMoveLeft + 'px';
            oMove.style.top = oMoveTop + 'px';
            oBig.style.left=oSmall.offsetWidth+oSmall.offsetLeft+'px';
            //反向移动
            oLook_big.style.left=oMoveLeft/maxLeft*(oBig.clientWidth-oLook_big.clientWidth)+'px';
            oLook_big.style.top=oMoveTop/maxTop*(oBig.clientHeight-oLook_big.clientHeight)+'px';
        }
    
   
})();