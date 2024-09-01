import { Observable, of } from 'rxjs';
import { filterNullish, isNotNullable, isNotUndefined } from './rxjs-operators';

describe('RxJS operators', () => {
  describe('filterNullish', () => {
    it('should return correct type if observable is not undefined', () => {
      const obs: Observable<string | undefined> = of('test');
      let res: string;
      obs.pipe(filterNullish()).subscribe((data) => (res = data));
      expect(res!).toBeInstanceOf(String);
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
      expect(isNotUndefined(undefined)).toBeFalse();
    });

    it('should return true for "null" value', () => {
      expect(isNotUndefined(null)).toBeTrue();
    });

    it('should return true for falsy string', () => {
      expect(isNotUndefined('')).toBeTrue();
    });

    it('should return true for falsy number', () => {
      expect(isNotUndefined(0)).toBeTrue();
    });

    it('should return true for objects', () => {
      expect(isNotUndefined({ property: 'value' })).toBeTrue();
    });

    it('should return true for false value', () => {
      expect(isNotUndefined(false)).toBeTrue();
    });
  });

  describe('isNotNullable', () => {
    it('should return false for "undefined" value', () => {
      expect(isNotNullable(undefined)).toBeFalse();
    });

    it('should return false for "null" value', () => {
      expect(isNotNullable(null)).toBeFalse();
    });

    it('should return true for falsy string', () => {
      expect(isNotNullable('')).toBeTrue();
    });

    it('should return true for falsy number', () => {
      expect(isNotNullable(0)).toBeTrue();
    });

    it('should return true for objects', () => {
      expect(isNotNullable({ property: 'value' })).toBeTrue();
    });

    it('should return true for false value', () => {
      expect(isNotNullable(false)).toBeTrue();
    });
  });
});
