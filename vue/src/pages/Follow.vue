<template>
  <div class="fol">
    <!-- 头部 -->
    <div class="header">
      <div class="margin hd">
        <img src="../assets/img/logo.png" alt class="logo" />
        <p>厦门容大合众电子科技有限公司</p>
        <span>服务热线 ：400 - 800 - 0596</span>
        <div class="search">
          <div class="ser-t">
            <div class="lag">
              <a href>中文&nbsp;&nbsp;</a>
              |&nbsp;&nbsp;
              <a href>English</a>
            </div>
            <div class="ser-b">
              <input type="text" placeholder="Search..." class="txt" />
              <button class="btn">搜索</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 导航 -->
    <div class="nav">
      <div class="margin">
        <ul>
          <li v-for="(m,item) in nav" :key=item>
            <a @click="btnClick(item)" :class="{active:i===item}">{{m}}</a>
          </li>
        </ul>
      </div>
    </div>
    <!-- banner -->
    <div class="banner margin">
      <img src="../assets/img/banner.png" alt />
    </div>
    <!-- 产品 -->
    <div class="product margin">
      <h3>产品中心</h3>
      <ul>
        <li>
          <div class="box-l">
            <h4>票据打印机RP80</h4>
            <img src="../assets/img/pro.png" alt />
          </div>
          <div class="box-c">
            <span>特点:</span>
            <p>1、250mm/s高速打印，快速变更耗材，提高工作效率</p>
            <p>2、低噪音，高速图形及硬字库...</p>
            <a href="#">更多>></a>
          </div>
          <div class="box-r"></div>
        </li>
        <li>
          <div class="box-l">
            <h4>票据打印机RP80</h4>
            <img src="../assets/img/pro.png" alt />
          </div>
          <div class="box-c">
            <span>特点:</span>
            <p>1、250mm/s高速打印，快速变更耗材，提高工作效率</p>
            <p>2、低噪音，高速图形及硬字库...</p>
            <a href="#">更多>></a>
          </div>
          <div class="box-r"></div>
        </li>
        <li>
          <div class="box-l">
            <h4>票据打印机RP80</h4>
            <img src="../assets/img/pro.png" alt />
          </div>
          <div class="box-c">
            <span>特点:</span>
            <p>1、250mm/s高速打印，快速变更耗材，提高工作效率</p>
            <p>2、低噪音，高速图形及硬字库...</p>
            <a href="#">更多>></a>
          </div>
        </li>
      </ul>
    </div>
    <!-- 关于我们 -->
    <div class="us margin">
      <div class="about">
        <h3>关于我们</h3>
        <div class="cnt">
          <img src="../assets/img/us.png" alt />
          <p>厦门容大合众电子科技有限公司成立于2007年，是一家专业研发、生产、销售POS打印机、票据打印机、打印单元、控制板及POS周边产品的高新技术企业。公司自成立以来，一直专注票据打印领域。经过多年发展和技术累积，公司设计研发的多种打印设备深受国内外广大客户欢迎。</p>
          <a href="#" class="more">更多>></a>
        </div>
      </div>
      <div class="news">
        <h3>新闻资讯</h3>
        <ul>
          <li>
            <span>2016-03-24</span>
            <p>2016年3月墨西哥商超设备展</p>
          </li>
          <li>
            <span>2016-03-24</span>
            <p>2016年3月墨西哥商超设备展</p>
          </li>
          <li>
            <span>2016-03-24</span>
            <p>2016年3月墨西哥商超设备展</p>
          </li>
        </ul>
        <a href="#" class="more">更多>></a>
      </div>
      <div class="linian">
        <h3>容大理念</h3>
        <p>第一时间，有效性答复客户进展性消息。</p>
        <p>对技术领域持续创新、精益求精、是公司赢得众多客户信任和支持的重要原因。</p>
        <a href="#" class="more te">更多>></a>
      </div>
    </div>
    <!-- footer -->
    <div class="footer margin">
      <div class="fl">
        <p>
          <span>版权所有©2013-2015&nbsp;&nbsp;</span>
          <i>厦门容大合众电子科技有限公司</i>
          <span>&nbsp;&nbsp;闽ICP14000025号&nbsp;&nbsp;</span>
          <i>服务热线：400-800-0596</i>
        </p>
        <p>
          <i>链接：</i>
          <span>热敏打印机 票据打印机 厨房打印机 嵌入式打印机 打印单元 针式打印机 标签打印机 便携式打印机</span>
        </p>
      </div>
      <div class="fr">
        <a href>技术支持</a>
        <span>|</span>
        <a href>下载中心</a>
        <span>|</span>
        <a href>产品中心</a>
        <span>|</span>
        <a href>网站地图</a>
        <span>|</span>
        <a href>联系我们</a>
      </div>
    </div>
    <div class="qq"></div>
  </div>
