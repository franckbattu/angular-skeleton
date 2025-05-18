import { FormControl, FormGroup } from '@angular/forms';
import { beforeEach, describe, expect, it } from 'vitest';
import {
  minHeightCharactersLengthValidator,
  minOneDigitValidator,
  minOneLowerCaseCharacterValidator,
  minOneUpperCaseCharacterValidator,
  passwordsMustMatch,
} from './form-validators';

describe('Form Validators', () => {
  describe('minHeightCharactersLengthValidator', () => {
    const validPasswords = ['Abcd1234!', 'A1b2C3d4E5!'];
    const invalidPasswords = ['', 'abc', '1234567', 'abcdefg'];

    it('should return null for valid passwords', () => {
      validPasswords.forEach((password) => {
        const control = new FormControl(password);
        const result = minHeightCharactersLengthValidator(control);
        expect(result).toBeNull();
      });
    });

    it('should return error object for invalid passwords', () => {
      invalidPasswords.forEach((password) => {
        const control = new FormControl(password);
        const result = minHeightCharactersLengthValidator(control);
        expect(result).toEqual({ minHeightCharactersLength: true });
      });
    });
  });

  describe('minOneUpperCaseCharacterValidator', () => {
    const validPasswords = ['Abcd1234!', 'A1b2C3d4E5!'];
    const invalidPasswords = ['', 'abc', '1234567', 'abcdefg'];

    it('should return null for valid passwords', () => {
      validPasswords.forEach((password) => {
        const control = new FormControl(password);
        const result = minOneUpperCaseCharacterValidator(control);
        expect(result).toBeNull();
      });
    });

    it('should return error object for invalid passwords', () => {
      invalidPasswords.forEach((password) => {
        const control = new FormControl(password);
        const result = minOneUpperCaseCharacterValidator(control);
        expect(result).toEqual({ minOneUpperCaseCharacter: true });
      });
    });
  });

  describe('minOneLowerCaseCharacterValidator', () => {
    const validPasswords = ['Abcd1234!', 'A1b2C3d4E5!'];
    const invalidPasswords = ['', 'ABC', '1234567', 'ABC123!'];

    it('should return null for valid passwords', () => {
      validPasswords.forEach((password) => {
        const control = new FormControl(password);
        const result = minOneLowerCaseCharacterValidator(control);
        expect(result).toBeNull();
      });
    });

    it('should return error object for invalid passwords', () => {
      invalidPasswords.forEach((password) => {
        const control = new FormControl(password);
        const result = minOneLowerCaseCharacterValidator(control);
        expect(result).toEqual({ minOneLowerCaseCharacter: true });
      });
    });
  });

  describe('minOneDigitValidator', () => {
    const validPasswords = ['Abc1', 'Abcd1234!', 'A1b2C3d4E5!'];
    const invalidPasswords = ['', 'abc', 'abcdefg'];

    it('should return null for valid passwords', () => {
      validPasswords.forEach((password) => {
        const control = new FormControl(password);
        const result = minOneDigitValidator(control);
        expect(result).toBeNull();
      });
    });

    it('should return error object for invalid passwords', () => {
      invalidPasswords.forEach((password) => {
        const control = new FormControl(password);
        const result = minOneDigitValidator(control);
        expect(result).toEqual({ minOneDigit: true });
      });
    });
  });

  describe('Passwords must match validator', () => {
    let form: FormGroup;

    beforeEach(() => {
      form = new FormGroup({
        password: new FormControl<string>(''),
        passwordConfirmation: new FormControl<string>(''),
      });
    });

    it('should not return error, when passwords match', () => {
      form.get('password')?.setValue('Password123!');
      form.get('passwordConfirmation')?.setValue('Password123!');

      passwordsMustMatch('password', 'passwordConfirmation')(form);

      expect(form.get('passwordConfirmation')?.hasError('passwordsMustMatch')).toEqual(false);
    });

    it("should return error, when passwords don't match", () => {
      form.get('password')?.setValue('Password123!');
      form.get('passwordConfirmation')?.setValue('Password123');

      passwordsMustMatch('password', 'passwordConfirmation')(form);

      expect(form.get('passwordConfirmation')?.hasError('passwordsMustMatch')).toEqual(true);
    });
  });
});
