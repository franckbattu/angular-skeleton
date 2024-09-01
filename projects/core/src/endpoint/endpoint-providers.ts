import { Provider } from '@angular/core';
import { EndpointService } from './endpoint.service';
import { DefaultEndpointService } from './default-endpoint.service';

export const endpointProviders: Provider[] = [
  {
    provide: EndpointService,
    useClass: DefaultEndpointService,
  },
];
