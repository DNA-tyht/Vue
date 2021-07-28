import { createStore } from 'vuex'
import mutations from "@/store/mutations";
import actions from "@/store/actions";
import getters from "@/store/getters";
import moduleA from "@/store/modules/moduleA";

const state = {
  counter: 0,
  students: [
    {id:1, name: "A", age: 18},
    {id:2, name: "B", age: 24},
    {id:3, name: "C", age: 30},
    {id:4, name: "D", age: 10},
  ],
  Info: {
    name: "Song juhan",
    age: 25,
    height: 188,
  }
};

export default createStore({
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions,
  modules: {
    a: moduleA,
  }
})
