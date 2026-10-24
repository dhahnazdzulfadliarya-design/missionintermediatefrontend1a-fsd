import Icon from '../atoms/Icon';
import Logo from '../atoms/Logo';
import FooterLinkGroup from '../molecules/FooterLinkGroup';

/**
 * Footer: logo, tagline, alamat, kontak, kolom tautan, ikon sosial media, dan hak cipta.
 *
 * @param {object} props
 * @param {{ tagline: string, address: string, phone: string }} props.info
 * @param {{ title: string, links: { label: string, href: string }[] }[]} props.columns
 * @param {{ name: string, icon: string, href: string }[]} props.socials
 * @param {string} props.copyright
 */
export default function Footer({ info, columns, socials, copyright }) {
  return (
    <footer className="border-t border-line bg-white">
      <div className="container-page py-8 md:py-[60px]">
        <div className="flex flex-col gap-6 lg:flex-row lg:justify-between lg:gap-16">
          <div className="max-w-[352px]">
            <Logo />
            <p className="mt-4 font-heading text-base font-bold text-ink sm:text-lg">{info.tagline}</p>
            <address className="mt-4 flex flex-col gap-1 text-sm not-italic text-ink sm:text-base">
              <span>{info.address}</span>
              <a
                href={`tel:${info.phone.replace(/[^+\d]/g, '')}`}
                className="w-fit transition-colors hover:text-primary"
              >
                {info.phone}
              </a>
            </address>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-8 lg:gap-12 xl:gap-20">
            {columns.map((column) => (
              <FooterLinkGroup key={column.title} title={column.title} links={column.links} />
            ))}
          </div>
        </div>

        <hr className="my-6 border-line" />

        <div className="flex flex-col-reverse gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-ink-muted sm:text-base">{copyright}</p>
          <ul className="flex gap-4">
            {socials.map((social) => (
              <li key={social.name}>
                <a
                  href={social.href}
                  aria-label={social.name}
                  className="grid h-11 w-11 place-items-center rounded-full border border-ink/20 text-ink transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <Icon name={social.icon} className="h-5 w-5" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
