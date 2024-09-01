import { ApplicationConfig, provideExperimentalZonelessChangeDetection, Provider } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import endpoints from './endpoints.json';
import { ENDPOINT_CONFIG, EndpointConfig, endpointProviders, loggerProviders } from '@skt/core';
import { provideHttpClient, withFetch } from '@angular/common/http';

const endpointConfig: EndpointConfig = {
  endpoints,
  baseUrl: 'https://jsonplaceholder.typicode.com',
};

/**
 * Providers from Libs
 */
const libProviders: Provider[] = [...endpointProviders, ...loggerProviders];

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(withFetch()),
    {
      provide: ENDPOINT_CONFIG,
      useValue: endpointConfig,
    },
    ...libProviders,
  ],
};
