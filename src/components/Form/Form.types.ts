export interface EmailValidityType {
  isInvalid: boolean;
  invalidityType?: keyof Pick<
    ValidityState,
    'valueMissing' | 'typeMismatch' | 'patternMismatch'
  >;
}

export interface PasswordValidityType {
  isInvalid: boolean;
  invalidityType?: keyof Pick<ValidityState, 'valueMissing'>;
}
