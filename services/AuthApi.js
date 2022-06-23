import axios from 'axios';
import { API_URL } from '@env';

const route = '/auth';

export const signInApi = async (data) => {
  return await axios({
    method: 'POST',
    url: `${API_URL}${route}/login`,
    withCredentials: true,
    data,
  });
};

export const signUpApi = async (data) => {
  return await axios({
    method: 'POST',
    url: `${API_URL}${route}/register`,
    withCredentials: true,
    data,
  });
};

export const autoConnect = async (token) => {
  return await axios({
    method: 'GET',
    url: `${API_URL}${route}/jwtid`,
    withCredentials: true,
    headers: {
      cookie: token,
    },
  });
};
