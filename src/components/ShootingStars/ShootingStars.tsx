import { useCallback, useEffect, useRef } from 'react';
import { useAnimationSequence } from '../../hooks/useAnimationSequence.hooks';
import { getRandomNumberInRange } from '../../util/getRandomNumberInRange';
import { interval } from '../../util/interval';

import styles from './ShootingStars.module.css';

export const ShootingStars = () => {
  const starRef = useRef<HTMLSpanElement>(null);

  const { ref: shootingStarsContainerRef } =
    useAnimationSequence<HTMLDivElement>({
      name: 'shooting-stars',
      styles: [
        {
          opacity: 0,
        },
        {
          opacity: 1,
        },
      ],
    });

  const shootStar = useCallback(() => {
    if (!starRef.current) {
      return;
    }

    const turn = getRandomNumberInRange(-150, -50);
    const width = getRandomNumberInRange(5, 100);

    const left = getRandomNumberInRange(0, 100);
    const top = getRandomNumberInRange(0, 100);

    starRef.current.style.width = `${width}px`;
    starRef.current.style.left = `${left}%`;
    starRef.current.style.top = `${top}%`;
    starRef.current.style.transform = `rotate(${turn}grad)`;

    starRef.current.animate(
      [
        { transform: `rotate(${turn}grad) translate(0px)`, opacity: 1 },
        { transform: `rotate(${turn}grad) translate(-100px)`, opacity: 0 },
      ],
      {
        duration: 1000,
        iterations: 1,
        easing: 'ease-out',
        fill: 'forwards',
      }
    );
  }, []);

  useEffect(() => {
    interval(shootStar, 1000);
  }, []);

  return (
    <div
      className={styles.shootingStarsContainer}
      ref={shootingStarsContainerRef}
    >
      <span ref={starRef} className={styles.star}></span>
    </div>
  );
};
