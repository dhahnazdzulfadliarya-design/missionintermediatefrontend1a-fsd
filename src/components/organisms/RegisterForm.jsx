import useForm from '../../hooks/useForm';
import { validateRegister } from '../../utils/validators';
import AuthActions from '../molecules/AuthActions';
import FormField from '../molecules/FormField';
import PasswordInput from '../molecules/PasswordInput';
import PhoneInput from '../molecules/PhoneInput';

/**
 * Form pendaftaran akun (controlled input + validasi sisi client).
 *
 * @param {object} props
 * @param {{ code: string, dialCode: string, name: string }[]} props.countries  Item pertama = default.
 * @param {(values: object) => void} props.onSubmit  Dipanggil bila semua field valid.
 * @param {() => void} props.onGoogleSignIn
 */
export default function RegisterForm({ countries, onSubmit, onGoogleSignIn }) {
  const { values, getFieldProps, handleSubmit } = useForm(
    {
      fullName: '',
      email: '',
      countryCode: countries[0].code,
      phone: '',
      password: '',
      confirmPassword: '',
    },
    validateRegister,
  );

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 sm:gap-6">
      <FormField
        label="Nama Lengkap"
        autoComplete="name"
        placeholder="Masukkan nama lengkap"
        required
        {...getFieldProps('fullName')}
      />
      <FormField
        label="E-Mail"
        type="email"
        autoComplete="email"
        placeholder="contoh@email.com"
        required
        {...getFieldProps('email')}
      />
      <PhoneInput
        label="No. Hp"
        autoComplete="tel-national"
        placeholder="81234567890"
        required
        countries={countries}
        countryCode={values.countryCode}
        {...getFieldProps('phone')}
      />
      <PasswordInput
        label="Kata Sandi"
        autoComplete="new-password"
        placeholder="Minimal 8 karakter"
        required
        {...getFieldProps('password')}
      />
      <PasswordInput
        label="Konfirmasi Kata Sandi"
        autoComplete="new-password"
        placeholder="Ulangi kata sandi"
        required
        {...getFieldProps('confirmPassword')}
      />

      <AuthActions
        submitLabel="Daftar"
        alternateLabel="Masuk"
        alternateTo="/login"
        socialLabel="Daftar dengan Google"
        onSocialClick={onGoogleSignIn}
      />
    </form>
  );
}
