import { style, createVar } from '@vanilla-extract/css';

const container = style({
  position: 'absolute',
  inset: 0,

  zIndex: -2,
  overflow: 'hidden',
});

const dayGradientVar = createVar();

const day = style({
  vars: {
    [dayGradientVar]: `
      linear-gradient(
        180deg,
        hsl(223deg 92% 15%) 70%,
        hsl(260deg 38% 20%) 86%,
        hsl(303deg 25% 22%) 92%,
        hsl(340deg 27% 29%) 96%,
        hsl(2deg 29% 35%) 98%,
        hsl(14deg 40% 38%) 100%,
        hsl(21deg 49% 41%) 100%,
        hsl(26deg 59% 44%) 101%,
        hsl(29deg 69% 46%) 101%,
        hsl(33deg 84% 47%) 102%,
        hsl(35deg 98% 45%) 102%,
        hsl(34deg 99% 45%) 102%,
        hsl(34deg 99% 44%) 102%,
        hsl(33deg 99% 43%) 101%,
        hsl(32deg 99% 42%) 101%,
        hsl(32deg 99% 41%) 101%,
        hsl(31deg 100% 41%) 101%,
        hsl(30deg 100% 40%) 101%,
        hsl(30deg 100% 39%) 100%,
        hsl(29deg 100% 38%) 100%
      );
    `,
  },

  backgroundImage: dayGradientVar,

  position: 'absolute',
  inset: 0,
});

const nightGradientVar = createVar();

const night = style({
  vars: {
    [nightGradientVar]: `
      linear-gradient(
        0deg,
        hsl(217deg 92% 19%) 0%,
        hsl(218deg 91% 20%) -1%,
        hsl(219deg 91% 21%) -1%,
        hsl(218deg 90% 21%) -1%,
        hsl(215deg 89% 21%) -1%,
        hsl(211deg 89% 20%) 1%,
        hsl(215deg 64% 18%) 5%,
        hsl(223deg 40% 14%) 16%,
        hsl(248deg 17% 9%) 59%
      );
    `,
  },

  backgroundImage: nightGradientVar,

  position: 'absolute',
  inset: 0,

  filter: 'contrast(1.15)',

  opacity: 0,
});

const stars = style({
  position: 'absolute',
  width: '100%',
  height: '100%',

  opacity: 0,

  transform: 'scale(1.02)',
});

export { container, day, night, stars };
