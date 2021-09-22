import axios from "axios";

function registerUser(data) {
  const url = "http://localhost:8090/member/insert";
  return axios.post(url, data);
}

export { registerUser };
