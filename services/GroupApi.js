import axios from 'axios';
import { API_URL } from '@env';

const route = '/group';

/*  Groups  */
export const getGroups = async (id, data, token) => {
  return await axios({
    method: 'GET',
    url: `${API_URL}${route}/${id}/${data}/groups`,
    withCredentials: true,
    headers: {
      cookie: token,
      authorization: token,
    },
  });
};

export const addGroup = async (id, data, token) => {
  return await axios({
    method: 'POST',
    url: `${API_URL}${route}/${id}/group`,
    withCredentials: true,
    headers: {
      cookie: token,
      authorization: token,
    },
    data,
  });
};

export const deleteGroup = async (id, codeGroup, token) => {
  return await axios({
    method: 'DELETE',
    url: `${API_URL}${route}/${id}/${codeGroup}/delete`,
    withCredentials: true,
    headers: {
      cookie: token,
      authorization: token,
    },
  });
};

/*  Members  */
export const getMembers = async (id, codeGroup, token) => {
  return await axios({
    method: 'GET',
    url: `${API_URL}${route}/${id}/${codeGroup}/members`,
    withCredentials: true,
    headers: {
      cookie: token,
      authorization: token,
    },
  });
};

export const addGroupMember = async (id, codeGroup, token) => {
  return await axios({
    method: 'POST',
    url: `${API_URL}${route}/${id}/${codeGroup}/member`,
    withCredentials: true,
    headers: {
      cookie: token,
      authorization: token,
    },
  });
};
