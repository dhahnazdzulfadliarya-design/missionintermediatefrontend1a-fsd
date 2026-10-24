import { cn } from '../../utils/cn';

/**
 * Elemen <input> dasar dengan gaya desain VideoBelajar.
 *
 * @param {object} props
 * @param {boolean} [props.hasError=false]  Border merah saat validasi gagal.
 * @param {string} [props.className]
 * Props lain (id, name, type, value, onChange, placeholder, ...) diteruskan ke <input>.
 */
export default function Input({ hasError = false, className, ...props }) {
  return (
    <input
      aria-invalid={hasError || undefined}
      className={cn(
        // text-base (16px) mencegah iOS melakukan zoom otomatis saat input difokuskan.
        'h-12 w-full min-w-0 rounded-md border bg-white px-3.5 text-base text-ink transition-shadow',
        'placeholder:text-gray-400 focus:outline-none focus:ring-2',
        hasError
          ? 'border-red-500 focus:ring-red-100'
          : 'border-line focus:border-primary focus:ring-primary/20',
        className,
      )}
      {...props}
    />
  );
}
