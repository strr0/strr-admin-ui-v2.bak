import { rawRequest } from '../request';

/** 获取服务列表 */
export function fetchServerList() {
  return rawRequest.get<ApiServer.Server[]>('/actuator/gateway/routes')
}