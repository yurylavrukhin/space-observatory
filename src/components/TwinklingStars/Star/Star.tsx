import { memo, useEffect, useRef } from 'react';
import { litStar, star } from './Star.css';

export const Star = memo((props: { id: string; isLit: boolean }) => {
  const starRef = useRef<HTMLDivElement>(null);

  console.log('rerender star');

  return (
    <div className={`${props.isLit ? litStar : ''} ${star}`} ref={starRef}>
      <svg
        width='100%'
        height='100%'
        viewBox='0 0 40 40'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M20 0L25.0912 14.9088L40 20L25.0912 25.0912L20 40L14.9088 25.0912L0 20L14.9088 14.9088L20 0Z'
          fill='#ffffff'
        />
      </svg>
    </div>
  );
});
