export function getTypes(value) {
  if (Array.isArray(value)) return 'array';
  return typeof value;
}
