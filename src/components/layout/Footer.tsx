import { motion, useReducedMotion } from 'motion/react';
import { contact } from '@/config/contact';
import { site } from '@/config/site';
import { social, socialLabels } from '@/config/social';
import { copy } from '@/data/copy';
import { navLinks } from '@/data/nav';
import { EASE } from '@/lib/motion';
import { FacebookIcon, InstagramIcon, TikTokIcon } from '../ui/Icons';
import { PillButton } from '../ui/PillButton';
import { Logo } from './Navbar';

const socialIcons = { instagram: InstagramIcon, tiktok: TikTokIcon, facebook: FacebookIcon } as const;

export function Footer() {
  const reduce = useReducedMotion();
  const year = new Date().getFullYear();
  const socials = (Object.keys(social) as Array<keyof typeof social>).filter((k) => social[k]);

  return (
    <footer className="relative overflow-hidden bg-ink text-paper">
      <div className="mx-auto max-w-[1480px] px-[18px] pt-20 md:px-5 md:pt-28">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr_1fr_1.3fr] md:gap-16">
          <div className="flex flex-col gap-4">
            <Logo className="size-16" />
            <p className="max-w-[30ch] text-paper/70">{site.description}</p>
          </div>

          <nav aria-label={copy.footer.pages}>
            <h2 className="mb-4 text-sm font-semibold tracking-[0.12em] text-accent uppercase">{copy.footer.pages}</h2>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-paper/80 transition-colors hover:text-accent">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {socials.length > 0 && (
            <div>
              <h2 className="mb-4 text-sm font-semibold tracking-[0.12em] text-accent uppercase">{copy.footer.social}</h2>
              <ul className="flex flex-col gap-2.5">
                {socials.map((k) => {
                  const Icon = socialIcons[k];
                  return (
                    <li key={k}>
                      <a
                        href={social[k]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2.5 text-paper/80 transition-colors hover:text-accent"
                      >
                        <Icon size={18} />
                        {socialLabels[k]}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}

          <div>
            <h2 className="mb-4 text-sm font-semibold tracking-[0.12em] text-accent uppercase">{copy.footer.find}</h2>
            <address className="mb-6 not-italic text-paper/80">
              <a href={contact.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                {contact.address}
              </a>
            </address>
            <PillButton href={contact.rappiUrl} external withCircle>
              {copy.footer.rappi}
            </PillButton>
          </div>
        </div>
      </div>

      <motion.p
        aria-hidden
        className="font-display mt-12 px-[18px] text-[clamp(5rem,15vw,16rem)] leading-[0.8] text-accent select-none md:px-5"
        initial={reduce ? false : { opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.9, ease: EASE }}
      >
        <span className="mx-auto block max-w-[1480px]">{copy.footer.wordmark}</span>
      </motion.p>

      <div className="mx-auto mt-8 flex max-w-[1480px] flex-col gap-2 border-t border-paper/10 px-[18px] py-6 text-sm text-paper/60 md:flex-row md:justify-between md:px-5">
        <p>
          © {year} {site.name} · {copy.footer.rights}
        </p>
        <p>
          {copy.footer.credit}{' '}
          {site.credit.url ? (
            <a href={site.credit.url} target="_blank" rel="noopener noreferrer" className="text-paper/80 hover:text-accent">
              {site.credit.label}
            </a>
          ) : (
            <span className="text-paper/80">{site.credit.label}</span>
          )}
        </p>
      </div>
    </footer>
  );
}
