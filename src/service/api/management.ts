import { pageRequest, request } from '../request';
import qs from 'qs'

/** 获取用户列表 */
export function fetchUserList(params: any) {
  return pageRequest.get<ApiPageResult.Page<ApiManagement.User>>('/adminservice/admin/sysUser/page', { params });
};

/** 保存用户 */
export function saveUser(user: any) {
  return request.post<any>('/adminservice/admin/sysUser/saveInfo', qs.stringify(user));
}

/** 获取角色id */
export function fetchRoleIds(userId: number) {
  return request.get<number[]>('/adminservice/admin/sysUser/listRoleId?userId=' + userId);
}

/** 删除用户 */
export function removeUser(id: number) {
  return request.delete<any>('/adminservice/admin/sysUser/removeInfo?id=' + id);
}

/** 获取角色列表 */
export function fetchRoleList(params: any) {
  return request.get<ApiManagement.Role[]>('/adminservice/admin/sysRole/list', { params });
};

/** 保存角色 */
export function saveRole(role: any) {
  return request.post<any>('/adminservice/admin/sysRole/save', qs.stringify(role));
}

/** 更新角色 */
export function updateRole(role: any) {
  return request.put<any>('/adminservice/admin/sysRole/update', qs.stringify(role));
}

/** 更新角色权限 */
export function updateRoleRel(params: any) {
  return request.post<any>('/adminservice/admin/sysRole/updateRel', qs.stringify(params));
}

/** 获取资源id */
export function fetchResourceIds(roleId: number) {
  return request.get<number[]>('/adminservice/admin/sysRole/listResourceId?roleId=' + roleId);
}

/** 删除角色 */
export function removeRole(id: number) {
  return request.delete<any>('/adminservice/admin/sysRole/removeInfo?id=' + id);
}

/** 获取资源列表 */
export function fetchResourceList(params: any) {
  return request.get<ApiManagement.Resource[]>('/adminservice/admin/sysResource/menuTree', { params });
};

/** 保存资源 */
export function saveResource(resource: any) {
  return request.post<any>('/adminservice/admin/sysResource/save', qs.stringify(resource));
}

/** 更新资源 */
export function updateResource(resource: any) {
  return request.put<any>('/adminservice/admin/sysResource/update', qs.stringify(resource));
}

/** 删除资源 */
export function removeResource(id: number) {
  return request.delete<any>('/adminservice/admin/sysResource/remove?id=' + id);
}