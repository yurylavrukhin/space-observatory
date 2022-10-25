import { keyframes, style } from '@vanilla-extract/css';
import {
  animationSequenceSeries2,
  firstSeriesAnimationDuration,
} from '../../AnimationSequence.css';

const spaceFade = keyframes({
  from: {
    filter: 'brightness(1)',
  },
  to: {
    filter: 'brightness(0.4)',
  },
});

export const compositionWrapper = style({
  height: '100%',

  animationName: spaceFade,
  animationDuration: `${animationSequenceSeries2.get('space-fade')}ms`,
  animationFillMode: 'forwards',
  animationDelay: '2000ms',

  '@media': {
    '(prefers-reduced-motion)': {
      animationName: 'none',
      filter: 'brightness(0.6)',
    },
  },
});
