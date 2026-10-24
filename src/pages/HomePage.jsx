import { useState } from 'react';
import CategoryTabs from '../components/molecules/CategoryTabs';
import CourseGrid from '../components/organisms/CourseGrid';
import HeroSection from '../components/organisms/HeroSection';
import NewsletterBanner from '../components/organisms/NewsletterBanner';
import { ALL_CATEGORY, COURSE_CATEGORIES } from '../data/categories';
import { COURSES } from '../data/courses';
import { COURSE_SECTION_CONTENT, HERO_CONTENT, NEWSLETTER_CONTENT } from '../data/homeContent';
import useDocumentTitle from '../hooks/useDocumentTitle';
import MainLayout from '../layouts/MainLayout';

export default function HomePage() {
  useDocumentTitle('Beranda');
  const [activeCategory, setActiveCategory] = useState(ALL_CATEGORY);

  const visibleCourses =
    activeCategory === ALL_CATEGORY
      ? COURSES
      : COURSES.filter((course) => course.category === activeCategory);

  return (
    <MainLayout>
      <HeroSection {...HERO_CONTENT} />

      <section
        id="koleksi"
        aria-labelledby="koleksi-heading"
        className="container-page scroll-mt-16 py-12 md:scroll-mt-[74px] md:py-16"
      >
        <h2
          id="koleksi-heading"
          className="font-heading text-2xl font-semibold text-ink sm:text-[32px] sm:leading-tight"
        >
          {COURSE_SECTION_CONTENT.title}
        </h2>
        <p className="mt-2.5 text-sm text-ink-muted sm:text-base">{COURSE_SECTION_CONTENT.subtitle}</p>

        <CategoryTabs
          className="mt-6 md:mt-8"
          categories={COURSE_CATEGORIES}
          activeCategory={activeCategory}
          onChange={setActiveCategory}
        />
        <CourseGrid
          className="mt-6 md:mt-8"
          courses={visibleCourses}
          emptyMessage="Belum ada kelas di kategori ini."
        />
      </section>

      <NewsletterBanner {...NEWSLETTER_CONTENT} />
    </MainLayout>
  );
}
