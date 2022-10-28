import { style } from '@vanilla-extract/css';

export const container = style({
  height: 1,
  minHeight: '100vh',
  transition: '1s all',
});

export const success = style({
  transform: 'scale(0.9)',
  filter: 'blur(10px)',
});
