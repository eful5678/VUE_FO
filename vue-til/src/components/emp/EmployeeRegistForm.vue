<template>
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <div class="form">
        <div>
          <label for="name">직원명 </label>
          <input id="username" type="text" v-model="emp.class.name" />
        </div>
        <div>
          <label for="직급">직급 </label>
          <input id="password" type="text" v-model="emp.class.empLevel" />
        </div>
        <button class="btn" @click="createEmp">직원 등록</button>
      </div>
      <p class="log">{{ logMessage }}</p>
    </div>
  </div>
</template>

<script>
import { Employee } from "@/entity";
import { empRegist } from "@/api/emp";
export default {
  data() {
    return {
      emp: {
        class: new Employee(),
      },
      logMessage: "",
    };
  },
  created() {},
  methods: {
    createEmp: function () {
      try {
        const response = empRegist(this.emp.class.create());
        console.log(response);
        this.$router.push("/empList");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style></style>
