<template>
  <div class="app">
    <h2>{{result}}</h2>
    <h2>-------------------------------</h2>
    <hello-axios></hello-axios>
  </div>
</template>

<script>
import axios from "axios";
import HelloAxios from "@/components/HelloAxios";

export default {
  name: 'App',
  components: {
    HelloAxios,
  },
  data() {
    return {
      result: "",
    }
  },
  created() {
    axios({
      url: "http://152.136.185.210:7878/api/m5/home/multidata",
      method: "get",
    }).then(res => {
      console.log(res);
      this.result = res;
    })
  }
}
</script>

<style>
</style>
