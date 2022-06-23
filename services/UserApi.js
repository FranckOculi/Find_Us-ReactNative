import axios from 'axios';
import { API_URL } from '@env';

const route = '/user';

export const deleteUser = async (id, token) => {
  return await axios({
    method: 'DELETE',
    url: `${API_URL}${route}/${id}/delete`,
    withCredentials: true,
    headers: {
      cookie: token,
      authorization: token,
    },
  });
};

export const getUserInfo = async (id, token) => {
  return await axios({
    method: 'GET',
    url: `${API_URL}${route}/${id}`,
    withCredentials: true,
    headers: {
      cookie: token,
      authorization: token,
    },
  });
};

export const getMe = async (id, token) => {
  return await axios({
    method: 'GET',
    url: `${API_URL}${route}/${id}/me`,
    withCredentials: true,
    headers: {
      cookie: token,
      authorization: token,
    },
  });
};

export const getShortUserInfo = async (id, token) => {
  return await axios({
    method: 'GET',
    url: `${API_URL}${route}/${id}/short`,
    withCredentials: true,
    headers: {
      cookie: token,
      authorization: token,
    },
  });
};
