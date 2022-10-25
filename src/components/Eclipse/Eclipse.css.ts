import { keyframes, style, createVar } from '@vanilla-extract/css';
import { animationSequenceSeries1 } from '../../AnimationSequence.css';

const eclipseSize = createVar();

export const eclipse = style({
  vars: {
    [eclipseSize]: '320px',
  },

  position: 'absolute',
  inset: '0',

  zIndex: '0',

  display: 'flex',
});

const eclipseMove = keyframes({
  '0%': { transform: 'translate(calc(-50% + 125px), calc(-50% + 125px))' },
  '100%': { transform: 'translate(calc(-50% + 0px), calc(-50% + 0px))' },
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
  '50%': { opacity: '1' },
  '100%': { opacity: '0.1' },
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

  boxShadow: 'inset 0 0 15px 2px white',

  animationName: eclipseMove,
  animationDuration: `${animationSequenceSeries1.get('eclipse')}ms`,
  animationFillMode: 'forwards',
  animationTimingFunction: 'easeOutCirc',

  '@media': {
    '(prefers-reduced-motion)': {
      animationName: 'none',
      transform: 'translate(-50%, -50%)',
    },
  },
});

export const planetWrapper = style({
  opacity: 0.14,
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
  animationDuration: `${animationSequenceSeries1.get(
    'eclipse-shadow-small'
  )}ms`,
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
  animationDuration: `${animationSequenceSeries1.get(
    'eclipse-shadow-medium'
  )}ms`,
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

  boxShadow: '0 0 400px 130px rgb(255 255 255 / 0.5)',
  filter: 'drop-shadow(0 0 1000px rgb(255 255 255 / 0.5))',

  opacity: 0,

  animationName: largeShadowGlimmer,
  animationDuration: `${animationSequenceSeries1.get(
    'eclipse-shadow-large'
  )}ms`,
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
    [diamondRingSizeVar]: '35px',
  },
  position: 'absolute',
  left: '25px',
  top: '25px',
  display: 'block',

  boxShadow: '0 0 100px 50px white',

  width: diamondRingSizeVar,
  height: diamondRingSizeVar,

  transform: 'rotate(-50grad)',
  background: 'white',
  borderRadius: '50%',
  filter: 'drop-shadow(0 0 10px orange) blur(10px)',

  animationName: diamondRingBlink,
  animationDuration: `${animationSequenceSeries1.get('diamond-ring')}ms`,
  animationFillMode: 'forwards',
  animationTimingFunction: 'easeOutCirc',

  '@media': {
    '(prefers-reduced-motion)': {
      animationName: 'none',
      opacity: 0,
    },
  },
});
