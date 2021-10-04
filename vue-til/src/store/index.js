import Vue from "vue";
import Vuex from "vuex";
import {
  getAuthFromCookie,
  getUserFromCookie,
  saveAuthToCookie,
  saveUserToCookie,
} from "@/utils/cookies";
import { loginUser } from "@/api/auth";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: getUserFromCookie() || "",
    token: getAuthFromCookie() || "",
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
  actions: {
    async LOGIN({ commit }, userData) {
      const response = await loginUser(userData);
      commit("setUsername", userData.username);
      commit("setToken", response.data.token);
      saveAuthToCookie(response.data.token);
      saveUserToCookie(userData.username);
      return response.data;
    },
  },
});
