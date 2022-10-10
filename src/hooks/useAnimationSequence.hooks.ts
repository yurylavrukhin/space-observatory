import React, { useEffect, useRef } from 'react';
import {
  AnimationName,
  useAnimationSequenceStore,
} from '../stores/animationSequenceZustand';
import { styleString } from '../util/stylesString';

type Modify<T, R> = Omit<T, keyof R> & R;

interface AnimationSequenceOptionsList
  extends Pick<AnimationSequenceOptions, 'callback' | 'name' | 'styles'> {
  styles: Keyframe[];
  config: Modify<
    KeyframeAnimationOptions,
    { delay: (index: number) => number }
  >;
}

export function useAnimationSequenceQueue<T extends (HTMLElement | null)[]>({
  name,
  styles,
  config,
  callback,
}: AnimationSequenceOptionsList) {
  const { animationSequence, markExecuted, markPlaying } =
    useAnimationSequenceStore();

  const currentAnimation = animationSequence[0];
  const animatingElementRef = useRef<T>([] as any);

  useEffect(() => {
    if (
      !animatingElementRef.current ||
      !Array.isArray(animatingElementRef.current)
    ) {
      return;
    }

    if (!currentAnimation) {
      return;
    }

    if (
      Array.isArray(currentAnimation) &&
      !currentAnimation.some((item) => item.name === name)
    ) {
      return;
    }

    if (typeof currentAnimation === 'string' && currentAnimation !== name) {
      return;
    }

    const isReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (isReducedMotion) {
      const finalStyles = styles.at(-1);
      if (!finalStyles) {
        return;
      }

      const finalStylesString = styleString(finalStyles);

      animatingElementRef.current.forEach((item) => {
        if (!item) {
          return;
        }

        item.style.cssText = finalStylesString;
      });

      markExecuted(name);

      if (callback) {
        callback();
      }

      return;
    }

    const promises: Promise<Animation>[] = [];

    animatingElementRef.current.forEach((item, index) => {
      if (!item) {
        return;
      }
      const newConfig = { ...config, delay: config.delay(index) };
      promises.push(item.animate(styles, newConfig).finished);
    });

    if (Array.isArray(currentAnimation)) {
      // markPlaying(name);
    }

    Promise.all(promises).then(() => {
      if (callback) {
        callback();
      }

      markExecuted(name);
    });
  }, [currentAnimation]);

  return { animatingElementRef };
}

interface AnimationSequenceOptions {
  name: AnimationName;
  styles: Keyframe[];
  callback?: Function;
}

export function useAnimationSequence<T extends HTMLElement | SVGElement>({
  name,
  styles,
  callback,
}: AnimationSequenceOptions): {
  ref: React.RefObject<T>;
} {
  const { animationSequence, markExecuted, markPlaying } =
    useAnimationSequenceStore();

  const currentAnimation = animationSequence[0];
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    if (!currentAnimation) {
      return;
    }

    if (
      Array.isArray(currentAnimation) &&
      !currentAnimation.some((item) => item.name === name)
    ) {
      return;
    }

    if (typeof currentAnimation === 'string' && currentAnimation !== name) {
      return;
    }

    const isReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (isReducedMotion) {
      const finalStyles = styles.at(-1);
      if (!finalStyles) {
        return;
      }
      const finalStylesString = styleString(finalStyles);

      ref.current.style.cssText = finalStylesString;

      markExecuted(name);

      if (callback) {
        callback();
      }

      return;
    }

    const isCurrentAnimationPlaying =
      Array.isArray(currentAnimation) &&
      currentAnimation.find((item) => item.name === name && item.isPlaying);

    if (isCurrentAnimationPlaying) {
      return;
    }

    const currentConfig = currentAnimation.find(
      (animation) => animation.name === name
    );

    const { finished } = ref.current.animate(styles, currentConfig?.config);

    if (Array.isArray(currentAnimation)) {
      markPlaying(name);
    }

    finished.then(() => {
      if (callback) {
        callback();
      }

      markExecuted(name);
    });
  }, [currentAnimation]);

  return { ref };
}
