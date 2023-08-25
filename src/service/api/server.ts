import { myRequest } from '../request';

/** 获取服务列表 */
export function fetchServerList() {
  return myRequest.getRaw<ApiServer.Server[]>('/actuator/gateway/routes')
}