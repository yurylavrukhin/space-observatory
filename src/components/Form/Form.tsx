import { FormEvent, useCallback } from 'react';
import styles from './Form.module.css';

export const Form = () => {
  const handleSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  }, []);

  return (
    <section className={styles.signIn}>
      <div className={styles.signInFormContainer}>
        <form className={styles.signInForm} onSubmit={handleSubmit}>
          <h2 className={styles.signInHeading}>Sign In</h2>

          <div className={styles.signInInputs}>
            <label className={styles.label}>
              <span>Email</span>
              <input type='email' />
            </label>

            <label className={styles.label}>
              <span>Password</span>
              <input type='password' />
            </label>
          </div>

          <button>Sign In</button>
        </form>
        <div className={styles.footer}>
          <a href='#'>privacy</a>
          <a href='#'>terms</a>
        </div>
      </div>
    </section>
  );
};
