import { cn } from '../../utils/cn';

/**
 * Label form dengan tanda bintang merah untuk field wajib.
 *
 * @param {object} props
 * @param {string} props.htmlFor            id input yang dihubungkan.
 * @param {React.ReactNode} props.children  Teks label.
 * @param {boolean} [props.required=false]
 * @param {string} [props.className]
 */
export default function Label({ htmlFor, children, required = false, className }) {
  return (
    <label htmlFor={htmlFor} className={cn('text-base text-ink-muted', className)}>
      {children}
      {required && (
        <span className="text-red-500" aria-hidden="true">
          {' '}
          *
        </span>
      )}
    </label>
  );
}
