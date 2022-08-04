
import Layout from "@/layout";
export default {
  path: "/report",
  component: Layout,
  redirect: '/report/index',
  meta: { title: "对账统计", icon: "celue" },
  children: [
    {
      path: "index",
      component: () => import("@/views/report/index"),
      meta: { title: "对账统计" },
    },
  ],
};
