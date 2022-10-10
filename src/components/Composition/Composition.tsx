import { memo } from 'react';
import { StarrySky } from '../StarrySky/StarrySky';
import { ShootingStars } from '../ShootingStars/ShootingStars';
import { TwinklingStars } from '../TwinklingStars/TwinklingStars';
import { Eclipse } from '../Eclipse/Eclipse';
import { useAnimationSequence } from '../../hooks/useAnimationSequence.hooks';
import { compositionWrapper } from './Composition.css';

const Composition = () => {
  const { ref: backgroundRef } = useAnimationSequence<HTMLDivElement>({
    name: 'space-fade',
    styles: [
      {
        filter: 'brightness(1)',
      },
      {
        filter: 'brightness(0.6)',
      },
    ],
  });

  return (
    <div className={compositionWrapper} ref={backgroundRef}>
      <StarrySky />
      <ShootingStars />
      <TwinklingStars />
      <Eclipse />
    </div>
  );
};

const MemoComposition = memo(Composition);

export { MemoComposition as Composition };
