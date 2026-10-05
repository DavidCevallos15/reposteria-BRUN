import { useState, type CSSProperties, type ReactNode } from 'react';
import { copy } from '@/data/copy';
import { cn } from '@/lib/cn';

type MediaSlotProps = {
  src?: string;
  alt: string;
  /** CSS aspect-ratio, p. ej. '411/500'. Evita layout shift. */
  ratio?: string;
  className?: string;
  mediaClassName?: string;
  priority?: boolean;
  kind?: 'image' | 'video';
  fit?: 'cover' | 'contain';
  /** Placeholder claro (cream) u oscuro (para fondos de hero). */
  tone?: 'light' | 'dark';
  /** Se muestra en lugar del placeholder si el archivo falta. */
  fallback?: ReactNode;
  /** Renderiza el contenedor como <span> (para usar dentro de texto). */
  inline?: boolean;
};

const VIDEO_EXT = /\.(mp4|webm|mov)$/i;

export function MediaSlot({
  src,
  alt,
  ratio,
  className,
  mediaClassName,
  priority = false,
  kind,
  fit = 'cover',
  tone = 'light',
  fallback,
  inline = false,
}: MediaSlotProps) {
  const Box = inline ? 'span' : 'div';
  const [failedSrc, setFailedSrc] = useState<string | null>(null);
  const missing = !src || failedSrc === src;
  const isVideo = kind ? kind === 'video' : VIDEO_EXT.test(src ?? '');
  const style: CSSProperties | undefined = ratio ? { aspectRatio: ratio } : undefined;
  const fail = () => setFailedSrc(src ?? null);

  if (missing && fallback) {
    return (
      <Box className={cn('relative', className)} style={style}>
        {fallback}
      </Box>
    );
  }

  if (missing) {
    return (
      <Box
        className={cn(
          'relative grid place-items-center overflow-hidden border-2 border-dashed p-4 text-center',
          tone === 'light' ? 'border-line bg-cream text-muted' : 'border-paper/15 bg-cocoa/20 text-paper/50',
          className,
        )}
        style={style}
        role="img"
        aria-label={alt}
      >
        <span className="max-w-full font-mono text-[11px] leading-snug break-all">
          {copy.media.missing} {src || '(sin ruta)'}
        </span>
      </Box>
    );
  }

  const mediaCls = cn('size-full', fit === 'cover' ? 'object-cover' : 'object-contain', mediaClassName);

  return (
    <Box className={cn('relative overflow-hidden', className)} style={style}>
      {isVideo ? (
        <video
          className={mediaCls}
          src={src}
          muted
          autoPlay
          loop
          playsInline
          preload={priority ? 'auto' : 'metadata'}
          aria-label={alt}
          onError={fail}
        />
      ) : (
        <img
          className={mediaCls}
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          {...{ fetchpriority: priority ? 'high' : 'auto' }}
          decoding="async"
          onError={fail}
        />
      )}
    </Box>
  );
}
