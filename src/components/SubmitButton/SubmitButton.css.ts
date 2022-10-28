import { style } from '@vanilla-extract/css';
import {
  borderRadius,
  colorPrimary,
  outlineBoxShadow,
  padding,
} from '../../index.css';

export const button = style({
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
