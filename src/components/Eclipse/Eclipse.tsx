import { useCallback, useEffect, useRef, useState } from 'react';
import { useAnimationSequence } from '../../hooks/useAnimationSequence.hooks';
import { Star, STAR_SIZE } from '../../Star/Star';
import { easeOutCirc } from '../../util/easings';
import styles from './Eclipse.module.css';

export const Eclipse = () => {
  const eclipseRef = useRef<HTMLDivElement>(null);

  const { ref: planetRef } = useAnimationSequence<HTMLDivElement>({
    name: 'eclipse',
    styles: [
      {
        transform: 'translate(calc(-50% + 25px), calc(-50% + 25px))',
      },
      {
        transform: 'translate(calc(-50% + 0px), calc(-50% + 0px))',
      },
    ],
  });

  const { ref: smallShadowRef } = useAnimationSequence<HTMLDivElement>({
    name: 'eclipse-shadow-1',
    styles: [
      {
        opacity: 0,
      },
      {
        opacity: 1,
      },
    ],
  });

  const { ref: mediumShadowRef } = useAnimationSequence<HTMLDivElement>({
    name: 'eclipse-shadow-2',
    styles: [
      {
        opacity: 0,
      },
      {
        opacity: 1,
      },
      {
        opacity: 0.5,
      },
    ],
  });

  const { ref: largeShadowRef } = useAnimationSequence<HTMLDivElement>({
    name: 'eclipse-shadow-3',
    styles: [
      {
        opacity: 0,
      },
      {
        opacity: 1,
      },
      {
        opacity: 0,
      },
    ],
  });

  const { ref: diamondRingRef } = useAnimationSequence<HTMLDivElement>({
    name: 'diamond-ring',
    styles: [
      {
        opacity: 0,
        offset: 0.5,
      },
      {
        opacity: 1,
        offset: 0.53,
      },
      {
        opacity: 0,
      },
    ],
  });

  const [points, setPoints] = useState<{ x: number; y: number }[]>([]);

  const clearStar = useCallback(() => {
    setPoints([]);
    setIsExploding(false);
  }, []);

  const [isExploding, setIsExploding] = useState(false);

  const handleClick = useCallback(
    (event: MouseEvent) => {
      console.log('event', event.target);

      if (!eclipseRef.current) {
        return;
      }

      if (!eclipseRef.current.contains(event.target as Node)) {
        return;
      }

      if (points.length > 4) {
        setIsExploding(true);
        // explode + call callback
        return;
      }

      setPoints([...points, { x: event.clientX, y: event.clientY }]);
    },
    [points]
  );

  useEffect(() => {
    if (!eclipseRef.current) {
      return;
    }

    const { width, height } = eclipseRef.current.getBoundingClientRect();
    document.body.addEventListener('click', handleClick);

    return () => {
      document.body.removeEventListener('click', handleClick);
    };
  }, [handleClick]);

  return (
    <div ref={eclipseRef} className={styles.eclipse}>
      {/* {points.map(({ x, y }) => {
        return (
          <div
            style={{
              position: 'absolute',
              top: y - STAR_SIZE / 2,
              left: x - STAR_SIZE / 2,
            }}
          >
            <Star isExploding={isExploding} onFade={clearStar}></Star>
          </div>
        );
      })} */}
      <div className={styles.star} />

      <div ref={smallShadowRef} className={styles.smallShadow} />
      <div ref={mediumShadowRef} className={styles.mediumShadow} />
      <div ref={largeShadowRef} className={styles.largeShadow} />
      <div ref={planetRef} className={styles.planet} />

      <div ref={diamondRingRef} className={styles.diamondRingWrapper}>
        <div className={styles.diamondRing} />
      </div>
    </div>
  );
};
