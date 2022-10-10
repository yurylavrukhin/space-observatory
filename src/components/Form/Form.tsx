import { useState } from 'react';
import { useAnimationSequence } from '../../hooks/useAnimationSequence.hooks';
import { useRainbow } from '../../hooks/useRainbow.hooks';
import { easeInOutQuart } from '../../util/easings';
import { useFormValidation } from './Form.hooks';
import styles from './Form.module.css';
import { EMAIL_ERRORS, PASSWORD_ERROR } from './Form.utils';

const transitionDelay = 1000;

export const Form = () => {
  const [areInputsDisabled, setAreInputsDisabled] = useState(true);

  const focusCallback = () => {
    if (emailInputRef.current) {
      emailInputRef.current.focus();
    }
  };

  const {
    isSubmitting,
    emailValidity,
    passwordValidity,
    emailInputRef,
    passwordInputRef,
    isShaking,
    signInFormRef,
    setEmailValidity,
    setPassword,
    setEmail,
    handleSubmit,
    hasValidationErrors,
    isSuccess,
    setPasswordValidity,
  } = useFormValidation();

  const colors = useRainbow({});
  const colorKeys = Object.keys(colors);

  const { ref: formContainerRef } = useAnimationSequence<HTMLDivElement>({
    name: 'form-reveal',
    styles: [
      { opacity: 0, transform: 'scale(0.95)' },
      { opacity: 1, transform: 'scale(1)' },
    ],
    callback: () => {
      setAreInputsDisabled(false);
      setTimeout(focusCallback, 0);
    },
  });

  const { ref: paneRef } = useAnimationSequence<HTMLDivElement>({
    name: 'pane-reveal',
    styles: [{ transform: 'scaleX(0)' }, { transform: 'scaleX(1)' }],
  });

  return (
    <div className={styles.signInContainer}>
      <div ref={paneRef} className={styles.pane}></div>

      <div className={styles.wrap} ref={formContainerRef}>
        <div className={styles.contactUs}>
          <a className={styles.contactUsLink} href='#'>
            Contact us
          </a>
        </div>

        <main
          ref={signInFormRef}
          className={`${styles.signIn} ${isShaking ? styles.isShaking : ''}`}
        >
          <div className={styles.signInFormWrapper}>
            <div className={styles.signInFormContainer}>
              {/* <div className={styles.gradientContainer}>
                <div
                  className={`${styles.gradient} ${
                    hasValidationErrors ? styles.gradientError : ''
                  }`}
                ></div>
              </div> */}
              <form
                aria-busy={isSubmitting}
                noValidate
                className={styles.signInForm}
                onSubmit={handleSubmit}
              >
                {hasValidationErrors && (
                  <p role='alert' className='visually-hidden'>
                    Sign in form couldn't be submitted because of validation
                    error
                  </p>
                )}
                {isSuccess && (
                  // no success role - because no time for it, we are redirecting
                  <p role='alert'>
                    Successful sign in, redirecting…
                    redirecting…redirecting…redirecting…redirecting…redirecting…redirecting…redirecting…redirecting…redirecting…redirecting…redirecting…redirecting…redirecting…redirecting…redirecting…redirecting…redirecting…redirecting…redirecting…redirecting…redirecting…redirecting…redirecting…redirecting…
                  </p>
                )}
                {isSubmitting && (
                  // no success role - because no time for it, we are redirecting
                  <p role='status' className='visually-hidden'>
                    Loading
                  </p>
                )}
                <h2 className={styles.signInHeading}>Sign In</h2>

                <fieldset
                  disabled={isSubmitting}
                  className={styles.signInInputs}
                >
                  <div className={styles.emailContainer}>
                    <label htmlFor='email' className={styles.label}>
                      <span>Email</span>

                      <input
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
                        className={styles.input}
                        type='email'
                      />
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 5,
                          color: '#ff6969',
                        }}
                        className={`${styles.error} ${
                          emailValidity.isInvalid ? styles.errorVisible : ''
                        }`}
                      >
                        <div
                          style={{
                            width: 20,
                            height: 20,
                            display: 'flex',
                            alignItems: 'center',
                            // flexShrink: 0,
                          }}
                        >
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth={1.5}
                            stroke='currentColor'
                            className='w-6 h-6'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              d='M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z'
                            />
                          </svg>
                        </div>
                        {emailValidity.isInvalid &&
                          emailValidity.invalidityType && (
                            <span
                              id='email-description'
                              role='region'
                              aria-live='assertive'
                            >
                              {EMAIL_ERRORS[emailValidity.invalidityType]}
                              {/* usememo */}
                            </span>
                          )}
                      </div>
                    </label>
                  </div>

                  <label htmlFor='password' className={styles.label}>
                    <span>Password</span>

                    <input
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
                      className={styles.input}
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
                      className={`${styles.error} ${
                        passwordValidity.isInvalid ? styles.errorVisible : ''
                      }`}
                    >
                      <div
                        style={{
                          width: 20,
                          height: 20,
                          display: 'flex',
                          alignItems: 'center',
                          // flexShrink: 0,
                        }}
                      >
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth={1.5}
                          stroke='currentColor'
                          className='w-6 h-6'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z'
                          />
                        </svg>
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
                </fieldset>

                <p className='visually-hidden' id='submit-button-label'>
                  Submit
                </p>
                <button
                  // formNoValidate
                  aria-describedby=''
                  aria-labelledby='submit-button-label'
                  role='button'
                  type='submit'
                  disabled={isSubmitting || areInputsDisabled}
                  style={{
                    ...colors,
                    // Use the keys to set the same transition on all props.
                    transition: `
                    ${colorKeys[0]} ${transitionDelay}ms linear,
                    ${colorKeys[1]} ${transitionDelay}ms linear,
                    ${colorKeys[2]} ${transitionDelay}ms linear
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
                  className={styles.submitButton}
                >
                  {isSubmitting ? (
                    <div className={`${styles.spinner} ${styles.three}`} />
                  ) : (
                    'Sign In'
                  )}
                </button>
              </form>
            </div>
          </div>
        </main>

        <footer className={styles.footer}>
          <span className={styles.copyright}>2022 Yury Lavrukhin</span>

          <a className={styles.link} href='#'>
            Privacy & Terms
          </a>
        </footer>
      </div>
    </div>
  );
};
