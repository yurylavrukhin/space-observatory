export const styleString = (style: Keyframe) =>
  Object.entries(style)
    .map(([key, value]) => `${key}:${value}`)
    .join(';');
