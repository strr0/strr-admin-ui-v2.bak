import { pageRequest, request } from '../request';

/** 获取用户列表 */
export function fetchUserList(params: any) {
  return pageRequest.get<ApiPageResult.Page<ApiManagement.User>>('/adminservice/admin/sysUser/page', { params });
};

export function fetchRoleList(params: any) {
  return pageRequest.get<ApiPageResult.Page<ApiManagement.Role>>('/adminservice/admin/sysRole/page', { params });
};

export function fetchResourceIds(roleId: number) {
  return request.get<number[]>('/adminservice/admin/sysRole/listRelByRid?rid=' + roleId)
}

export function fetchResourceList(params: any) {
  return request.get<ApiManagement.Resource[]>('/adminservice/admin/sysResource/menuTree', { params });
};
