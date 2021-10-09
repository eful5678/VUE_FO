<template>
  <div class="contents">
    <div class="container">
      <div class="row">
        <div class="col">순번</div>
        <div class="col">이름</div>
        <div class="col">입사일</div>
      </div>
      <div class="row">
        <div class="col">asdfasdf</div>
      </div>
    </div>
  </div>
</template>

<script>
import { empList } from "@/api/auth";
import { Member } from "@/entity";
export default {
  data() {
    return {
      member: {
        class: new Member(),
      },
    };
  },
  created() {
    this.search();
  },
  methods: {
    search: function () {
      const response = empList({
        params: this.member.class.login(),
      });
      console.log(response);
    },
  },
};
</script>

<style></style>
