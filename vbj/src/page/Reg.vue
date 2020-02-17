<template>
    <div class="reg">
            <div class="header">
      <img src="../assets/img/back.png" @click="goback">
      <span>注册</span>
      
    </div>
        <div class="nologin" >
          <div class="nologin-content">
            <input type="text" placeholder="账号" v-model="username">
            <input type="password" placeholder="密码" v-model="password">
            <button @click="reg">注册</button>            
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
      password:'',
      mess:''
    }
  },
  methods:{
    goback(){
      this.$router.go(-1)
    },
    reg(){
      let formData=new FormData();
      formData.append('username',this.username);
      formData.append('password',this.password);
      this.$axios({
        url:'/api/reg',
        method:'post',
        data:formData
      }).then(
        res=>{
          if(res.data.err===0){
            this.$router.push('/login')
          }else{
            this.mess=res.data.msg
          }
        }
      )
    }
  }
}
</script>
<style scoped>
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
  position: absolute
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

</style>

