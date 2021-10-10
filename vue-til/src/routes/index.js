import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/login",
    },
    {
      path: "/login",
      component: () => import("@/views/LoginPage.vue"),
    },
    {
      path: "/signup",
      component: () => import("@/views/SignupPage.vue"),
    },
    {
      path: "/main",
      component: () => import("@/views/MainPage.vue"),
    },
    {
      path: "/add",
      component: () => import("@/views/PostAddPage.vue"),
    },
    {
      path: "/post/:id",
      component: () => import("@/views/PostEditPage.vue"),
    },
    {
      path: "/empList",
      component: () => import("@/views/EmployeeListPage.vue"),
    },
    {
      path: "/empRegist",
      component: () => import("@/views/EmployeeRegistPage.vue"),
    },
    {
      path: "*",
      component: () => import("@/views/PageNotFound.vue"),
    },
  ],
});
