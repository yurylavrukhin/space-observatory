import { keyframes, style } from '@vanilla-extract/css';

const spaceFade = keyframes({
  from: {
    filter: 'brightness(1)',
  },
  to: {
    filter: 'brightness(0.4)',
  },
});

export const compositionWrapper = style({
  height: '100%',

  animationName: spaceFade,
  animationDuration: '8000ms',
  animationFillMode: 'forwards',
  animationDelay: '2000ms',

  '@media': {
    '(prefers-reduced-motion)': {
      animationName: 'none',
      filter: 'brightness(0.6)',
    },
  },
});
