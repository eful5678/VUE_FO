<template>
  <div class="left">
    <nav class="left_nav">
      <h1>Menu</h1>
      <ul>
        <li style="cursor: pointer">
          <a @click="employeeListBind">Employee List</a>
        </li>
        <li>Salary</li>
      </ul>
    </nav>
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

<style scoped>
.left {
  width: 250px;
  position: inherit;
  left: 0;
  top: 0;
  bottom: 0;
  overflow-x: auto;
  overflow-y: hidden;
  transition: width 0.2s;
}
.left_nav {
  position: absolute;
  width: 250px;
  height: 100%;
  background-color: beige;
  z-index: 110;
  padding: 10px;
}
</style>
