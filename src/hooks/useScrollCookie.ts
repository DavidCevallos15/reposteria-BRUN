import { useReducedMotion, useScroll, useTransform } from 'motion/react';
import type { RefObject } from 'react';

/** S1: la galleta del hero gira, crece y sube ligada al scroll del hero. */
export function useScrollCookie(target: RefObject<HTMLElement | null>) {
  const reduce = useReducedMotion() ?? false;
  const { scrollYProgress } = useScroll({ target, offset: ['start start', 'end start'] });
  const rotate = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 140]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.25]);
  const y = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '-18%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '25%']);
  return { rotate, scale, y, textY, scrollYProgress };
}
