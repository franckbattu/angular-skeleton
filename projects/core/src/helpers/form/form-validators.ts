import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';
import {
  MIN_HEIGHT_CHARACTERS_PATTERN,
  MIN_ONE_DIGIT_PATTERN,
  MIN_ONE_LOWER_CASE_CHARACTER_PATTERN,
  MIN_ONE_UPPER_CASE_CHARACTER_PATTERN,
} from './form-regex';

export function minHeightCharactersLengthValidator(control: AbstractControl): ValidationErrors | null {
  const password = control.value as string;
  return password && (!password.length || MIN_HEIGHT_CHARACTERS_PATTERN.exec(password))
    ? null
    : { minHeightCharactersLength: true };
}

export function minOneUpperCaseCharacterValidator(control: AbstractControl): ValidationErrors | null {
  const password = control.value as string;

  return password && (!password.length || MIN_ONE_UPPER_CASE_CHARACTER_PATTERN.exec(password))
    ? null
    : { minOneUpperCaseCharacter: true };
}

export function minOneLowerCaseCharacterValidator(control: AbstractControl): ValidationErrors | null {
  const password = control.value as string;

  return password && (!password.length || MIN_ONE_LOWER_CASE_CHARACTER_PATTERN.exec(password))
    ? null
    : { minOneLowerCaseCharacter: true };
}

export function minOneDigitValidator(control: AbstractControl): ValidationErrors | null {
  const password = control.value as string;

  return password && (!password.length || MIN_ONE_DIGIT_PATTERN.exec(password)) ? null : { minOneDigit: true };
}

export function passwordsMustMatch(password: string, passwordConfirmation: string): (formGroup: FormGroup) => void {
  const validator = (formGroup: FormGroup) =>
    controlsMustMatch(formGroup, password, passwordConfirmation, 'passwordsMustMatch');

  return validator;
}

export const passwordValidators = [
  minHeightCharactersLengthValidator,
  minOneUpperCaseCharacterValidator,
  minOneLowerCaseCharacterValidator,
  minOneDigitValidator,
];

export function controlsMustMatch(
  formGroup: FormGroup,
  firstControlName: string,
  secondControlName: string,
  errorName: string,
): void {
  const firstControl = formGroup.controls[firstControlName];
  const secondControl = formGroup.controls[secondControlName];

  if (secondControl.errors && !secondControl.errors[errorName]) {
    return;
  }

  const shouldSetError = firstControl.value !== secondControl.value;
  secondControl.setErrors(shouldSetError ? { [errorName]: true } : null);
}
