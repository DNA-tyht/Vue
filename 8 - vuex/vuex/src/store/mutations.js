import {INCREMENT} from "@/store/mutations-types";

export default {
  //定义方法
  [INCREMENT](state) {
    state.counter++;
  },
  decrement(state) {
    state.counter--;
  },
  addCount(state, count) {
    state.counter += count;
  },
  addStudent(state, payload) {
    state.students.push(payload.student);
  },
  updateInfo(state) {
    state.Info.age = 26;
    // state.Info["address"] = "北京";
    // Vue.set(state.Info, "address", "北京");
    // Vue.delete(state.Info, "age");
  }
}