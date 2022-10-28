import { HTMLProps } from 'react';
import { useRainbow } from '../../hooks/useRainbow.hooks';
import { visuallyHidden } from '../../index.css';
import { button } from './SubmitButton.css';

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  children: React.ReactNode;
}

const TRANSITION_DELAY = 1000;

const SubmitButton: React.FC<ButtonProps> = (props) => {
  const colors = useRainbow();
  const colorKeys = Object.keys(colors);

  return (
    <>
      <p className={visuallyHidden} id='submit-button-label'>
        Submit
      </p>
      <button
        tabIndex={3}
        aria-labelledby='submit-button-label'
        role='button'
        type='submit'
        disabled={props.disabled}
        style={{
          ...colors,
          transition: `
                    ${colorKeys[0]} ${TRANSITION_DELAY}ms linear,
                    ${colorKeys[1]} ${TRANSITION_DELAY}ms linear,
                    ${colorKeys[2]} ${TRANSITION_DELAY}ms linear
                  `,
          background: `
                    radial-gradient(
                      circle at top left,
                      var(${colorKeys[2]}),
                      var(${colorKeys[1]}),
                      var(${colorKeys[0]})
                    )
                  `,
        }}
        className={button}
      >
        {props.children}
      </button>
    </>
  );
};
export default SubmitButton;
