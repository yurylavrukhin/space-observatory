import { useState, useRef, useEffect, useCallback, FormEvent } from 'react';
import { authService } from '../../util/authService';
import { EmailValidity, PasswordValidity } from './Form.types';
import {
  EMAIL_INVALIDITY_TYPES,
  PASSWORD_INVALIDITY_TYPES,
} from './Form.utils';

const BOT_SHIELD_SLEEP_TIME = 400;

export const useFormValidation = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [emailValidity, setEmailValidity] = useState<EmailValidity>({
    isInvalid: false,
  });

  const [passwordValidity, setPasswordValidity] = useState<PasswordValidity>({
    isInvalid: false,
  });

  const [isEmailInvalid, setIsEmailInvalid] = useState(false);
  const [isPasswordInvalid, setIsPasswordInvalid] = useState(false);

  const [isShaking, setIsShaking] = useState(false);

  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const signInFormRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (!emailInputRef.current) {
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
      const minimumWaitPromise = new Promise((resolve) =>
        setTimeout(resolve, BOT_SHIELD_SLEEP_TIME)
      );

      for (const invalidityType of EMAIL_INVALIDITY_TYPES) {
        const isInvalid = emailInputRef.current?.validity[invalidityType];
        if (isInvalid) {
          await minimumWaitPromise;

          setIsShaking(true);
          setIsSubmitting(false);
          setEmailValidity({ isInvalid: true, invalidityType });
          return;
        }
      }

      for (const invalidityType of PASSWORD_INVALIDITY_TYPES) {
        const isInvalid = passwordInputRef.current?.validity[invalidityType];
        if (isInvalid) {
          await minimumWaitPromise;

          setIsShaking(true);
          setIsSubmitting(false);
          setPasswordValidity({ isInvalid: true, invalidityType });
          return;
        }
      }

      try {
        const isAuthorised = await authService.authorize(email, password);
        if (!isAuthorised) {
          setPasswordValidity({
            isInvalid: true,
            invalidityType: undefined,
          });
        }
      } finally {
        setIsSubmitting(false);
      }

      alert(
        JSON.stringify(
          {
            email,
            password,
          },
          null,
          2
        )
      );
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
    if (!emailValidity.isInvalid) {
      setIsEmailInvalid(false);
    }

    if (!passwordValidity.isInvalid) {
      setIsPasswordInvalid(false);
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

  const hasValidationErrors =
    emailValidity.isInvalid || passwordValidity.isInvalid;

  useEffect(() => {
    if (hasValidationErrors) {
      setIsShaking(true);
    }
  }, [hasValidationErrors]);

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
    isSuccess,
    setPasswordValidity,
    isEmailInvalid,
    isPasswordInvalid,
  };
};

export const useFormReveal = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;
  const [areInputsDisabled, setAreInputsDisabled] = useState(
    isReducedMotion ? false : true
  );

  const handleFormReveal = useCallback(() => {
    setAreInputsDisabled(false);
  }, []);

  useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    containerRef.current.addEventListener('animationend', handleFormReveal);

    return () => {
      if (!containerRef.current) {
        return;
      }

      containerRef.current.removeEventListener(
        'animationend',
        handleFormReveal
      );
    };
  }, []);

  return {
    areInputsDisabled,
    containerRef,
  };
};
