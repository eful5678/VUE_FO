<template>
  <div class="contents">
    <h1 class="page-header">Create Post</h1>
    <div class="form-wrapper">
      <div class="form">
        <div>
          <label for="title">Title</label>
          <input id="title" type="text" v-model="post.class.title" />
        </div>
        <div>
          <label for="contents">Content</label>
          <textarea
            id="contents"
            type="text"
            rows="5"
            v-model="post.class.contents"
          />
          <p v-if="!isContentsValid" class="validation-text warning">
            Text is Too Long. Contents length must be less than 200
          </p>
        </div>
      </div>
      <div>
        <button class="btn" @click="submitForm">Create</button>
      </div>
    </div>
  </div>
</template>

<script>
import { createPost } from "@/api/posts";
import { Post, Member } from "@/entity";
export default {
  data() {
    return {
      post: {
        class: new Post(),
      },
      member: {
        class: new Member(),
      },
    };
  },
  computed: {
    isContentsValid: function () {
      return this.post.class.contents.length <= 200;
    },
  },
  methods: {
    submitForm: async function () {
      try {
        this.post.class.username = this.$store.state.username;
        const response = await createPost(this.post.class.insert());
        this.$router.push("/main");
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped`>
.form-wrapper .form {
  width: 100%;
}
.btn {
  color: white;
}
</style>
