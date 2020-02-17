<template>
  <div class="user">
    <div class="login-information">
      <div class="login-content">
        <div class="login-head">
          <div class="avatar">
            <img :src="server.baseUrl + $store.state.user.data.icon" />
          </div>
          <div class="username">{{$store.state.user.data.nikename}}</div>
        </div>
        <div class="login-list">
          <ul>
            <li>
              <img src="../assets/img/collection.png" />我的收藏
            </li>
            <li>
              <img src="../assets/img/aboutme.png" />关于我
            </li>

            <li @click="logout">
              <img src="../assets/img/cancel.png" />
注销
            </li>
            <router-link to="/home" tag="li">
              <img src="../assets/img/cancel.png" />回到主页
            </router-link>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
 <script>
import store from "../plugins/store";
export default {
  beforeRouteEnter(to, from, next) {
    // axios({
    //   url:'/api/user'
    // }).then(
    //   res=>res.data.err === 0 ? next(_this=>_this.user=res.data.data) : next('/login')
    // )
    store.state.user.err == 0 ? next() : next("/login");
  },
  methods: {
    logout() {
      axios({
        url: "/api/logout",
        method: "delete"
      }).then(res => {
        if (res.data.err === 0) {
          this.$router.push("/home");
          this.$store.commit('CHECK_USER',{
            err:1,
            msg:'未登录'
          })
          window.localStorage.removeItem('user')
        }
      });
    }
  }
};
</script>
<style scoped>
.login-information {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #fff;
  display: flex;
  justify-content: center;
  z-index: 101;
}
/* .fade-enter-active, .fade-leave-active {
  transition: all .5s ease;
}
.fade-enter {
  transform: translateX(-100%);
} */
.login-content,
.nologin {
  width: 90%;
  height: 100%;
}
.login-head {
  width: 100%;
  height: 3.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 0.5rem;
  color: #888;
}
.avatar {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 0.27rem;
  padding: 0;
}
.avatar img {
  width: 100%;
  height: 100%;
  padding: 0;
}
.login-list {
  margin-top: 0.8rem;
  font-size: 0.43rem;
  color: #404040;
}
.login-list ul li {
  height: 1.2rem;
  line-height: 1.2rem;
  display: block;
  border-bottom: 1px solid #ccc;
}
.login-list img {
  width: 0.64rem;
  height: 0.64rem;
  vertical-align: middle;
  margin-right: 0.8rem;
}
</style>
