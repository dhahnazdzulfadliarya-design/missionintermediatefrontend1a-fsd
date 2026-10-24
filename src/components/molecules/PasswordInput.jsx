import { useState } from 'react';
import Icon from '../atoms/Icon';
import FormField from './FormField';

/**
 * FormField kata sandi dengan tombol tampilkan/sembunyikan.
 *
 * @param {object} props  Sama dengan props <FormField /> (label, name, value, onChange, error, ...).
 */
export default function PasswordInput(props) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <FormField
      {...props}
      type={isVisible ? 'text' : 'password'}
      trailing={
        <button
          type="button"
          onClick={() => setIsVisible((visible) => !visible)}
          aria-label={isVisible ? 'Sembunyikan kata sandi' : 'Tampilkan kata sandi'}
          className="grid h-11 w-11 place-items-center rounded-md text-ink-muted transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <Icon name={isVisible ? 'eye' : 'eye-off'} />
        </button>
      }
    />
  );
}
