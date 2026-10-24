import Button from '../atoms/Button';
import Divider from '../atoms/Divider';
import SocialButton from './SocialButton';

/**
 * Bagian bawah form auth yang sama di Login & Register:
 * "Lupa Password?", tombol submit, tombol pindah halaman, divider, dan SSO Google.
 *
 * @param {object} props
 * @param {string} props.submitLabel     Label tombol submit (primary).
 * @param {string} props.alternateLabel  Label tombol secondary.
 * @param {string} props.alternateTo     Rute tombol secondary, misal "/login".
 * @param {string} props.socialLabel     Label tombol Google.
 * @param {() => void} props.onSocialClick
 * @param {string} [props.forgotPasswordHref='#']
 */
export default function AuthActions({
  submitLabel,
  alternateLabel,
  alternateTo,
  socialLabel,
  onSocialClick,
  forgotPasswordHref = '#',
}) {
  return (
    <>
      <a
        href={forgotPasswordHref}
        className="-my-2 inline-flex min-h-[44px] items-center self-end rounded text-base font-medium text-ink-muted transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
        Lupa Password?
      </a>

      <div className="flex flex-col gap-4">
        <Button type="submit" fullWidth>
          {submitLabel}
        </Button>
        <Button variant="secondary" to={alternateTo} fullWidth>
          {alternateLabel}
        </Button>
      </div>

      <Divider label="atau" />

      <SocialButton onClick={onSocialClick}>{socialLabel}</SocialButton>
    </>
  );
}
