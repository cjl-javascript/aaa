<template>
  <div id="app">
   <!-- <Header></Header> -->
   <Loading v-show="$store.state.bLoading"></Loading>
      <!-- <transition
			enter-active-class = "animated bounceInLeft"
    > -->
   <keep-alive>
    <router-view></router-view>
   </keep-alive>
    <!-- </transition> -->
   <Footer></Footer>
   
  </div>
</template>

<script>

import Loading from './components/Loading'
// import Header from './components/Header'
 import Footer from './components/Footer'

export default {
  name: 'app',
  components: {
  Loading,Footer
  }
}
</script>

<style>

</style>
