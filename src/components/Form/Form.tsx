import { useEffect, useMemo } from 'react';
import { useRainbow } from '../../hooks/useRainbow.hooks';
import { useFormReveal, useFormValidation } from './Form.hooks';
import { EMAIL_ERRORS, PASSWORD_ERROR } from './Form.utils';
import {
  contactUs,
  contactUsLink,
  gradient1,
  gradient1Container,
  pane,
  signIn,
  container,
  signInForm,
  signInFormContainer,
  isShakingMove,
  heading,
  labelText,
  gradient2,
  gradient2Container,
  submitButton,
  footer,
  privacy,
  error,
  errorVisible,
  input,
  label,
  emailContainer,
  fieldset,
  gradient1Error,
  gradient2Error,
  author,
  passwordContainer,
  warningIconContainer,
} from './Form.css';
import { visuallyHidden } from '../../index.css';
import { Spinner } from '../Spinner/Spinner';
import { ErrorIcon } from '../Icons/ErrorIcon/ErrorIcon';

const TRANSITION_DELAY = 1000;

export const Form = () => {
  const {
    isSubmitting,
    isShaking,

    emailValidity,
    passwordValidity,
    emailInputRef,
    passwordInputRef,
    signInFormRef,

    setEmailValidity,
    setPassword,
    setEmail,

    handleSubmit,

    hasValidationErrors,
    isSuccess,
    setPasswordValidity,

    isEmailInvalid,
    isPasswordInvalid,
  } = useFormValidation();

  const { containerRef, areInputsDisabled } = useFormReveal();

  useEffect(() => {
    if (!areInputsDisabled && emailInputRef.current) {
      emailInputRef.current.focus();
    }
  }, [areInputsDisabled]);

  const colors = useRainbow();
  const colorKeys = Object.keys(colors);

  const emailErrorMessage = useMemo(() => {
    if (!emailValidity.invalidityType) {
      return '';
    }
    return EMAIL_ERRORS[emailValidity.invalidityType];
  }, [emailValidity.invalidityType]);

  return (
    <>
      <div className={container} ref={containerRef}>
        <div className={contactUs}>
          <a tabIndex={4} className={contactUsLink} href='#'>
            Contact us
          </a>
        </div>

        <main className={signIn}>
          <div className={signInFormContainer}>
            <div className={gradient1Container}>
              <div
                className={`${gradient1} ${
                  hasValidationErrors ? gradient1Error : ''
                }`}
              ></div>
            </div>
            <div className={gradient2Container}>
              <div
                className={`${gradient2} ${
                  hasValidationErrors ? gradient2Error : ''
                }`}
              ></div>
            </div>
            <form
              ref={signInFormRef}
              aria-busy={isSubmitting}
              noValidate
              className={`${isShaking ? isShakingMove : ''} ${signInForm}`}
              onSubmit={handleSubmit}
            >
              {hasValidationErrors && (
                <p role='alert' className={visuallyHidden}>
                  Sign in form couldn't be submitted because of validation error
                </p>
              )}
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
                      onChange={(event) => {
                        setEmailValidity({
                          isInvalid: false,
                          invalidityType: undefined,
                        });
                        setEmail(event.target.value);
                      }}
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
                      className={`${error} ${
                        isEmailInvalid ? errorVisible : ''
                      }`}
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
                      onChange={(event) => {
                        setPasswordValidity({
                          isInvalid: false,
                          invalidityType: undefined,
                        });
                        setPassword(event.target.value);
                      }}
                      className={input}
                      type='password'
                      autoComplete='current-password'
                      spellCheck='false'
                      autoCapitalize='off'
                    />
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 5,
                        color: '#ff6969',
                      }}
                      className={`${error} ${
                        isPasswordInvalid ? errorVisible : ''
                      }`}
                    >
                      <div
                        style={{
                          width: 20,
                          height: 20,
                          display: 'flex',
                          alignItems: 'center',
                        }}
                      >
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

              <p className={visuallyHidden} id='submit-button-label'>
                Submit
              </p>
              <button
                tabIndex={3}
                aria-describedby=''
                aria-labelledby='submit-button-label'
                role='button'
                type='submit'
                disabled={isSubmitting || areInputsDisabled}
                style={{
                  ...colors,
                  // Use the keys to set the same transition on all props.
                  transition: `
                    ${colorKeys[0]} ${TRANSITION_DELAY}ms linear,
                    ${colorKeys[1]} ${TRANSITION_DELAY}ms linear,
                    ${colorKeys[2]} ${TRANSITION_DELAY}ms linear
                  `,
                  // Use those property values in our gradient.
                  // Values go from 2 to 0 so that colors radiate
                  // outwards from the top-left circle, not inwards.
                  background: `
                    radial-gradient(
                      circle at top left,
                      var(${colorKeys[2]}),
                      var(${colorKeys[1]}),
                      var(${colorKeys[0]})
                    )
                  `,
                }}
                className={submitButton}
              >
                {isSubmitting ? <Spinner /> : 'Continue'}
              </button>
            </form>
          </div>
        </main>

        <footer className={footer}>
          <span className={author}>2022 Yury Lavrukhin</span>

          <a tabIndex={5} className={privacy} href='#'>
            Privacy & Terms
          </a>
        </footer>
      </div>
    </>
  );
};
