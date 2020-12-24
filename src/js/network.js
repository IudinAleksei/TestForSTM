import { API_URL } from './constants';

export const requestToApi = async () => {
  try {
    const res = await fetch(API_URL);
    const data = (res.ok) ? await res.json() : 'connection error';

    return data;
  } catch (err) {
    return 'connection error';
  }
};
