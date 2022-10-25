import { useEffect, useState } from 'react';
import { getRandomNumberInRange } from '../../util/getRandomNumberInRange';
import { Star } from '../Star/Star';
import { container, star } from './TwinklingStars.css';

const STARS_AMOUNT = 75;

interface Point {
  x: number;
  y: number;
  size: number;
  turn: number;
  opacity: number;
}

export const TwinklingStars = () => {
  const [points, setPoints] = useState<Point[]>([]);

  useEffect(() => {
    const newPoints: Point[] = [];
    for (let i = 0; i < STARS_AMOUNT; i++) {
      const turn = getRandomNumberInRange(-150, -50);
      const size = getRandomNumberInRange(5, 15);

      const left = getRandomNumberInRange(0, 100);
      const top = getRandomNumberInRange(0, 100);
      const opacity = getRandomNumberInRange(0.1, 1);

      newPoints[i] = { x: left, y: top, size, turn, opacity };
    }

    setPoints(newPoints);
  }, []);

  return (
    <div className={container}>
      {points.map(({ x, y, size: size, opacity }) => {
        return (
          <div
            className={star}
            style={{
              left: `${x}%`,
              top: `${y}%`,
              width: size,
              height: size,
              opacity,
            }}
          >
            <Star />
          </div>
        );
      })}
    </div>
  );
};
