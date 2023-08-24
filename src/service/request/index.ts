import { getServiceEnvConfig } from '~/.env-config';
import { createRequest, createRawRequest, createPageRequest } from './request';

const { url, proxyPattern } = getServiceEnvConfig(import.meta.env);

const isHttpProxy = import.meta.env.VITE_HTTP_PROXY === 'Y';

export const request = createRequest({ baseURL: isHttpProxy ? proxyPattern : url });

export const rawRequest = createRawRequest({ baseURL: isHttpProxy ? proxyPattern : url });

export const pageRequest = createPageRequest({ baseURL: isHttpProxy ? proxyPattern : url });
