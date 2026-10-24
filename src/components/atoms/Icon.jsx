// Ikon SVG inline agar tidak perlu library ikon. Warna mengikuti `currentColor`.

const STROKE = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};
const FILL = { fill: 'currentColor' };

const ICONS = {
  eye: {
    attrs: STROKE,
    content: (
      <>
        <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
        <circle cx="12" cy="12" r="3" />
      </>
    ),
  },
  'eye-off': {
    attrs: STROKE,
    content: (
      <>
        <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
        <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
        <path d="M6.61 6.61A13.53 13.53 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
        <path d="M2 2l20 20" />
      </>
    ),
  },
  menu: {
    attrs: STROKE,
    content: <path d="M4 6h16M4 12h16M4 18h16" />,
  },
  close: {
    attrs: STROKE,
    content: <path d="M18 6 6 18M6 6l12 12" />,
  },
  'chevron-down': {
    attrs: STROKE,
    content: <path d="m6 9 6 6 6-6" />,
  },
  'chevron-right': {
    attrs: STROKE,
    content: <path d="m9 18 6-6-6-6" />,
  },
  'log-out': {
    attrs: STROKE,
    content: (
      <>
        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
        <path d="m16 17 5-5-5-5M21 12H9" />
      </>
    ),
  },
  star: {
    attrs: FILL,
    content: (
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    ),
  },
  linkedin: {
    attrs: FILL,
    content: (
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
    ),
  },
  facebook: {
    attrs: FILL,
    content: (
      <path d="M14 8h3V4h-3c-2.76 0-5 2.24-5 5v2H7v4h2v9h4v-9h3l1-4h-4V9c0-.55.45-1 1-1z" />
    ),
  },
  instagram: {
    attrs: STROKE,
    content: (
      <>
        <rect width="20" height="20" x="2" y="2" rx="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01" />
      </>
    ),
  },
  twitter: {
    attrs: STROKE,
    content: (
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    ),
  },
  google: {
    viewBox: '0 0 48 48',
    attrs: {},
    content: (
      <>
        <path
          fill="#FFC107"
          d="M43.61 20.08H42V20H24v8h11.3C33.65 32.66 29.22 36 24 36c-6.63 0-12-5.37-12-12s5.37-12 12-12c3.06 0 5.84 1.15 7.96 3.04l5.66-5.66C34.05 6.05 29.27 4 24 4 12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20c0-1.34-.14-2.65-.39-3.92z"
        />
        <path
          fill="#FF3D00"
          d="m6.31 14.69 6.57 4.82C14.66 15.11 18.96 12 24 12c3.06 0 5.84 1.15 7.96 3.04l5.66-5.66C34.05 6.05 29.27 4 24 4 16.32 4 9.66 8.34 6.31 14.69z"
        />
        <path
          fill="#4CAF50"
          d="M24 44c5.17 0 9.86-1.98 13.41-5.19l-6.19-5.24A11.9 11.9 0 0 1 24 36c-5.2 0-9.62-3.32-11.28-7.95l-6.52 5.03C9.5 39.56 16.23 44 24 44z"
        />
        <path
          fill="#1976D2"
          d="M43.61 20.08H42V20H24v8h11.3a12.04 12.04 0 0 1-4.09 5.57l6.19 5.24C36.97 39.2 44 34 44 24c0-1.34-.14-2.65-.39-3.92z"
        />
      </>
    ),
  },
};

/**
 * Ikon dekoratif berdasarkan nama.
 *
 * @param {object} props
 * @param {keyof typeof ICONS} props.name  eye | eye-off | menu | close | chevron-down |
 *        chevron-right | log-out | star | linkedin | facebook | instagram | twitter | google
 * @param {string} [props.className='h-5 w-5']  Ukuran & warna (via text-*).
 */
export default function Icon({ name, className = 'h-5 w-5' }) {
  const icon = ICONS[name];
  if (!icon) return null;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={icon.viewBox ?? '0 0 24 24'}
      className={className}
      aria-hidden="true"
      focusable="false"
      {...icon.attrs}
    >
      {icon.content}
    </svg>
  );
}
