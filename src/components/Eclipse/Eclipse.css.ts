import { keyframes, style, createVar } from '@vanilla-extract/css';

const eclipseSize = createVar();

export const eclipse = style({
  vars: {
    [eclipseSize]: '320px',
  },

  position: 'absolute',
  inset: '0',

  zIndex: '0',

  display: 'flex',

  filter: 'brightness(0.8)',
});

const eclipseMove = keyframes({
  '0%': { transform: 'translate(calc(-50% + 50px), calc(-50% + 50px))' },

  '70%': { boxShadow: 'inset 0 0 5px 2px white' },
  '100%': {
    transform: 'translate(calc(-50% + 0px), calc(-50% + 0px))',
    boxShadow: 'inset 0 0 15px 2px white',
  },
});

const smallShadowGlimmer = keyframes({
  '0%': { opacity: '0' },
  '100%': { opacity: '1' },
});

const mediumShadowGlimmer = keyframes({
  '0%': { opacity: '0' },
  '50%': { opacity: '1' },
  '100%': { opacity: '0.5' },
});

const largeShadowGlimmer = keyframes({
  '0%': { opacity: '0' },

  '30%': { opacity: 0 },
  '50%': { opacity: '1' },
  '100%': { opacity: '0' },
});

export const star = style({
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',

  width: eclipseSize,
  height: eclipseSize,
  borderRadius: '50%',

  background: '#fffce4',
});

export const planet = style({
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(calc(-50% + 25px), calc(-50% + 25px))',

  background: 'black',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100%',

  width: eclipseSize,
  height: eclipseSize,
  borderRadius: '50%',

  animationName: eclipseMove,
  animationDuration: `5000ms`,
  animationDelay: '500ms',
  animationFillMode: 'forwards',
  animationTimingFunction: 'easeOutCirc',

  '@media': {
    '(prefers-reduced-motion)': {
      animationName: 'none',
      transform: 'translate(-50%, -50%)',
    },
  },
});

const planetDim = keyframes({
  from: { opacity: 0.14 },
  to: { opacity: 0.05 },
});

export const planetWrapper = style({
  opacity: 0.05,

  animationName: planetDim,
  animationDuration: '5000ms',
  animationFillMode: 'forwards',
});

export const smallShadow = style({
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',

  width: eclipseSize,
  height: eclipseSize,
  borderRadius: '50%',

  boxShadow: '1px 1px 20px 2px white',

  animationName: smallShadowGlimmer,
  animationDuration: `6000ms`,
  animationFillMode: 'forwards',
  animationTimingFunction: 'easeOutCirc',

  '@media': {
    '(prefers-reduced-motion)': {
      animationName: 'none',
    },
  },
});

export const mediumShadow = style({
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',

  width: eclipseSize,
  height: eclipseSize,
  borderRadius: '50%',

  boxShadow: '0 0 70px 20px white',

  opacity: 0,

  animationName: mediumShadowGlimmer,
  animationDuration: `10000ms`,
  animationFillMode: 'forwards',
  animationTimingFunction: 'easeOutCirc',

  '@media': {
    '(prefers-reduced-motion)': {
      animationName: 'none',
    },
  },
});

export const largeShadow = style({
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',

  width: eclipseSize,
  height: eclipseSize,
  borderRadius: '50%',

  boxShadow: '0 0 200px 130px rgb(255 255 255 / 0.5)',
  filter: 'drop-shadow(0 0 1000px rgb(255 255 255 / 0.5))',

  opacity: 0,

  animationName: largeShadowGlimmer,
  animationDuration: `5000ms`,
  animationFillMode: 'forwards',
  animationTimingFunction: 'easeOutCirc',

  '@media': {
    '(prefers-reduced-motion)': {
      animationName: 'none',
    },
  },
});

const diamondRingBlink = keyframes({
  from: {
    opacity: 0,
  },
  '35%': {
    opacity: 0,
  },
  '45%': {
    opacity: 1,
  },
  to: {
    opacity: 0,
  },
});

export const diamondRingWrapper = style({
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',

  width: eclipseSize,
  height: eclipseSize,

  borderRadius: '50%',

  display: 'block',
});

const diamondRingSizeVar = createVar();

export const diamondRing = style({
  vars: {
    [diamondRingSizeVar]: '50px',
  },
  position: 'absolute',
  left: '25px',
  top: '25px',
  display: 'block',

  boxShadow: '0 0 70px 30px white',

  width: diamondRingSizeVar,
  height: diamondRingSizeVar,

  background: 'white',
  borderRadius: '50% 10%',
  filter: 'drop-shadow(0 0 10px orange) blur(7px)',

  animationName: diamondRingBlink,
  animationDuration: `6000ms`,
  animationFillMode: 'forwards',
  animationTimingFunction: 'easeOutCirc',

  '@media': {
    '(prefers-reduced-motion)': {
      animationName: 'none',
      opacity: 0,
    },
  },
});
