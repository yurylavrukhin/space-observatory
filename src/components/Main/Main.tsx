import { useRef } from 'react';
import { Form } from '../Form/Form';
import {
  footer,
  author,
  privacy,
  contactUsLink,
  contactUs,
  container,
  signIn,
} from './Main.css';
import { useFormReveal } from './Main.hooks';

export const Main = () => {
  const emailInputRef = useRef<HTMLInputElement>(null);
  const { containerRef, areInputsDisabled } = useFormReveal({ emailInputRef });

  return (
    <div className={container} ref={containerRef}>
      <div className={contactUs}>
        <a
          tabIndex={4}
          className={contactUsLink}
          href='#'
          aria-label='contact us via email'
        >
          Contact us
        </a>
      </div>

      <main className={signIn}>
        <Form areInputsDisabled={areInputsDisabled} ref={emailInputRef} />
      </main>

      <footer className={footer}>
        <span className={author}>2022 Yury Lavrukhin</span>

        <a tabIndex={5} className={privacy} href='#'>
          Privacy & Terms
        </a>
      </footer>
    </div>
  );
};
