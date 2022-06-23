import axios from 'axios';

export const addFriend = async (id, friendId, token) => {
  return await axios({
    method: 'POST',
    url: `http://localhost:3000/friend/${id}/${friendId}/add`,
    withCredentials: true,
    headers: {
      cookie: token,
      authorization: token,
    },
  });
};

export const getFriendsData = async (id, data, token) => {
  return await axios({
    method: 'GET',
    url: `http://localhost:3000/friend/${id}/${data}/friendsData`,
    withCredentials: true,
    headers: {
      cookie: token,
      authorization: token,
    },
  });
};
