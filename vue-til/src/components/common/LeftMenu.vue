<template>
  <div>
    <div class="sidebar-wrapper">
      <!-- <strong class="logo">Menu</strong> -->
      <nav class="sidebar">
        <ul>
          <li style="cursor: pointer">
            <a @click="employeeListBind">직원목록</a>
          </li>
          <li>급여 관리</li>
          <li>컨테이너 관리</li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    employeeListBind: function () {
      this.$router.push("/empList");
    },
  },
};
</script>

<style scoped></style>
