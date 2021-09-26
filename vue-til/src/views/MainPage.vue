<template>
  <div>
    <div class="main list-container contents">
      <h1 class="page-header">Main Page</h1>
      <ul>
        <li v-for="postItem in postItems" :key="postItem.id">
          {{ postItem.title }}
          {{ postItem.contents }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { fetchPosts } from "@/api/index";
export default {
  data() {
    return {
      postItems: [],
    };
  },
  created() {
    this.fetchNotes();
  },
  methods: {
    fetchNotes: async function () {
      const response = await fetchPosts();
      console.log(response);
      this.postItems = response.data;
    },
  },
};
</script>

<style></style>
