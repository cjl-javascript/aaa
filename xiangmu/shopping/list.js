; (function () {
    "use strict";

    class List {
        constructor() {
            this.num = 4;
            this.index = 0;
            this.right = document.getElementById("btnR");
            this.ul = document.querySelector(".pagWarp ul");
            this.left = document.getElementById("btnL");
            // console.log(this.left)
            this.url = "http://localhost/xiangmu/shopping/list.json";
            this.box = document.querySelector(".box");
            this.load();
            this.addEvent();
            this.addEvent1();
        }
        load() {
            var that = this;
            ajax({
                url: this.url,
                success: function (res) {
                    that.res = JSON.parse(res),
                        that.display()
                    that.creatPage()
                }
            })
        }
        creatPage() {
            this.maxNum = Math.ceil(this.res.length / this.num);
            var str = "";
            for (var i = 0; i < this.maxNum; i++) {
                str += `<li>${i + 1}</li>`
            }
            this.ul.innerHTML = str;
            //设置页码的当前项
            this.setActive();
        }
        setActive() {
            for (var i = 0; i < this.ul.children.length; i++) {
                this.ul.children[i].className = "";
            }
            this.ul.children[this.index].className = "active";
        }
        display() {
            console.log(this.res);
            var str1 = "";
            for (var i = this.index * this.num; i < this.index * this.num + this.num; i++) {                  //判断公式计算出的索引在正确的长度范围内
                if (i < this.res.length) {
                    str1 += `<li class="goods" index="${this.res[i].goodsId}">
                    <a href="http://localhost/xiangmu/goods/goods.html?${this.res[i].goodsId}"><img src="${this.res[i].url}" alt=""></a>
                    <span>¥${this.res[i].price}</span>
                    <p>${this.res[i].name}</p>  
                    <a href="http://localhost/xiangmu/goods/goods.html?${this.res[i].goodsId}"><i>查看详情</i></a>             
                    <i class="btn">加入购物车</i>
                    
                </li>`

                }
            }

            this.box.innerHTML = str1;
        }
        addEvent1() {
            // console.log(this.left)
            var that = this;
            this.left.onclick = function () {
                if (that.index == 0) {
                    that.index = that.maxNum - 1;
                } else {
                    that.index--;
                }
                that.setActive();
                //根据最新的index，重新渲染页面
                that.display();
            };
            this.right.onclick = function () {
                if (that.index == that.maxNum - 1) {
                    that.index = 0
                } else {
                    that.index++;
                }
                that.setActive();
                that.display();
            };
        }
        addEvent() {
            var that = this;
            this.box.addEventListener("click", function (eve) {
                var e = eve || window.event;
                var target = e.target || e.srcElement;
                if (target.className == "btn") {
                    that.id = target.parentNode.getAttribute("index");
                    that.setLocal();
                }

            })
        }
        setLocal() {
            this.goods = localStorage.getItem("goods") ? JSON.parse(localStorage.getItem("goods")) : [];
            if (this.goods.length < 1) {
                this.goods.push({
                    id: this.id,
                    num: 1
                })
            } else {
                var i;
                var o = this.goods.some((val, index) => {
                    i = index;
                    return val.id == this.id;
                })
                if (o) {
                    this.goods[i].num++;
                } else {
                    this.goods.push({
                        id: this.id,
                        num: 1
                    })
                }
            }
            localStorage.setItem("goods", JSON.stringify(this.goods));
        }
    }
    new List();
})();