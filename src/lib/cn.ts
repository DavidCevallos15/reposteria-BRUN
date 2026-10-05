import { clsx, type ClassValue } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

// Los tamaños custom (text-h1…) son font-size, no color: evita que twMerge los descarte.
const twMerge = extendTailwindMerge({
  extend: { classGroups: { 'font-size': [{ text: ['h1', 'h2', 'h3', 'statement'] }] } },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
