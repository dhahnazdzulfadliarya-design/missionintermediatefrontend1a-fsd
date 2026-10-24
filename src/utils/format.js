const decimalFormatter = new Intl.NumberFormat('id-ID', { maximumFractionDigits: 2 });

/** Harga ringkas seperti di desain: 300000 -> "Rp 300K", 1250000 -> "Rp 1,25jt". */
export function formatPrice(value) {
  if (value >= 1_000_000) return `Rp ${decimalFormatter.format(value / 1_000_000)}jt`;
  if (value >= 1_000) return `Rp ${decimalFormatter.format(value / 1_000)}K`;
  return `Rp ${value}`;
}

/** 4 -> "4.0", 3.5 -> "3.5" */
export function formatRating(value) {
  return value.toFixed(1);
}
