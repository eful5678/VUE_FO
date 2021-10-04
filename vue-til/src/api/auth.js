import { instance } from "./index";

// 로그인, 회원가입, 탈퇴

function registerUser(data) {
  // const url = "http://localhost:8090/member/insert";
  // return axios.post(url, data);
  return instance.post("/member/insertV2", data);
}

function loginUser(data) {
  return instance.post("/member/loginV2", data);
}

export { registerUser, loginUser };
