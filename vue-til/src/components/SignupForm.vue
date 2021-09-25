<template>
  <div>
    <div>
      <label for="username">id: </label>
      <input id="username" type="text" v-model="member.class.username" />
    </div>
    <div>
      <label for="password">pw: </label>
      <input id="password" type="text" v-model="member.class.password" />
    </div>
    <div>
      <label for="nickname">nickname: </label>
      <input id="nickname" type="text" v-model="member.class.nickname" />
    </div>
    <button
      :disabled="
        !isUsernameValid || !member.class.password || !member.class.nickname
      "
      @click="submitForm"
    >
      회원가입
    </button>
    <p>{{ logMessage }}</p>
  </div>
</template>

<script>
import { registerUser } from "@/api/index";
import { Member } from "@/entity";
import { validateEmail } from "@/utils/validation";
export default {
  data() {
    return {
      logMessage: "",
      member: {
        class: new Member(),
      },
    };
  },
  computed: {
    isUsernameValid: function () {
      return validateEmail(this.member.class.username);
    },
  },
  methods: {
    submitForm: async function () {
      console.log("form submit");
      const response = await registerUser(this.member.class.form());
      this.logMessage = `${response.data.username}님이 가입되었습니다.`;
      console.log(response);
    },
  },
};
</script>

<style></style>
