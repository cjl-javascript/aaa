<template>
  <div class="header">
   <router-link to="/User"><img src="../assets/img/identify.png" ></router-link>
    <span>XXXXX新闻</span>
    <img src="../assets/img/search.png">
  </div>
</template>

<style >
.header {
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
  z-index: 99;
  position: fixed;
  top:0;
  left:0;
  
}
img {
  width: .67rem;
  height: .67rem;
  padding: .4rem;
}
</style>
