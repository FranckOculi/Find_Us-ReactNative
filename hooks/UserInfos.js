import { useSelector, useDispatch } from 'react-redux';
import { setInfos } from '../redux/features/user/userInfosSlice';
import { setId } from '../redux/features/user/userIdSlice';

export default function UserInfos() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userInfos);
  const userId = useSelector((state) => state.userId.id);

  //load user id
  const loadUserId = (id) => {
    dispatch(setId(id));
  };

  // //Load user data
  const loadUser = (data) => {
    dispatch(setInfos(data));
  };

  return { userData, userId, loadUserId, loadUser };
}
