import { useEffect } from 'react';
import { useIncrementingNumber } from './useIncrementingNumber.hooks';

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
  'hsl(262deg 80% 46%) ',
  'hsl(264deg 98% 55%) ',
  'hsl(265deg 88% 62%) ',
  'hsl(267deg 74% 67%) ',
  'hsl(269deg 56% 71%) ',
];

const paletteSize = rainbowColors.length;

export const useRainbow = ({ intervalDelay = 800 }) => {
  // Register all custom properties.
  // This only ever needs to be done once, so there are no dependencies.
  useEffect(() => {
    for (let i = 0; i < 3; i++) {
      try {
        CSS.registerProperty({
          name: `--magic-rainbow-color-${i}`,
          initialValue: rainbowColors[i],
          syntax: '<color>',
          inherits: false,
        });
      } catch (err) {
        console.log(err);
      }
    }
  }, []);
  // Get an ever-incrementing number from another custom hook*
  const intervalCount = useIncrementingNumber(intervalDelay);
  // Using that interval count, derive each current color value
  return {
    '--magic-rainbow-color-0': rainbowColors[(intervalCount + 1) % paletteSize],
    '--magic-rainbow-color-1': rainbowColors[(intervalCount + 2) % paletteSize],
    '--magic-rainbow-color-2': rainbowColors[(intervalCount + 3) % paletteSize],
  };
};
