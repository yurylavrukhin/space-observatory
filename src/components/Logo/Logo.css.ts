import { createVar, keyframes, style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { colorPrimary, contentPadding } from '../../index.css';

export const logo = style({
  padding: `${contentPadding} 0 0 ${contentPadding}`,
  fontWeight: 600,
  color: colorPrimary,
  position: 'absolute',
  zIndex: 1,
  fontSize: 14,
  lineHeight: 1,
  userSelect: 'none',

  '@media': {
    'screen and (min-width: 650px)': {
      fontSize: 20,
    },
  },
});

const letterAppearFromStyles = {
  transform: 'translate(0, 15px)',
  opacity: 0,
};

const letterAppear = keyframes({
  from: letterAppearFromStyles,
  to: {
    transform: 'translate(0, 0)',
    opacity: 1,
  },
});

const step = '70ms';

const initialDelay = createVar();

export const letter = style({
  vars: {
    [initialDelay]: '4700ms',
  },

  ...letterAppearFromStyles,

  animationName: letterAppear,
  animationDuration: '350ms',
  animationTimingFunction: 'easeOutBack',
  animationFillMode: 'forwards',
  animationDelay: initialDelay,

  selectors: {
    '&:nth-child(1)': {
      animationDelay: calc.add(initialDelay, step),
    },
    '&:nth-child(2)': {
      animationDelay: calc.add(initialDelay, calc.multiply(step, 2)),
    },
    '&:nth-child(3)': {
      animationDelay: calc.add(initialDelay, calc.multiply(step, 3)),
    },
    '&:nth-child(4)': {
      animationDelay: calc.add(initialDelay, calc.multiply(step, 4)),
    },
    '&:nth-child(5)': {
      animationDelay: calc.add(initialDelay, calc.multiply(step, 5)),
    },
    '&:nth-child(6)': {
      animationDelay: calc.add(initialDelay, calc.multiply(step, 6)),
    },
    '&:nth-child(7)': {
      animationDelay: calc.add(initialDelay, calc.multiply(step, 7)),
    },
    '&:nth-child(8)': {
      animationDelay: calc.add(initialDelay, calc.multiply(step, 8)),
    },
  },

  '@media': {
    '(prefers-reduced-motion)': {
      animationName: 'none',
      opacity: 1,
      transform: 'none',
    },
  },
});
