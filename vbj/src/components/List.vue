<template>
  <div class="list">
   
    <ul>
      <router-link
        tag="li"
        :to="'/detail/'+item._id+'?dataName=' +dataName "
        v-for="(item) of listData"
        :key="item._id"
      >
        <a href="javascript:;">
          <h3>{{item.title}}</h3>
          <span>{{item.detail.auth}}</span>
          <span>{{item.date}}</span>
        </a>
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {
  props: ["listData", "dataName"]
};
</script>
<style scoped >

.list {
  position: absolute; 
  top: 8rem;
  width: 100%;
  margin-bottom:1.5rem;
  /* margin-top:8rem; */
}

.list ul li {
  padding: 0.1rem;
  border-bottom: 0.01rem solid #eee;
  z-index: -10;
}
a {
  text-decoration: none;
}
.list a h3 {
  font: 0.5rem/1.5 "微软雅黑";
  color: rgb(32, 27, 27);
}
.list a span {
  font: 0.3rem/1.5 "微软雅黑";
  color: #ccc;
  margin: 0 0.1rem;
}
</style>