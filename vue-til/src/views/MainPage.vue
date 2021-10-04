<template>
  <div>
    <div class="main list-container contents">
      <h1 class="page-header">Main Page</h1>
      <div v-if="isLoading">Loading...</div>
      <LoadingSpinner v-if="isLoading"></LoadingSpinner>
      <ul v-else>
        <PostListItem
          v-for="postItem in postItems"
          :key="postItem.id"
          :postItem="postItem"
        ></PostListItem>
      </ul>
    </div>
    <router-link to="/add" class="create-button">
      <i class="ion-md-add"></i>
    </router-link>
  </div>
</template>

<script>
import { fetchPosts } from "@/api/posts";
import PostListItem from "@/components/posts/PostListItem.vue";
import LoadingSpinner from "@/components/common/LoadingSpinner.vue";
export default {
  components: {
    PostListItem,
    LoadingSpinner,
  },
  data() {
    return {
      postItems: [],
      isLoading: false,
    };
  },
  created() {
    this.fetchNotes();
  },
  methods: {
    fetchNotes: async function () {
      this.isLoading = true;
      const response = await fetchPosts();
      this.isLoading = false;
      console.log(response);
      this.postItems = response.data;
    },
  },
};
</script>

<style></style>
