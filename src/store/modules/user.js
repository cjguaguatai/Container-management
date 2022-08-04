import { login, getUserInfo } from "@/api/user";

export default {
  namespaced: true,
  state: {
    token: "",
    userId: "",
    userInfo: {},
    tokenTime: "",
  },
  mutations: {
    setToken(state, data) {
      state.token = data.token;
      state.userId = data.userId;
      state.tokenTime = Date.now();
    },
    setUserInfo(state, data) {
      state.userInfo = data;
    },
  },
  actions: {
    // 获取token
    async getToken(context, payload) {
      const { data } = await login(payload);
      // console.log(data);
      context.commit("setToken", data);
    },
    // 获取用户信息
    async getUserInfo(context, payload) {
      const { data } = await getUserInfo(payload);
      // console.log(data);
      context.commit("setUserInfo", data);
    },
    // 登出
    logout(context, payload) {
      context.commit("setUserInfo", {});
      context.commit("setToken", "");
    },
  },
  getters: {},
};
