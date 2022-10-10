import { memo } from 'react';
import { useAnimationSequence } from '../../hooks/useAnimationSequence.hooks';
import { container, day, night, stars } from './StarrySky.css';

const StarrySky = () => {
  const { ref: nightRef } = useAnimationSequence<HTMLDivElement>({
    name: 'darkness',
    styles: [
      {
        opacity: 0,
      },
      {
        opacity: 1,
      },
    ],
  });

  const { ref: starsRef } = useAnimationSequence<SVGSVGElement>({
    name: 'stars',
    styles: [
      {
        opacity: 0,
      },
      {
        opacity: 0.3,
      },
    ],
  });

  return (
    <div className={container}>
      <div className={day} />

      <div ref={nightRef} className={night} />

      <svg ref={starsRef} xmlns='http://www.w3.org/2000/svg' className={stars}>
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
