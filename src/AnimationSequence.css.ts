type AnimationNameSequence1 =
  | 'eclipse'
  | 'eclipse-shadow-small'
  | 'eclipse-shadow-medium'
  | 'eclipse-shadow-large'
  | 'diamond-ring'
  | 'darkness'
  | 'stars'
  | 'shooting-stars'
  | 'twinkling-stars';

export const animationSequenceSeries1 = new Map<AnimationNameSequence1, number>(
  [
    ['eclipse', 10000],
    ['eclipse-shadow-small', 10000],
    ['eclipse-shadow-medium', 10000],
    ['eclipse-shadow-large', 10000],
    ['diamond-ring', 10000],
    ['darkness', 10000],
    ['stars', 10000],
    ['shooting-stars', 10000],
    ['twinkling-stars', 10000],
  ]
);

const firstSeriesLongestAnimation = Math.max(
  ...[...animationSequenceSeries1.values()]
);

export const firstSeriesAnimationDuration = `${firstSeriesLongestAnimation}ms`;

type AnimationNameSequence2 = 'pane-reveal' | 'form-reveal' | 'space-fade';

export const animationSequenceSeries2 = new Map<AnimationNameSequence2, number>(
  [
    ['pane-reveal', 1500],
    ['form-reveal', 1500],
    ['space-fade', 10000],
  ]
);

export const secondSeriesLongestAnimation = Math.max(
  ...[...animationSequenceSeries2.values()].map(
    (item) => item + firstSeriesLongestAnimation
  )
);

export const secondSeriesAnimationDuration = `${secondSeriesLongestAnimation}ms`;

type AnimationNameSequence3 = 'logo-reveal';

export const animationSequenceSeries3 = new Map<AnimationNameSequence3, number>(
  [['logo-reveal', 1500]]
);
