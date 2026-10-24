import Avatar from '../atoms/Avatar';

/**
 * Avatar + nama + jabatan mentor pada kartu kursus.
 *
 * @param {object} props
 * @param {string} props.name
 * @param {string} props.role    Contoh: "Senior Accountant di Gojek".
 * @param {string} props.avatar  URL foto.
 */
export default function CourseMentor({ name, role, avatar }) {
  return (
    <div className="flex min-w-0 items-center gap-2.5">
      <Avatar src={avatar} size="md" />
      <div className="min-w-0">
        <p className="truncate text-sm font-medium text-ink sm:text-base">{name}</p>
        <p className="line-clamp-2 text-sm text-ink-muted sm:line-clamp-1">{role}</p>
      </div>
    </div>
  );
}
