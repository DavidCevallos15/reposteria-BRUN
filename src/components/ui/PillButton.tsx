import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';
import { buttonStyles, type ButtonVariant } from './buttonStyles';
import { FillLayer, IconCircle } from './IconCircle';

type Props = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  withCircle?: boolean;
  external?: boolean;
  icon?: ReactNode;
  className?: string;
  onClick?: () => void;
  ariaLabel?: string;
};

/** Pill + (opcional) círculo ↗ en un solo link. Ambos con el fill que sube (M8). */
export function PillButton({
  href,
  children,
  variant = 'accent',
  withCircle = false,
  external = false,
  icon,
  className,
  onClick,
  ariaLabel,
}: Props) {
  return (
    <a
      href={href}
      onClick={onClick}
      aria-label={ariaLabel}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={cn(
        'group inline-flex items-center gap-1 rounded-full transition-transform duration-150 active:scale-[0.97] motion-reduce:transition-none',
        className,
      )}
    >
      <span
        className={cn(
          'relative inline-flex h-12 items-center gap-2 overflow-hidden rounded-full px-6 text-[15px] font-semibold transition-colors duration-300',
          buttonStyles.base[variant],
          buttonStyles.hoverText[variant],
        )}
      >
        <FillLayer variant={variant} />
        {icon && <span className="relative z-10">{icon}</span>}
        <span className="relative z-10 whitespace-nowrap">{children}</span>
      </span>
      {withCircle && <IconCircle variant={variant} />}
    </a>
  );
}
