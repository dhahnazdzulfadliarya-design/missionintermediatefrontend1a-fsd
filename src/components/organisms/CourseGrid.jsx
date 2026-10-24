import { cn } from '../../utils/cn';
import CourseCard from './CourseCard';

/**
 * Grid kartu kursus: 1 kolom (HP), 2 kolom (tablet), 3 kolom (desktop).
 *
 * @param {object} props
 * @param {object[]} props.courses  Daftar kursus yang sudah difilter.
 * @param {string} [props.emptyMessage='Belum ada kelas.']
 * @param {string} [props.className]
 */
export default function CourseGrid({ courses, emptyMessage = 'Belum ada kelas.', className }) {
  if (courses.length === 0) {
    return (
      <p
        className={cn(
          'rounded-[10px] border border-dashed border-line bg-white px-6 py-12 text-center text-base text-ink-muted',
          className,
        )}
      >
        {emptyMessage}
      </p>
    );
  }

  return (
    <ul className={cn('grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6', className)}>
      {courses.map((course) => (
        <li key={course.id}>
          <CourseCard course={course} />
        </li>
      ))}
    </ul>
  );
}
