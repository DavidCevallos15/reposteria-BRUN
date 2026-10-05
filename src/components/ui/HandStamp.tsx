import { motion, useReducedMotion } from 'motion/react';
import { cn } from '@/lib/cn';
import { EASE } from '@/lib/motion';

/** M7 → sello "Hecho a mano" rotado, en Caveat Brush color berry. */
export function HandStamp({ text, className }: { text: string; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.p
      className={cn(
        'inline-block rounded-full border-[3px] border-berry px-6 py-1 font-hand text-[clamp(1.75rem,1.2rem+2vw,2.75rem)] leading-tight text-berry',
        className,
      )}
      initial={reduce ? { rotate: -4 } : { opacity: 0, scale: 0.9, rotate: -8 }}
      whileInView={{ opacity: 1, scale: 1, rotate: -4 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 0.6, ease: EASE }}
    >
      {text}
    </motion.p>
  );
}
