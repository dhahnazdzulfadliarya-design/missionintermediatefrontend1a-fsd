import { useEffect, useRef, useState } from 'react';
import Avatar from '../atoms/Avatar';
import Icon from '../atoms/Icon';
import Logo from '../atoms/Logo';
import NavLinks from '../molecules/NavLinks';

const MENU_ID = 'navbar-menu';

/**
 * Navbar sticky: logo, menu utama, dan avatar pengguna.
 * Desktop: klik avatar membuka dropdown menu akun.
 * HP: tombol hamburger membuka panel berisi menu utama + menu akun.
 *
 * @param {object} props
 * @param {{ label: string, href?: string, to?: string }[]} props.links         Menu utama.
 * @param {{ label: string, href?: string, to?: string }[]} props.accountLinks  Menu akun.
 * @param {{ name: string, avatar: string }} props.user
 */
export default function Navbar({ links, accountLinks, user }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null);

  // Tutup menu saat klik di luar navbar atau menekan Escape.
  useEffect(() => {
    if (!isMenuOpen) return undefined;

    const handlePointerDown = (event) => {
      if (!navRef.current?.contains(event.target)) setIsMenuOpen(false);
    };
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsMenuOpen(false);
    };

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen((open) => !open);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-40 bg-white shadow-nav">
      <nav
        ref={navRef}
        aria-label="Navigasi utama"
        className="container-page relative flex h-16 items-center justify-between gap-4 md:h-[74px]"
      >
        <Logo />

        <div className="flex items-center gap-9">
          <NavLinks links={links} className="hidden items-center gap-9 md:flex" />

          <button
            type="button"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-controls={MENU_ID}
            aria-label="Menu akun"
            className="hidden rounded-[10px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 md:block"
          >
            <Avatar src={user.avatar} size="lg" />
          </button>

          <button
            type="button"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-controls={MENU_ID}
            aria-label={isMenuOpen ? 'Tutup menu' : 'Buka menu'}
            className="-mr-2.5 grid h-11 w-11 place-items-center rounded-md text-ink-muted transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary md:hidden"
          >
            <Icon name={isMenuOpen ? 'close' : 'menu'} className="h-6 w-6" />
          </button>
        </div>

        {isMenuOpen && (
          <div
            id={MENU_ID}
            className="absolute inset-x-0 top-full border-t border-line bg-white shadow-nav md:left-auto md:right-8 md:mt-2 md:w-60 md:rounded-[10px] md:border"
          >
            <div className="flex items-center gap-3 border-b border-line px-5 py-4 md:hidden">
              <Avatar src={user.avatar} size="lg" />
              <p className="truncate text-base font-medium text-ink">{user.name}</p>
            </div>
            <NavLinks links={links} className="px-5 pt-2 md:hidden" onNavigate={closeMenu} />
            <NavLinks links={accountLinks} className="px-5 pb-3 md:py-2" onNavigate={closeMenu} />
          </div>
        )}
      </nav>
    </header>
  );
}
