export const interval = (callback: () => void, delay: number): void => {
  let start: DOMHighResTimeStamp;
  const tick = (now: DOMHighResTimeStamp) => {
    if (!start) {
      start = now;
    }

    if (now - start >= delay) {
      start = now;
      callback();
    }
    window.requestAnimationFrame(tick);
  };

  window.requestAnimationFrame(tick);
};
