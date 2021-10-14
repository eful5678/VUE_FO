import axios from "axios";
import { setInterceptors } from "./common/interceptors";

function createInstance() {
  return axios.create({
    baseURL: process.env.VUE_APP_API_URL,
  });
}

function createInstanceWithAuth(url) {
  const instance = axios.create({
    baseURL: `${process.env.VUE_APP_API_URL}${url}`,
  });

  return setInterceptors(instance);
}

export const instance = createInstance();
export const posts = createInstanceWithAuth("/posts");
export const emp = createInstanceWithAuth("/emp");
export const repair = createInstanceWithAuth("/repair");
