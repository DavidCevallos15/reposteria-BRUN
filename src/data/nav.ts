import { sections } from '@/config/sections';

export type NavLink = { href: string; label: string };

export const navLinks: NavLink[] = sections
  .filter((s) => s.enabled && s.navLabel)
  .map((s) => ({ href: `#${s.id}`, label: s.navLabel as string }));
