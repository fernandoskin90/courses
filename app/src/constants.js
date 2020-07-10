const BASE_URL =
  'https://test.mytablemesa.com/api/courses?orderBy=popularity+desc&expand=provider';

export function builtURL(name, offset) {
  return `${BASE_URL}&name=${name}&offset=${offset}&limit=25`;
}
