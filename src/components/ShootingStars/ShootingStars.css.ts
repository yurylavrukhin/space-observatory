import { keyframes, style } from '@vanilla-extract/css';
import { colorGray } from '../../index.css';

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

  animationName: appear,
  animationDuration: '1s',
  animationFillMode: 'forwards',
});

export const star = style({
  position: 'absolute',

  height: 2,
  background: `linear-gradient(-40grad, ${colorGray}, white)`,
});
