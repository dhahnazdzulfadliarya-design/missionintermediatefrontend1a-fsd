import Button from '../atoms/Button';
import Icon from '../atoms/Icon';

/**
 * Tombol SSO, misal "Daftar dengan Google".
 *
 * @param {object} props
 * @param {React.ReactNode} props.children  Label tombol.
 * @param {'google'} [props.provider='google']  Nama ikon di atoms/Icon.
 * Props lain (onClick, ...) diteruskan ke <Button />.
 */
export default function SocialButton({ children, provider = 'google', ...props }) {
  return (
    <Button
      variant="outline"
      fullWidth
      leftIcon={<Icon name={provider} className="h-5 w-5 shrink-0" />}
      {...props}
    >
      {children}
    </Button>
  );
}
