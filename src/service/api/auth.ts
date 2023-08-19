import { request, authRequest } from '../request';
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
  return request.post<ApiAuth.UserInfo>('/authservice/login', qs.stringify({ username, password }));
}

/**
 * 获取token
 * @param resp 
 */
export async function fetchToken() {
  let { data } = await authRequest.get<string>('/authservice/oauth2/authorize', {
    params: {
      response_type: 'code',
      client_id: 'WEB_CLIENT',
      scope: 'web'
    }
  })
  if (data) {
    let match = /\?code=(.*)/.exec(data)
    if (match) {
      return authRequest.post<ApiAuth.Token>('/authservice/oauth2/token', qs.stringify({
        grant_type: 'authorization_code',
        scope: 'web',
        client_id: 'WEB_CLIENT',
        client_secret: 'WEB_SECRET',
        code: match[1]
      }))
    }
  }
  return { data: null }
}

/** 获取用户信息 */
export function fetchUserInfo() {
  return request.get<ApiAuth.UserInfo>('/getUserInfo');
}

/**
 * 获取用户路由数据
 * @param userId - 用户id
 * @description 后端根据用户id查询到对应的角色类型，并将路由筛选出对应角色的路由数据返回前端
 */
export function fetchUserRoutes() {
  return request.get<ApiRoute.Route>('/adminservice/admin/sysResource/getUserRoutes');
}

/**
 * 刷新token
 * @param refreshToken
 */
export function fetchUpdateToken(refreshToken: string) {
  return request.post<ApiAuth.Token>('/updateToken', { refreshToken });
}
