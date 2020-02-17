<template>
    <div class="carousel">
      <transition-group tag="ul" name="image" class="clearfix">
        <li v-for="(item, index) in slides" :key="index" v-show="index===nowIndex">
          <img :src="item.src">
        </li>       
      </transition-group>
      <div class="bullet">
        <span v-for="(item,index) in slides.length" :key="index" :class="{active:index===nowIndex}"></span>
      </div>
    </div>
</template>

<script>
export default {
  created() {
    this.play()
  },
  data() {
    return {
      nowIndex: 0,
      slides: [
        {src: require('../assets/img/jinzhengen.jpg')},
        {src: require('../assets/img/qinliugan.jpg')},
        {src: require('../assets/img/huanqiu.jpg')},
        {src: require('../assets/img/aierlan.jpg')}
      ]
    }
  },
  methods: {
    autoPlay() {
      this.nowIndex++
      if(this.nowIndex === 4) {
      this.nowIndex = 0
      return
      }
    },
    play() {
      setInterval(this.autoPlay, 5000)
    }
  }
}
</script>

<style scoped >
.carousel {
  position: fixed;
  top:1.33rem;
  z-index: 10;
  
}
.carousel, ul, li {
  width: 100%;
}
li {
  position: absolute;
  
}
li img {
  width: 100%;
  height: 6.33rem;
  padding:0;
  
}
.image-enter-active {
  transform: translateX(0);
  transition: all 1s ease;
}
.image-leave-active {
  transform: translateX(-100%);
  transition: all 1s ease;
}
.image-enter {
  transform: translateX(100%);
}
.image-leave {
  transform: translateX(0);
}
.bullet {
  width: 100%;
  position: absolute;
  top: 7rem;
  margin: -1.2rem auto;
  text-align: right;
  z-index: 10;
}
.bullet span {
  width: 10px;
  height: 10px;
  border: 1px solid;
  display: inline-block;
  margin-right: 10px;
  border-radius: 10px;
}
.active {
  background-color: #fff;
}
.clearfix {
  content: '';
  clear: both;
  display: block;
}
</style>
