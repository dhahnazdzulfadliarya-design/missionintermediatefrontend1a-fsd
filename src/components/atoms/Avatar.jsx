import { cn } from '../../utils/cn';

const SIZE_STYLES = {
  sm: 'h-9 w-9',
  md: 'h-10 w-10',
  lg: 'h-11 w-11',
};

/**
 * Foto profil persegi dengan sudut membulat (sesuai desain).
 *
 * @param {object} props
 * @param {string} props.src
 * @param {string} [props.alt='']  Kosongkan bila nama sudah tertulis di sebelahnya.
 * @param {'sm'|'md'|'lg'} [props.size='md']
 * @param {string} [props.className]
 */
export default function Avatar({ src, alt = '', size = 'md', className }) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={cn(
        'shrink-0 rounded-[10px] bg-gray-100 object-cover',
        SIZE_STYLES[size] ?? SIZE_STYLES.md,
        className,
      )}
    />
  );
}
