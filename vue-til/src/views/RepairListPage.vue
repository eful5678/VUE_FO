<template>
  <div>
    <h1 class="page-header">수리목록</h1>
    <RepairList></RepairList>
  </div>
</template>

<script>
import { RepairList } from "@/components/container/RepairList.vue";
export default {
  components: {
    RepairList,
  },
};
</script>

<style></style>