</template>
<style >
.qq {
  width: 162px;
  height: 249px;
  background: #058ede;
  position: fixed;
  right: 0;
  top: 200px;
  opacity: .5;
}
body {
  background: #f5f5f5;
  position: relative;
}
.margin {
  width: 980px;
  margin: 0 auto;
}
/* t头部 */
.hd {
  height: 92px;
}
.logo {
  margin-top: 16px;
  float: left;
  margin-right: 10px;
}
.hd p {
  font-size: 24px;
  line-height: 24px;
  font-weight: 700;
  height: 24px;
  margin-top: 35px;
  float: left;
}
.hd span {
  font-size: 14px;
  line-height: 14px;
  display: block;
  height: 14px;
  margin-top: 43px;
  margin-left: 33px;
  float: left;
}
.search {
  float: right;
}
.ser-t {
  height: 38px;
}
.ser-t a {
  font-size: 12px;
  line-height: 38px;
}
.ser-b {
  margin-top: 11px;
  width: 185px;
  height: 24px;
  border-radius: 3px;
  border: 1px solid #d5d5d5;
  border-right: 0;
}
.lag {
  margin-left: 83px;
}
.txt {
  width: 146px;
  height: 24px;
  font-size: 10px;
  line-height: 24px;
  box-sizing: border-box;
  padding-left: 25px;
  border: none;
  float: left;
  color: #aaa;
  border-radius: 3px 0 0 3px;
  background: url("../assets/img/search.svg") no-repeat 6px;
  background-size: 13px 15px;
}
.txt::-webkit-input-placeholder {
  color: #aaa;
}
.btn {
  width: 39px;
  height: 26px;
  font-size: 12px;
  line-height: 24px;
  color: #fff;
  background: #ca6434;
  border: 1px solid #ca6434;
  border-radius: 0 3px 3px 0;
  float: left;
  margin-top: -1px;
}
/* 导航 */
.nav ul {
  height: 35px;
  border: 1px solid #e3e3e3;
  background: #fff;
}
.nav ul li {
  font-size: 12px;
  line-height: 35px;
  text-align: center;
  float: left;
  font-weight: 600;
}
.nav ul li a{
  color: #999;
  display: block;
  width: 118px;
}
.nav ul li:nth-child(1) {
  margin-left: 15px;
}
/* .nav ul li a:hover, */
.active {
  color: #666;
  background: #dadada;
}
/* banner */
.banner {
  height: 350px;
  width: 980px;
  background: #fff;
  margin: 0 auto;
  padding: 10px 0;
}
/* 产品 */
.product {
  height: 238px;
}
.product h3 {
  background-image: linear-gradient(0deg, #fafafa, #d3d3d3);
  font-size: 20px;
  line-height: 36px;
  padding-left: 16px;
}
.product ul {
  background: #ededed;
  height: 202px;
  border-bottom: 1px solid #a1a1a1;
}
.product ul li {
  width: 325px;
  height: 202px;
  float: left;
}
.box-l {
  float: left;
  width: 145px;
}
.box-l h4 {
  font-size: 12px;
  line-height: 54px;
  color: #003c77;
  text-indent: 20px;
}
.box-l img {
  box-shadow: 0 0 5px #666;
  margin-left: 25px;
}
.box-c {
  float: left;
  margin-left: 15px;
  padding-top: 54px;
}
.box-c span {
  font-size: 12px;
  line-height: 20px;
  font-weight: 700;
  color: #858585;
}
.box-c p {
  width: 146px;
  font: 12px/18px "";
  color: #858585;
}
.box-c a {
  display: block;
  color: #ca6434;
  font: 12px/38px "";
}
.box-r {
  float: right;
  width: 1px;
  height: 158px;
  margin-top: 24px;
  background: #d2d2d2;
}
/* 关于我们 */
.us {
  height: 217px;
  padding-top: 16px;
  border-bottom: 1px solid #e1e1e1;
}
.about {
  width: 350px;
  float: left;
}
.us h3 {
  font: 20px/2.5 "";
}
.about .cnt {
  width: 300px;
}
.about .cnt img {
  float: left;
  margin-right: 10px;
  margin-bottom: 31px;
}
.about .cnt p {
  text-indent: 2em;
  font: 12px/18px "";
  color: #858585;
}
.more {
  display: block;
  color: #ca6434;
  font: 12px/1 "";
}
.news {
  width: 330px;
  float: left;
}
.news ul li {
  margin-bottom: 10px;
}
.news ul li span {
  font: 12px/17px "";
  color: #2878d7;
}
.news ul li p {
  font: 12px/20px "";
  color: #858585;
}
.linian {
  float: right;
  width: 299px;
}
.linian p {
  font: 12px/17px "";
  color: #858585;
}
.more.te {
  margin-top: 87px;
}
.footer {
  padding-top: 19px;
  height: 76px;
}
.fl {
  float: left;
}
.fl p {
  font: 12px/2 "";
}
.fl p span {
  color: #858585;
}
.fl p i {
  color: #2878c9;
}
.fr {
  float: right;
}
.fr a {
  color: #2878c9;
}
.fr span {
  padding: 0 4px;
  color: #ab85ab;
}
</style>
<script>

 export default{
   
   data(){
     return{
       nav:['首页','产品中心','品检流程','研发优势','下载流程','新闻中心','关于我们','联系我们'],
      i:0
     } 
   },
    
   methods:{
     btnClick:function  (index){
       this.i=index;
       
     }
    
   }
 }

</script>