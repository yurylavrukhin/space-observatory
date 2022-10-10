import { memo, useRef } from 'react';
import { useAnimationSequenceQueue } from '../../hooks/useAnimationSequence.hooks';
import { logo, letter } from './Logo.css';

const LOGO_TEXT = 'Celestia';
const BOUNCE_EASING = 'cubic-bezier(0.175, 0.885, 0.32, 1.275)';

const Logo = () => {
  const animationStyles = [
    { transform: 'translate(0, 10px)', opacity: 0 },
    { transform: 'translate(0, 0)', opacity: 1 },
  ];

  const config = {
    fill: 'forwards' as FillMode,
    duration: 350,
    iterations: 1,
    delay: (index: number) => index * 70 + 100,
    easing: BOUNCE_EASING,
  };

  const { animatingElementRef } = useAnimationSequenceQueue<
    (HTMLSpanElement | null)[]
  >({
    name: 'logo-reveal',
    styles: animationStyles,
    config,
    callback: () => {},
  });

  return (
    <header className={logo}>
      <h1>
        <span className='visually-hidden'>Celestia, Space Observatory</span>
        {[...LOGO_TEXT].map((char, index) => {
          return (
            <span
              aria-hidden={true}
              key={`${index}-first-word-logo-letter`}
              className={letter}
              style={{ display: 'inline-block' }}
              ref={(element) => {
                if (!animatingElementRef.current) {
                  return;
                }

                animatingElementRef.current[index] = element;
              }}
            >
              {char}
            </span>
          );
        })}
      </h1>
    </header>
  );
};

const MemoLogo = memo(Logo);

export { MemoLogo as Logo };
