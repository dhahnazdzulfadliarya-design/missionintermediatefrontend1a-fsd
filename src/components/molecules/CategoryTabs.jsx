import { cn } from '../../utils/cn';

/**
 * Tab filter kategori. Di HP daftar tab bisa digeser horizontal.
 *
 * @param {object} props
 * @param {string[]} props.categories
 * @param {string} props.activeCategory
 * @param {(category: string) => void} props.onChange
 * @param {string} [props.className]
 */
export default function CategoryTabs({ categories, activeCategory, onChange, className }) {
  return (
    // -mx-5/px-5 = gutter container di HP, agar tab bisa digeser sampai tepi layar.
    <div className={cn('scrollbar-none -mx-5 overflow-x-auto px-5 sm:mx-0 sm:px-0', className)}>
      <div role="group" aria-label="Filter kategori kelas" className="flex min-w-max gap-6 sm:gap-9">
        {categories.map((category) => {
          const isActive = category === activeCategory;

          return (
            <button
              key={category}
              type="button"
              aria-pressed={isActive}
              onClick={() => onChange(category)}
              className={cn(
                'relative min-h-[44px] whitespace-nowrap rounded-sm pb-3 text-base font-medium transition-colors',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent',
                isActive ? 'text-accent' : 'text-ink-muted hover:text-ink',
              )}
            >
              {category}
              <span
                aria-hidden="true"
                className={cn(
                  'absolute bottom-0 left-0 h-1.5 w-[52px] rounded-[10px] transition-colors',
                  isActive ? 'bg-accent' : 'bg-transparent',
                )}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
