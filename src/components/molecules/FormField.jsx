import { cn } from '../../utils/cn';
import Input from '../atoms/Input';
import Label from '../atoms/Label';

/**
 * Label + Input + pesan error. Dipakai langsung, atau dibungkus oleh
 * PasswordInput (slot `trailing`) dan PhoneInput (slot `leading`).
 *
 * @param {object} props
 * @param {string} props.label
 * @param {string} props.name               Juga dipakai sebagai id input.
 * @param {string} [props.error]            Pesan error validasi.
 * @param {boolean} [props.required=false]
 * @param {React.ReactNode} [props.leading]  Elemen di kiri input (misal pilihan kode negara).
 * @param {React.ReactNode} [props.trailing] Elemen di dalam input sisi kanan (misal tombol mata).
 * @param {string} [props.className]
 * Props lain (type, value, onChange, placeholder, autoComplete, ...) diteruskan ke <Input />.
 */
export default function FormField({
  label,
  name,
  error,
  required = false,
  leading,
  trailing,
  className,
  ...inputProps
}) {
  const errorId = `${name}-error`;

  return (
    <div className={cn('flex flex-col gap-1', className)}>
      <Label htmlFor={name} required={required}>
        {label}
      </Label>

      <div className="flex gap-2 sm:gap-3">
        {leading}
        <div className="relative min-w-0 flex-1">
          <Input
            id={name}
            name={name}
            required={required}
            hasError={Boolean(error)}
            aria-describedby={error ? errorId : undefined}
            className={trailing ? 'pr-12' : undefined}
            {...inputProps}
          />
          {trailing && (
            <div className="absolute inset-y-0 right-0 flex items-center pr-0.5">{trailing}</div>
          )}
        </div>
      </div>

      {error && (
        <p id={errorId} className="text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
