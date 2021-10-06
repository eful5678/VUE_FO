<template>
  <li>
    <div class="post-title">{{ postItem.title }}</div>
    <div class="post-contents">{{ postItem.contents }}</div>
    <div class="post-time">
      2021ㅋㅋ
      <i class="icon ion-md-create"></i
      ><i class="icon ion-md-trash" @click="deleteItem"></i>
    </div>
  </li>
</template>

<script>
import { deletePost } from "@/api/posts";
export default {
  props: {
    postItem: {
      type: Object,
      required: true,
    },
  },
  methods: {
    deleteItem: async function () {
      console.log(this.postItem.id);
      const checkDelete = confirm("Do you want to delete?");
      if (checkDelete) {
        await deletePost(this.postItem.id);
        this.$emit("refresh");
      }
    },
  },
};
</script>

<style></style>
