/**
 * Gabungkan beberapa className Tailwind dan abaikan nilai falsy.
 * Contoh: cn('px-4', isActive && 'bg-primary-700') -> 'px-4 bg-primary-700'
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}
