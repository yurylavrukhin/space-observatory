import { useRef, useState, useCallback, useEffect } from 'react';

export const useFormReveal = ({
  emailInputRef,
}: {
  emailInputRef: React.RefObject<HTMLInputElement>;
}) => {
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

  useEffect(() => {
    if (!areInputsDisabled && emailInputRef.current) {
      emailInputRef.current.focus();
    }
  }, [areInputsDisabled]);

  return {
    areInputsDisabled,
    containerRef,
  };
};
