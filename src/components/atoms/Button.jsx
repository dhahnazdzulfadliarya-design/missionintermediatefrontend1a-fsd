import { Link } from 'react-router-dom';
import { cn } from '../../utils/cn';

const VARIANT_STYLES = {
  primary: 'bg-primary text-white hover:bg-primary-dark focus-visible:ring-primary',
  secondary: 'bg-primary-light/80 text-primary hover:bg-primary-light focus-visible:ring-primary',
  outline:
    'border border-line-light bg-white text-ink-soft hover:border-line hover:bg-gray-50 focus-visible:ring-gray-300',
  accent: 'bg-secondary text-white hover:bg-secondary-dark focus-visible:ring-secondary',
};

// Tinggi minimal 44px agar mudah disentuh di HP.
const SIZE_STYLES = {
  sm: 'min-h-[44px] px-4 py-2 text-sm',
  md: 'min-h-[44px] px-6 py-2.5 text-base',
  lg: 'min-h-[48px] px-6 py-3 text-base sm:px-8',
};

/**
 * Tombol reusable. Otomatis menjadi <Link> bila `to` diisi, atau <a> bila `href` diisi.
 *
 * @param {object} props
 * @param {React.ReactNode} props.children
 * @param {'primary'|'secondary'|'outline'|'accent'} [props.variant='primary']
 * @param {'sm'|'md'|'lg'} [props.size='md']
 * @param {boolean} [props.fullWidth=false]
 * @param {React.ReactNode} [props.leftIcon]  Ikon di kiri label.
 * @param {string} [props.to]                 Rute internal React Router, misal "/login".
 * @param {string} [props.href]               Tautan biasa / anchor, misal "#koleksi".
 * @param {'button'|'submit'|'reset'} [props.type='button']
 * @param {string} [props.className]
 * Props lain (onClick, disabled, aria-*) diteruskan ke elemen.
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  leftIcon,
  to,
  href,
  type = 'button',
  className,
  ...props
}) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2.5 rounded-[10px] text-center font-semibold leading-snug transition-colors duration-200',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
    'disabled:cursor-not-allowed disabled:opacity-60',
    VARIANT_STYLES[variant] ?? VARIANT_STYLES.primary,
    SIZE_STYLES[size] ?? SIZE_STYLES.md,
    fullWidth && 'w-full',
    className,
  );

  const content = (
    <>
      {leftIcon}
      {children}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {content}
    </button>
  );
}
