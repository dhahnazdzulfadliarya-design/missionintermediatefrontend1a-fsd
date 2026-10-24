import { avatarImage } from '../utils/image';

/** Menu utama navbar. */
export const NAV_LINKS = [{ label: 'Kategori', href: '#koleksi' }];

/** Menu akun (dropdown avatar di desktop, menu hamburger di HP). */
export const ACCOUNT_LINKS = [
  { label: 'Profil Saya', href: '#' },
  { label: 'Kelas Saya', href: '#koleksi' },
  { label: 'Pesanan Saya', href: '#' },
  { label: 'Keluar', to: '/login', icon: 'log-out', tone: 'danger' },
];

/** Pengguna dummy yang sedang "login". */
export const CURRENT_USER = {
  name: 'Pelajar videobelajar',
  avatar: avatarImage(33),
};
