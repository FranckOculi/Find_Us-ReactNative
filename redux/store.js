import { configureStore } from '@reduxjs/toolkit';
import userAuthReducer from './features/user/userAuthSlice';
import userIdReducer from './features/user/userIdSlice';
import userInfosReducer from './features/user/userInfosSlice';
import groupsReducer from './features/group/groupsSlice';
import groupsMembersReducer from './features/group/groupsMembersSlice';
import groupPositionsReducer from './features/group/groupPositionsSlice';
import groupSingleMembersReducer from './features/group/groupSingleMembersSlice';
import groupSelectedReducer from './features/group/groupSelectedSlice';
import positionReducer from './features/position/positionSlice';
import friendsIdReducer from './features/friend/friendsIdSlice';
import friendsDataReducer from './features/friend/friendsDataSlice';

export default configureStore({
  reducer: {
    userAuth: userAuthReducer,
    userId: userIdReducer,
    userInfos: userInfosReducer,
    groups: groupsReducer,
    groupsMembers: groupsMembersReducer,
    groupSingleMembers: groupSingleMembersReducer,
    groupPositions: groupPositionsReducer,
    groupSelected: groupSelectedReducer,
    position: positionReducer,
    friendsId: friendsIdReducer,
    friendsData: friendsDataReducer,
  },
});
