const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Nomor HP tanpa kode negara: 8–13 digit.
const PHONE_PATTERN = /^\d{8,13}$/;
const MIN_PASSWORD_LENGTH = 8;

/** Ubah "0812-3456 7890" menjadi "81234567890". */
export function normalizePhone(phone) {
  return phone.replace(/[\s-]/g, '').replace(/^0/, '');
}

/** @returns {string|undefined} pesan error, atau undefined bila valid. */
export function validateEmail(email) {
  if (!email.trim()) return 'E-mail wajib diisi.';
  if (!EMAIL_PATTERN.test(email.trim())) return 'Format e-mail tidak valid.';
  return undefined;
}

/**
 * Validasi form login.
 * @returns {Record<string, string>} objek error; kosong berarti valid.
 */
export function validateLogin({ email, password }) {
  const errors = {};

  const emailError = validateEmail(email);
  if (emailError) errors.email = emailError;

  if (!password) errors.password = 'Kata sandi wajib diisi.';

  return errors;
}

/**
 * Validasi form pendaftaran.
 * @returns {Record<string, string>} objek error; kosong berarti valid.
 */
export function validateRegister({ fullName, email, phone, password, confirmPassword }) {
  const errors = {};

  if (!fullName.trim()) errors.fullName = 'Nama lengkap wajib diisi.';

  const emailError = validateEmail(email);
  if (emailError) errors.email = emailError;

  if (!phone.trim()) {
    errors.phone = 'No. HP wajib diisi.';
  } else if (!PHONE_PATTERN.test(normalizePhone(phone))) {
    errors.phone = 'No. HP hanya angka, 8–13 digit. Contoh: 81234567890.';
  }

  if (!password) {
    errors.password = 'Kata sandi wajib diisi.';
  } else if (password.length < MIN_PASSWORD_LENGTH) {
    errors.password = `Kata sandi minimal ${MIN_PASSWORD_LENGTH} karakter.`;
  }

  if (!confirmPassword) {
    errors.confirmPassword = 'Konfirmasi kata sandi wajib diisi.';
  } else if (confirmPassword !== password) {
    errors.confirmPassword = 'Konfirmasi kata sandi tidak sama.';
  }

  return errors;
}
