import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store/index";

Vue.use(VueRouter);

const router = new VueRouter({
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
      meta: {
        auth: true,
      },
    },
    {
      path: "/add",
      component: () => import("@/views/PostAddPage.vue"),
      meta: {
        auth: true,
      },
    },
    {
      path: "/post/:id",
      component: () => import("@/views/PostEditPage.vue"),
      meta: {
        auth: true,
      },
    },
    {
      path: "/empList",
      component: () => import("@/views/EmployeeListPage.vue"),
      meta: {
        auth: true,
      },
    },
    {
      path: "/empRegist",
      component: () => import("@/views/EmployeeRegistPage.vue"),
      meta: {
        auth: true,
      },
    },
    {
      path: "/repairList",
      component: () => import("@/views/RepairListPage.vue"),
    },
    {
      path: "*",
      component: () => import("@/views/PageNotFound.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.meta.auth && !store.getters.isLogin) {
    console.log("인증이 필요합니다.");
    alert("로그인 해주세요");
    next("/login");
    return;
  }
  next();
  console.log(from);
});

export default router;
