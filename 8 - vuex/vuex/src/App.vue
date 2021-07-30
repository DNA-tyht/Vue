<template>
  <div id="app">
    <p>--------------getters内容------------</p>
    <h2>Counter^2: {{$store.getters.powerCounter}}</h2>
    <h2>{{$store.getters.more20stu}}</h2>
    <h2>{{$store.getters.moreAgeStu(18)}}</h2>
    <p>--------------mutations内容-----------</p>
    <h2>{{$store.state.counter}}</h2>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="addCount(5)">+5</button> <br/>
    <button @click="addStudent">添加学生</button>
    <button @click="updateInfo">更新信息</button>
    <h2>Info</h2>
    <p>name: {{$store.state.Info.name}}</p>
    <p>age: {{$store.state.Info.age}}</p>
    <p>height: {{$store.state.Info.height}}</p>
    <p>{{$store.state.Info}}</p>
    <p>--------------modules内容------------</p>
    <h2>{{$store.state.a.name}}</h2>
    <h2>{{$store.getters.fullName}}</h2>
    <button @click="updateName">更新姓名</button>
    <button @click="actionUpdateName">异步更新</button>
    <p>-------------- HelloVuex-------------</p>
    <hello-vuex></hello-vuex>
  </div>
</template>

<script>
import HelloVuex from "@/components/HelloVuex";
import {INCREMENT} from "@/store/mutations-types";

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
      this.$store.commit(INCREMENT);
    },
    decrement() {
      this.$store.commit("decrement");
    },
    addCount(count) {
      this.$store.commit("addCount", count);
    },
    addStudent() {
      const student = {id: 5, name: "E", age: 79};
      this.$store.commit({
        type: "addStudent",
        student
      });
    },
    updateInfo() {
      this.$store.dispatch("actionUpdateInfo", "携带信息").then(res => {
        console.log("完成提交");
      })
    },
    updateName() {
      this.$store.commit("updateName");
    },
    actionUpdateName() {
      this.$store.dispatch("actionUpdateName");
    }
  }
}

</script>

<style>

</style>
