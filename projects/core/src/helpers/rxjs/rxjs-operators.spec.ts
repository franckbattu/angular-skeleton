import { Observable, of } from 'rxjs';
import { filterNullish, isNotNullable, isNotUndefined } from './rxjs-operators';
import { describe, expect, it } from 'vitest';

describe('RxJS operators', () => {
  describe('filterNullish', () => {
    it('should return correct type if observable is not undefined', () => {
      const obs: Observable<string | undefined> = of('test');
      let res!: string;
      obs.pipe(filterNullish()).subscribe((data) => (res = data));
      expect(res).toBeTypeOf('string');
    });

    it('should not emit value if observable is undefined', () => {
      const obs: Observable<string | undefined> = of(undefined);
      let res: string;
      obs.pipe(filterNullish()).subscribe((data) => (res = data));
      expect(res!).toBeUndefined();
    });

    it('should not emit value if observable is null', () => {
      const obs: Observable<string | null> = of(null);
      let res: string;
      obs.pipe(filterNullish()).subscribe((data) => (res = data));
      expect(res!).toBeUndefined();
    });
  });

  describe('isNotUndefined', () => {
    it('should return false for "undefined" value', () => {
      expect(isNotUndefined(undefined)).toBe(false);
    });

    it('should return true for "null" value', () => {
      expect(isNotUndefined(null)).toBe(true);
    });

    it('should return true for falsy string', () => {
      expect(isNotUndefined('')).toBe(true);
    });

    it('should return true for falsy number', () => {
      expect(isNotUndefined(0)).toBe(true);
    });

    it('should return true for objects', () => {
      expect(isNotUndefined({ property: 'value' })).toBe(true);
    });

    it('should return true for false value', () => {
      expect(isNotUndefined(false)).toBe(true);
    });
  });

  describe('isNotNullable', () => {
    it('should return false for "undefined" value', () => {
      expect(isNotNullable(undefined)).toBe(false);
    });

    it('should return false for "null" value', () => {
      expect(isNotNullable(null)).toBe(false);
    });

    it('should return true for falsy string', () => {
      expect(isNotNullable('')).toBe(true);
    });

    it('should return true for falsy number', () => {
      expect(isNotNullable(0)).toBe(true);
    });

    it('should return true for objects', () => {
      expect(isNotNullable({ property: 'value' })).toBe(true);
    });

    it('should return true for false value', () => {
      expect(isNotNullable(false)).toBe(true);
    });
  });
});
