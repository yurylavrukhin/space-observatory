import { createVar, createTheme, style } from '@vanilla-extract/css';

export const [themeClass, vars] = createTheme({
  padding: {
    contentPadding: '20px',
  },
});

export const accentVar = createVar();

export const blue = style({
  vars: {
    [accentVar]: 'blue',
  },
});

export const pink = style({
  vars: {
    [accentVar]: 'pink',
  },
});

export const brandText = style({
  color: vars.padding.contentPadding,
});

export const container = style({
  height: 1,
  minHeight: '100vh',
});
