import { createStore } from 'vuex'

export default createStore({
  state: {
    counter: 0,
  },
  mutations: {
    //定义方法
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    }
  },
  actions: {
  },
  modules: {
  }
})
