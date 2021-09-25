import axios from "axios";

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
});

function registerUser(data) {
  // const url = "http://localhost:8090/member/insert";
  // return axios.post(url, data);
  return instance.post("/member/insertV2", data);
}

function loginUser(data) {
  return instance.post("/member/loginV2", data);
}

export { registerUser, loginUser };
