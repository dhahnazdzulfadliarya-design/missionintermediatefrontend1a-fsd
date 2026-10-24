import { flagImage } from '../../utils/image';
import Icon from '../atoms/Icon';
import FormField from './FormField';

/**
 * FormField No. HP dengan dropdown kode negara di sebelah kiri.
 * Dropdown memakai <select> asli (transparan) agar tetap aksesibel dan
 * memunculkan picker bawaan di HP, sementara tampilannya mengikuti desain.
 *
 * @param {object} props
 * @param {{ code: string, dialCode: string, name: string }[]} props.countries
 * @param {string} props.countryCode                    Kode ISO terpilih, misal "ID".
 * @param {string} [props.countryFieldName='countryCode'] `name` untuk <select>.
 * @param {(e: React.ChangeEvent) => void} props.onChange  Dipakai oleh input & select.
 * Props lain (label, name, value, error, ...) diteruskan ke <FormField />.
 */
export default function PhoneInput({
  countries,
  countryCode,
  countryFieldName = 'countryCode',
  onChange,
  ...fieldProps
}) {
  const selectedCountry = countries.find((country) => country.code === countryCode) ?? countries[0];

  return (
    <FormField
      {...fieldProps}
      type="tel"
      inputMode="numeric"
      onChange={onChange}
      leading={
        <div className="relative flex h-12 shrink-0 items-center gap-2 rounded-md border border-line bg-white px-3 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20">
          <img
            src={flagImage(selectedCountry.code)}
            alt=""
            className="h-4 w-6 rounded-sm object-cover"
          />
          <span className="text-base text-ink">{selectedCountry.dialCode}</span>
          <Icon name="chevron-down" className="h-4 w-4 text-ink-muted" />
          <select
            name={countryFieldName}
            value={selectedCountry.code}
            onChange={onChange}
            aria-label="Kode negara"
            className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
          >
            {countries.map((country) => (
              <option key={country.code} value={country.code}>
                {country.name} ({country.dialCode})
              </option>
            ))}
          </select>
        </div>
      }
    />
  );
}
