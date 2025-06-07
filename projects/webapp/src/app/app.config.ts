import { provideHttpClient, withFetch } from '@angular/common/http';
import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { EndpointConfig, provideEndpoints, provideLoggers } from '@skt/core';
import { routes } from './app.routes';
import endpoints from './endpoints.json';

const endpointConfig: EndpointConfig = {
  endpoints,
  baseUrl: '/api',
};

export const appConfig: ApplicationConfig = {
  providers: [
    /* Providers from Angular */
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch()),
    /* Providers from libs */
    provideEndpoints(endpointConfig),
    provideLoggers(),
  ],
};
