import Button from '../atoms/Button';

/**
 * Banner utama beranda: gambar latar + overlay gelap, headline, deskripsi, dan tombol CTA.
 *
 * @param {object} props
 * @param {string} props.title
 * @param {string} props.description
 * @param {string} props.ctaLabel
 * @param {string} props.ctaHref          Misal "#koleksi".
 * @param {string} props.backgroundImage  URL gambar latar.
 */
export default function HeroSection({ title, description, ctaLabel, ctaHref, backgroundImage }) {
  return (
    <section className="container-page pt-6 md:pt-16">
      <div className="relative isolate overflow-hidden rounded-[10px] px-5 py-14 text-center sm:px-12 md:py-20 lg:px-[140px] lg:py-24">
        <img
          src={backgroundImage}
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-black/80" />

        <h1 className="mx-auto max-w-[920px] font-heading text-2xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-[1.2]">
          {title}
        </h1>
        <p className="mx-auto mt-3 max-w-[920px] text-sm text-white sm:text-base">{description}</p>

        <Button href={ctaHref} size="lg" className="mt-6 sm:mt-9">
          {ctaLabel}
        </Button>
      </div>
    </section>
  );
}
