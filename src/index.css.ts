import {
  globalFontFace,
  globalStyle,
  style,
  createGlobalTheme,
  createVar,
} from '@vanilla-extract/css';

const martianGrotesk = 'Martian Grotesk';

const theme = createGlobalTheme(':root', {
  color: {
    primary: '#fcfcfc',
    secondary: '#dedede',
    gray: '#667380',
  },

  font: {
    family: `${martianGrotesk}, Helvetica Neue, Hiragino Sans, Arial, Helvetica, sans-serif`,
  },

  padding: {
    contentPadding: {
      mobile: '20px',
      desktop: '25px',
    },

    space1: '5px',
    space2: '10px',
    space3: '15px',
    space4: '20px',
    space5: '25px',
    space6: '30px',
    space7: '35px',
    space8: '40px',
    space9: '45px',
    space10: '50px',
    space11: '55px',
    space12: '60px',
    space13: '65px',
    space14: '70px',
    space15: '75px',
    space16: '80px',
  },

  selection: {
    outlineBoxShadow:
      'rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(146 25 209 / 54%) 0px 0px 0px 4px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(89 61 109 / 16%) 0px 0px 0px 1px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px',
  },

  borderRadius: '15px',
});

const padding = theme.padding;
const borderRadius = theme.borderRadius;
const colorPrimary = theme.color.primary;
const colorSecondary = theme.color.secondary;
const colorGray = theme.color.gray;
const fontFamily = theme.font.family;
const outlineBoxShadow = theme.selection.outlineBoxShadow;

globalFontFace(martianGrotesk, {
  fontWeight: '100 800',
  src: "url('/src/assets/MartianGrotesk.woff2') format('woff2')",
});

globalStyle('*', {
  boxSizing: 'border-box',
  margin: 0,
  padding: 0,
});

const contentPadding = createVar();

globalStyle(':root', {
  vars: {
    [contentPadding]: theme.padding.contentPadding.mobile,
  },

  '@media': {
    'screen and (min-width: 650px)': {
      vars: {
        [contentPadding]: theme.padding.contentPadding.desktop,
      },
    },
  },

  fontFamily,
  fontSize: '16px',
  lineHeight: '24px',
  fontWeight: 400,

  fontSynthesis: 'none',
  textRendering: 'optimizeLegibility',
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  WebkitTextSizeAdjust: '100%',
});

globalStyle('html, #root', {
  height: '100%',
});

globalStyle('body', {
  padding: 'env(safe-area-inset)',
  margin: 0,
  height: '100%',
  background: 'black',

  color: colorPrimary,
});

const visuallyHidden = style({
  clip: 'rect(0 0 0 0)',
  wordWrap: 'normal',
  border: '0',
  height: '1px',
  margin: '-1px',
  overflow: 'hidden',
  padding: '0',
  position: 'absolute',
  whiteSpace: 'nowrap',
  width: '1px',
});

export {
  contentPadding,
  padding,
  colorPrimary,
  colorSecondary,
  colorGray,
  borderRadius,
  visuallyHidden,
  outlineBoxShadow,
};
