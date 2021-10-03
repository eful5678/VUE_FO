import axios from "axios";
import { setInterceptors } from "./common/interceptors";

function createInstance() {
  const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
  });

  return setInterceptors(instance);
}

const instance = createInstance();

function registerUser(data) {
  // const url = "http://localhost:8090/member/insert";
  // return axios.post(url, data);
  return instance.post("/member/insertV2", data);
}

function loginUser(data) {
  return instance.post("/member/loginV2", data);
}

function fetchPosts() {
  return instance.get("/posts/search");
}

function createPost(data) {
  return instance.post("/posts/insert", data);
}

export { registerUser, loginUser, fetchPosts, createPost };
