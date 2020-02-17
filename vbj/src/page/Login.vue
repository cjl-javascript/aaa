<template>
    <div class="login">
      <div class="header">
      <img src="../assets/img/back.png" @click="goback">
      <span>登录</span>
      
    </div>
        <div class="nologin" >
          <div class="nologin-content">
            <input type="text" placeholder="账号" v-model="username">
            <input type="password" placeholder="密码" v-model="password">
            <button @click="login">登录</button>
            <div class="register">
              <router-link to="/reg"><span>立即注册</span></router-link>
              <a><span>忘记密码</span></a>
            </div>
          </div>
      </div>
      <p v-if="mess">{{mess}}</p>
    </div>
</template>
<script>
export default {
  data() {
    return {
      username:'',
      password:"",
      mess:''
    }
  },
  methods:{
    goback(){
      this.$router.go(-1)
    },
    login(){
      this.$store.dispatch('CHECK_USER',{
        username:this.username,
        password:this.password
      }).then(
        data=>data.err == 0 ? this.$router.push('./user') : this.mess = data.mess
      )
      // this.$axios({
      //   url:"/api/login",
      //   method:'post',
      //   //withCredentials:true, //逐条携带    
      //   data:{
      //     username:this.username,
      //     password:this.password,
      //     save:true
      //   }
      // }).then(
      //   res=>{
      //     if(res.data.err==1){
      //       this.mess=res.data.msg
      //     }else{
      //       this.$router.push('/user')
      //     }
          
      //   }
      //     )
        }
      
    }
  }

</script>

<style  scoped>
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
  padding: 0 .19rem;
  position: absolute;
}
.header span{
  margin:0 auto;
}
.nologin{
  padding-top:.2rem
}
    .nologin-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1.33rem;
}
.nologin-content input {
  width: 80%;
  height: 1.07rem;
  margin-bottom: .53rem;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 3px;
  color: #888;
}
.nologin-content button {
  width: 80%;
  height: 1rem;
  background-color: #f33;
  border: 1px solid #f33;
  color: #fff;
  letter-spacing: 5px;
  border-radius: 3px;
}
.register {
  width: 90%;
  height: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
}
.register span:last-child {
  color: red;
}
p{text-align: center;font: .54rem/2 "微软雅黑";color:brown}
</style>