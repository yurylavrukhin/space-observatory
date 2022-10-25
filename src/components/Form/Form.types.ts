export interface EmailValidity {
  isInvalid: boolean;
  invalidityType?: keyof Pick<
    ValidityState,
    'valueMissing' | 'typeMismatch' | 'patternMismatch'
  >;
}

export interface PasswordValidity {
  isInvalid: boolean;
  invalidityType?: keyof Pick<ValidityState, 'valueMissing'>;
}
