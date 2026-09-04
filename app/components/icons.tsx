import type { SVGProps } from "react";

/**
 * Icon cohesion: 1.5px strokes, sharp corners, outline-only geometry,
 * and a technical folded-line metaphor throughout.
 */

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function Icon({ size = 20, children, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export function ArrowOutIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M5 19 19 5M8 5h11v11" stroke="currentColor" strokeWidth="1.5" />
    </Icon>
  );
}

export function FoldIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M4 19 15 4h5v5L9 20H4v-1Z" stroke="currentColor" strokeWidth="1.5" />
      <path d="m15 4 5 5M9 20l-5-5" stroke="currentColor" strokeWidth="1.5" />
    </Icon>
  );
}

export function ThemeIcon({ isLight, ...props }: IconProps & { isLight: boolean }) {
  return (
    <Icon {...props}>
      {isLight ? (
        <><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" /><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5 19 19M19 5l-1.5 1.5M6.5 17.5 5 19" stroke="currentColor" strokeWidth="1.5" /></>
      ) : (
        <path d="M20 15.4A8 8 0 0 1 8.6 4 8.1 8.1 0 1 0 20 15.4Z" stroke="currentColor" strokeWidth="1.5" />
      )}
    </Icon>
  );
}
