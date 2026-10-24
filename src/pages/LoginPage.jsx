import { useLocation, useNavigate } from 'react-router-dom';
import AuthCard from '../components/organisms/AuthCard';
import LoginForm from '../components/organisms/LoginForm';
import useDocumentTitle from '../hooks/useDocumentTitle';
import AuthLayout from '../layouts/AuthLayout';

export default function LoginPage() {
  useDocumentTitle('Masuk');
  const navigate = useNavigate();
  const location = useLocation();
  // Diisi oleh RegisterPage setelah pendaftaran berhasil.
  const registeredEmail = location.state?.registeredEmail ?? '';

  const goToHome = () => navigate('/');

  return (
    <AuthLayout>
      <AuthCard title="Masuk ke Akun" subtitle="Yuk, lanjutin belajarmu di videobelajar.">
        {registeredEmail && (
          <p role="status" className="mb-6 rounded-md bg-primary-light px-4 py-3 text-sm text-ink">
            Pendaftaran berhasil! Silakan masuk dengan akun barumu.
          </p>
        )}
        <LoginForm initialEmail={registeredEmail} onSubmit={goToHome} onGoogleSignIn={goToHome} />
      </AuthCard>
    </AuthLayout>
  );
}
