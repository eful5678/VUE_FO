<template>
  <div class="contents">
    <h1 class="page-header">Edit Post</h1>
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
        <button class="btn" @click="submitForm">Edit</button>
      </div>
    </div>
  </div>
</template>

<script>
import { Post } from "@/entity";
import { fetchPost, editPost } from "@/api/posts";
export default {
  data() {
    return {
      post: {
        class: new Post(),
      },
      logMessage: "",
    };
  },
  computed: {
    isContentsValid: function () {
      return this.post.class.contents.length <= 200;
    },
  },
  async created() {
    const id = this.$route.params.id;
    const response = await fetchPost({
      params: {
        postId: id,
      },
    });
    console.log(response);
    this.post.class.title = response.data.title;
    this.post.class.contents = response.data.contents;
  },
  methods: {
    submitForm: async function () {
      this.post.class.postId = this.$route.params.id;
      console.log(this.id);
      console.log(this.post.class.update());
      try {
        const response = await editPost(this.post.class.update());
        console.log(response);
        this.$router.push("/main");
      } catch (error) {
        console.log(error);
        this.logMessage = error;
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
