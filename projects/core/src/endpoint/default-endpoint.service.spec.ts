import { inject, TestBed } from '@angular/core/testing';
import { DefaultEndpointService } from './default-endpoint.service';
import { ENDPOINT_CONFIG, EndpointConfig } from './endpoint-tokens';
import { provideExperimentalZonelessChangeDetection } from '@angular/core';

const endpoints: EndpointConfig = {
  endpoints: {
    user: 'users/${userId}',
    search: 'products/search?pageSize=${pageSize}',
  },
  baseUrl: 'http://api-dev',
  prefix: 'v1',
};

describe('DefaultEndpointService', () => {
  let service: DefaultEndpointService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DefaultEndpointService,
        {
          provide: ENDPOINT_CONFIG,
          useValue: endpoints,
        },
        provideExperimentalZonelessChangeDetection(),
      ],
    });

    service = TestBed.inject(DefaultEndpointService);
  });

  it('should DefaultEndpointService be injected', inject([DefaultEndpointService], (service: DefaultEndpointService) =>
    expect(service).toBeTruthy(),
  ));

  it('should resolve undefined if endpoint is not configured', () => {
    const url = service.buildUrl('product');

    expect(url).toBeUndefined();
  });

  it('should resolve endpoint with url params', () => {
    const url = service.buildUrl('user', {
      urlParams: {
        userId: 'current',
      },
    });

    expect(url).toBe('http://api-dev/v1/users/current');
  });

  it('should resolve endpoint with query params', () => {
    const url = service.buildUrl('search', {
      queryParams: {
        pageSize: '5',
      },
    });

    expect(url).toBe('http://api-dev/v1/products/search?pageSize=5');
  });

  it('should resolve endpoint by adding query params', () => {
    const url = service.buildUrl('user', {
      urlParams: {
        userId: 'current',
      },
      queryParams: {
        fields: true,
      },
    });

    expect(url).toBe('http://api-dev/v1/users/current?fields=true');
  });
});
