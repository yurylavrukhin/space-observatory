import { memo, useRef } from 'react';
import { star } from './Star.css';

const Star = () => {
  return (
    <div className={star}>
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
};

export default memo(Star);
