import { memo } from 'react';
import { StarrySky } from '../StarrySky/StarrySky';
import ShootingStars from '../ShootingStars/ShootingStars';
import Eclipse from '../Eclipse/Eclipse';
import TwinklingStars from '../TwinklingStars/TwinklingStars';
import { compositionWrapper } from './Composition.css';

const Composition = () => {
  return (
    <div className={compositionWrapper}>
      <StarrySky />
      <ShootingStars />
      {/* <TwinklingStars /> */}
      <Eclipse />
    </div>
  );
};

const MemoComposition = memo(Composition);

export { MemoComposition as Composition };
