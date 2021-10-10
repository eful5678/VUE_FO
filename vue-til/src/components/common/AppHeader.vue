<template>
  <header>
    <div>
      <div>
        <ul>
          <li>
            <a
              style="cursor: pointer"
              target="_self"
              class="left_a"
              @click="toggle"
              ><span>Menu</span></a
            >
          </li>
        </ul>
      </div>
      <router-link :to="logoLink" class="logo">Shin-A</router-link>
      <span class="username" v-if="isUserLogin">
        by {{ $store.state.username }}</span
      >
    </div>
    <div class="navigations">
      <template v-if="isUserLogin">
        <a href="javascript:;" @click="logoutUser" class="logout-button"
          >Logout</a
        >
      </template>
      <template v-else>
        <router-link to="/login">Login</router-link>
        <router-link to="/signup">Signup</router-link>
      </template>
    </div>
  </header>
</template>

<script>
import { deleteCookie } from "@/utils/cookies";
export default {
  computed: {
    isUserLogin: function () {
      return this.$store.getters.isLogin;
    },
    logoLink: function () {
      return this.$store.getters.isLogin ? "/main" : "/login";
    },
  },
  methods: {
    logoutUser: function () {
      this.$store.commit("clearUsername");
      this.$store.commit("clearToken");
      deleteCookie("til_auth");
      deleteCookie("til_user");
      this.$router.push("/");
    },
    toggle: function () {
      console.log("side");
      const el = document.querySelector(".root");
      console.log(el);
      if (el.classList.contains("sidebarStatic")) {
        el.classList.remove("sidebarStatic");
        el.classList.add("sidebarClose");
        console.log(el);
      } else {
        el.classList.add("sidebarStatic");
        el.classList.remove("sidebarClose");
        console.log(el);
      }
    },
  },
};
</script>

<style scoped>
.app-header {
  position: fixed;
  top: 0;
  width: calc(100% -50px);
}
.app-header.navbar {
  height: 60px;
  z-index: 100;
  -webkit-box-shadow: 0 15px 20px -20px rgba(75, 102, 171, 0.1),
    0 0 15px rgba(75, 102, 171, 0.06);
  box-shadow: 0 15px 20px -20px;
  -webkey-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
}
.username {
  color: white;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #927dfc;
  z-index: 2;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.05);
}
a {
  color: #dedede;
  font-size: 18px;
}
a.logo {
  font-size: 30px;
  font-weight: 900;
  color: white;
}
.logo > span {
  font-size: 14px;
  font-weight: normal;
}
.navigations a {
  margin-left: 10px;
}
.fixed {
  position: fixed;
  top: 0;
  width: 100%;
}
.logout-button {
  font-size: 14px;
}
a.router-link-exact-active {
  color: white;
  font-weight: bold;
}
</style>
