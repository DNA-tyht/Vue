export default {
  state: {
    name: "Song juhan",
  },
  mutations: {
    updateName(state) {
      state.name = "He gu";
    }
  },
  getters: {
    fullName(state) {
      return state.name + "Song";
    }
  },
  actions: {
    actionUpdateName(context) {
      setTimeout(() => {
        context.commit("updateName");
      }, 1000);
    }
  }
}