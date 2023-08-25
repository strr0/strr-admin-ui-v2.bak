import { getServiceEnvConfig } from '~/.env-config';
import { createRequest, createMyRequest } from './request';

const { url, proxyPattern } = getServiceEnvConfig(import.meta.env);

const isHttpProxy = import.meta.env.VITE_HTTP_PROXY === 'Y';

export const request = createRequest({ baseURL: isHttpProxy ? proxyPattern : url });

export const myRequest = createMyRequest({ baseURL: isHttpProxy ? proxyPattern : url });