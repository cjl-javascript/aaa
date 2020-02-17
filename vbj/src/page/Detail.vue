<template>
  <div class="detail">
    <div class="header">
      <img src="../assets/img/back.png" @click="goback" />
      <span>详情</span>
      <img :src="likeImg" @click="clickCollect()"/>
    </div>
    <div class="content" v-if="$store.state.detail._id">
      <h3>{{$store.state.detail.title}}</h3>
      <span>{{$store.state.detail.detail.auth}}</span>
      <span>{{$store.state.detail.date}}</span>
      <img :src="server.baseUrl+$store.state.detail.detail.auth_icon">
      <div class="text-box" v-html="$store.state.detail.detail.content"></div>
    </div>
  </div>
</template>

<script>
export default {
  // data() {
  //   return {
  //     data: {}
  //   };
  // },
  props:["id","dataName"],
  methods: {
    goback() {
      this.$router.go(-1);
    },
    // clickCollect() {
    //   if(this.$store.state.likeImg === require("../assets/like.png")) {
    //     this.$store.state.likeImg =require("../assets/collect.png")
    //     //this.$store.commit('muCollect', this.channelNewData)
    //   // } else {
    //   //   this.$store.state.likeImg = require("../assets/like.png")
    //   //   //this.$store.commit('muLike', this.channelNewData)
    //    }
      
    // }
    
  },
 computed: {
    likeImg() {
      return this.$store.state.likeImg
    }
 },
  activated() {
    
    //let id = this.$route.params.id;
    let id = this.id;
    //let dataName = this.$route.query.dataName;
    let dataName = this.dataName;
    this.$store.dispatch('UPEDATE_DETAIL',{dataName,id})
    // this.$axios({
    //   url: `/api/${dataName}/${id}`
    // }).then(res => (this.data = res.data.data));
  }
  }
</script>
<style scoped>
.detail {
  overflow: hidden;
}
.header {
  width: 100%;
  height: 1.33rem;
  background-color: #d43d3d;
  color: #fff;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
}
.header img {
  width: 25px;
  height: 25px;
  padding: 0 0.19rem;
}
.content {
  position: absolute;
  top: 1.33rem;
  width:100%;
}
/* .detail{margin-top:1.2rem;padding:0 .2rem;} */
.content img {
  width: 100%;
  height: 6.7rem;
  padding: .0;
  margin-top:0.2rem;
}
.content h3 {
  font: 700 0.56rem/1.5 "微软雅黑";
  color: black;
  text-align: center;
}
.content span {
  color: #ccc;
  margin-left: 0.2rem;
  font-size: 0.32rem;
}
.content .text-box {
  text-indent: 0.5rem;
  font: 0.4rem/1.5 "微软雅黑";
  margin-top: 0.2rem;
  padding: 0.2rem;
  margin-bottom: 1.4rem
}
</style>