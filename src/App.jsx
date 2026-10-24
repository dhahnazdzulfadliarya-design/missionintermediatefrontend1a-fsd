import { Navigate, Route, Routes } from 'react-router-dom';
import useScrollToTop from './hooks/useScrollToTop';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

export default function App() {
  useScrollToTop();

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      {/* Rute tidak dikenal diarahkan ke beranda. */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
