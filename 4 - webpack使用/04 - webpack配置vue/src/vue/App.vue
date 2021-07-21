<template>
  <div>
    <h2>{{message}}</h2>
    <button>按钮</button>
    <Cpn></Cpn>
  </div>
</template>

<script>
import Cpn from "./Cpn.vue"
export default {
  name: "App",
  data() {
    return {
      message: "webpack",
    }
  },
  components: {
    Cpn,
  }
}
</script>

<style scoped>
  .title {
    color: blueviolet;
  }
</style>