import { cn } from '../../utils/cn';

/**
 * Garis pemisah horizontal, opsional dengan teks di tengah (misal "atau").
 *
 * @param {object} props
 * @param {string} [props.label]
 * @param {string} [props.className]
 */
export default function Divider({ label, className }) {
  return (
    <div className={cn('flex items-center gap-2.5', className)}>
      <span aria-hidden="true" className="h-px flex-1 bg-line" />
      {label && <span className="text-sm text-ink-muted sm:text-base">{label}</span>}
      <span aria-hidden="true" className="h-px flex-1 bg-line" />
    </div>
  );
}
