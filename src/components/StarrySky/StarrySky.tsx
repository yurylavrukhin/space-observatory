import { memo } from 'react';
import { container, day, night, stars } from './StarrySky.css';

const StarrySky = () => {
  return (
    <div className={container}>
      <div className={day} />

      <div className={night} />

      <svg xmlns='http://www.w3.org/2000/svg' className={stars}>
        <filter id='filter'>
          <feTurbulence baseFrequency='0.25' />
          <feColorMatrix
            values='
            0 0 0 9 -4
            0 0 0 9 -4
            0 0 0 9 -4
            0 0 0 0 1
            '
          />
        </filter>

        <rect width='100%' height='100%' filter='url(#filter)' />
      </svg>
    </div>
  );
};

const MemoStarrySky = memo(StarrySky);

export { MemoStarrySky as StarrySky };
