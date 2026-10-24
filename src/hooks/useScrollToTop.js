import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/** Kembalikan posisi scroll ke atas setiap kali pindah halaman. */
export default function useScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}
