import { memo } from 'react';
import {
  planet,
  eclipse,
  smallShadow,
  mediumShadow,
  largeShadow,
  diamondRingWrapper,
  star,
  diamondRing,
  planetWrapper,
} from './Eclipse.css';
import PlanetIcon from '../Icons/PlanetIcon/PlanetIcon';

const Eclipse = () => {
  return (
    <div className={eclipse}>
      <div className={smallShadow} />
      <div className={mediumShadow} />
      <div className={largeShadow} />

      <div className={star} />
      <div className={planet}>
        <div className={planetWrapper}>
          <PlanetIcon />
        </div>
      </div>

      <div className={diamondRingWrapper}>
        <div className={diamondRing} />
      </div>
    </div>
  );
};

export default memo(Eclipse);
