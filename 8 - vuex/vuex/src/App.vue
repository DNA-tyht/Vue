<template>
  <div id="app">
    <h2>{{message}}</h2>
    <h2>{{$store.state.counter}}</h2>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <hello-vuex></hello-vuex>
  </div>
</template>

<script>
import HelloVuex from "@/views/HelloVuex";
export default {
  name: "App",
  components: {
    HelloVuex,
  },
  data() {
    return {
      message: "vuex",
    }
  },
  methods: {
    increment() {
      this.$store.commit("increment");
    },
    decrement() {
      this.$store.commit("decrement");
    }
  }
}
</script>

<style>

</style>
