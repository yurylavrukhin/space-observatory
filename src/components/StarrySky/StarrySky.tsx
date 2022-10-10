import styles from './StarrySky.module.css';

export const StarrySky = () => {
  return (
    <div className={styles.starrySky}>
      <svg xmlns='http://www.w3.org/2000/svg' className={styles.svg}>
        <filter id='filter'>
          <feTurbulence baseFrequency='0.2' />
          <feColorMatrix
            values='0 0 0 9 -4
                    0 0 0 9 -4
                    0 0 0 9 -4
                    0 0 0 0 1'
          />
        </filter>
        <rect width='100%' height='100%' filter='url(#filter)' />
      </svg>
    </div>
  );
};
