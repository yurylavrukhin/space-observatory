import { forwardRef, useMemo } from 'react';
import { useFormValidation } from './Form.hooks';
import { EMAIL_ERRORS, PASSWORD_ERROR } from './Form.utils';
import {
  gradient1,
  gradient1Container,
  signInForm,
  container,
  isFormShaking,
  heading,
  labelText,
  gradient2,
  gradient2Container,
  error,
  errorVisible,
  input,
  label,
  emailContainer,
  fieldset,
  gradient1Error,
  gradient2Error,
  passwordContainer,
  warningIconContainer,
} from './Form.css';
import { visuallyHidden } from '../../index.css';
import Spinner from '../Spinner/Spinner';
import ErrorIcon from '../Icons/ErrorIcon/ErrorIcon';
import SubmitButton from '../SubmitButton/SubmitButton';

interface FormProps {
  areInputsDisabled: boolean;
}

export const Form = forwardRef<HTMLInputElement, FormProps>(
  ({ areInputsDisabled }, emailInputRef) => {
    const {
      isSubmitting,
      isShaking,

      emailValidity,
      passwordValidity,

      passwordInputRef,
      signInFormRef,

      isEmailInvalid,
      isPasswordInvalid,

      hasValidationErrors,

      handleSubmit,
      handleEmailChange,
      handlePasswordChange,
    } = useFormValidation({ emailInputRef });

    const emailErrorMessage = useMemo(() => {
      if (!emailValidity.invalidityType) {
        return '';
      }

      return EMAIL_ERRORS[emailValidity.invalidityType];
    }, [emailValidity.invalidityType]);

    return (
      <div className={container}>
        <div className={gradient1Container}>
          <div
            className={`${gradient1} ${
              hasValidationErrors ? gradient1Error : ''
            }`}
          />
        </div>
        <div className={gradient2Container}>
          <div
            className={`${gradient2} ${
              hasValidationErrors ? gradient2Error : ''
            }`}
          />
        </div>

        <form
          ref={signInFormRef}
          aria-busy={isSubmitting}
          noValidate
          className={`${isShaking ? isFormShaking : ''} ${signInForm}`}
          onSubmit={handleSubmit}
        >
          {isSubmitting && (
            <p role='status' className={visuallyHidden}>
              Loading
            </p>
          )}

          <h2 className={heading}>Sign In</h2>

          <fieldset disabled={isSubmitting} className={fieldset}>
            <div className={emailContainer}>
              <label htmlFor='email' className={label}>
                <span className={labelText}>Email</span>

                <input
                  tabIndex={1}
                  aria-describedby='email-description'
                  disabled={areInputsDisabled}
                  pattern='^\S+@\S+\.\S+$'
                  aria-invalid={emailValidity.isInvalid ? true : false}
                  id='email'
                  name='email'
                  placeholder=''
                  onChange={handleEmailChange}
                  required
                  aria-required={true}
                  ref={emailInputRef}
                  autoCapitalize='none'
                  autoComplete='email'
                  spellCheck={false}
                  autoFocus
                  className={input}
                  type='email'
                />
                <div
                  className={`${error} ${isEmailInvalid ? errorVisible : ''}`}
                >
                  <div className={warningIconContainer}>
                    <ErrorIcon />
                  </div>
                  {emailValidity.isInvalid && emailValidity.invalidityType && (
                    <span
                      id='email-description'
                      role='region'
                      aria-live='assertive'
                    >
                      {emailErrorMessage}
                    </span>
                  )}
                </div>
              </label>
            </div>

            <div className={passwordContainer}>
              <label htmlFor='password' className={label}>
                <span className={labelText}>Password</span>

                <input
                  tabIndex={2}
                  id='password'
                  aria-describedby='password-description'
                  disabled={areInputsDisabled}
                  ref={passwordInputRef}
                  required
                  onChange={handlePasswordChange}
                  className={input}
                  type='password'
                  autoComplete='current-password'
                  spellCheck='false'
                  autoCapitalize='off'
                />
                <div
                  className={`${error} ${
                    isPasswordInvalid ? errorVisible : ''
                  }`}
                >
                  <div className={warningIconContainer}>
                    <ErrorIcon />
                  </div>
                  {!emailValidity.isInvalid && passwordValidity.isInvalid && (
                    <span
                      id='password-description'
                      role='status'
                      aria-live='assertive'
                    >
                      {PASSWORD_ERROR}
                    </span>
                  )}
                </div>
              </label>
            </div>
          </fieldset>

          <SubmitButton disabled={isSubmitting || areInputsDisabled}>
            {isSubmitting ? <Spinner /> : 'Continue'}
          </SubmitButton>
        </form>
      </div>
    );
  }
);
