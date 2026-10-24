import { useId } from 'react';

/**
 * Kartu putih berisi judul, subjudul, dan form (halaman Login & Register).
 *
 * @param {object} props
 * @param {string} props.title
 * @param {string} [props.subtitle]
 * @param {React.ReactNode} props.children  Isi kartu, biasanya <LoginForm /> / <RegisterForm />.
 */
export default function AuthCard({ title, subtitle, children }) {
  const titleId = useId();

  return (
    <section
      aria-labelledby={titleId}
      className="w-full max-w-[590px] rounded border border-line-light bg-white p-5 sm:p-9"
    >
      <header className="text-center">
        <h1
          id={titleId}
          className="font-heading text-2xl font-semibold text-ink sm:text-[32px] sm:leading-tight"
        >
          {title}
        </h1>
        {subtitle && <p className="mt-2.5 text-sm text-ink-muted sm:text-base">{subtitle}</p>}
      </header>

      <div className="mt-6 sm:mt-9">{children}</div>
    </section>
  );
}
