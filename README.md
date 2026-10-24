# videobelajar — Education Course App

Website statis aplikasi edukasi **videobelajar** yang dibuat dengan **ReactJS** sebagai tugas belajar React.
Tampilan mengikuti desain Figma VideoBelajar, komponen disusun dengan pola **Atomic Design**,
dan semua halaman responsif (mobile-first) dari layar 360px sampai 1440px.

Tidak ada backend, database, atau API call. Semua konten berasal dari file dummy di `src/data/`,
dan form Login/Register hanya simulasi di sisi client (validasi + redirect).

## Halaman

| Halaman  | Rute        | Isi |
| -------- | ----------- | --- |
| Register | `/register` | Kartu "Pendaftaran Akun": Nama Lengkap, E-Mail, No. Hp (dropdown kode negara, default +62), Kata Sandi & Konfirmasi Kata Sandi (show/hide), "Lupa Password?", tombol **Daftar** & **Masuk**, divider "atau", **Daftar dengan Google** |
| Login    | `/login`    | Kartu "Masuk ke Akun": E-Mail, Kata Sandi, "Lupa Password?", tombol **Masuk** (ke beranda) & **Daftar**, divider "atau", **Masuk dengan Google** |
| Homepage | `/`         | Navbar (logo, menu Kategori, avatar + dropdown; hamburger di HP), Hero, "Koleksi Video Pembelajaran Unggulan" dengan tab filter kategori + grid 12 kursus, banner Newsletter, Footer |

Alur simulasi: **Daftar** (valid) → `/login` dengan pesan sukses & e-mail terisi otomatis → **Masuk** → `/`.
Rute yang tidak dikenal diarahkan ke `/`.

## Tech Stack

