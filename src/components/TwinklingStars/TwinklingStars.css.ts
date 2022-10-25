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
  animationDuration: '1s',
  animationFillMode: 'forwards',
  animationDelay: '3000ms',
});

export const star = style({
  position: 'absolute',
  display: 'flex',
  filter:
    'drop-shadow(0 0 5px white) drop-shadow(0 0 5px white) blur(1px) drop-shadow(0 0 15px white)',
  transition: 'transform 1s easeOutCirc',

  ':hover': {
    transform: 'rotate(1turn) scale(2)',
  },
});
