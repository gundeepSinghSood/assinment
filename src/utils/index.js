export const history = () => {
  if (
    typeof window != 'undefined' &&
    window.document &&
    window.document.readyState
  ) {
    const { location } = window;
    return { window, location };
  }
};

export const isBrowser = () =>
  typeof document !== 'undefined' &&
  document.body &&
  typeof window !== 'undefined';

export const getParameterByName = (name, search) => {
  // const { search } = !!isBrowser() && history() && history().location;
  name = name.replace(/[\[\]]/g, '\\$&');
  const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(search);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
};
