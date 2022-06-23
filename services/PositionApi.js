import axios from 'axios';
import { API_URL } from '@env';

const route = '/position';

export async function addCurrentPosition(id, data, token) {
  return await axios({
    method: 'POST',
    url: `${API_URL}${route}/${id}/position`,
    withCredentials: true,
    headers: {
      cookie: token,
      authorization: token,
    },
    data,
  });
}

export async function getGroupsPositions(id, data, token) {
  return await axios({
    method: 'GET',
    url: `${API_URL}${route}/${id}/${data}/lastpositions`,
    withCredentials: true,
    headers: {
      cookie: token,
      authorization: token,
    },
  });
}
