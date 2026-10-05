import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function Svg({ size = 20, children, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

export const ArrowUpRight = (p: IconProps) => (
  <Svg {...p}>
    <path d="M7 17 17 7" />
    <path d="M8 7h9v9" />
  </Svg>
);

export const MenuIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M4 8h16" />
    <path d="M4 16h16" />
  </Svg>
);

export const CloseIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M6 6l12 12" />
    <path d="M18 6 6 18" />
  </Svg>
);

export const BagIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M5 8h14l-1 12H6L5 8Z" />
    <path d="M9 8V6a3 3 0 0 1 6 0v2" />
  </Svg>
);

export const ChatIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M4 20l1.4-4.2A8 8 0 1 1 8.6 19L4 20Z" />
    <path d="M9.5 9.5c.3 1.8 1.7 3.4 3.6 4.1l1.2-1.1 1.8.8c-.2 1-1 1.6-2 1.6-3 0-5.8-2.8-5.8-5.8 0-1 .6-1.8 1.6-2l.8 1.8-1.2.6Z" />
  </Svg>
);

export const PinIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </Svg>
);

export const ClockIcon = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 2" />
  </Svg>
);

export const InstagramIcon = (p: IconProps) => (
  <Svg {...p}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r=".6" fill="currentColor" />
  </Svg>
);

export const FacebookIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M15 4h-2.5A3.5 3.5 0 0 0 9 7.5V10H6.5v3.5H9V21h3.5v-7.5H15l.5-3.5h-3V8a.9.9 0 0 1 .9-.9H15V4Z" />
  </Svg>
);

export const TikTokIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M14 3v11.5a3.5 3.5 0 1 1-3.5-3.5" />
    <path d="M14 3c.4 2.6 2.4 4.6 5 5" />
  </Svg>
);

export const StarIcon = ({ fillLevel = 1, ...p }: IconProps & { fillLevel?: number }) => {
  const pct = `${Math.round(Math.min(Math.max(fillLevel, 0), 1) * 100)}%`;
  const id = `star-${pct.replace('%', '')}`;
  return (
    <Svg strokeWidth={1.25} {...p}>
      <defs>
        <linearGradient id={id}>
          <stop offset={pct} stopColor="currentColor" />
          <stop offset={pct} stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        fill={`url(#${id})`}
        d="m12 3.5 2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9L12 3.5Z"
      />
    </Svg>
  );
};
