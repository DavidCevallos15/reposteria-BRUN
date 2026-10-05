import type { Variants } from 'motion/react';

export const EASE = [0.22, 1, 0.36, 1] as const;

// M1/M3: split por letra (stagger total ~0.3s por línea)
export const letterParent = (count: number, amount = 0.3, delay = 0): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: amount / Math.max(count, 1), delayChildren: delay } },
});
export const letter: Variants = {
  hidden: { x: '-100%', opacity: 0 },
  show: { x: '0%', opacity: 1, transition: { duration: 0.25, ease: EASE } },
};

// M2/M6: split por línea con máscara (overflow-hidden en el wrapper)
export const lineParent = (delay = 0): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: 0.25, delayChildren: delay } },
});
export const line: Variants = {
  hidden: { y: '100%', opacity: 0 },
  show: { y: '0%', opacity: 1, transition: { duration: 0.3, ease: EASE } },
};
// Statement (M6): recorrido más largo
export const statementLine: Variants = {
  hidden: { y: 60, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: EASE } },
};

// M4/M5: deck slide, stagger inverso (la última card entra primero)
export const deckParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, staggerDirection: -1 } },
};
export const deckItem: Variants = {
  hidden: { x: '-100%', opacity: 0 },
  show: { x: '0%', opacity: 1, transition: { duration: 0.55, ease: EASE } },
};

export const inView = {
  initial: 'hidden',
  whileInView: 'show',
  viewport: { once: true, amount: 0.25 },
} as const;
