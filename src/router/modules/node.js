import Layout from "@/layout";
export default {
  path: "/node",
  component: Layout,
  redirect: "/node/region",
  meta: { title: "点位管理", icon: "celue" },
  children: [
    {
      path: "region",
      component: () => import("@/views/node/node_region"),
      meta: { title: "区域管理" },
    },
    {
      path: "node",
      component: () => import("@/views/node/node_node"),
      meta: { title: "点位管理" },
    },
    {
      path: "partner",
      component: () => import("@/views/node/node_partner"),
      meta: { title: "合作商管理" },
    },
  ],
};
