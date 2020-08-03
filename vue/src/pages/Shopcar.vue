<template>
  <div id="app" class="container">
			<h2 class="title">购物车详情</h2>
			<table class="table" width="100%" border="0" cellspacing="0" cellpadding="0">
				<thead>
					<tr>
						<th colspan="2">商品信息</th>
						<th width="15%">商品单价</th>
						<th width="15%">商品数量</th>
						<th width="15%">商品总价</th>
						<th width="15%">编辑</th>
					</tr>
				</thead>
 
				<tbody>
					<tr v-for="item in productList" :key="item">
						<td style="width: 5%;"><input type="checkbox" :checked="item.check" @click="checkBox(item)" /></td>
						<td class="goods">
							<img :src="item.productImage" class="goods-left" />
							<div class="goods-right">
								<p class="name">{{item.productName}}</p>
								<p class="gifts">赠送：<span style="margin-right: 5px;" v-for="part in item.parts" v-text="part.partsName" :key="part"></span></p>
							</div>
						</td>
						<td>{{item.productPrice | formatMoney}}</td>
						<td class="goodsNumber">
							<span @click="changeMoney(item,-1)">-</span>
							<input type="text" v-model="item.productQuentity" disabled />
							<span @click="changeMoney(item,1)">+</span>
						</td>
						<td style="color: red;">{{item.productPrice*item.productQuentity | formatMoney}}</td>
						<td class="delete" @click="del(item)" style="border-right: 1px solid #ddd;"><span>删除</span></td>
					</tr>
				</tbody>
 
				<tfoot>
					<tr class="footer">
						<td><input type="checkbox" :checked="checkAllFlag" @click="checkAll" /></td>
						<td class="footer-left">
							<span style="color: red;">全选</span>
						</td>
						<td colspan="4" class="footer-right" style="border-right: 1px solid #ddd;">
							总计：<span style="color: red;">{{data.totalMoney | formatMoney}}</span>元
							<button type="button" class="pay">结账</button>
						</td>
					</tr>
				</tfoot>
			</table>
		</div>

</template>
<style scoped>
  
* {
	padding: 0;
	margin: 0;
}
 
 
/*外层容器样式*/
 
.container {
	padding: 10px;
	margin: 0 auto;
	width: 1200px;
	text-align: center;
}
 
 
/*标题样式*/
 
.title {
	margin-bottom: 20px;
	color: #666;
}
 
 
/*表格样式*/
 
.table {
	margin: auto;
	border-top: 1px solid #ddd;
}
 
.table thead {
	background-color: grey;
	color: #fff;
}
 
.table thead th {
	padding: 10px 0;
}
 
.table td {
	text-align: center;
	padding: 10px 0;
	border-top: 1px solid #ddd;
	border-left: 1px solid #ddd;
}
.table td:nth-last-child{
	border-right: 1px solid #ddd;
}
 
/*商品信息*/
 
.goods {
	width: 30%;
}
 
.goods-left {
	width: 20%;
	float: left;
}
 
.goods-right {
	width: 75%;
	float: right;
	text-align: left;
}
 
.goods-right .name {
	margin-bottom: 35px;
}
 
.goods-right .gifts {
	color: #999;
	font-size: 12px;
	vertical-align: bottom;
}
 
 
/*商品数量*/
 
.goodsNumber input {
	width: 50px;
	text-align: center;
	margin: 0 10px;
	height: 28px;
	vertical-align: middle;
	border-radius: 5px;
	border: none;
}
 
.goodsNumber span {
	display: inline-block;
	color: #333;
	text-decoration: none;
	width: 20px;
	height: 20px;
	line-height: 20px;
	border: 1px solid black;
	border-radius: 50%;
	text-align: center;
	cursor: pointer;
	-moz-user-select: none;
	-ms-user-select: none;
	-webkit-user-select: none;
	user-select: none;
}
 
.delete {
	cursor: pointer;
}
 
.delete>span {
	padding: 10px 20px;
	background: deepskyblue;
	border-radius: 5px;
	-moz-user-select: none;
	-ms-user-select: none;
	-webkit-user-select: none;
	user-select: none;
}
.delete>span:hover{
	background: blue;
	color: red;
}
.footer td {
	border-top: 1px solid #ddd;
	border-left: 1px solid #ddd;
	border-bottom: 1px solid #ddd;
}
 
