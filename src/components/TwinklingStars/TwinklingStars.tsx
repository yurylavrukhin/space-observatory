import { memo } from 'react';
import Star from './Star/Star';
import { container, star } from './TwinklingStars.css';
import { POINTS } from './TwinklingStars.const';

const TwinklingStars = () => {
  return (
    <div className={container}>
      {Object.keys(POINTS)
        .slice(0, 25)
        .map((id) => {
          const { left, top, size, opacity } = POINTS[id];
          return (
            <div
              key={id}
              className={`${star}`}
              style={{
                left: `${left}%`,
                top: `${top}%`,
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

export default memo(TwinklingStars);
