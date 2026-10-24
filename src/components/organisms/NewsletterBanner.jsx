import { useId, useState } from 'react';
import { validateEmail } from '../../utils/validators';
import Button from '../atoms/Button';
import Input from '../atoms/Input';

/**
 * Banner ajakan berlangganan newsletter (simulasi, tanpa kirim ke server).
 *
 * @param {object} props
 * @param {string} props.eyebrow          Teks kecil di atas judul, misal "Newsletter".
 * @param {string} props.title
 * @param {string} props.description
 * @param {string} props.placeholder
 * @param {string} props.buttonLabel
 * @param {string} props.backgroundImage  URL gambar latar.
 */
export default function NewsletterBanner({
  eyebrow,
  title,
  description,
  placeholder,
  buttonLabel,
  backgroundImage,
}) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const headingId = useId();
  const inputId = useId();
  const statusId = useId();

  const handleChange = (event) => {
    setEmail(event.target.value);
    setError('');
    setIsSubscribed(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const emailError = validateEmail(email);
    if (emailError) {
      setError(emailError);
      return;
    }
    setIsSubscribed(true);
    setEmail('');
  };

  return (
    <section aria-labelledby={headingId} className="container-page">
      <div className="relative isolate overflow-hidden rounded-[10px] px-5 py-10 text-center sm:px-10 md:py-16">
        <img
          src={backgroundImage}
          alt=""
          loading="lazy"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-black/80" />

        <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-300 sm:text-lg">
          {eyebrow}
        </p>
        <h2
          id={headingId}
          className="mt-1 font-heading text-2xl font-semibold text-white sm:text-[32px] sm:leading-tight"
        >
          {title}
        </h2>
        <p className="mx-auto mt-2.5 max-w-[525px] text-sm text-white sm:text-base">{description}</p>

        <form
          noValidate
          onSubmit={handleSubmit}
          className="mx-auto mt-6 flex max-w-[525px] flex-col gap-4 sm:mt-10 sm:flex-row sm:gap-2 sm:rounded-[10px] sm:bg-white sm:p-2 sm:focus-within:ring-2 sm:focus-within:ring-secondary"
        >
          <label htmlFor={inputId} className="sr-only">
            Alamat e-mail
          </label>
          <Input
            id={inputId}
            type="email"
            autoComplete="email"
            value={email}
            onChange={handleChange}
            placeholder={placeholder}
            hasError={Boolean(error)}
            aria-describedby={statusId}
            className="rounded-[10px] text-center sm:h-11 sm:border-0 sm:text-left sm:focus:ring-0"
          />
          <Button type="submit" variant="accent" className="w-full sm:w-auto">
            {buttonLabel}
          </Button>
        </form>

        <p id={statusId} role="status" className="mt-3 min-h-5 text-sm">
          {error && <span className="text-red-300">{error}</span>}
          {isSubscribed && (
            <span className="text-primary-light">Terima kasih! Kamu sudah berlangganan newsletter.</span>
          )}
        </p>
      </div>
    </section>
  );
}