- [React 18](https://react.dev/) + [Vite 6](https://vite.dev/) (JavaScript)
- [Tailwind CSS 3](https://tailwindcss.com/) untuk styling & responsive
- [React Router DOM 7](https://reactrouter.com/) untuk navigasi antar halaman
- Font Google: **Poppins** (judul) & **DM Sans** (teks)
- Gambar placeholder: Unsplash (thumbnail & banner), Pravatar (avatar), FlagCDN (bendera)

## Cara Menjalankan

Butuh [Node.js](https://nodejs.org/) versi 18 ke atas.

```bash
npm install
```

```bash
npm run dev
```

Buka `http://localhost:5173`, lalu coba `/`, `/login`, dan `/register`.

## Build & Preview (Website Statis)

```bash
npm run build
```

Hasil build ada di folder `dist/` (HTML, CSS, JS, favicon, dan `_redirects`). Untuk mengecek hasil build secara lokal:

```bash
npm run preview
```

Buka `http://localhost:4173`.

## Deploy

Karena memakai `BrowserRouter`, server harus mengarahkan semua rute ke `index.html` (SPA fallback)
agar `/login` dan `/register` tidak 404 saat di-refresh atau dibuka langsung. Konfigurasinya sudah tersedia:

| File               | Untuk   | Isi |
| ------------------ | ------- | --- |
| `public/_redirects` | Netlify | `/* /index.html 200` (ikut tersalin ke `dist/` saat build) |
| `netlify.toml`     | Netlify | build command `npm run build`, publish dir `dist` |
| `vercel.json`      | Vercel  | rewrite semua rute ke `/index.html` |

### Netlify

1. Push project ke GitHub.
2. Di [app.netlify.com](https://app.netlify.com/) pilih **Add new site → Import an existing project**, lalu pilih repo.
3. Build command `npm run build`, publish directory `dist` (sudah otomatis terbaca dari `netlify.toml`).
4. Klik **Deploy**.

Tanpa GitHub: jalankan `npm run build`, lalu drag & drop folder `dist/` ke [app.netlify.com/drop](https://app.netlify.com/drop).

### Vercel

1. Push project ke GitHub.
2. Di [vercel.com/new](https://vercel.com/new) import repo tersebut. Framework preset **Vite** terdeteksi otomatis
   (build command `npm run build`, output directory `dist`).
3. Klik **Deploy**. `vercel.json` memastikan semua rute diarahkan ke `index.html`.

## Struktur Folder

```
src/
├── components/
│   ├── atoms/       Button, Input, Label, Logo, Avatar, RatingStars, Divider, Icon
│   ├── molecules/   FormField, PasswordInput, PhoneInput, CourseMentor, NavLinks, CategoryTabs,
│   │                SocialButton, AuthActions, FooterLinkGroup
│   └── organisms/   Navbar, AuthCard, RegisterForm, LoginForm, HeroSection, CourseCard,
│                    CourseGrid, NewsletterBanner, Footer
├── layouts/         AuthLayout (header logo + konten tengah), MainLayout (Navbar + konten + Footer)
├── pages/           RegisterPage, LoginPage, HomePage
├── data/            courses.js, categories.js, footerLinks.js, navigation.js, countryCodes.js, homeContent.js
├── hooks/           useForm (state + validasi form), useDocumentTitle, useScrollToTop
├── utils/           cn (gabung className), format (harga & rating), validators, image (URL placeholder)
├── assets/          tempat gambar/ikon lokal (saat ini memakai URL placeholder)
├── App.jsx          daftar rute
├── main.jsx         entry point + BrowserRouter
└── index.css        Tailwind + kelas .container-page
```

## Atomic Design

| Level         | Arti | Contoh |
| ------------- | ---- | ------ |
| **Atoms**     | Elemen UI terkecil, tidak bisa dipecah lagi. Tidak tahu konteks halaman. | `Button`, `Input`, `Label`, `Avatar`, `Icon` |
| **Molecules** | Gabungan beberapa atom yang punya satu fungsi. | `FormField` = `Label` + `Input` + pesan error; `CourseMentor` = `Avatar` + nama + jabatan |
| **Organisms** | Bagian halaman yang utuh, gabungan molecules/atoms. | `RegisterForm`, `CourseCard`, `Navbar`, `Footer` |
| **Layouts**   | Kerangka halaman yang dipakai ulang. | `AuthLayout`, `MainLayout` |
| **Pages**     | Halaman final yang menyusun layout + organisms dan memegang state halaman. | `HomePage` (state tab kategori), `LoginPage` |

Prinsipnya: **data mengalir ke bawah lewat props**. Komponen tidak meng-import data dummy sendiri;
page/layout yang mengambil data dari `src/data/` lalu mengirimkannya ke child component.

## Contoh Penggunaan Props

### Button (atom)

```jsx
<Button type="submit" fullWidth>Daftar</Button>              {/* primary, <button> */}
<Button variant="secondary" to="/login" fullWidth>Masuk</Button> {/* jadi <Link> React Router */}
<Button href="#koleksi" size="lg">Temukan Video Course</Button>  {/* jadi <a> anchor */}
<Button variant="accent">Subscribe</Button>
```

| Prop        | Nilai |
| ----------- | ----- |
| `variant`   | `primary` (hijau) · `secondary` (hijau muda) · `outline` (putih) · `accent` (kuning) |
| `size`      | `sm` · `md` · `lg` (semua minimal 44px agar mudah disentuh) |
| `fullWidth` | `true` = lebar 100% |
| `to` / `href` | rute internal / tautan biasa |
| `leftIcon`  | elemen ikon di kiri label |

### FormField, PasswordInput, PhoneInput (molecules)

```jsx
<FormField label="E-Mail" name="email" type="email" placeholder="contoh@email.com"
  required value={email} onChange={handleChange} error={errors.email} />

<PasswordInput label="Kata Sandi" name="password" required
  value={password} onChange={handleChange} error={errors.password} />

<PhoneInput label="No. Hp" name="phone" countries={COUNTRY_CODES} countryCode="ID"
  value={phone} onChange={handleChange} error={errors.phone} />
```

Di dalam form, props `name/value/onChange/error` dibuat oleh hook `useForm`:

```jsx
const { getFieldProps, handleSubmit } = useForm({ email: '', password: '' }, validateLogin);

<form noValidate onSubmit={handleSubmit(onSubmit)}>
  <FormField label="E-Mail" type="email" required {...getFieldProps('email')} />
</form>
```

### CourseCard & CourseGrid (organisms)

Data kursus dirender dengan `.map()` dari `src/data/courses.js`, tidak ada kartu yang di-hardcode:

```jsx
// CourseGrid.jsx
{courses.map((course) => (
  <li key={course.id}>
    <CourseCard course={course} />
  </li>
))}
```

Filter kategori di `HomePage` memakai `useState`:

```jsx
const [activeCategory, setActiveCategory] = useState(ALL_CATEGORY);
const visibleCourses = activeCategory === ALL_CATEGORY
  ? COURSES
  : COURSES.filter((course) => course.category === activeCategory);

<CategoryTabs categories={COURSE_CATEGORIES} activeCategory={activeCategory} onChange={setActiveCategory} />
<CourseGrid courses={visibleCourses} />
```

Menambah kursus cukup dengan menambah objek baru di `courses.js`:

```js
{
  id: 13,
  title: 'Judul Kursus',
  description: 'Deskripsi singkat.',
  category: 'Desain', // harus ada di categories.js
  thumbnail: unsplashImage('<id-foto-unsplash>'),
  mentor: { name: 'Nama Mentor', role: 'Jabatan di Perusahaan', avatar: avatarImage(10) },
  rating: 4.5,
  reviews: 120,
  price: 300000, // tampil "Rp 300K"
}
```

## Design Token (tailwind.config.js)

| Token                | Warna                  | Dipakai untuk |
| -------------------- | ---------------------- | ------------- |
| `primary`            | `#3ECF4C`              | tombol utama, harga |
| `primary-light`      | `#E2FCD9`              | tombol secondary |
| `secondary`          | `#FFBD3A`              | bintang rating, tombol Subscribe |
| `accent`             | `#F64920`              | logo, tab kategori aktif |
| `cream`              | `#FFFDF3`              | latar halaman |
| `ink` / `ink-muted`  | `#222325` / `#333333AD` | judul / teks paragraf & label |
| `line`               | `#3A35411F`            | border input & kartu |
| `font-heading` / `font-sans` | Poppins / DM Sans | judul / teks |

## Responsif

| Ukuran | Breakpoint | Perilaku |
| ------ | ---------- | -------- |
| Mobile 360–639px | default | Navbar hamburger · grid kursus 1 kolom dengan kartu ringkas (thumbnail kiri) · auth card full width dengan padding 20px · tab kategori bisa digeser · footer jadi akordeon · newsletter input & tombol bertumpuk |
| Tablet 640–1023px | `sm`, `md` | Grid 2 kolom · kartu kursus thumbnail penuh · menu desktop mulai `md` (768px) |
| Desktop ≥1024px | `lg` | Grid 3 kolom · konten dibatasi `max-width` 1200px |

Semua tombol & input minimal setinggi 44px dan teks minimal 14px. Gambar memakai `w-full` / ukuran tetap + `object-cover` sehingga tidak terdistorsi.
