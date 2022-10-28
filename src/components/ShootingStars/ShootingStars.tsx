import { memo, useCallback, useEffect, useRef } from 'react';
import { getRandomNumberInRange } from '../../util/getRandomNumberInRange';
import { interval } from '../../util/interval';
import { getIsReducedMotion } from '../../util/isReducedMotion';
import { container, star } from './ShootingStars.css';

const ShootingStars = () => {
  const starRef = useRef<HTMLSpanElement>(null);

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
    if (getIsReducedMotion()) {
      return;
    }

    interval(shootStar, 1300);
  }, []);

  if (getIsReducedMotion()) {
    return null;
  }

  return (
    <div className={container}>
      <span ref={starRef} className={star}></span>
    </div>
  );
};

export default memo(ShootingStars);
