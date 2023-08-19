import axios, { AxiosInstance } from 'axios';
import type { AxiosResponse, AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';
import { REFRESH_TOKEN_CODE } from '@/config';
import {
  localStg,
  handleAxiosError,
  handleBackendError,
  handleResponseError,
  handleServiceResult,
  transformRequestData
} from '@/utils';
import { handleRefreshToken } from './helpers';

/**
 * 封装axios请求类
 * @author Soybean<honghuangdc@gmail.com>
 */
export class CustomAxiosInstance {
  instance: AxiosInstance;

  backendConfig: Service.BackendResultConfig;

  /**
   *
   * @param axiosConfig - axios配置
   * @param backendConfig - 后端返回的数据配置
   */
  constructor(
    axiosConfig: AxiosRequestConfig,
    backendConfig: Service.BackendResultConfig = {
      codeKey: 'success',
      dataKey: 'data',
      msgKey: 'msg',
      successCode: true
    }
  ) {
    this.backendConfig = backendConfig;
    this.instance = axios.create(axiosConfig);
    this.setInterceptor();
  }

  /** 设置请求拦截器 */
  setInterceptor() {
    this.instance.interceptors.request.use(
      async config => {
        const handleConfig = { ...config };
        if (handleConfig.headers) {
          // 数据转换
          const contentType = handleConfig.headers['Content-Type'] as UnionKey.ContentType;
          handleConfig.data = await transformRequestData(handleConfig.data, contentType);
          // 设置token
          const token = localStg.get('token')
          if (Boolean(token)) {
            handleConfig.headers.Authorization = `Bearer ${token}`;
          }
        }
        return handleConfig;
      },
      (axiosError: AxiosError) => {
        const error = handleAxiosError(axiosError);
        return handleServiceResult(error, null);
      }
    );
    this.instance.interceptors.response.use(
      (async response => {
        const { status } = response;
        if (status === 200 || status < 300 || status === 304) {
          const backend = response.data;
          const { codeKey, dataKey, successCode } = this.backendConfig;
          // 请求成功
          if (backend[codeKey] === successCode) {
            return handleServiceResult(null, backend[dataKey]);
          }

          const error = handleBackendError(backend, this.backendConfig);
          return handleServiceResult(error, null);
        }
        // token失效, 刷新token
        if (status === 401) {
          const config = await handleRefreshToken(response.config);
          if (config) {
            return this.instance.request(config);
          }
        }
        const error = handleResponseError(response);
        return handleServiceResult(error, null);
      }) as (response: AxiosResponse<any, any>) => Promise<AxiosResponse<any, any>>,
      (axiosError: AxiosError) => {
        const error = handleAxiosError(axiosError);
        return handleServiceResult(error, null);
      }
    );
  }
}

export class AuthAxiosInstance {
  instance: AxiosInstance;

  constructor(
    axiosConfig: AxiosRequestConfig
  ) {
    this.instance = axios.create(axiosConfig);
    this.setInterceptor();
  }

  setInterceptor() {
    this.instance.interceptors.response.use(
      (async response => {
        return handleServiceResult(null, response.data)
      }) as (resp: AxiosResponse<any, any>) => Promise<AxiosResponse<any, any>>,
      (axiosError: AxiosError) => {
        // 获取code成功
        const responseURL = axiosError.request.responseURL
        if (responseURL.includes('code')) {
          return handleServiceResult(null, responseURL)
        }
        const error = handleAxiosError(axiosError)
        return handleServiceResult(error, null)
      }
    )
  }
}

export class PageAxiosInstance {
  instance: AxiosInstance;

  constructor(
    axiosConfig: AxiosRequestConfig
  ) {
    this.instance = axios.create(axiosConfig);
    this.setInterceptor();
  }

  setInterceptor() {
    this.instance.interceptors.request.use(
      async config => {
        const handleConfig = { ...config };
        if (handleConfig.headers) {
          // 数据转换
          const contentType = handleConfig.headers['Content-Type'] as UnionKey.ContentType;
          handleConfig.data = await transformRequestData(handleConfig.data, contentType);
          // 设置token
          const token = localStg.get('token')
          if (Boolean(token)) {
            handleConfig.headers.Authorization = `Bearer ${token}`;
          }
        }
        return handleConfig;
      },
      (axiosError: AxiosError) => {
        const error = handleAxiosError(axiosError);
        return handleServiceResult(error, null);
      }
    );
    this.instance.interceptors.response.use(
      (async response => {
        const { status } = response;
        if (status === 200 || status < 300 || status === 304) {
          return handleServiceResult(null, response.data);
        }
        const error = handleResponseError(response);
        return handleServiceResult(error, null);
      }) as (resp: AxiosResponse<any, any>) => Promise<AxiosResponse<any, any>>,
      (axiosError: AxiosError) => {
        const error = handleAxiosError(axiosError)
        return handleServiceResult(error, null)
      }
    )
  }
}