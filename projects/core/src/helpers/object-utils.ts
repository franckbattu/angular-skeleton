/**
 * Checks if the given object is empty.
 *
 * An object is considered empty if:
 * - It is not null or undefined.
 * - It is of type 'object'.
 * - It has no own enumerable properties.
 * - It is a plain object created using an object literal or `Object` constructor.
 *
 * @param obj - The object to be checked.
 * @returns `true` if the object is empty, `false` otherwise.
 */
export function isObjectEmpty(obj: unknown): boolean {
  // Check if obj is an object and not null
  if (typeof obj !== 'object' || obj == null) {
    return false;
  }

  // Check if obj is a plain object
  if (Object.prototype.toString.call(obj) !== '[object Object]') {
    return false;
  }

  // Check if obj has any own enumerable properties
  return Object.keys(obj as Record<string, unknown>).length === 0;
}
