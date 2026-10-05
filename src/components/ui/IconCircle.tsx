import { cn } from '@/lib/cn';
import { ArrowUpRight } from './Icons';
import { buttonStyles, type ButtonVariant } from './buttonStyles';

export type { ButtonVariant };

/** M8: capa de fill que sube en hover. Va dentro de un ancestro `group`. */
export function FillLayer({ variant }: { variant: ButtonVariant }) {
  return (
    <span
      aria-hidden
      className={cn(
        'absolute inset-0 translate-y-[50px] scale-95 rounded-full transition-transform duration-[400ms] ease-(--ease-out-brun) group-hover:translate-y-0 group-hover:scale-100 motion-reduce:transition-none',
        buttonStyles.fill[variant],
      )}
    />
  );
}

/** Círculo con flecha ↗. Se renderiza como span: el link lo pone el padre. */
export function IconCircle({ variant = 'accent', className }: { variant?: ButtonVariant; className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        'relative grid size-12 shrink-0 place-items-center overflow-hidden rounded-full transition-colors duration-300',
        buttonStyles.base[variant],
        buttonStyles.hoverText[variant],
        className,
      )}
    >
      <FillLayer variant={variant} />
      <ArrowUpRight
        size={20}
        className="relative z-10 transition-transform duration-300 ease-(--ease-out-brun) group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
      />
    </span>
  );
}
