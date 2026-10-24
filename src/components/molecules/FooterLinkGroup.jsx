import { useId, useState } from 'react';
import { cn } from '../../utils/cn';
import Icon from '../atoms/Icon';

/**
 * Satu kolom tautan footer. Di HP tampil sebagai akordeon (judul + chevron),
 * mulai tablet selalu terbuka.
 *
 * @param {object} props
 * @param {string} props.title
 * @param {{ label: string, href: string }[]} props.links
 */
export default function FooterLinkGroup({ title, links }) {
  const [isOpen, setIsOpen] = useState(false);
  const listId = useId();

  return (
    <nav aria-label={title}>
      <h3 className="font-heading text-base font-semibold text-ink">
        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-controls={listId}
          className="flex min-h-[44px] w-full items-center justify-between rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:hidden"
        >
          {title}
          <Icon
            name="chevron-right"
            className={cn('h-5 w-5 transition-transform', isOpen && 'rotate-90')}
          />
        </button>
        <span className="hidden sm:block">{title}</span>
      </h3>

      <ul
        id={listId}
        className={cn('flex-col pb-2 sm:mt-1.5 sm:flex sm:pb-0', isOpen ? 'flex' : 'hidden')}
      >
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="inline-flex min-h-[44px] items-center rounded text-base text-ink-muted transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
