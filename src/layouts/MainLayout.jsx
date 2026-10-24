import Footer from '../components/organisms/Footer';
import Navbar from '../components/organisms/Navbar';
import { COPYRIGHT, FOOTER_COLUMNS, FOOTER_INFO, SOCIAL_LINKS } from '../data/footerLinks';
import { ACCOUNT_LINKS, CURRENT_USER, NAV_LINKS } from '../data/navigation';

/**
 * Layout halaman utama: Navbar + konten + Footer.
 * Data navigasi & footer diambil dari folder data lalu dikirim lewat props.
 *
 * @param {object} props
 * @param {React.ReactNode} props.children
 */
export default function MainLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col bg-cream">
      <Navbar links={NAV_LINKS} accountLinks={ACCOUNT_LINKS} user={CURRENT_USER} />
      <main className="flex-1 pb-16 md:pb-24">{children}</main>
      <Footer
        info={FOOTER_INFO}
        columns={FOOTER_COLUMNS}
        socials={SOCIAL_LINKS}
        copyright={COPYRIGHT}
      />
    </div>
  );
}
