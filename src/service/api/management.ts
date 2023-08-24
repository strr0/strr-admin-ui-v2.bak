import { pageRequest, request } from '../request';
import qs from 'qs'

/** 获取用户列表 */
export function fetchUserList(params: any) {
  return pageRequest.get<ApiManagement.User>('/adminservice/admin/sysUser/page', { params });
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
  return request.post<any>('/adminservice/admin/sysRole/updateRel', qs.stringify(params, { arrayFormat: 'repeat' }));
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

/** 获取应用列表 */
export function fetchApplicationList(params: any) {
  return request.get<ApiManagement.Properties[]>('/adminservice/admin/sysProperties/listApplication', { params });
}

/** 获取配置列表 */
export function fetchPropertiesList(params: any) {
  return request.get<ApiManagement.Properties[]>('/adminservice/admin/sysProperties/listProperties', { params });
}

/** 保存配置 */
export function saveProperties(properties: ApiManagement.Properties) {
  return request.post<any>('/adminservice/admin/sysProperties/save', qs.stringify(properties));
}

/** 批量保存配置 */
export function batchSaveProperties(list: ApiManagement.Properties[]) {
  return request.post<any>('/adminservice/admin/sysProperties/batchSave', list);
}

/** 更新配置 */
export function updateProperties(properties: ApiManagement.Properties) {
  return request.put<any>('/adminservice/admin/sysProperties/update', qs.stringify(properties));
}

/** 删除配置 */
export function removeProperties(id: number) {
  return request.delete<any>('/adminservice/admin/sysProperties/remove?id=' + id);
}

/** 批量删除配置 */
export function batchRemoveProperties(application: string) {
  return request.delete<any>('/adminservice/admin/sysProperties/batchRemove?application=' + application);
}