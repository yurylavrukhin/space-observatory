import { useEffect, useRef } from 'react';
import { useIncrementingNumber } from './useIncrementingNumber.hooks';
import { nanoid } from 'nanoid';
import { getIsReducedMotion } from '../util/isReducedMotion';

declare namespace CSS {
  interface PropertyDefinition {
    name: string;
    syntax?: string;
    inherits: boolean;
    initialValue?: string;
  }
  function registerProperty(propertyDefinition: PropertyDefinition): undefined;
}

const rainbowColors = [
  'hsl(222deg 55% 12%)',
  'hsl(248deg 53% 25%) ',
  'hsl(257deg 66% 36%) ',
  'hsl(265deg 88% 62%) ',
  'hsl(267deg 74% 67%) ',
  'hsl(269deg 56% 71%) ',
];

const paletteSize = rainbowColors.length;

export const useRainbow = ({ intervalDelay = 1200 } = {}) => {
  const { current: id } = useRef(nanoid());

  const isStaticColors =
    getIsReducedMotion() || !window.CSS || !CSS.registerProperty;

  useEffect(() => {
    if (isStaticColors) {
      return;
    }

    for (let i = 0; i < 3; i++) {
      try {
        CSS.registerProperty({
          name: `--iridescent-color-${id}-${i}`,
          initialValue: rainbowColors[i],
          syntax: '<color>',
          inherits: false,
        });
      } catch (err) {
        console.log(err);
      }
    }
  }, [isStaticColors]);

  const intervalCount = useIncrementingNumber(intervalDelay);

  if (isStaticColors) {
    return {
      [`--iridescent-color-${id}-0`]: rainbowColors[2],
      [`--iridescent-color-${id}-1`]: rainbowColors[1],
      [`--iridescent-color-${id}-2`]: rainbowColors[4],
    };
  }

  return {
    [`--iridescent-color-${id}-0`]:
      rainbowColors[(intervalCount + 1) % paletteSize],
    [`--iridescent-color-${id}-1`]:
      rainbowColors[(intervalCount + 2) % paletteSize],
    [`--iridescent-color-${id}-2`]:
      rainbowColors[(intervalCount + 3) % paletteSize],
  };
};
