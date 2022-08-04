import Layout from "@/layout";
export default {
  path: "/policy",
  component: Layout,
  redirect: '/policy/index',
  meta: { title: "策略管理", icon: "celue" },
  children: [
    {
      path: "index",
      component: () => import("@/views/policy/index"),
      meta: { title: "策略管理" },
    },
  ],
};
