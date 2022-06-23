import { useSelector, useDispatch } from 'react-redux';
import UserInfos from './UserInfos';
import UseGroups from './UseGroups';
import UseFriends from './UseFriends';
import {
  setToken,
  setIsAuth,
  setIsTuto,
} from '../redux/features/user/userAuthSlice';
import { setId } from '../redux/features/user/userIdSlice';
import { clearInfos } from '../redux/features/user/userInfosSlice';
import { clearGroupStore } from '../redux/features/group/groupsSlice';
import { clearAllMembers } from '../redux/features/group/groupsMembersSlice';
import { removeMemberStore } from '../redux/features/group/groupSingleMembersSlice';
import { removeSelectedGroup } from '../redux/features/group/groupSelectedSlice';
import { clearAllPositions } from '../redux/features/group/groupPositionsSlice';
import { setPosition } from '../redux/features/position/positionSlice';
import { clearFriends } from '../redux/features/friend/friendsIdSlice';
import { autoConnect, signInApi, signUpApi } from '../services/AuthApi';
import { getMe } from '../services/UserApi';
import Token from '../utils/Token';

const UseAuth = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.userAuth.token);
  const isAuth = useSelector((state) => state.userAuth.isAuth);
  const isTuto = useSelector((state) => state.userAuth.isTuto);
  const { userId, loadUser } = UserInfos();
  const { loadGroupsData } = UseGroups();
  const { loadFriendsId } = UseFriends();

  const tryToConnect = async (token) => {
    return await autoConnect(token);
  };

  const loadToken = (value) => {
    dispatch(setToken(value));
  };

  const changeAuthStatus = (value) => {
    dispatch(setIsAuth(value));
  };

  const createAccount = async (signUpData) => {
    await signUpApi(signUpData).then((res) => {
      if (!res.err) {
        const data = {
          mail: signUpData.mail,
          motDePasse: signUpData.motDePasse,
        };
        // changeTutoStatus();
        login(data);
      } else {
        throw new Error('error');
      }
    });
  };

  const login = async (data) => {
    await signInApi(data).then((res) => {
      if (!res.err) {
        loadToken(res.data.token);
        loadData(res);
      }
      return;
    });
  };

  const loadData = (res) => {
    const token = res.data.data.token;
    const userId = res.data.data.user;
    Token.setToken(token);
    dispatch(setId(userId));
    dispatch(setIsAuth(true));
  };

  //load all user data
  const loadUserData = async () => {
    if ((userId, token)) {
      return await getMe(userId, token).then((res) => {
        if (res?.data?.userData?.user) {
          loadUser(res.data.userData.user);
        }
        if (res?.data?.userData?.groups[0]) {
          loadGroupsData(userId, res.data.userData.groups, token);
        }
        if (res?.data?.userData?.friends[0]) {
          loadFriendsId(res.data.userData.friends);
        }
      });
    }
  };

  const logout = () => {
    dispatch(setToken(null));
    dispatch(setIsAuth(null));
    dispatch(setIsTuto(null));
    dispatch(setId(null));
    dispatch(clearInfos(null));
    dispatch(clearGroupStore(1));
    dispatch(clearAllMembers(0));
    dispatch(removeMemberStore(0));
    dispatch(removeSelectedGroup());
    dispatch(setPosition(0));
    dispatch(clearAllPositions());
    dispatch(clearFriends(0));
    return;
  };

  return {
    tryToConnect,
    loadToken,
    token,
    isAuth,
    isTuto,
    login,
    createAccount,
    changeAuthStatus,
    loadUserData,
    logout,
  };
};

export default UseAuth;
