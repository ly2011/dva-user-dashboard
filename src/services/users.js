import request from "../utils/request";
import { PAGE_SIZE } from "../constants";

// 获取用户列表
export function fetch({ page }) {
  return request(`/api/users?_page=${page}&_limit=${PAGE_SIZE}`);
}

// 删除用户信息
export function remove(id) {
  return request(`/api/users/${id}`, {
    method: "DELETE"
  });
}
