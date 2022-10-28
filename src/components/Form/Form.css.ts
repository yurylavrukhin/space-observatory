import { style, keyframes, createVar } from '@vanilla-extract/css';
import { borderRadius, outlineBoxShadow, padding } from '../../index.css';

const primaryGradientColor = createVar();
const gradientSize = createVar();

export const container = style({
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

  willChange: 'transform',

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

  willChange: 'transform',

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

export const isFormShaking = style({
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

  fontFamily: 'inherit',
  fontWeight: 400,

  padding: `0 ${padding.space3}`,
  minHeight: minimumInputHeight,
  fontSize: 16,
  borderRadius,
  minWidth: '250px',
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
