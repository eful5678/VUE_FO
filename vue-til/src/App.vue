<template>
  <div class="root sidebarStatic">
    <AppHeader></AppHeader>
    <LeftMenu></LeftMenu>
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from "@/components/common/AppHeader.vue";
import LeftMenu from "@/components/common/LeftMenu.vue";
export default {
  components: {
    AppHeader,
    LeftMenu,
  },
};
</script>

<style>
@import "./css/reset.css";
@import "./css/common.css";
@import "./css/grid.css";
@import "./css/dynamic.css";
</style>
