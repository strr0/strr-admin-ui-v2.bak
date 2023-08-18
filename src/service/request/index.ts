import { getServiceEnvConfig } from '~/.env-config';
import { createRequest, createAuthRequest } from './request';

const { url, proxyPattern } = getServiceEnvConfig(import.meta.env);

const isHttpProxy = import.meta.env.VITE_HTTP_PROXY === 'Y';

export const request = createRequest({ baseURL: isHttpProxy ? proxyPattern : url });

export const authRequest = createAuthRequest({ baseURL: isHttpProxy ? proxyPattern : url });
