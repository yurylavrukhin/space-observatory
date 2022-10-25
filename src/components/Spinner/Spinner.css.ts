import { keyframes, style } from '@vanilla-extract/css';

const spin = keyframes({
  '0%': {
    transform: 'rotate(0deg)',
  },
  '10%': {
    transform: 'rotate(360deg)',
  },
  '14%': {
    transform: 'rotate(470deg)',
  },
  '18%': {
    transform: 'rotate(490deg)',
  },
  '20%': {
    transform: 'rotate(520deg)',
  },
  '22%': {
    transform: 'rotate(540deg)',
  },
  '26%': {
    transform: 'rotate(940deg)',
  },
  '30%': {
    transform: 'rotate(1080deg)',
  },
  '40%': {
    transform: 'rotate(1340deg)',
  },
  '45%': {
    transform: 'rotate(1440deg)',
  },
  '55%': {
    transform: 'rotate(1500deg)',
  },
  '56%': {
    transform: 'rotate(1520deg)',
  },
  '86%': {
    transform: 'rotate(3220deg)',
  },
  '100%': {
    transform: 'rotate(3600deg)',
  },
});

const spin2 = keyframes({
  '0%': {
    transform: 'rotate(40deg)',
  },
  '100%': {
    transform: 'rotate(3640deg)',
  },
});

export const spinner = style({
  margin: '0 50px',
  width: '16px',
  height: '16px',
  display: 'inline-block',
  overflow: 'visible',
  textIndent: '-999em',
  position: 'relative',
  zIndex: '1',
  background: '#1e1e1e',
  borderRadius: '100%',
  border: '2px solid #00f0f0',
  boxShadow: '0 0 1px 0px #57d8ff inset, 0 0 2px 0px #57ddff',
  borderRightColor: '#24f8ff',
  borderBottomColor: '#57f1ff',
  borderLeftColor: '#57e9ff',

  animationName: spin,
  animationDuration: '10s',
  animationTimingFunction: 'linear',
  animationIterationCount: 'infinite',

  '::after': {
    content: '',
    display: 'block',
    position: 'absolute',
    borderRadius: '100% 0',
    zIndex: '9',
    top: '-6px',
    left: '-8px',
    width: '25px',
    height: '16px',
    background: `linear-gradient(
        90deg,
        #1e1e1e 0%,
        #1e1e1e 40%,
        rgba(30, 30, 30, 0) 100%
      )`,
  },

  '::before': {
    content: '',
    display: 'block',
    position: 'absolute',
    borderRadius: '100% 0',
    zIndex: '10',
    background: '#fff',
    top: '11px',
    left: '-3px',
    width: '8px',
    height: '5px',
    transform: 'rotate(70deg)',
    boxShadow: '0px 0px 8px 1px #00c0f0, 0 0 3px 0px #00f0f0 inset',
  },
});

export const spinner3 = style({
  display: 'inline-block',
  overflow: 'visible',
  textIndent: '-999em',
  position: 'relative',
  borderRadius: '100% 0',
  zIndex: '10',
  background: '#fff',
  top: '-15px',
  left: '-8px',
  width: '4px',
  height: '2px',
  transform: 'rotate(70deg)',
  boxShadow: `0px 0px 3px 2px rgba(255, 255, 255, 0.4),
      0 0 5px 3px rgba(255, 255, 255, 0.4) inset`,
  border: 'none',
  transformOrigin: '9px 9px',

  animationName: spin,
  animationDuration: '13s',
  animationTimingFunction: 'ease',
  animationIterationCount: 'infinite',

  '::after': {
    content: '',
    display: 'block',
    position: 'absolute',
    borderRadius: '100% 0',
    zIndex: '10',
    background: '#fff',
    top: '0px',
    left: '0px',
    width: '5px',
    height: '3px',
    transform: 'rotate(140deg)',
    boxShadow: `0px 0px 3px 2px rgba(255, 255, 255, 0.4),
        0 0 5px 2px rgba(255, 255, 255, 0.4) inset`,
    transformOrigin: '9px 9px',

    animationName: spin2,
    animationDuration: '17s',
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite',
  },

  '::before': {
    content: '',
    display: 'block',
    position: 'absolute',
    borderRadius: '100% 0',
    zIndex: '10',
    background: '#fff',
    top: '0px',
    left: '0px',
    width: '6px',
    height: '4px',
    transform: 'rotate(70deg)',
    boxShadow: `0px 0px 5px 3px rgba(255, 255, 255, 0.4),
        0 0 5px 1px rgba(255, 255, 255, 0.4) inset`,

    animationName: spin2,
    animationDuration: '13s',
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite',
    transformOrigin: '9px 9px',
  },
});
