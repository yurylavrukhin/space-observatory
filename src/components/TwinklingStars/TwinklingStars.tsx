import { memo, useEffect, useState } from 'react';
import { getRandomNumberInRange } from '../../util/getRandomNumberInRange';
import { interval } from '../../util/interval';
import { getIsReducedMotion } from '../../util/isReducedMotion';
import { Star } from './Star/Star';
import { container, litStar, star } from './TwinklingStars.css';
import { getPoints } from './TwinklingStars.utils';

export interface Point {
  left: number;
  // right?: number;
  top: number;
  size: number;
  // turn: number;
  opacity: number;
  isLit?: boolean;
}

type Points = { [id: string]: Point };

const pointsInitialState: Points = getPoints();

function getRandomPositiveFloat(a: number, b: number, digits = 1) {
  if (a < 0 || b < 0 || digits < 0) {
    return NaN;
  }
  const lower = Math.min(a, b);
  const upper = Math.max(a, b);
  const result = Math.random() * (upper - lower) + lower;
  return +result.toFixed(digits);
}

const TwinklingStars = () => {
  const [points, setPoints] = useState<Points>(pointsInitialState);

  console.log('a');
  // const twinkleStar = () => {
  //   const randomStarIndex = getRandomNumberInRange(
  //     0,
  //     Object.keys(points).length
  //   );
  //   setPoints({
  //     ...points,
  //     [randomStarIndex]: { ...points[randomStarIndex], isLit: true },
  //   });
  // };

  // useEffect(() => {
  //   if (getIsReducedMotion()) {
  //     return;
  //   }

  //   // interval(twinkleStar, 1300);
  // }, []);

  return (
    <div className={container}>
      {Object.keys(points).map((key) => {
        const { left, top, size, opacity, isLit } = points[key];

        return (
          <div
            key={key}
            className={`${star}`}
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: size,
              height: size,
              opacity,
            }}
          >
            <Star id={key} isLit={!!isLit} />
          </div>
        );
      })}
    </div>
  );
};

export default memo(TwinklingStars);
