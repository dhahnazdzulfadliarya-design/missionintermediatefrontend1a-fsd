import { Link } from 'react-router-dom';
import { cn } from '../../utils/cn';

const SIZE_STYLES = {
  sm: 'text-2xl',
  md: 'text-[26px] md:text-[32px]',
};

/**
 * Logo teks "videobelajar" yang mengarah ke beranda.
 *
 * @param {object} props
 * @param {string} [props.to='/']
 * @param {'sm'|'md'} [props.size='md']
 */
export default function Logo({ to = '/', size = 'md' }) {
  return (
    <Link
      to={to}
      aria-label="videobelajar, ke beranda"
      className={cn(
        'inline-flex min-h-[44px] shrink-0 items-center rounded font-heading font-extrabold leading-none tracking-tight text-accent',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4',
        SIZE_STYLES[size] ?? SIZE_STYLES.md,
      )}
    >
      videobelajar
    </Link>
  );
}
