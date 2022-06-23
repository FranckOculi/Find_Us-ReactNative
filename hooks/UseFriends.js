import { useSelector, useDispatch } from 'react-redux';
import { setFriends } from '../redux/features/friend/friendsIdSlice';
import { setFriendsData } from '../redux/features/friend/friendsDataSlice';
import { getFriendsData } from '../services/FriendApi';

//Simulation of react-native-contacts//

const UseFriends = () => {
  const dispatch = useDispatch();
  const friendsId = useSelector((state) => state.friendsId);
  const friendsData = useSelector((state) => state.friendsData);

  //Load All friendsId
  const loadFriendsId = async (data) => {
    let i = 0;
    do {
      dispatch(setFriends(data[i].recepteurUserId));
      i++;
    } while (i < data.length);
  };

  const loadFriendsData = async (id, data, token) => {
    return await getFriendsData(id, data, token).then((res) => {
      if (res?.data?.friendsData) {
        let i = 0;
        do {
          dispatch(setFriendsData(res.data.friendsData[i]));
          i++;
        } while (i < res.data.friendsData.length);
      }
    });
  };

  return {
    loadFriendsId,
    loadFriendsData,
    friendsId,
    friendsData,
  };
};

export default UseFriends;
