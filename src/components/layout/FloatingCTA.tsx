import { useEffect, useState } from 'react';
import { copy } from '@/data/copy';
import { cn } from '@/lib/cn';
import { getPrimaryCta } from '@/lib/whatsapp';
import { BagIcon, ChatIcon } from '../ui/Icons';

/** Solo mobile: aparece al salir del hero. WhatsApp si hay número; si no, Rappi. */
export function FloatingCTA() {
  const cta = getPrimaryCta();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href={cta.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${copy.floating.label}: ${cta.label}`}
      tabIndex={visible ? 0 : -1}
      className={cn(
        'fixed right-4 bottom-4 z-30 grid size-14 place-items-center rounded-full bg-accent text-ink shadow-[0_8px_24px_rgb(58_21_19/0.35)] ring-2 ring-ink/10 transition-[opacity,transform] duration-300 ease-(--ease-out-brun) active:scale-95 md:hidden motion-reduce:transition-none',
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0',
      )}
    >
      {cta.kind === 'whatsapp' ? <ChatIcon size={26} /> : <BagIcon size={26} />}
    </a>
  );
}
