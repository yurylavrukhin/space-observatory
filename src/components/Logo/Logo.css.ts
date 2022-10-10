import { style } from '@vanilla-extract/css';

const logo = style({
  // padding: var(--content-padding) 0 0 var(--content-padding),
  // fontWeight: 'bold',
  // color: var(--color-text-primary),
  position: 'absolute',
  zIndex: 1,
  fontSize: 14,
});

const letter = style({
  opacity: 0,
});

// @media screen and (min-width: 650px) {
//   font-size: 24px;

// }

export { logo, letter };
