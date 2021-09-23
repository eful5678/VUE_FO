<template>
  <div>
    <div>
      <label for="username">id: </label>
      <input id="username" type="text" v-model="member.class.username" />
    </div>
    <div>
      <label for="password">password: </label>
      <input id="password" type="text" v-model="member.class.password" />
    </div>
    <button @click="submitForm">로그인</button>
  </div>
</template>

<script>
import { Member } from "@/entity";
import { loginUser } from "@/api/index";
export default {
  data() {
    return {
      member: {
        class: new Member(),
      },
    };
  },
  methods: {
    submitForm: async function () {
      console.log("login");
      const response = await loginUser({
        params: {
          username: this.member.class.username,
          password: this.member.class.password,
        },
      });
      console.log(response);
    },
  },
};
</script>

<style></style>
