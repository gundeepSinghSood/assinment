import httpClient from './httpClient';
import { spaceXApi } from './spaceXApi';

export const apiFactory = http => ({
  records: spaceXApi(http)
});

const http = httpClient('https://api.spaceXdata.com/v3');
export const api = apiFactory(http);
