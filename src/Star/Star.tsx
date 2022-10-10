import { memo, useEffect, useRef, useState } from 'react';
import { easeInOutQuart } from '../util/easings';
import { getRandomNumberInRange } from '../util/getRandomNumberInRange';

export const STAR_SIZE = 30;

const createStar = ({ points = 4, x = 0, y = 0, size = 1 }) => {
  return Array.from(
    {
      length: points * 2,
    },
    (_, i) => {
      return new DOMMatrix()
        .translate(x, y)
        .scale(size)
        .rotate((i / (points * 2)) * 360)
        .translate(0, i % 2 ? -1.5 : -0.6)
        .transformPoint({ x: 0, y: 0 });
    }
  );
};

const toCSSPolygon = (points: DOMPoint[]) => {
  const pointsString = points
    .map((point) => `${point.x}px ${point.y}px`)
    .join(', ');

  return `polygon(${pointsString})`;
};
export const Star: React.FC<{ onFade: () => void; isExploding: boolean }> =
  memo((props) => {
    const starRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (!starRef.current) {
        return;
      }

      const rect = starRef.current.getBoundingClientRect();
      const x = rect.width / 2;
      const y = rect.height / 2;

      const points = getRandomNumberInRange(4, 5);
      const endSize = getRandomNumberInRange(5, 5);

      starRef.current.animate(
        [
          {
            clipPath: toCSSPolygon(createStar({ points, x, y, size: 2 })),
          },
          {
            clipPath: toCSSPolygon(createStar({ points, x, y, size: endSize })),
          },
        ],
        {
          duration: 200,
          easing: easeInOutQuart,
          fill: 'forwards',
        }
      );

      // const { finished } = starRef.current.animate(
      //   [
      //     {
      //       clipPath: toCSSPolygon(createStar({ points, x, y, size: endSize })),
      //     },
      //     {
      //       clipPath: toCSSPolygon(
      //         createStar({ points, x, y, size: endSize + 4 })
      //       ),
      //     },
      //     {
      //       clipPath: toCSSPolygon(createStar({ points, x, y, size: 0 })),
      //     },
      //   ],
      //   {
      //     duration: 200,
      //     easing: easeInOutQuart,
      //     fill: 'forwards',
      //     delay: 1000,
      //   }
      // );

      // finished.then(() => {
      //   props.onFade();
      // });
    }, []);

    useEffect(() => {
      if (!starRef.current) {
        return;
      }

      if (props.isExploding) {
        const { finished } = starRef.current.animate(
          [
            {
              transform: 'scale(1)',
            },
            {
              transform: 'scale(5)',
              opacity: 0,
            },
          ],
          {
            duration: 400,
            easing: easeInOutQuart,
            fill: 'forwards',
          }
        );

        finished.then(() => {
          props.onFade();
        });
      }
    }, [props.isExploding, props.onFade]);

    return (
      <div
        style={{
          filter:
            'drop-shadow(0 0 5px white) blur(1px) drop-shadow(0 0 15px white)',
        }}
      >
        <div
          style={{
            width: STAR_SIZE,
            height: STAR_SIZE,
            background: 'white',
          }}
          ref={starRef}
        ></div>
      </div>
    );
  });
