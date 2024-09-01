/**
 * Represents the attributes for an endpoint in a URL.
 */
export interface EndpointAttributes {
  /**
   * URL parameters to be included in the path of the endpoint.
   * These parameters are inserted into the URL at the corresponding placeholders
   * (e.g., `{id}` in `/users/{id}`).
   *
   * @example
   * // For the URL `/users/123`
   * { urlParams: { id: 123 } }
   */
  urlParams?: Record<string, string | number | boolean>;
  /**
   * Query parameters to be appended to the URL after the question mark.
   * These parameters are added to the URL as key-value pairs (e.g., `?search=keyword`).
   *
   * Additionally, you can include query parameters that are not explicitly
   * configured in the endpoint definition. These extra parameters will be
   * appended to the URL alongside any parameters specified in the endpoint.
   *
   * @example
   * // For the URL `/search?query=keyword&page=2`
   * { queryParams: { query: 'keyword', page: 2 } }
   */
  queryParams?: Record<string, string | number | boolean>;
}

/**
 * Abstract service for managing API endpoints.
 * Concrete implementations of this class must define how to construct
 * the full URL for a specific endpoint using the provided attributes.
 */
export abstract class EndpointService {
  /**
   * Constructs the full URL for a given endpoint using the specified attributes.
   * Attributes include URL parameters and query parameters.
   *
   * @param endpoint The name of the configured endpoint. It must be configured
   *                 beforehand to be used in URL construction.
   * @param attributes The attributes to use for constructing the URL. These attributes
   *                   can include URL parameters and query parameters.
   *
   * @returns The constructed URL or `undefined` if URL construction fails.
   *
   * @example
   * // Suppose we have an endpoint 'user': 'users/{id}' and we want to replace {id} with 123,
   * // and additionally include query parameters for sorting and filtering
   * const url = endpointService.buildUrl('user', {
   *   urlParams: { id: 123 },
   *   queryParams: { sort: 'asc', filter: 'active' }
   * });
   * // returns 'users/123?sort=asc&filter=active'
   *
   * @throws Error An error if the endpoint is not configured or if the attributes are invalid.
   */
  abstract buildUrl(endpoint: string, attributes?: EndpointAttributes): string | undefined;
}
