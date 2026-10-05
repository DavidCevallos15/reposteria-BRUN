// vacío = no se renderiza
export const social = {
  instagram: 'https://www.instagram.com/brun_ec/', // confirmado por captura del perfil
  tiktok: '', // TODO
  facebook: 'https://www.facebook.com/profile.php?id=100063639005518', // aportado por David
} as const;

export const socialLabels: Record<keyof typeof social, string> = {
  instagram: 'Instagram',
  tiktok: 'TikTok',
  facebook: 'Facebook',
};
