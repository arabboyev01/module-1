export const cachedSearchTypes: string =
  typeof window !== 'undefined'
    ? window.localStorage.getItem('searchData') || ''
    : '';
