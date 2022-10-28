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

  minWidth: '1400px',

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
    opacity: 'inherit',
  },
  '90%': {
    transform: 'scale(1)',
    opacity: 'inherit',
  },
  '95%': {
    transform: 'scale(1.3)',
    opacity: 1,
  },
  to: {
    transform: 'scale(1)',
    opacity: 'inherit',
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

    '&:nth-child(4)': {
      animationDelay: '300ms',
    },
    '&:nth-child(8)': {
      animationDelay: '600ms',
    },
    '&:nth-child(12)': {
      animationDelay: '900ms',
    },
    '&:nth-child(16)': {
      animationDelay: '1200ms',
    },
    '&:nth-child(20)': {
      animationDelay: '1500ms',
    },
    '&:nth-child(24)': {
      animationDelay: '1800ms',
    },
    '&:nth-child(28)': {
      animationDelay: '2100ms',
    },
    '&:nth-child(32)': {
      animationDelay: '2400ms',
    },
    '&:nth-child(36)': {
      animationDelay: '2700ms',
    },
    '&:nth-child(40)': {
      animationDelay: '3000ms',
    },
    '&:nth-child(44)': {
      animationDelay: '3300ms',
    },
    '&:nth-child(48)': {
      animationDelay: '3600ms',
    },
    '&:nth-child(52)': {
      animationDelay: '4000ms',
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
