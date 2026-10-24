import { formatPrice } from '../../utils/format';
import RatingStars from '../atoms/RatingStars';
import CourseMentor from '../molecules/CourseMentor';

/**
 * Kartu kursus. HP: thumbnail kecil di kiri, deskripsi disembunyikan.
 * Tablet & desktop: thumbnail penuh di atas.
 *
 * @param {object} props
 * @param {{
 *   title: string,
 *   description: string,
 *   thumbnail: string,
 *   mentor: { name: string, role: string, avatar: string },
 *   rating: number,
 *   reviews: number,
 *   price: number,
 * }} props.course  Satu item dari data/courses.js.
 */
export default function CourseCard({ course }) {
  const { title, description, thumbnail, mentor, rating, reviews, price } = course;

  return (
    <article className="flex h-full flex-col gap-3 rounded-[10px] border border-line bg-white p-4 sm:gap-4 sm:p-5">
      <div className="flex gap-3 sm:flex-1 sm:flex-col sm:gap-4">
        <img
          src={thumbnail}
          alt=""
          loading="lazy"
          className="h-[82px] w-[82px] shrink-0 rounded-[10px] bg-gray-100 object-cover sm:aspect-video sm:h-auto sm:w-full"
        />

        <div className="flex min-w-0 flex-1 flex-col gap-2">
          <h3 className="line-clamp-2 font-heading text-base font-semibold leading-snug text-ink sm:text-lg">
            {title}
          </h3>
          <p className="hidden text-base text-ink-muted sm:line-clamp-2">{description}</p>
          <div className="sm:mt-auto sm:pt-2">
            <CourseMentor name={mentor.name} role={mentor.role} avatar={mentor.avatar} />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between gap-3">
        <RatingStars value={rating} reviews={reviews} />
        <p className="whitespace-nowrap font-heading text-xl font-semibold text-primary sm:text-2xl">
          {formatPrice(price)}
        </p>
      </div>
    </article>
  );
}
