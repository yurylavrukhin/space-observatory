import { useRef, useState, useCallback, useEffect } from 'react';
import { getIsReducedMotion } from '../../util/isReducedMotion';

export const useFormReveal = ({
  emailInputRef,
}: {
  emailInputRef: React.RefObject<HTMLInputElement>;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [areInputsDisabled, setAreInputsDisabled] = useState(
    getIsReducedMotion() ? false : true
  );

  const handleFormReveal = useCallback(() => {
    setAreInputsDisabled(false);
  }, []);

  useEffect(() => {
    containerRef.current?.addEventListener('animationend', handleFormReveal);

    return () => {
      containerRef.current?.removeEventListener(
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
