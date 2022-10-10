export const EMAIL_ERRORS: {
  [key in keyof Pick<
    ValidityState,
    'valueMissing' | 'typeMismatch' | 'patternMismatch'
  >]?: string;
} = {
  valueMissing: 'Please enter your email',
  typeMismatch: 'Invalid email address',
  patternMismatch: 'Invalid email address',
};

export const PASSWORD_ERROR = 'incorrect email or password';

export const PASSWORD_ERRORS: {
  [key in keyof Pick<ValidityState, 'valueMissing'>]?: string;
} = {
  valueMissing: PASSWORD_ERROR,
};

export const EMAIL_INVALIDITY_TYPES = Object.keys(EMAIL_ERRORS) as Array<
  keyof Pick<ValidityState, 'valueMissing' | 'typeMismatch' | 'patternMismatch'>
>;

export const PASSWORD_INVALIDITY_TYPES = Object.keys(PASSWORD_ERRORS) as Array<
  keyof Pick<ValidityState, 'valueMissing'>
>;
