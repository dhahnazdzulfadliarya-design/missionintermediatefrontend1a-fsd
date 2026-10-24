import { avatarImage, unsplashImage } from '../utils/image';

/**
 * Data dummy kursus. Dirender dengan .map() di <CourseGrid />.
 * `category` harus sama dengan salah satu nilai di data/categories.js.
 */
export const COURSES = [
  {
    id: 1,
    title: 'Big 4 Auditor Financial Analyst',
    description:
      'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik.',
    category: 'Bisnis',
    thumbnail: unsplashImage('1554224155-6726b3ff858f'),
    mentor: { name: 'Jenna Ortega', role: 'Senior Accountant di Gojek', avatar: avatarImage(47) },
    rating: 3.5,
    reviews: 86,
    price: 300000,
  },
  {
    id: 2,
    title: 'Strategi Digital Marketing untuk Pemula',
    description:
      'Bangun funnel pemasaran, kelola iklan media sosial, dan ukur performa kampanye dengan data.',
    category: 'Pemasaran',
    thumbnail: unsplashImage('1460925895917-afdab827c52f'),
    mentor: { name: 'Rina Wulandari', role: 'Marketing Lead di Tokopedia', avatar: avatarImage(45) },
    rating: 4.5,
    reviews: 128,
    price: 250000,
  },
  {
    id: 3,
    title: 'Dasar-Dasar UI/UX Design dengan Figma',
    description:
      'Pelajari riset pengguna, wireframe, hingga prototipe interaktif lewat studi kasus aplikasi nyata.',
    category: 'Desain',
    thumbnail: unsplashImage('1586717791821-3f44a563fa4c'),
    mentor: { name: 'Andi Pratama', role: 'Product Designer di Traveloka', avatar: avatarImage(12) },
    rating: 4.8,
    reviews: 214,
    price: 350000,
  },
  {
    id: 4,
    title: 'Public Speaking & Presentasi Percaya Diri',
    description:
      'Atasi rasa gugup, susun alur cerita yang memikat, dan sampaikan presentasi yang meyakinkan.',
    category: 'Pengembangan Diri',
    thumbnail: unsplashImage('1475721027785-f74eccf877e2'),
    mentor: { name: 'Sekar Ayu', role: 'Communication Coach di Kumparan', avatar: avatarImage(44) },
    rating: 4.0,
    reviews: 97,
    price: 200000,
  },
  {
    id: 5,
    title: 'Copywriting & SEO yang Menjual',
    description:
      'Tulis konten yang ramah mesin pencari sekaligus persuasif untuk menaikkan traffic dan konversi.',
    category: 'Pemasaran',
    thumbnail: unsplashImage('1499750310107-5fef28a66643'),
    mentor: { name: 'Yoga Firmansyah', role: 'SEO Specialist di Shopee', avatar: avatarImage(13) },
    rating: 4.5,
    reviews: 75,
    price: 230000,
  },
  {
    id: 6,
    title: 'Desain Grafis untuk Branding Usaha',
    description:
      'Ciptakan logo, palet warna, dan identitas visual yang konsisten agar brand mudah dikenali.',
    category: 'Desain',
    thumbnail: unsplashImage('1561070791-2526d30994b5'),
    mentor: { name: 'Maya Lestari', role: 'Brand Designer di Bukalapak', avatar: avatarImage(49) },
    rating: 4.5,
    reviews: 142,
    price: 280000,
  },
  {
    id: 7,
    title: 'Manajemen Waktu & Produktivitas Kerja',
    description:
      'Terapkan teknik prioritas, time blocking, dan kebiasaan kecil agar harimu lebih produktif.',
    category: 'Pengembangan Diri',
    thumbnail: unsplashImage('1434030216411-0b793f4b4173'),
    mentor: { name: 'Fajar Nugroho', role: 'Productivity Coach di Ruangguru', avatar: avatarImage(53) },
    rating: 3.5,
    reviews: 64,
    price: 150000,
  },
  {
    id: 8,
    title: 'Memulai Bisnis Online dari Nol',
    description:
      'Validasi ide produk, buka toko online, dan susun strategi penjualan hingga dapat pelanggan.',
    category: 'Bisnis',
    thumbnail: unsplashImage('1556761175-5973dc0f32e7'),
    mentor: { name: 'Siti Rahma', role: 'Founder di Bisnisku.id', avatar: avatarImage(32) },
    rating: 5.0,
    reviews: 186,
    price: 330000,
  },
  {
    id: 9,
    title: 'Social Media Content Creator',
    description:
      'Rancang kalender konten, produksi video pendek yang engaging, dan tumbuhkan audiens organik.',
    category: 'Pemasaran',
    thumbnail: unsplashImage('1432888498266-38ffec3eaf0a'),
    mentor: { name: 'Dimas Saputra', role: 'Content Strategist di IDN Media', avatar: avatarImage(15) },
    rating: 4.0,
    reviews: 110,
    price: 250000,
  },
  {
    id: 10,
    title: 'Ilustrasi Digital untuk Pemula',
    description:
      'Kuasai dasar sketsa, pewarnaan, dan komposisi untuk membuat ilustrasi digital yang menarik.',
    category: 'Desain',
    thumbnail: unsplashImage('1513364776144-60967b0f800f'),
    mentor: { name: 'Nadia Putri', role: 'Illustrator di Kitabisa', avatar: avatarImage(5) },
    rating: 4.5,
    reviews: 58,
    price: 180000,
  },
  {
    id: 11,
    title: 'Leadership untuk Manajer Baru',
    description:
      'Pimpin tim dengan percaya diri: delegasi, memberi feedback, dan membangun budaya kerja sehat.',
    category: 'Pengembangan Diri',
    thumbnail: unsplashImage('1552664730-d307ca884978'),
    mentor: { name: 'Rizky Hidayat', role: 'HR Business Partner di Telkomsel', avatar: avatarImage(59) },
    rating: 4.0,
    reviews: 73,
    price: 270000,
  },
  {
    id: 12,
    title: 'Business Model Canvas untuk Startup',
    description:
      'Petakan nilai produk, segmen pelanggan, dan sumber pendapatan dengan Business Model Canvas.',
    category: 'Bisnis',
    thumbnail: unsplashImage('1542744173-8e7e53415bb0'),
    mentor: { name: 'Clara Wijaya', role: 'Product Manager di Gojek', avatar: avatarImage(20) },
    rating: 4.5,
    reviews: 91,
    price: 300000,
  },
];
