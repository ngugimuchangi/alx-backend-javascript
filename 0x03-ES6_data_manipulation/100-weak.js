export const weakMap = new WeakMap();

/**
 * Update a weakMap of endpoint: queries key-pair value
 * and check the number queries for a given endpoint.
 * @param {Object} endpoint - endpoint object with protocol and endpoint
 *                            parameters
 */
export function queryAPI(endpoint) {
  if (weakMap.has(endpoint)) {
    weakMap.set(endpoint, weakMap.get(endpoint) + 1);
    if (weakMap.get(endpoint) >= 5) throw Error('Endpoint load is high');
  } else {
    weakMap.set(endpoint, 1);
  }
}
