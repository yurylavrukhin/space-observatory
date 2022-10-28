import { useState, useRef, useEffect } from 'react';

export const useIncrementingNumber = (delay: number) => {
  const [count, setCount] = useState(0);

  const savedCallback = useRef(() => setCount((c) => c + 1));

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    let id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay]);

  return count;
};
