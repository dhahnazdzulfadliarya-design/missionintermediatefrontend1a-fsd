import useForm from '../../hooks/useForm';
import { validateLogin } from '../../utils/validators';
import AuthActions from '../molecules/AuthActions';
import FormField from '../molecules/FormField';
import PasswordInput from '../molecules/PasswordInput';

/**
 * Form masuk akun (controlled input + validasi sisi client).
 *
 * @param {object} props
 * @param {string} [props.initialEmail='']  Diisi otomatis setelah pendaftaran.
 * @param {(values: object) => void} props.onSubmit  Dipanggil bila semua field valid.
 * @param {() => void} props.onGoogleSignIn
 */
export default function LoginForm({ initialEmail = '', onSubmit, onGoogleSignIn }) {
  const { getFieldProps, handleSubmit } = useForm(
    { email: initialEmail, password: '' },
    validateLogin,
  );

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 sm:gap-6">
      <FormField
        label="E-Mail"
        type="email"
        autoComplete="email"
        placeholder="contoh@email.com"
        required
        {...getFieldProps('email')}
      />
      <PasswordInput
        label="Kata Sandi"
        autoComplete="current-password"
        placeholder="Masukkan kata sandi"
        required
        {...getFieldProps('password')}
      />

      <AuthActions
        submitLabel="Masuk"
        alternateLabel="Daftar"
        alternateTo="/register"
        socialLabel="Masuk dengan Google"
        onSocialClick={onGoogleSignIn}
      />
    </form>
  );
}
