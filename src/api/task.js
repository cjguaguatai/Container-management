import request from "@/utils/request";

/**
 * 工单搜索
 * @returns
 */
export const getTaskSearchList = () => {
  return request({
    url: "/api/task-service/task/search",
  });
};

/**
 * 工单状态列表
 * @returns
 */
export const getAllTaskStatus = () => {
  return request({
    url: "/api/task-service/task/allTaskStatus",
  });
};