.footer .footer-left {
	text-align: left;
}
 
.footer .footer-right {
	text-align: right;
}
 
.footer .pay {
	background-color: red;
	color: #fff;
	padding: 10px 25px;
	margin: 0 55px 0 20px;
	border: 0;
	border-radius: 5px;
}
.footer .pay:hover{
	background-color: darkred;
}
</style>
<script>
export default {
  data(){
    // 商品总价
		totalMoney: 0;
		// 商品列表
		productList: [{
	"status":1,
	"result":{
		"totalMoney":143,
		"list":[
			{
				"productId":"20001",
				"productName":"前端入门指导",
				"productPrice":87,
				"productQuentity":1,
				"productImage":"http://placehold.it/100x100",
				"parts":[
					{
						"partsId":"10001",
						"partsName":"笔记"
					},
					{
						"partsId":"10002",
						"partsName":"光盘"
					}
				]
			},
			{
				"productId":"20002",
				"productName":"后台入门指导",
				"productPrice":56,
				"productQuentity":1,
				"productImage":"http://placehold.it/100x100",
				"parts":[
					{
						"partsId":"10003",
						"partsName":"面试题"
					}
				]
			}
		]
	},
	"message":""
}]
;
		// 全选标志
		checkAllFlag: false

  },
  filters: {
		formatMoney: function (value) {
			return "￥ " + value.toFixed(2);
		}
	},
	mounted: function () {
		this.cartView();
	},
	methods: {
		// 显示购物车界面
		cartView: function () {
			var _this = this;
			// 获取商品数据信息
			this.$http.get("data/products.json").then(function (res) {
				_this.productList = res.body.result.list;
				console.log(res);
				console.log(_this.productList);
			})
		},
		//点击增加或减少商品数量按钮后修改对应金额
		// 对加减按钮绑定同一函数，而后根据传入的参数num是+1或-1，实现自增或自减
		changeMoney: function (product, num) {
			if (num > 0) {
				product.productQuentity++;
			} else {
				product.productQuentity--;
				if (product.productQuentity < 1) {
					product.productQuentity = 1;
				}
			}
			// 每次修改商品数量之后，均重新计算商品总价
			this.getTotalMoney();
		},
		//复选框设置
		checkBox: function (item) {
			var _this = this;
			// 记录选中的商品种类个数
			var num = 0;
			// 注意对比前后两次输出的结果
			console.log(item.check);
			if (typeof item.check == "undefined") {
				this.$set(item, "check", true);
				// 注意对比前后两次输出的结果
				console.log(item.check);
			} else {
				item.check = !item.check;
			}
			this.productList.forEach(function (item, value) {
				if (item.check) {
					num++;
				}
			})
			// 如果选中的商品种类个数等于商品列表（数组）的长度，修改全选框的全选标志；
			if (num == _this.productList.length) {
				this.checkAllFlag = true;
			} else {
				this.checkAllFlag = false;
			}
			// 计算总价
			this.getTotalMoney();
		},
		//全选按钮设置
		checkAll: function () {
			var _this = this;
			_this.checkAllFlag = !_this.checkAllFlag;
			this.productList.forEach(function (item, index) {
				if (typeof item.check == "undefined") {
					// 设置item的check属性
					_this.$set(item, "check", _this.checkAllFlag);
				} else {
					item.check = _this.checkAllFlag;
				}
			})
			// 计算总价
			this.getTotalMoney();
		},
		//总金额计算
		getTotalMoney: function () {
			var _this = this;
			// 商品总价首先置0，判断选中后，再计入总价
			this.totalMoney = 0;
			this.productList.forEach(function (item, index) {
				// 如果商品被选中，则计算到总价之中，运算符使用+=
				if (item.check) {
					_this.totalMoney += item.productQuentity * item.productPrice;
				}
			})
		},
		//删除商品
		del: function (item) {
			// 根据商品的下标删除商品步骤：1.确定商品下标；2.从当前下标开始，向后删除一个元素；
			var index = this.productList.indexOf(item);
			this.productList.splice(index, 1);
			// 计算总价
			this.getTotalMoney();
		}
  }
}
</script>