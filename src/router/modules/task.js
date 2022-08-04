import Layout from "@/layout";
export default {
  path: "/task",
  component: Layout,
  redirect: "/task/business",
  meta: { title: "工单管理", icon: "celue" },
  children: [
    {
      path: "business",
      component: () => import("@/views/task/task-business"),
      meta: { title: "运营工单" },
    },
    {
      path: "operation",
      component: () => import("@/views/task/task-operation"),
      meta: { title: "运维工单" },
    },
  ],
};
