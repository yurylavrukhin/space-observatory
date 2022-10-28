import { keyframes, style } from '@vanilla-extract/css';

const appear = keyframes({
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
});

export const container = style({
  position: 'absolute',
  inset: 0,

  zIndex: -1,

  overflow: 'hidden',

  opacity: 0,

  animationName: appear,
  animationDuration: '2s',
  animationFillMode: 'forwards',
  animationDelay: '3500ms',

  '@media': {
    '(prefers-reduced-motion)': {
      animationName: 'none',
      opacity: 1,
    },
  },
});

const animate = keyframes({
  from: {},
  '50%': {
    transform: 'scale(2)',
    opacity: 1,
  },
  to: {
    transform: 'scale(1)',
  },
});

export const star = style({
  position: 'absolute',
  display: 'flex',
  filter:
    'drop-shadow(0 0 5px white) drop-shadow(0 0 5px white) blur(0px) drop-shadow(0 0 15px white)',
  transition: 'transform 1s easeOutCirc',

  ':hover': {
    opacity: '1!important',
    transform: 'scale(1.2)',
    filter:
      'drop-shadow(0 0 5px white) drop-shadow(0 0 5px white) blur(1px) drop-shadow(0 0 15px white) brightness(3)',
  },

  // animationName: animate,
  animationDuration: '1000ms',
  animationIterationCount: 'infinite',
});

export const litStar = style({
  transform: 'scale(2)',
});
