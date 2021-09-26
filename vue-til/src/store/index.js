import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: "",
    token: "",
  },
  getters: {
    isLogin: function (state) {
      return state.username !== "";
    },
  },
  mutations: {
    setUsername: function (state, username) {
      state.username = username;
    },
    clearUsername: function (state) {
      state.username = "";
    },
    setToken: function (state, token) {
      state.token = token;
    },
  },
});
