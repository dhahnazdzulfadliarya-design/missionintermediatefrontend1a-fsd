import Logo from '../components/atoms/Logo';

/**
 * Layout halaman Login & Register: header berisi logo + konten di tengah layar.
 *
 * @param {object} props
 * @param {React.ReactNode} props.children  Biasanya <AuthCard />.
 */
export default function AuthLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col bg-cream">
      <header className="bg-white shadow-nav">
        <div className="container-page flex h-16 items-center md:h-[74px]">
          <Logo />
        </div>
      </header>

      <main className="flex flex-1 justify-center px-5 py-7 sm:items-center sm:px-8 sm:py-16">
        {children}
      </main>
    </div>
  );
}
