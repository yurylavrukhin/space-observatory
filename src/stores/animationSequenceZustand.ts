import create from 'zustand';
import { devtools } from 'zustand/middleware';
import { easeInOutQuart, easeOutCirc } from '../util/easings';

interface ParallelAnimation {
  name: AnimationName;
  config?: KeyframeAnimationOptions;
  isPlaying?: boolean;
}

type AnimationSequence = ParallelAnimation[][];

interface AnimationSequenceStore {
  animationSequence: AnimationSequence;
  markExecuted: (name: string) => void;
  markPlaying: (name: string) => void;
}

export type AnimationName =
  | 'eclipse'
  | 'eclipse-shadow-1'
  | 'eclipse-shadow-2'
  | 'eclipse-shadow-3'
  | 'diamond-ring'
  | 'darkness'
  | 'stars'
  | 'shooting-stars'
  | 'twinkling-stars'
  | 'pane-reveal'
  | 'form-reveal'
  | 'space-fade'
  | 'logo-reveal';

const INITIAL_DELAY = 300;

const ANIMATION_SEQUENCE: AnimationSequence = [
  [
    {
      name: 'eclipse',
      config: {
        duration: 1500,
        easing: 'cubic-bezier(0.5, 1, 0.89, 1)',
        fill: 'forwards',
      },
    },
    {
      name: 'eclipse-shadow-1',
      config: {
        duration: 1500,
        easing: 'cubic-bezier(0.5, 1, 0.89, 1)',
        fill: 'forwards',
      },
    },
    {
      name: 'eclipse-shadow-2',
      config: {
        duration: 1500,
        easing: 'cubic-bezier(0.5, 1, 0.89, 1)',
        fill: 'forwards',
      },
    },
    {
      name: 'eclipse-shadow-3',
      config: {
        duration: 1500,
        easing: 'cubic-bezier(0.5, 1, 0.89, 1)',
        fill: 'forwards',
      },
    },
    {
      name: 'diamond-ring',
      config: {
        duration: 1500,
        easing: 'cubic-bezier(0.5, 1, 0.89, 1)',
        fill: 'forwards',
        delay: 400,
      },
    },
    {
      name: 'darkness',
      config: {
        duration: 2500,
        easing: 'cubic-bezier(0.5, 1, 0.89, 1)',
        fill: 'forwards',
      },
    },
    {
      name: 'stars',
      config: {
        duration: 2500,
        easing: 'cubic-bezier(0.5, 1, 0.89, 1)',
        fill: 'forwards',
      },
    },
    {
      name: 'shooting-stars',
      config: {
        duration: 1500,
        easing: 'cubic-bezier(0.5, 1, 0.89, 1)',
        fill: 'forwards',
      },
    },
    {
      name: 'twinkling-stars',
      config: {
        duration: 3000,
        easing: 'cubic-bezier(0.5, 1, 0.89, 1)',
        fill: 'forwards',
      },
    },
  ],
  [
    {
      name: 'pane-reveal',
      config: {
        duration: 1000,
        easing: easeInOutQuart,
        fill: 'forwards',
      },
    },
    {
      name: 'form-reveal',
      config: {
        duration: 400,
        easing: 'ease',
        fill: 'forwards',
        delay: 1050,
      },
    },
    {
      name: 'space-fade',
      config: {
        duration: 1000,
        easing: 'ease-out',
        fill: 'forwards',
      },
    },
  ],
  [{ name: 'logo-reveal' }],
];

ANIMATION_SEQUENCE[0].forEach((item) => {
  if (!item.config?.delay) {
    if (!item.config) {
      item.config = { delay: INITIAL_DELAY };
    } else {
      if (item.config.delay) {
        item.config.delay += INITIAL_DELAY;
      } else {
        item.config.delay = INITIAL_DELAY;
      }
    }
  }
});

export const useAnimationSequenceStore = create(
  devtools<AnimationSequenceStore>(
    (set, get) => ({
      animationSequence: ANIMATION_SEQUENCE,

      markExecuted: (name: string) => {
        const currentAnimation = get().animationSequence[0];

        if (Array.isArray(currentAnimation) && currentAnimation.length > 1) {
          const newState = get();

          const newCurrentAnimation = currentAnimation.filter(
            (item) => item.name !== name
          );
          newState.animationSequence[0] = newCurrentAnimation;

          set(newState);
        } else {
          const newState = { ...get() };

          const [, ...newAnimationSequence] = newState.animationSequence;

          newState.animationSequence = newAnimationSequence;

          set(newState);
        }
      },

      markPlaying: (name: string) => {
        const currentAnimation = get().animationSequence[0];
        if (!Array.isArray(currentAnimation)) {
          return;
        }

        const newState = { ...get() };

        const newCurrentAnimation = currentAnimation.map((item) =>
          item.name === name ? { name, isPlaying: true } : item
        );

        newState.animationSequence[0] = newCurrentAnimation;

        set(newState);
      },
    }),
    { name: 'animation sequence store' }
  )
);
