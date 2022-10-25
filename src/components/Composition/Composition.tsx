import { memo } from 'react';
import { StarrySky } from '../StarrySky/StarrySky';
import { ShootingStars } from '../ShootingStars/ShootingStars';
import { TwinklingStars } from '../TwinklingStars/TwinklingStars';
import { Eclipse } from '../Eclipse/Eclipse';
import { compositionWrapper } from './Composition.css';

const Composition = () => {
  return (
    <div className={compositionWrapper}>
      <StarrySky />
      <ShootingStars />
      <TwinklingStars />
      <Eclipse />
    </div>
  );
};

const MemoComposition = memo(Composition);

export { MemoComposition as Composition };
