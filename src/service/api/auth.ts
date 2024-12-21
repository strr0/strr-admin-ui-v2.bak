import { request, myRequest } from '../request';
import qs from 'qs'

/**
 * 获取验证码
 * @param phone - 手机号
 * @returns - 返回boolean值表示是否发送成功
 */
export function fetchSmsCode(phone: string) {
  return request.post<boolean>('/getSmsCode', { phone });
}

/**
 * 登录
 * @param username - 用户名
 * @param password - 密码
 */
export function fetchLogin(username: string, password: string) {
  return myRequest.postRaw<ApiAuth.Token>('/strr-auth/oauth2/token', qs.stringify({
    grant_type: 'password',
    scope: 'web',
    client_id: 'WEB_CLIENT',
    client_secret: 'WEB_SECRET',
    username: username,
    password: password
  }))
}

/** 获取用户信息 */
export function fetchUserInfo() {
  return request.get<ApiAuth.UserInfo>('/strr-system/admin/sysUser/getUserInfo');
}

/**
 * 获取用户路由数据
 * @param userId - 用户id
 * @description 后端根据用户id查询到对应的角色类型，并将路由筛选出对应角色的路由数据返回前端
 */
export function fetchUserRoutes() {
  return myRequest.get<ApiRoute.Route>('/strr-system/admin/sysResource/getUserRoutes');
}

/**
 * 刷新token
 * @param refreshToken
 */
export function fetchUpdateToken(refreshToken: string) {
  return myRequest.postRaw<ApiAuth.Token>('/strr-auth/oauth2/token', qs.stringify({
    grant_type: 'refresh_token',
    client_id: 'WEB_CLIENT',
    client_secret: 'WEB_SECRET',
    refresh_token: refreshToken
  }));
}
