export type ButtonVariant = 'accent' | 'dark' | 'ghost-light' | 'ghost-dark';

const base: Record<ButtonVariant, string> = {
  accent: 'bg-accent text-ink',
  dark: 'bg-ink text-paper',
  'ghost-light': 'border border-paper/35 text-paper',
  'ghost-dark': 'border border-ink/30 text-ink',
};

const fill: Record<ButtonVariant, string> = {
  accent: 'bg-paper',
  dark: 'bg-cocoa',
  'ghost-light': 'bg-paper',
  'ghost-dark': 'bg-ink',
};

const hoverText: Record<ButtonVariant, string> = {
  accent: '',
  dark: '',
  'ghost-light': 'group-hover:text-ink',
  'ghost-dark': 'group-hover:text-paper',
};

export const buttonStyles = { base, fill, hoverText };

