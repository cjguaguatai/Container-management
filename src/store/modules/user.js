import { login } from "@/api/user";
import router from "@/router";
import { Message } from "element-ui";
export default {
  namespaced: true,
  state: {
    userLogin: {},
  },
  mutations: {
    setUserLogin(state, data) {
      state.userLogin = data;
    },
  },
  actions: {
    async getUserLogin(context, payload) {
      const { data } = await login(payload);
      Message(data.msg);
      if (data.success) {
        router.push('/')
      } 
      context.commit("setUserLogin", data);
    },
  },
  getters: {},
};
