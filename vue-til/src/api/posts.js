import { posts } from "./index";

function fetchPosts() {
  return posts.get("/search");
}

function fetchPost(postId) {
  return posts.get("/info", postId);
}

function createPost(data) {
  return posts.post("/insert", data);
}

function deletePost(postId) {
  console.log(postId);
  return posts.put(`/delete/${postId}`);
}

function editPost(postData) {
  return posts.put("/update/", postData);
}

export { fetchPosts, createPost, deletePost, fetchPost, editPost };
