export function customQuerySelector(queryString: string, key: string) {
  const searchParams = new URLSearchParams(queryString);

  return searchParams.get(key);
}
