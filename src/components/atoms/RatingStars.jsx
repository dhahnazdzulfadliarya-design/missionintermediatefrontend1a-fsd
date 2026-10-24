import { cn } from '../../utils/cn';
import { formatRating } from '../../utils/format';
import Icon from './Icon';

const MAX_RATING = 5;

function renderStars() {
  return Array.from({ length: MAX_RATING }, (_, index) => (
    <Icon key={index} name="star" className="h-4 w-4 shrink-0" />
  ));
}

/**
 * Bintang rating dengan isian parsial (3.5 = tiga setengah bintang) + jumlah ulasan.
 *
 * @param {object} props
 * @param {number} props.value      Nilai 0–5.
 * @param {number} [props.reviews]  Jumlah ulasan, tampil dalam kurung.
 * @param {string} [props.className]
 */
export default function RatingStars({ value, reviews, className }) {
  const fillPercent = Math.max(0, Math.min(100, (value / MAX_RATING) * 100));

  return (
    <div className={cn('flex items-center gap-2', className)}>
      <div
        role="img"
        aria-label={`Rating ${formatRating(value)} dari ${MAX_RATING}`}
        className="relative inline-flex shrink-0"
      >
        <div className="flex gap-0.5 text-gray-300">{renderStars()}</div>
        <div
          className="absolute inset-y-0 left-0 flex gap-0.5 overflow-hidden text-secondary"
          style={{ width: `${fillPercent}%` }}
        >
          {renderStars()}
        </div>
      </div>
      <p className="whitespace-nowrap text-sm font-medium text-ink-muted underline underline-offset-2">
        {formatRating(value)}
        {reviews != null && ` (${reviews})`}
      </p>
    </div>
  );
}
