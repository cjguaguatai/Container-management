import router from "./router";
import store from "./store";

const writeList = ["/404", "/login"];
router.beforeEach((to, from, next) => {
  if (store.state.user.token) {
    if (!store.state.user.userInfo.status) {
      store.dispatch("user/getUserInfo", store.state.user.userId);
      // console.log(store.state.user.userInfo);
    }
    if (to.path === "/login") return next("/");
    next();
  } else {
    if (writeList.includes(to.path)) return next();
    next("/login");
  }
});
