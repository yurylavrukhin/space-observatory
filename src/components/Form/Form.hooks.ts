import { useState, useRef, useEffect, useCallback, FormEvent } from 'react';
import { authService } from '../../util/authService';
import { EmailValidityType, PasswordValidityType } from './Form.types';
import {
  EMAIL_INVALIDITY_TYPES,
  PASSWORD_INVALIDITY_TYPES,
} from './Form.utils';

const BOT_SHIELD_SLEEP_TIME = 400;

const SHAKE_CONFIG: KeyframeAnimationOptions = {
  duration: 1000,
  easing: 'ease',
  fill: 'both',
  iterations: 1,
};

const SHAKE_STYLES = [
  {
    transform: 'translate(0)',
    offset: 0,
  },
  {
    transform: 'translate(-20px)',
    offset: 0.2,
  },
  {
    transform: 'translate(20px)',
    offset: 0.4,
  },
  {
    transform: 'translate(-14px)',
    offset: 0.6,
  },
  {
    transform: 'translate(14px)',
    offset: 0.8,
  },
  {
    transform: 'translate(0)',
    offset: 1,
  },
];

export const useFormValidation = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [emailValidity, setEmailValidity] = useState<EmailValidityType>({
    isInvalid: false,
  });
  const [passwordValidity, setPasswordValidity] =
    useState<PasswordValidityType>({
      isInvalid: false,
    });

  const [isShaking, setIsShaking] = useState(false);

  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const signInFormRef = useRef<HTMLElement>(null);

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

          if (!signInFormRef.current) {
            return;
          }

          const { finished } = signInFormRef.current.animate(
            SHAKE_STYLES,
            SHAKE_CONFIG
          );

          await finished;
          setIsSubmitting(false);
          setEmailValidity({ isInvalid: true, invalidityType });
          return;
        }
      }

      for (const invalidityType of PASSWORD_INVALIDITY_TYPES) {
        const isInvalid = passwordInputRef.current?.validity[invalidityType];
        if (isInvalid) {
          await minimumWaitPromise;

          if (!signInFormRef.current) {
            return;
          }

          const { finished } = signInFormRef.current.animate(
            SHAKE_STYLES,
            SHAKE_CONFIG
          );

          setIsSubmitting(false);

          await finished;
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

  useEffect(() => {
    if (!signInFormRef.current) {
      return;
    }

    signInFormRef.current.addEventListener('animationend', () => {
      //   setIsShaking(false);
    });
  }, []);

  const hasValidationErrors =
    emailValidity.isInvalid || passwordValidity.isInvalid;

  useEffect(() => {
    if (!signInFormRef.current) {
      return;
    }
    if (hasValidationErrors) {
      //   setIsShaking(true);
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
  };
};
