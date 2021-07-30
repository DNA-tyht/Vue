<template>
<div>
  <h2>{{categories}}</h2>
</div>
</template>

<script>
import axios from "axios";

export default {
  name: "HelloAxios",
  data() {
    return {
      categories: "",
    }
  },
  created() {
    axios({
      url: "http://152.136.185.210:7878/api/m5/category",
    }).then(res => {
      this.categories = res;
    }, res => {
      console.log(res);
    })
  }
}
</script>

<style scoped>

</style>