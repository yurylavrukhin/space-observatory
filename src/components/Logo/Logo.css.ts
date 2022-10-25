import { keyframes, style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import {
  firstSeriesAnimationDuration,
  secondSeriesAnimationDuration,
  secondSeriesLongestAnimation,
} from '../../AnimationSequence.css';
import { colorPrimary, contentPadding } from '../../index.css';

const BOUNCE_EASING = 'cubic-bezier(0.175, 0.885, 0.32, 1.275)';
const animLetter = keyframes({
  from: {
    transform: 'translate(0, 15px)',
    opacity: 0,
  },
  to: {
    transform: 'translate(0, 0)',
    opacity: 1,
  },
});

const logo = style({
  padding: `${contentPadding} 0 0 ${contentPadding}`,
  fontWeight: 600,
  color: colorPrimary,
  position: 'absolute',
  zIndex: 1,
  fontSize: 14,
  lineHeight: 1,

  '@media': {
    'screen and (min-width: 650px)': {
      fontSize: 20,
    },
  },
});

const step = '70ms';

const letter = style({
  opacity: 0,
  animationName: animLetter,
  animationDuration: '350ms',
  animationTimingFunction: BOUNCE_EASING,
  animationFillMode: 'forwards',
  animationDelay: secondSeriesAnimationDuration,

  selectors: {
    '&:nth-child(1)': {
      animationDelay: calc.add(secondSeriesAnimationDuration, step),
    },
    '&:nth-child(2)': {
      animationDelay: calc.add(
        secondSeriesAnimationDuration,
        calc.multiply(step, 2)
      ),
    },
    '&:nth-child(3)': {
      animationDelay: calc.add(
        secondSeriesAnimationDuration,
        calc.multiply(step, 3)
      ),
    },
    '&:nth-child(4)': {
      animationDelay: calc.add(
        secondSeriesAnimationDuration,
        calc.multiply(step, 4)
      ),
    },
    '&:nth-child(5)': {
      animationDelay: calc.add(
        secondSeriesAnimationDuration,
        calc.multiply(step, 5)
      ),
    },
    '&:nth-child(6)': {
      animationDelay: calc.add(
        secondSeriesAnimationDuration,
        calc.multiply(step, 6)
      ),
    },
    '&:nth-child(7)': {
      animationDelay: calc.add(
        secondSeriesAnimationDuration,
        calc.multiply(step, 7)
      ),
    },
    '&:nth-child(8)': {
      animationDelay: calc.add(
        secondSeriesAnimationDuration,
        calc.multiply(step, 8)
      ),
    },
  },

  '@media': {
    '(prefers-reduced-motion)': {
      animationName: 'none',
      opacity: 1,
    },
  },
});

export { logo, letter };
