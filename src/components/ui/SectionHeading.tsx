import { cn } from '@/lib/cn';
import { SplitText } from './SplitText';

type Props = { text: string; id?: string; className?: string; as?: 'h2' | 'h3' };

/** H2 de sección en display, split por letra al entrar (M3). */
export function SectionHeading({ text, id, className, as = 'h2' }: Props) {
  return (
    <SplitText
      as={as}
      id={id}
      by="letter"
      lines={[text]}
      className={cn('font-display text-h2 text-balance', className)}
    />
  );
}
