import { memo } from 'react';
import { visuallyHidden } from '../../index.css';
import { logo, letter } from './Logo.css';

const LOGO_TEXT = 'Celestia';

const Logo = () => {
  return (
    <header className={logo}>
      <h1>
        {[...LOGO_TEXT].map((char, index) => {
          return (
            <span
              aria-hidden={true}
              key={`${index}-first-word-logo-letter`}
              className={letter}
              style={{ display: 'inline-block' }}
            >
              {char}
            </span>
          );
        })}
        <span className={visuallyHidden}>Celestia, Space Observatory</span>
      </h1>
    </header>
  );
};

export default memo(Logo);
