import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      // Token warna dari desain Figma VideoBelajar.
      colors: {
        primary: {
          DEFAULT: '#3ECF4C', // tombol utama, harga
          dark: '#33B240', // hover tombol utama
          light: '#E2FCD9', // latar tombol secondary
        },
        secondary: {
          DEFAULT: '#FFBD3A', // bintang rating, tombol Subscribe
          dark: '#F5A817',
        },
        accent: '#F64920', // logo & tab kategori aktif
        cream: '#FFFDF3', // latar halaman
        ink: {
          DEFAULT: '#222325', // judul
          muted: '#333333AD', // teks paragraf & label
          soft: '#4A505C', // teks tombol outline
        },
        line: {
          DEFAULT: '#3A35411F', // border input & kartu
          light: '#F1F1F1', // border kartu auth & tombol Google
        },
      },
      fontFamily: {
        sans: ['"DM Sans"', ...defaultTheme.fontFamily.sans],
        heading: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        nav: '0 4px 12px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
};
