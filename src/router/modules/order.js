import Layout from "@/layout";
export default {
  path: "/order",
  component: Layout,
  redirect: '/order/index',
  meta: { title: "订单管理", icon: "celue" },
  children: [
    {
      path: "index",
      component: () => import("@/views/order/index"),
      meta: { title: "订单管理" },
    },
  ],
};
