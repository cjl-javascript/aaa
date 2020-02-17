<template>
  <div class="home">
    <Header></Header>
    <Slider></Slider>
    <List :list-data="$store.state.home" :data-name="'home'"></List>
    
    <Footer></Footer>
  </div>
</template>

<script>
import Slider from "@/components/Slider.vue";
import List from "@/components/List";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  // data() {
  //   return {
  //     listData: []
  //   };
  // },
  components: {
    Slider,
    List,
    Header,
    Footer
  },
  activated() {
    //this.$root.$data.bLoading=true;
    this.$store.dispatch('UPEDATE_HOME')
  //   axios({

  //     url: "/api/home",
  //     params: { _page: 1, _limit: 10 }
  //   }).then(
  //       res => {
  //         // this.$root.$data.bLoading=false;
  //         this.listData = res.data.data
  //       }
  //       );
   }
}
</script>
<style>
</style>