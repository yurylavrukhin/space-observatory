function getRandomPositiveFloat(a, b, digits = 1) {
  if (a < 0 || b < 0 || digits < 0) {
    return NaN;
  }
  const lower = Math.min(a, b);
  const upper = Math.max(a, b);
  const result = Math.random() * (upper - lower) + lower;
  return +result.toFixed(digits);
}

export const getRandomNumberInRange = (min, max) => {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const STARS_AMOUNT = 75;

export const getPoints = () => {
  const points = {};

  for (let i = 0; i < STARS_AMOUNT; i++) {
    const size = getRandomNumberInRange(5, 20);

    const top = getRandomNumberInRange(0, 100);
    const opacity = getRandomPositiveFloat(0.1, 1);
    const left = getRandomNumberInRange(0, 100);

    points[i] = {
      top,
      left,
      size,
      opacity,
    };
  }

  return points;
};
