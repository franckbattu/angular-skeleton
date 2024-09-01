import { InjectionToken } from '@angular/core';

export interface EndpointConfig {
  endpoints: Record<string, string>;
  baseUrl: string;
  prefix?: string;
  mediaUrl?: string;
}

export const ENDPOINT_CONFIG = new InjectionToken<EndpointConfig>('skt.core.endpoint.config');
