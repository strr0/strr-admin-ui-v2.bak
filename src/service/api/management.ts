import { myRequest } from '../request';
import qs from 'qs'

/** 获取用户列表 */
export function fetchUserList(params: any) {
  return myRequest.page<ApiManagement.User>('/strr-system/admin/sysUser/page', { params });
};

/** 保存用户 */
export function saveUser(user: any) {
  return myRequest.post<any>('/strr-system/admin/sysUser/saveInfo', qs.stringify(user));
}

/** 获取角色id */
export function fetchRoleIds(userId: number) {
  return myRequest.get<number[]>('/strr-system/admin/sysUser/listRoleId?userId=' + userId);
}

/** 删除用户 */
export function removeUser(id: number) {
  return myRequest.delete<any>('/strr-system/admin/sysUser/removeInfo?id=' + id);
}

/** 获取角色列表 */
export function fetchRoleList(params: any) {
  return myRequest.get<ApiManagement.Role[]>('/strr-system/admin/sysRole/list', { params });
};

/** 保存角色 */
export function saveRole(role: any) {
  return myRequest.post<any>('/strr-system/admin/sysRole/save', qs.stringify(role));
}

/** 更新角色 */
export function updateRole(role: any) {
  return myRequest.put<any>('/strr-system/admin/sysRole/update', qs.stringify(role));
}

/** 更新角色权限 */
export function updateRoleRel(params: any) {
  return myRequest.post<any>('/strr-system/admin/sysRole/updateRel', qs.stringify(params, { arrayFormat: 'repeat' }));
}

/** 获取资源id */
export function fetchResourceIds(roleId: number) {
  return myRequest.get<number[]>('/strr-system/admin/sysRole/listResourceId?roleId=' + roleId);
}

/** 删除角色 */
export function removeRole(id: number) {
  return myRequest.delete<any>('/strr-system/admin/sysRole/removeInfo?id=' + id);
}

/** 获取资源列表 */
export function fetchResourceList(params: any) {
  return myRequest.get<ApiManagement.Resource[]>('/strr-system/admin/sysResource/menuTree', { params });
};

/** 保存资源 */
export function saveResource(resource: any) {
  return myRequest.post<any>('/strr-system/admin/sysResource/save', qs.stringify(resource));
}

/** 更新资源 */
export function updateResource(resource: any) {
  return myRequest.put<any>('/strr-system/admin/sysResource/update', qs.stringify(resource));
}

/** 删除资源 */
export function removeResource(id: number) {
  return myRequest.delete<any>('/strr-system/admin/sysResource/remove?id=' + id);
}

/** 获取应用列表 */
export function fetchApplicationList(params: any) {
  return myRequest.get<ApiManagement.Properties[]>('/strr-system/admin/sysProperties/listApplication', { params });
}

/** 获取配置列表 */
export function fetchPropertiesList(params: any) {
  return myRequest.get<ApiManagement.Properties[]>('/strr-system/admin/sysProperties/listProperties', { params });
}

/** 保存配置 */
export function saveProperties(properties: ApiManagement.Properties) {
  return myRequest.post<any>('/strr-system/admin/sysProperties/save', qs.stringify(properties));
}

/** 批量保存配置 */
export function batchSaveProperties(list: ApiManagement.Properties[]) {
  return myRequest.post<any>('/strr-system/admin/sysProperties/batchSave', list);
}

/** 更新配置 */
export function updateProperties(properties: ApiManagement.Properties) {
  return myRequest.put<any>('/strr-system/admin/sysProperties/update', qs.stringify(properties));
}

/** 删除配置 */
export function removeProperties(id: number) {
  return myRequest.delete<any>('/strr-system/admin/sysProperties/remove?id=' + id);
}

/** 批量删除配置 */
export function batchRemoveProperties(application: string) {
  return myRequest.delete<any>('/strr-system/admin/sysProperties/batchRemove?application=' + application);
}