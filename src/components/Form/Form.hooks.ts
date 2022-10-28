import { useState, useRef, useEffect, useCallback, FormEvent } from 'react';
import { authService } from '../../util/authService';
import { sleep } from '../../util/sleep';
import { EmailValidity, PasswordValidity } from './Form.types';
import {
  EMAIL_INVALIDITY_TYPES,
  PASSWORD_INVALIDITY_TYPES,
} from './Form.utils';

const VIRTUAL_SUBMIT_DURATION = 400;

const getVirtualSubmitPromise = () =>
  new Promise((resolve) => setTimeout(resolve, VIRTUAL_SUBMIT_DURATION));

export const useFormValidation = ({
  emailInputRef,
}: {
  emailInputRef: React.ForwardedRef<HTMLInputElement>;
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [emailValidity, setEmailValidity] = useState<EmailValidity>({
    isInvalid: false,
  });
  const [passwordValidity, setPasswordValidity] = useState<PasswordValidity>({
    isInvalid: false,
  });

  const hasValidationErrors =
    emailValidity.isInvalid || passwordValidity.isInvalid;

  const [isEmailInvalid, setIsEmailInvalid] = useState(false);
  const [isPasswordInvalid, setIsPasswordInvalid] = useState(false);

  const [isShaking, setIsShaking] = useState(false);

  const passwordInputRef = useRef<HTMLInputElement>(null);
  const signInFormRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (typeof emailInputRef === 'function' || !emailInputRef?.current) {
      return;
    }

    if (!isSubmitting && emailValidity.isInvalid) {
      emailInputRef.current.focus();
    }
  }, [isSubmitting, emailValidity.isInvalid]);

  useEffect(() => {
    if (!passwordInputRef.current) {
      return;
    }

    if (!isSubmitting && passwordValidity.isInvalid) {
      passwordInputRef.current.focus();
    }
  }, [isSubmitting, passwordValidity.isInvalid]);

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setIsSubmitting(true);
      if (typeof emailInputRef === 'function' || !emailInputRef?.current) {
        return;
      }

      for (const invalidityType of EMAIL_INVALIDITY_TYPES) {
        const isInvalid = emailInputRef.current?.validity[invalidityType];
        if (isInvalid) {
          await getVirtualSubmitPromise();

          setIsShaking(true);
          setIsSubmitting(false);
          setEmailValidity({ isInvalid: true, invalidityType });
          return;
        }
      }

      for (const invalidityType of PASSWORD_INVALIDITY_TYPES) {
        const isInvalid = passwordInputRef.current?.validity[invalidityType];
        if (isInvalid) {
          await getVirtualSubmitPromise();

          setIsShaking(true);
          setIsSubmitting(false);
          setPasswordValidity({ isInvalid: true, invalidityType });
          return;
        }
      }

      try {
        const isAuthorised = await authService.authorize(email, password);
        if (!isAuthorised) {
          setIsShaking(true);
          setPasswordValidity({
            isInvalid: true,
            invalidityType: 'valueIncorrect',
          });
        } else {
          alert('Welcome!');
          // successful sign in
        }
      } finally {
        setIsSubmitting(false);
      }
    },
    [email, password]
  );

  useEffect(() => {
    if (emailValidity.isInvalid) {
      setPasswordValidity({
        isInvalid: false,
        invalidityType: undefined,
      });
    }
  }, [emailValidity.isInvalid]);

  useEffect(() => {
    if (!emailValidity.isInvalid) {
      setIsEmailInvalid(false);
    }

    if (!passwordValidity.isInvalid) {
      setIsPasswordInvalid(false);
    }
  }, [passwordValidity.isInvalid, emailValidity.isInvalid]);

  const resetShakingState = useCallback(() => {
    setIsShaking(false);
    if (emailValidity.isInvalid) {
      setIsEmailInvalid(true);
    }

    if (passwordValidity.isInvalid) {
      setIsPasswordInvalid(true);
    }
  }, [passwordValidity.isInvalid, emailValidity.isInvalid]);

  useEffect(() => {
    signInFormRef.current?.addEventListener('animationend', resetShakingState);

    return () => {
      signInFormRef.current?.removeEventListener(
        'animationend',
        resetShakingState
      );
    };
  }, [resetShakingState]);

  useEffect(() => {
    if (hasValidationErrors) {
      setIsShaking(true);
    }
  }, [hasValidationErrors]);

  const handleEmailChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setEmailValidity({
        isInvalid: false,
        invalidityType: undefined,
      });
      setEmail(event.target.value);
    },
    []
  );

  const handlePasswordChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setPasswordValidity({
        isInvalid: false,
        invalidityType: undefined,
      });
      setPassword(event.target.value);
    },
    []
  );

  return {
    isSubmitting,
    emailValidity,
    passwordValidity,
    emailInputRef,
    passwordInputRef,
    isShaking,
    signInFormRef,
    setEmailValidity,
    setEmail,
    setPassword,
    handleSubmit,
    hasValidationErrors,
    setPasswordValidity,
    isEmailInvalid,
    isPasswordInvalid,
    handleEmailChange,
    handlePasswordChange,
  };
};
