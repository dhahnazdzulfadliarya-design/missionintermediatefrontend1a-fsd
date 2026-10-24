# assets

Taruh gambar & ikon lokal di sini (misal ekspor dari Figma), lalu import dari komponen:

```js
import heroImage from '../assets/hero.jpg';
```

Saat ini gambar memakai URL placeholder (Unsplash, Pravatar, FlagCDN) lewat `src/utils/image.js`,
dan ikon dibuat sebagai SVG inline di `src/components/atoms/Icon.jsx`.
