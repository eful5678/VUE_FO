import { posts } from "./index";

function fetchPosts() {
  return posts.get("/search");
}

function createPost(data) {
  return posts.post("/insert", data);
}

export { fetchPosts, createPost };
