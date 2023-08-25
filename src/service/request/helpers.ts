import type { AxiosRequestConfig } from 'axios';
import { useAuthStore } from '@/store';
import { localStg } from '@/utils';
import { fetchUpdateToken } from '../api';

/**
 * 刷新token
 * @param axiosConfig - token失效时的请求配置
 */
export async function handleRefreshToken(axiosConfig: AxiosRequestConfig) {
  const { resetAuthStore } = useAuthStore();
  const refreshToken = localStg.get('refreshToken') || '';
  localStg.remove('token')
  const apiToken = await fetchUpdateToken(refreshToken);
  if (apiToken) {
    localStg.set('token', apiToken.access_token);
    localStg.set('refreshToken', apiToken.refresh_token);

    const config = { ...axiosConfig };
    if (config.headers) {
      config.headers.Authorization = `Bearer ${apiToken.access_token}`;
    }
    return config;
  }

  resetAuthStore();
  return null;
}
