; (function () {
    "use strict";
    class Car {
        constructor() {
            this.url = "http://localhost/xiangmu/shopping/list.json";
            this.tbody = document.querySelector("tbody");
            this.check = document.querySelector(".check");
            var that = this;
            this.load(function () {
                that.getLocal()
                that.addEvent();
                that.checkAll();
            });
        }
        //全选
        checkAll() {
            var that = this;
            this.cbk = document.querySelectorAll(".ckb")
            //console.log(this.cbk)
            this.check.onclick = function () {
                if (this.checked) {
                    for (var i = 0; i < that.cbk.length; i++) {
                        that.cbk[i].checked = "checked"
                    }
                } else {
                    for (var j = 0; j < that.cbk.length; j++) {
                        that.cbk[j].checked = ""
                    }
                }
            }
            for (var i = 0; i < that.cbk.length; i++) {
                that.cbk[i].onclick = function () {
                    if (!this.checked) {
                        that.check.checked = "";
                    }
                }
            }
        }
        load(callback) {
            var that = this
            ajax({
                url: this.url,
                success: function (res) {
                    that.res = JSON.parse(res)
                    callback()
                }
            })
        }
        getLocal() {
            this.goods = localStorage.getItem("goods") ? JSON.parse(localStorage.getItem("goods")) : [];
            this.display()
        }
        display() {
            // console.log(this.res)
            var str = "";
            for (var i = 0; i < this.res.length; i++) {
                for (var j = 0; j < this.goods.length; j++) {
                    //比较筛选
                    if (this.res[i].goodsId == this.goods[j].id) {
                        //console.log(this.res[i], this.goods[j].num)
                        str += `<tr index="${this.res[i].goodsId}">
                <td ><input type="checkbox" class="ckb"> </td>      
                <td > <img src="${this.res[i].url}"></td>
                <td >${this.res[i].name}</td>
                <td >${this.res[i].price}</td>
                <td ><input type="number" value="${this.goods[j].num}" min=0 class="num"></td>
                <td class="count">${this.res[i].price * this.goods[j].num}</td>
                <td class="delete">删除</td>
            </tr>`
                    }
                }
            }
            //填充到表格
            this.tbody.innerHTML = str;
        }

        addEvent() {
            var that = this;
            this.tbody.addEventListener("click", function (eve) {
                var e = eve || window.event;
                var target = e.target || e.srcElement;
                if (target.className == "delete") {
                    //保存点击删除的商品的id
                    that.id = target.parentNode.getAttribute("index");
                    // 删除DOM元素
                    target.parentNode.remove();
                    //  从localstorage中找到对应的商品数据
                    that.setLocal(function (i) {
                        //删除
                        that.goods.splice(i, 1);
                    })
                }
            })
            this.tbody.addEventListener("input", function (eve) {
                var e = eve || window.event;
                var target = e.target || e.srcElement;
                if (target.className == "num") {
                    // 保存点击删除的商品的数量和id
                    that.val = target.value;
                    that.id = target.parentNode.parentNode.getAttribute("index");
                    //从localstorage中找到对应的商品和数据
                    that.setLocal(function (i) {
                        //修改
                        that.goods[i].num = that.val
                        
                    })
                    that.display()
                }
            })
           
        }
        setLocal(fn) {
            //遍历localstorage的数据
            for (var i = 0; i < this.goods.length; i++) {
                //判断符合
                if (this.goods[i].id == this.id) {
                    //做拿到相同数据之后的操作，可能是删除，可能是修改，取决于回调函数传什么
                    fn(i);
                }
            }
            localStorage.setItem("goods", JSON.stringify(this.goods));
        }
    }
    new Car();
})();