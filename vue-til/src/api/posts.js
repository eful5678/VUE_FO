import { posts } from "./index";

function fetchPosts() {
  return posts.get("/search");
}

function createPost(data) {
  return posts.post("/insert", data);
}

function deletePost(postId) {
  console.log(postId);
  return posts.put(`/delete/${postId}`);
}

export { fetchPosts, createPost, deletePost };
