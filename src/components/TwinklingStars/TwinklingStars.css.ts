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

const starLight = keyframes({
  from: {
    transform: 'scale(1)',
    opacity: 'unset',
  },
  '90%': {
    transform: 'scale(1)',
    opacity: 'unset',
  },
  '95%': {
    transform: 'scale(1.4)',
    opacity: 1,
  },
  to: {
    transform: 'scale(1)',
    opacity: 'unset',
  },
});

export const star = style({
  position: 'absolute',
  display: 'flex',

  selectors: {
    '&:nth-child(4n)': {
      animationName: starLight,
      animationIterationCount: 'infinite',
      animationDuration: '4600ms',
    },

    '&:nth-child(1)': {
      animationDelay: '300ms',
    },
    '&:nth-child(2)': {
      animationDelay: '600ms',
    },
    '&:nth-child(3)': {
      animationDelay: '900ms',
    },
    '&:nth-child(4)': {
      animationDelay: '1200ms',
    },
    '&:nth-child(5)': {
      animationDelay: '1500ms',
    },
    '&:nth-child(6)': {
      animationDelay: '1800ms',
    },
  },

  '@media': {
    '(prefers-reduced-motion)': {
      selectors: {
        '&:nth-child(4n)': {
          animationName: 'none',
        },
      },
    },
  },
});
