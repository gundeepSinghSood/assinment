import fetch from 'isomorphic-unfetch';

const httpClient = baseURL => {
  return {
    get: (path, options) => {
      return fetch(baseURL + path, options).then(res => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      });
    }
  };
};

export default httpClient;
