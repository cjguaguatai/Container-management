import request from "@/utils/request";
/**
 * 登录接口
 * @param {Object} data 
 * @returns 
 */
export function login(data) {
  return request({
    url: "/api/user-service/user/login",
    method: "post",
    data
  });
}

/**
 * 获取验证码
 * @param {Number} clientToken
 * @returns
 */
export const getVerificationCode = (clientToken) =>
  request({
    url: `/api/user-service/user/imageCode/${clientToken}`,
    responseType: "blob",
  });
