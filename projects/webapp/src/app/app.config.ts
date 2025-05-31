import { provideHttpClient, withFetch } from '@angular/common/http';
import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { EndpointConfig, provideEndpoints, provideLoggers } from '@skt/core';
import { routes } from './app.routes';
import endpoints from './endpoints.json';

const endpointConfig: EndpointConfig = {
  endpoints,
  baseUrl: 'https://jsonplaceholder.typicode.com',
};

export const appConfig: ApplicationConfig = {
  providers: [
    /* Providers from Angular */
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(withFetch()),
    /* Providers from libs */
    provideEndpoints(endpointConfig),
    provideLoggers(),
  ],
};
