<template>
  <div id="app">
    <router-link to="/home" tag="div" replace>首页</router-link>&
    <router-link to="/about" tag="div" replace>关于</router-link>&
    <router-link :to="/user/+userId">用户</router-link>&
    <router-link :to="{path: '/profile', query: {name: 'DNA', age: 18}}">档案</router-link>
    <!--vue3更改了语法-->
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
    <!--<button @click="homeClick">首页</button>-->
    <!--<button @click="aboutClick">关于</button>-->
    <!--<button @click="profileClick">档案</button>-->
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      userId: "DNA"
    }
  },
  methods: {
    homeClick() {
      this.$router.push("/home");
    },
    aboutClick() {
      this.$router.push("/about");
    },
    profileClick() {
      this.$router.push({
        path: "/profile",
        query: {
          name: "DNA",
          age: 18
        }
      })
    }
  }
}
</script>

<style>
.active {
  color: #42b983;
}
</style>
