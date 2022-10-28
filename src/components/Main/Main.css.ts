import { keyframes, style } from '@vanilla-extract/css';
import {
  colorSecondary,
  outlineBoxShadow,
  contentPadding,
  padding,
} from '../../index.css';

const formReveal = keyframes({
  '0%': { opacity: 0, transform: 'scale(0.95)' },
  '100%': { opacity: 1, transform: 'scale(1)' },
});

export const container = style({
  position: 'absolute',
  inset: 0,

  display: 'flex',
  flexFlow: 'column',
  justifyContent: 'space-between',

  height: '100%',
  flexDirection: 'column',
  opacity: 0,
  animationName: formReveal,
  animationDuration: '900ms',
  animationFillMode: 'forwards',
  animationDelay: '1000ms',

  '@media': {
    'screen and (min-width: 650px)': {
      right: 0,
      left: '50%',
    },
    '(prefers-reduced-motion)': {
      animationName: 'none',
      opacity: 1,
    },
  },
});

export const contactUs = style({
  padding: `${contentPadding} ${contentPadding}  0 0`,
  display: 'flex',
  justifyContent: 'flex-end',
  zIndex: 1,
});

export const contactUsLink = style({
  textDecoration: 'underline',
  color: '#dedede',
  borderRadius: 4,
  fontSize: 13,
  transition: '.25s box-shadow',

  ':focus': {
    outline: 'none',
    boxShadow: outlineBoxShadow,
  },
});

export const signIn = style({
  position: 'absolute',
  inset: 0,

  display: 'grid',
  placeItems: 'center',
  overflow: 'hidden',

  '@media': {
    'screen and (min-width: 650px)': {
      overflow: 'initial',
    },
  },
});

export const privacy = style({
  color: colorSecondary,
  borderRadius: 4,
  fontSize: 13,
  transition: '.25s box-shadow ease-out',

  ':focus': {
    outline: 'none',
    boxShadow: outlineBoxShadow,
  },
});

export const author = style({
  fontSize: 13,
  color: colorSecondary,
});

export const footer = style({
  padding: `0 ${contentPadding} ${contentPadding} ${contentPadding}`,
  zIndex: 1,

  display: 'flex',
  justifyContent: 'space-between',
  gap: padding.space4,

  '@media': {
    'screen and (min-width: 650px)': {
      justifyContent: 'flex-end',
    },
  },
});
