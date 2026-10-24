// URL gambar placeholder (Unsplash, Pravatar, FlagCDN) karena aset asli Figma tidak tersedia.

/** Foto Unsplash yang sudah di-crop sesuai lebar. */
export function unsplashImage(photoId, width = 800) {
  return `https://images.unsplash.com/photo-${photoId}?auto=format&fit=crop&w=${width}&q=80`;
}

/** Foto profil dummy dari Pravatar (nomor 1–70). */
export function avatarImage(number, size = 120) {
  return `https://i.pravatar.cc/${size}?img=${number}`;
}

/** Bendera negara dari kode ISO 3166 dua huruf, misal "ID". */
export function flagImage(countryCode) {
  return `https://flagcdn.com/${countryCode.toLowerCase()}.svg`;
}
