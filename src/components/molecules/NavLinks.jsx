import { Link } from 'react-router-dom';
import { cn } from '../../utils/cn';
import Icon from '../atoms/Icon';

const TONE_STYLES = {
  default: 'text-ink-muted hover:text-ink',
  danger: 'text-accent hover:text-accent/80',
};

/**
 * Daftar tautan navigasi. Item dengan `to` memakai React Router <Link>,
 * item dengan `href` memakai <a> biasa (misal anchor "#koleksi").
 *
 * @param {object} props
 * @param {{ label: string, to?: string, href?: string, icon?: string, tone?: 'default'|'danger' }[]} props.links
 * @param {string} [props.className]      Kelas untuk <ul> (atur arah flex di sini).
 * @param {string} [props.linkClassName]  Kelas tambahan untuk tiap tautan.
 * @param {() => void} [props.onNavigate] Dipanggil saat tautan diklik (misal menutup menu).
 */
export default function NavLinks({ links, className, linkClassName, onNavigate }) {
  return (
    <ul className={className}>
      {links.map((link) => {
        const classes = cn(
          'flex min-h-[44px] items-center gap-2 rounded text-base font-medium transition-colors',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
          TONE_STYLES[link.tone] ?? TONE_STYLES.default,
          linkClassName,
        );
        const content = (
          <>
            {link.label}
            {link.icon && <Icon name={link.icon} className="h-4 w-4" />}
          </>
        );

        return (
          <li key={link.label}>
            {link.to ? (
              <Link to={link.to} className={classes} onClick={onNavigate}>
                {content}
              </Link>
            ) : (
              <a href={link.href} className={classes} onClick={onNavigate}>
                {content}
              </a>
            )}
          </li>
        );
      })}
    </ul>
  );
}
