import { useCallback, useEffect, useRef, useState } from 'react';
import { useAnimationSequence } from '../../hooks/useAnimationSequence.hooks';
import { Star } from '../../Star/Star';
import { getRandomNumberInRange } from '../../util/getRandomNumberInRange';

import styles from './TwinklingStars.module.css';

const STARS_AMOUNT = 30;

export const TwinklingStars = () => {
  const starRef = useRef<HTMLSpanElement>(null);
  const [points, setPoints] = useState<{ x: number; y: number }[]>([]);

  const { ref: twinklingStarsContainerRef } =
    useAnimationSequence<HTMLDivElement>({
      name: 'twinkling-stars',
      styles: [
        {
          opacity: 0,
        },
        {
          opacity: 1,
        },
      ],
    });

  const p = useCallback(() => {
    if (!starRef.current) {
      return;
    }

    const turn = getRandomNumberInRange(-150, -50);
    const width = getRandomNumberInRange(5, 100);

    const left = getRandomNumberInRange(0, 100);
    const top = getRandomNumberInRange(0, 100);

    setPoints([...points, { x: left, y: top }]);
  }, []);

  useEffect(() => {
    const newPoints = [];
    for (let i = 0; i < STARS_AMOUNT; i++) {
      const turn = getRandomNumberInRange(-150, -50);
      const width = getRandomNumberInRange(5, 100);

      const left = getRandomNumberInRange(0, 100);
      const top = getRandomNumberInRange(0, 100);

      newPoints[i] = { x: left, y: top };
    }

    setPoints(newPoints);
  }, []);

  return (
    <div
      className={styles.twinklingStarsContainer}
      ref={twinklingStarsContainerRef}
    >
      {points.map(({ x, y }) => {
        return (
          <div
            style={{
              position: 'absolute',
              left: `${x}%`,
              top: `${y}%`,
            }}
          >
            <Star onFade={() => {}} isExploding={false} />
          </div>
        );
      })}
    </div>
  );
};
