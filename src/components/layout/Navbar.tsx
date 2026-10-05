import { useEffect, useState } from 'react';
import { media } from '@/config/media';
import { site } from '@/config/site';
import { copy } from '@/data/copy';
import { navLinks } from '@/data/nav';
import { cn } from '@/lib/cn';
import { getPrimaryCta } from '@/lib/whatsapp';
import { MenuIcon } from '../ui/Icons';
import { PillButton } from '../ui/PillButton';
import { MobileMenu } from './MobileMenu';

export function Logo({ className }: { className?: string }) {
  return (
    <a
      href="#hero"
      aria-label={copy.nav.home}
      className={cn('block shrink-0 overflow-hidden rounded-full bg-white ring-2 ring-accent/70', className)}
    >
      <img src={media.logo} alt={site.name} width={56} height={56} className="size-full object-cover" />
    </a>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const cta = getPrimaryCta();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-40 text-paper">
      {/* fondo que aparece al pasar 80px (solo opacity) */}
      <div
        aria-hidden
        className={cn(
          'absolute inset-0 bg-ink/90 shadow-[0_6px_24px_rgb(0_0_0/0.18)] backdrop-blur-md transition-opacity duration-300',
          scrolled ? 'opacity-100' : 'opacity-0',
        )}
      />
      <nav
        aria-label="Principal"
        className={cn(
          'relative mx-auto grid max-w-[1480px] grid-cols-[1fr_auto] items-center px-[18px] transition-[padding] duration-300 md:px-5 lg:grid-cols-[1fr_auto_1fr]',
          scrolled ? 'py-2.5' : 'py-4 md:py-5',
        )}
      >
        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative py-1 text-[15px] font-medium text-paper/85 transition-colors hover:text-paper after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <Logo className="size-12 md:size-14 lg:justify-self-center" />

        <div className="flex items-center justify-end gap-2">
          <PillButton href={cta.href} external withCircle className="max-lg:hidden" ariaLabel={`${copy.nav.cta} (${cta.label})`}>
            {copy.nav.cta}
          </PillButton>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label={copy.nav.menuOpen}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="grid size-12 place-items-center rounded-full border border-paper/30 text-paper lg:hidden"
          >
            <MenuIcon size={22} />
          </button>
        </div>
      </nav>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
