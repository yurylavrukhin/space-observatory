import { style, keyframes, createVar } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { firstSeriesAnimationDuration } from '../../AnimationSequence.css';
import {
  borderRadius,
  colorPrimary,
  colorSecondary,
  contentPadding,
  outlineBoxShadow,
  padding,
} from '../../index.css';

const primaryGradientColor = createVar();
const gradientSize = createVar();

export const formReveal = keyframes({
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
  animationDuration: '1000ms',
  animationFillMode: 'forwards',
  // animationDelay: calc.add(firstSeriesAnimationDuration, '500ms'),
  animationDelay: '2000ms',

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

export const signInFormContainer = style({
  borderRadius,
  padding: padding.space9,
  position: 'relative',

  '@media': {
    'screen and (min-width: 650px)': {
      background: 'none',
      overflow: 'initial',
      padding: padding.space10,
    },
  },
});

const gradient1Float = keyframes({
  from: {
    transform: 'rotate(0)',
  },
  to: {
    transform: 'rotate(1turn)',
  },
});

export const gradient1Container = style({
  position: 'absolute',
  inset: 0,
  zIndex: 0,

  animationName: gradient1Float,
  animationDuration: '10s',
  animationTimingFunction: 'linear',
  animationIterationCount: 'infinite',

  '@media': {
    '(prefers-reduced-motion)': {
      animationName: 'none',
    },
  },
});

export const gradient1 = style({
  vars: {
    [primaryGradientColor]: '7 223 126',
    [gradientSize]: '270px',
  },
  width: gradientSize,
  height: gradientSize,

  background: `radial-gradient(
    circle at center,
    rgb(${primaryGradientColor} / 1),
    rgb(${primaryGradientColor} / 0.6) 50%,
    rgb(${primaryGradientColor} / 0.1) 60%,
    transparent 90%
  )`,
  borderRadius: '50%',
  filter: 'blur(70px) contrast(0.85)',

  transition: 'all 1s',
});

const gradient2Float = keyframes({
  from: {
    transform: 'rotate(-0.3turn)',
  },
  to: {
    transform: 'rotate(0.7turn)',
  },
});

export const gradient2Container = style({
  position: 'absolute',
  inset: 0,
  zIndex: 0,

  animationName: gradient2Float,
  animationDuration: '8s',
  animationTimingFunction: 'linear',
  animationIterationCount: 'infinite',

  '@media': {
    '(prefers-reduced-motion)': {
      animationName: 'none',
      transform: 'rotate(0.7turn)',
    },
  },
});

export const gradient2 = style({
  vars: {
    [primaryGradientColor]: '7 123 726',
    [gradientSize]: '200px',
  },
  width: gradientSize,
  height: gradientSize,

  background: `radial-gradient(
    circle at center,
    rgb(${primaryGradientColor} / 1),
    rgb(${primaryGradientColor} / 0.6) 50%,
    rgb(${primaryGradientColor} / 0.1) 60%,
    transparent 90%
  )`,
  borderRadius: '50%',
  filter: 'blur(40px) contrast(0.7)',

  transition: 'all 1s',
});

export const gradient1Error = style({
  filter: 'blur(70px) contrast(0.65) hue-rotate(265deg)',
});

export const gradient2Error = style({
  filter: 'blur(30px) contrast(0.7) hue-rotate(90deg)',
});

const shakeMove = keyframes({
  '0%': {
    transform: 'translate(0)',
    offset: 0,
  },
  '20%': {
    transform: 'translate(-10px)',
    offset: 0.2,
  },
  '40%': {
    transform: 'translate(10px)',
    offset: 0.4,
  },
  '60%': {
    transform: 'translate(-6px)',
    offset: 0.6,
  },
  '80%': {
    transform: 'translate(6px)',
    offset: 0.8,
  },
  '100%': {
    transform: 'translate(0)',
    offset: 1,
  },
});

export const isShakingMove = style({
  animationName: shakeMove,
  animationDuration: '0.6s',
});

export const signInForm = style({
  display: 'flex',
  flexDirection: 'column',
  isolation: 'isolate',

  '@media': {
    'screen and (min-width: 650px)': {
      display: 'flex',
      flexDirection: 'column',

      background: 'none',

      backdropFilter: 'blur(0)',

      borderRadius: '0',
      padding: '0',
    },
  },
});

export const heading = style({
  marginBottom: padding.space4,
  fontSize: 28,

  '@media': {
    'screen and (min-width: 650px)': {
      textAlign: 'start',
    },
  },
});

export const labelText = style({
  marginBottom: padding.space1,
  lineHeight: 1,
  fontSize: 13,
});

export const emailContainer = style({
  marginBottom: padding.space3,
});

export const passwordContainer = style({});

export const error = style({
  transition: '0.4s all ease-out',
  maxHeight: 0,
  overflow: 'hidden',
  opacity: 0,
  marginBottom: 0,
  transform: 'translateY(30px)',

  fontSize: 13,

  display: 'flex',
  alignItems: 'center',
  gap: padding.space1,
  color: '#ff6969',
});

export const errorVisible = style({
  transitionTimingFunction: 'cubic-bezier(0.18, 0.89, 0.32, 1.28)',
  transform: 'translateY(0px)',
  opacity: 1,
  maxHeight: 20,
  margin: `${padding.space1} 0`,
});

export const fieldset = style({
  marginBottom: padding.space4,
  border: 'none',
});

export const label = style({
  display: 'flex',
  flexDirection: 'column',
});

const minimumInputHeight = createVar();
export const input = style({
  vars: {
    [minimumInputHeight]: '44px',
  },

  border: 'none',

  padding: `0 ${padding.space3}`,
  minHeight: minimumInputHeight,
  fontSize: 20,
  borderRadius,
  minWidth: '200px',
  backgroundColor: '#caddeb',

  color: 'black',

  position: 'relative',

  transition: 'box-shadow 0.25s ease-out, background-color 0.25s ease-out',

  ':focus': {
    backgroundColor: '#e8f5ff',
    outline: 'none',
    boxShadow: outlineBoxShadow,
  },
});

export const warningIconContainer = style({
  width: 20,
  height: 20,
  display: 'flex',
  alignItems: 'center',
});

export const submitButton = style({
  color: colorPrimary,
  fontSize: 20,
  fontWeight: 'bold',
  fontFamily: 'inherit',
  lineHeight: 1,

  cursor: 'pointer',

  border: 'none',
  padding: `${padding.space3} 0`,

  borderRadius,

  transition: '.25s all ease-out',

  background: `linear-gradient(
    60deg,
    hsl(223deg 68% 6%) 0%,
    hsl(246deg 46% 14%) 20%,
    hsl(254deg 56% 20%) 31%,
    hsl(257deg 63% 26%) 39%,
    hsl(259deg 69% 32%) 46%,
    hsl(261deg 76% 38%) 53%,
    hsl(263deg 83% 44%) 60%,
    hsl(265deg 93% 48%) 66%,
    hsl(264deg 100% 57%) 71%,
    hsl(265deg 99% 64%) 76%,
    hsl(266deg 98% 70%) 81%,
    hsl(267deg 96% 75%) 86%,
    hsl(269deg 92% 80%) 90%,
    hsl(270deg 85% 85%) 94%,
    hsl(270deg 69% 89%) 98%,
    hsl(270deg 27% 94%) 100%
  )`,

  ':focus': {
    outline: 'none',
    boxShadow: outlineBoxShadow,
  },

  ':active': {
    outline: 'none',
  },

  ':disabled': {
    cursor: 'default',
  },

  ':hover': { opacity: 0.95, filter: 'brightness(0.85)' },
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
