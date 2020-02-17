; (function () {
    "use strict";
    console.log(1)
    class Login {
        constructor() {
            this.user = document.querySelector(".user");
            this.pass = document.querySelector(".pass");
            this.btn = document.querySelector(".btn");
            this.addEvent();
            this.getLocal();
            
        }
        addEvent() {
            var that = this;
            this.btn.onclick = function () {
               
                that.login();
            }
        }
        getLocal() {
            this.userMsg = localStorage.getItem("userMsg");
            console.log(this.userMsg)

            this.userMsg = this.userMsg ? JSON.parse(this.userMsg) : [];
        }
        login() {
            var i=0;
            var o = this.userMsg.some((val,index) => {
                i=index;
                return val.user == this.user.value && val.pass == this.pass.value;
            })
            if (o) {
                alert("登录成功");
                this.userMsg[i].onoff=1;
                setTimeout(()=>{
                    location.href="../index/index.html"
                },2000)
            } else {
                alert("登录失败");
                
            }
            localStorage.setItem("userMsg",JSON.stringify(this.userMsg));
        }
    }
    new Login();
})();
