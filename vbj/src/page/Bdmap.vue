<template>
  <div class="bdmap">
    <div class="header">
      <img src="../assets/img/back.png" @click="goback" />
      <span>地图</span>
      <img src="../assets/img/like.png" />
    </div>
    <h3>百度地图</h3>
    <div id="allmap"></div>
  </div>
</template>


<script>


export default {
  methods: {
    goback() {
      this.$router.go(-1);
    }
  },
  mounted() {
    var map = new BMap.Map("allmap"); // 创建Map实例
    var point = new BMap.Point(121.4981, 31.38435);
    map.centerAndZoom(point, 15); // 初始化地图,设置中心点坐标和地图级别
    map.addControl(new BMap.MapTypeControl({
		mapTypes:[
            BMAP_NORMAL_MAP,
            BMAP_HYBRID_MAP
        ]}));	  
	map.setCurrentCity("上海");          // 设置地图显示的城市 此项是必须设置的
	map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
    var marker = new BMap.Marker(point);
    map.addOverlay(marker);
    marker.setAnimation(BMAP_ANIMATION_BOUNCE);
  }
};
</script>
<style scoped>
#allmap {
  width: 100%;
  height: 10rem;
  overflow: hidden;
  margin: 0;
  font-family: "微软雅黑";
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
  width: 0.5rem;
  height: 0.5rem;
  padding: 0 0.19rem;
}
h3 {
  padding: 1.5rem;
  text-align: center;
  font-size: 0.6rem;
}
</style>