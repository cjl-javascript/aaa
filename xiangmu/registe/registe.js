;(function(){
    "use strict";
    var user_bool=false;
    var pass1_bool=false;
    var pass2_bool=false;
    var phone_bool=false;
    
    //账号
    $('.txt_user').blur(function(){
        if ((/^[a-z0-9_-]{4,8}$/).test($(".txt_user").val())){
          $('.tip_user').html("✔").css("color","green");
          user_bool = true;
        }else {
          $('.tip_user').html("有误请重新输入").css("color","red");
          user_bool = false;
        }
      });
      //密码
      $(".txt_pass1").blur(function(){
        if ((/^[a-z0-9_-]{6,16}$/).test($(".txt_pass1").val())){
          $('.tip_pass1').html("✔").css("color","green");
          pass1_bool = true;
        }else {
          $('.tip_pass1').html("有误请重新输入").css("color","red");
          pass1_bool = false;
        }
      });
      //密码确认
      $('.txt_pass2').blur(function(){
        if (($(".txt_pass1").val())==($(".txt_pass2").val()) &&($(".txt_pass1").val())!=""){
          $('.tip_pass2').html("✔").css("color","green");
          pass2_bool = true;
        }else {
          $('.tip_pass2').html("有误请重新输入").css("color","red");
          pass2_bool = false;
        }
      });
    //手机
    $('.txt_phone').blur(function(){
        if ((/^1[34578]\d{9}$/).test($(".txt_phone").val())){
          $('.tip_phone').html("✔").css("color","green");
          phone_bool = true;
        }else {
          $('.tip_phone').html("有误请重新输入").css("color","red");
          phone_bool = false;
        }
      });
      
      //判断
      $('.btn').click(function(){
        if(user_bool && pass1_bool && pass2_bool  && phone_bool){
          alert("注册成功");
        }else {
          alert("请完善信息");
        }
      });


      class Register{
        constructor(){
          this.user=document.querySelector(".txt_user");
          this.pass=document.querySelector(".txt_pass1");
          this.btn=document.querySelector(".btn");
         
          this.addEvent();
        }

        addEvent(){
          var that=this;
          this.btn.onclick=function(){
            that.setLocal()
          }
        }

        setLocal(){
          this.userMsg=localStorage.getItem("userMsg");
          this.userMsg=this.userMsg ? JSON.parse(this.userMsg) :[];
          if(this.userMsg.length<1){
            this.userMsg.push({
              user:this.user.value,
              pass:this.pass.value,
              onoff:0

            })
          }else{
          var o=  this.userMsg.some(val => {
              return val.user === this.user.value;
            })
            if(o){
              this.pass.innerHTML("用户名重复")
            }
          }
          localStorage.setItem("userMsg",JSON.stringify(this.userMsg))
        }

      }
      new Register();
})();