<template>
<div>
  <h2>我是首页</h2>
  <p>首页内容</p>
  <router-link to="/home/news">新闻</router-link>&
  <router-link to="/home/message">消息</router-link>
  <router-view></router-view>
</div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      path: "home/news"
    }
  },
  created() {
    console.log("home created");
  },
  destroyed() { //不被调用？
    console.log("home destroyed");
  },
  //这两个函数只有使用了keep-alive时才有效
  activated() {
    console.log("home activated");
    this.$router.push(this.path);
  },
  deactivated() {
    console.log("home deactivated");
  },
  beforeRouteLeave(to, from, next) {
    this.path = this.$route.path;
    next();
  }
}
</script>

<style scoped>

</style>