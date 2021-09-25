<template>
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <div class="form">
        <div>
          <label for="username">id: </label>
          <input id="username" type="text" v-model="member.class.username" />
          <p class="validation-text">
            <span
              class="warning"
              v-if="!isUsernameValid && member.class.username"
            >
              Please enter an email address
            </span>
          </p>
        </div>
        <div>
          <label for="password">password: </label>
          <input id="password" type="text" v-model="member.class.password" />
        </div>
        <button
          class="btn"
          :disabled="!isUsernameValid || !member.class.password"
          @click="submitForm"
        >
          로그인
        </button>
      </div>
      <p class="log">{{ logMessage }}</p>
    </div>
  </div>
</template>

<script>
import { Member } from "@/entity";
import { loginUser } from "@/api/index";
import { validateEmail } from "@/utils/validation";
export default {
  data() {
    return {
      member: {
        class: new Member(),
      },
      logMessage: "",
    };
  },
  computed: {
    isUsernameValid: function () {
      return validateEmail(this.member.class.username);
    },
  },
  methods: {
    submitForm: async function () {
      console.log("login");

      try {
        console.log(this.member.class.login());
        const response = await loginUser(this.member.class.login());
        console.log(response);
        console.log(response.data.username);
        this.logMessage = `${response.data.username}님 환영합니다`;
        this.$store.commit("setUsername", this.member.class.username);
        this.$router.push("/main");
      } catch (error) {
        console.log(error.response);
        this.logMessage = `${error.response.data.message}`;
      }
    },
    // submitForm: async function () {
    //   console.log("login");
    //   const response = await loginUser({
    //     params: {
    //       username: this.member.class.username,
    //       password: this.member.class.password,
    //     },
    //   });
    //   console.log(response);
    //   console.log(response.data.username);
    //   this.logMessage = `${response.data.username}님 환영합니다`;
    // },
  },
};
</script>

<style>
/* .btn {
  color: white;
} */
</style>
