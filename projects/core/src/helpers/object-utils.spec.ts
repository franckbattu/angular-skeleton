/* eslint-disable @typescript-eslint/no-empty-function */
import { describe, expect, it } from 'vitest';
import { isObjectEmpty } from './object-utils';

describe('isObjectEmpty', () => {
  it('should return true for an empty plain object', () => {
    const obj = {};
    expect(isObjectEmpty(obj)).toBe(true);
  });

  it('should return false for a non-empty plain object', () => {
    const obj = { key: 'value' };
    expect(isObjectEmpty(obj)).toBe(false);
  });

  it('should return false for an array', () => {
    const obj: unknown = [];
    expect(isObjectEmpty(obj)).toBe(false);
  });

  it('should return false for a function', () => {
    const obj = function () {};
    expect(isObjectEmpty(obj)).toBe(false);
  });

  it('should return false for a Date object', () => {
    const obj = new Date();
    expect(isObjectEmpty(obj)).toBe(false);
  });

  it('should return false for null', () => {
    const obj = null;
    expect(isObjectEmpty(obj)).toBe(false);
  });

  it('should return false for undefined', () => {
    const obj = undefined;
    expect(isObjectEmpty(obj)).toBe(false);
  });
});
