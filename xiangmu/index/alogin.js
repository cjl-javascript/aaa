; (function () {
    "use strict";

    class Index {
        constructor() {

            this.already = document.querySelector(".already");
            this.login = document.querySelector(".login");
            this.out = document.querySelector(".out");
            this.reg = document.querySelector(".reg");
           
            this.getLocal();
            this.alogin();
            this.addEvent();
        }
        getLocal() {
            
            this.userMsg = localStorage.getItem("userMsg");
            console.log(this.userMsg)
            this.userMsg = this.userMsg ? JSON.parse(this.userMsg) : [];
        }
        alogin() {
            this.i = 0;

            var o = this.userMsg.some((val, index) => {
                this.i = index;
                return val.onoff == 1
            })
            if (o) {
                this.login.style.display = "none";
                this.reg.style.display = "none";
                this.already.style.display = "block";
                this.out.style.display = "block";
                this.already.innerHTML = this.userMsg[this.i].user;
            }
        }
        addEvent() {
            var that = this;
            this.out.onclick = function () {
                that.userMsg[that.i].onoff = 0;
                localStorage.setItem("userMsg", JSON.stringify(that.userMsg));
                that.login.style.display = "block";
                that.reg.style.display = "block";
                that.already.style.display = "none";
                that.out.style.display = "none";
                that.already.innerHTML="";
               
            }
        }
    }

    new Index();
})()