import { useNavigate } from 'react-router-dom';
import AuthCard from '../components/organisms/AuthCard';
import RegisterForm from '../components/organisms/RegisterForm';
import { COUNTRY_CODES } from '../data/countryCodes';
import useDocumentTitle from '../hooks/useDocumentTitle';
import AuthLayout from '../layouts/AuthLayout';

export default function RegisterPage() {
  useDocumentTitle('Daftar');
  const navigate = useNavigate();

  // Simulasi: tidak ada data yang dikirim ke server, cukup pindah ke halaman login.
  const handleRegister = (values) => {
    navigate('/login', { state: { registeredEmail: values.email.trim() } });
  };

  return (
    <AuthLayout>
      <AuthCard title="Pendaftaran Akun" subtitle="Yuk, daftarkan akunmu sekarang juga!">
        <RegisterForm
          countries={COUNTRY_CODES}
          onSubmit={handleRegister}
          onGoogleSignIn={() => navigate('/')}
        />
      </AuthCard>
    </AuthLayout>
  );
}
