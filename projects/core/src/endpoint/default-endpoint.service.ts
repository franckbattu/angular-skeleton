import { inject, Injectable, isDevMode } from '@angular/core';
import { HttpParams, HttpParamsOptions } from '@angular/common/http';
import { EndpointAttributes, EndpointService } from './endpoint.service';
import { ENDPOINT_CONFIG, EndpointConfig } from './endpoint-providers';

@Injectable({
  providedIn: 'root',
})
export class DefaultEndpointService implements EndpointService {
  private config: EndpointConfig = inject(ENDPOINT_CONFIG);

  buildUrl(endpoint: string, attributes?: EndpointAttributes): string | undefined {
    let endpointUrl = this.getRawEndpointFromConfig(endpoint);

    if (!endpointUrl) {
      if (isDevMode()) {
        console.warn(`Endpoint ${endpoint} is not configured`);
      }
      return undefined;
    }

    if (attributes) {
      const { urlParams, queryParams } = attributes;
      if (urlParams) {
        endpointUrl = this.fillUrlParams(endpointUrl, urlParams);
      }

      if (queryParams) {
        let httpParamsFromTemplate = {};
        if (endpointUrl.includes('?')) {
          [endpointUrl, httpParamsFromTemplate] = endpointUrl.split('?');
        }

        const httpParams = this.getHttpParamsFromQueryParams(queryParams, httpParamsFromTemplate);
        const params = httpParams.toString();

        if (params.length > 0) {
          endpointUrl += `?${params}`;
        }
      }
    }

    const baseUrl = this.getBaseUrl();
    return `${baseUrl}${endpointUrl}`;
  }

  private getRawEndpointFromConfig(endpoint: string): string {
    let rawEndpoint = this.config.endpoints[endpoint];
    if (rawEndpoint && !rawEndpoint.startsWith('/')) {
      rawEndpoint = '/' + rawEndpoint;
    }
    return rawEndpoint;
  }

  private getBaseUrl(): string {
    let baseUrl = this.config.baseUrl;

    if (this.config.prefix) {
      const prefix = this.config.prefix.startsWith('/') ? this.config.prefix : '/' + this.config.prefix;
      baseUrl = `${baseUrl}${prefix}`;
    }

    return baseUrl;
  }

  private fillUrlParams(template: string, urlParams: Record<string, string | number | boolean>): string {
    for (const [key, value] of Object.entries(urlParams)) {
      const placeholder = new RegExp('\\${' + key + '}', 'g');
      template = template.replace(placeholder, encodeURIComponent(value));
    }
    return template;
  }

  private getHttpParamsFromQueryParams(
    queryParams: Record<string, string | number | boolean>,
    options: HttpParamsOptions,
  ) {
    let httpParams = new HttpParams(options);
    Object.keys(queryParams).forEach((key) => {
      const value = queryParams[key as keyof object];
      httpParams = httpParams.set(key, value);
    });
    return httpParams;
  }
}
