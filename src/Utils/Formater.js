export function normalizeText(text) {
  return text.toLowerCase();
}

export function numberFormat(number) {
  return new Intl.NumberFormat().format(number);
}
