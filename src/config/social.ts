// vacío = no se renderiza
export const social = {
  instagram: 'https://www.instagram.com/dulceatelier.demo/', // handle de demo
  tiktok: '', // TODO
  facebook: 'https://www.facebook.com/dulceatelier.demo', // handle de demo
} as const;

export const socialLabels: Record<keyof typeof social, string> = {
  instagram: 'Instagram',
  tiktok: 'TikTok',
  facebook: 'Facebook',
};
