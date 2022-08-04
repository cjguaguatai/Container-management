import axios from "axios";
import store from "@/store";
import router from "@/router";
import { Message } from "element-ui";

const isTimeout = () => {
  const currentTime = Date.now();
  const tokenTime = store.state.user.tokenTime;
  // console.log(currentTime);
  const timeout = 2 * 60 * 60 * 1000;
  return currentTime - tokenTime > timeout;
};

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000, // request timeout
});
// 请求拦截器
service.interceptors.request.use(async (config) => {
  if (store.state.user.token) {
    if (isTimeout()) {
      // console.log(111);
      await store.dispatch("user/logout");
      router.push("/login");
      return Promise.reject(new Error("token超时"));
    } else {
      config.headers.Authorization = `${store.state.user.token}`;
    }
  }
  return config;
});
// 响应拦截器
service.interceptors.response.use(
  (res) => {
    // console.log(res);
    return res;
  },
  async (error) => {
    console.dir(error);
    if (error?.response?.status === 401) {
      Message.error("登陆过期");
      await store.dispatch("user/logout");
      router.push("/login");
    } else {
      Message.error(error.message);
      return Promise.reject(error);
    }
  }
);
export default service;
