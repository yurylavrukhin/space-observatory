import { keyframes, style } from '@vanilla-extract/css';

const spaceFade = keyframes({
  from: {
    filter: 'brightness(1)',
  },
  to: {
    filter: 'brightness(0.35)',
  },
});

export const compositionWrapper = style({
  height: '100%',
  overflow: 'hidden',

  animationName: spaceFade,
  animationDuration: '7000ms',
  animationFillMode: 'forwards',
  animationDelay: '1400ms',

  '@media': {
    '(prefers-reduced-motion)': {
      animationName: 'none',
      filter: 'brightness(0.35)',
    },
  },
});
