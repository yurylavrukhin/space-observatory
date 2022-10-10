export const createStar = ({ points = 5, x = 0, y = 0, size = 1 }) => {
  return Array.from(
    {
      length: points * 2,
    },
    (_, i) => {
      return new DOMMatrix()
        .translate(x, y)
        .scale(size)
        .rotate((i / points) * 360)
        .translate(0, i % 2 ? -1 : -2)
        .transformPoint({ x: 0, y: 0 });
    }
  );
};

// export const toCSSPolygon = (points: DOMMatrix[]) => {
export const toCSSPolygon = (points: any[]) => {
  const pointsString = points
    .map((point) => `${point.x}px ${point.y}px`)
    .join(', ');

  return `polygon(${pointsString})`;
};
