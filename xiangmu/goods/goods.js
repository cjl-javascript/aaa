; (function () {
    "use strict";

    class Goods {
        constructor() {
            this.id = location.search.slice(1);
            //console.log(this.id)
            this.url = "http://localhost/xiangmu/goods/goods.json";
            this.box = document.querySelector("main");
            this.buy = document.querySelector(".buy");
            this.small = document.querySelector(".small");
            this.bbig = document.querySelector(".bbig");
            this.look_big = document.querySelector(".look_big");
            this.r_t = document.querySelector(".r_t");
            this.load();

        }
        load() {
            var that = this;
            ajax({
                url: this.url,
                success: function (res) {
                    that.res = JSON.parse(res),
                        that.display()
                }
            })
            
        }
        display() {

            //console.log(this.res)
            var str1 = "";
            var str2 = "";
            for (var i = 0; i < this.res.length; i++) {
                if (this.res[i].goodsId == this.id) {
                    str1 += `<img src="${this.res[i].url}" alt="" >`;
                    this.bbig.src = `${this.res[i].url}`;
                    this.look_big.src = `${this.res[i].url}`;
                    str2 += `<p class="name">${this.res[i].name}</p>
                    <div class="r-c">
                        <span>本店价</span>
                        <p class="price1">¥${this.res[i].price}</p>
                        <span>市场价</span> <del>¥${this.res[i].price2}</del>
                    </div>`
                }
            }
            this.small.innerHTML = str1;
            this.r_t.innerHTML = str2;

        }

    }
    new Goods();


})();