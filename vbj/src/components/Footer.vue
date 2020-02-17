<template>
    <div class="footer">
        <router-link to="/Echarts"><h3>图表</h3> </router-link>
        <router-link to="/Bdmap"><h3>地图</h3></router-link>
    </div>
</template>

<style scoped>
.footer {
  width: 100%;
  height: 1.33rem;
  background-color: #d43d3d;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 3px;
  z-index: 999;
  position: fixed;
  bottom:0;
  left:0;
  
}
h3{
    padding:.3rem;
    color:white
}
a{text-decoration: none}
</style>