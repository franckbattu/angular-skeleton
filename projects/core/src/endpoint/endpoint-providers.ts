import { EnvironmentProviders, InjectionToken, makeEnvironmentProviders } from '@angular/core';
import { EndpointService } from './endpoint.service';
import { DefaultEndpointService } from './default-endpoint.service';

export interface EndpointConfig {
  endpoints: Record<string, string>;
  baseUrl: string;
  prefix?: string;
  mediaUrl?: string;
}

export const ENDPOINT_CONFIG = new InjectionToken<EndpointConfig>('skt.core.endpoint.config');

export function provideEndpoints(config: EndpointConfig): EnvironmentProviders {
  return makeEnvironmentProviders([
    {
      provide: ENDPOINT_CONFIG,
      useValue: config,
    },
    {
      provide: EndpointService,
      useClass: DefaultEndpointService,
    },
  ]);
}
