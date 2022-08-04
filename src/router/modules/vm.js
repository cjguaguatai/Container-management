// 设备
import Layout from "@/layout";
export default {
  path: "/vm",
  component: Layout,
  redirect: "vm/index",
  meta: { title: "设备管理", icon: "celue" },
  children: [
    {
      path: "index",
      component: () => import("@/views/vm/index"),
      meta: { title: "设备管理" },
    },
    {
      path: "status",
      component: () => import("@/views/vm/status"),
      meta: { title: "设备状态" },
    },
    {
      path: "type",
      component: () => import("@/views/vm/type"),
      meta: { title: "设备类型管理" },
    },
  ],
};
