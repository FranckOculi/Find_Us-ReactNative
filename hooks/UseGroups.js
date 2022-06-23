import { useSelector, useDispatch } from 'react-redux';
import _ from 'lodash';
import {
  setGroup,
  removeGroupStore,
} from '../redux/features/group/groupsSlice';
import { addAllMembers } from '../redux/features/group/groupsMembersSlice';
import {
  addMember,
  removeMemberStore,
} from '../redux/features/group/groupSingleMembersSlice';
import { setSelectedGroup } from '../redux/features/group/groupSelectedSlice';
import {
  getGroups,
  addGroup,
  deleteGroup,
  getMembers,
  addGroupMember,
} from '../services/GroupApi';

const UseGroups = () => {
  const dispatch = useDispatch();
  const groupsData = useSelector((state) => state.groups);
  const membersData = useSelector((state) => state.groupSingleMembers);
  const allMembersData = useSelector((state) => state.groupsMembers);
  const selectedGroup = useSelector((state) => state.groupSelected.groupCode);

  /*  Groups  */
  const loadGroupsData = async (userId, data, token) => {
    const eachGroupCode = [];
    for (let i = 0; i < data.length; i++) {
      eachGroupCode.push(data[i].groupeCode);
    }
    return getGroups(userId, eachGroupCode, token).then((res) => {
      if (res?.data?.userGroups) {
        let i = 0;
        do {
          dispatch(setGroup(res.data.userGroups[i]));
          i++;
        } while (i < res.data.userGroups.length);
      }
      if (res?.data?.membersData) {
        const data = res.data.membersData.sort(function (a, b) {
          return a.groupeCode.toString().localeCompare(b.groupeCode.toString());
        });
        const sortedMember = _.groupBy(data, 'groupeCode');
        dispatch(addAllMembers(sortedMember));
      }
    });
  };

  const findGroup = async (code) => {
    for (let i = 0; i < groupsData.length; i++) {
      if (groupsData[i].codeGroupe === code) {
        return await groupsData[i];
      }
    }
    return;
  };

  const createGroup = async (id, data, token) => {
    return await addGroup(id, data, token);
  };

  const removeGroup = async (id, code, token) => {
    return await deleteGroup(id, code, token).then((res) => {
      if (!res.err) {
        dispatch(removeGroupStore(res.data.data.codeGroupe));
      }
    });
  };

  const loadSelectGroup = (groupCode) => {
    dispatch(setSelectedGroup(groupCode));
  };

  /*  Members  */
  const findMember = async (id, code, token) => {
    return await getMembers(id, code, token).then((res) => {
      if (res.data.members) {
        let i = 0;
        do {
          dispatch(addMember(res.data.members[i]));
          i++;
        } while (i < res.data.members.length);
      }
    });
  };

  const addMemberToGroup = async (id, codeGroup, token) => {
    return await addGroupMember(id, codeGroup, token).then((res) => {
      if (!res.err) {
        // dispatch(res);
      }
    });
  };

  const removeMember = () => {
    return dispatch(removeMemberStore(0));
  };

  const reloadMember = (id, code, token) => {
    dispatch(removeMemberStore(0));
    setTimeout(async () => {
      return await getMembers(id, code, token).then((res) => {
        if (res.data.members) {
          let i = 0;
          do {
            dispatch(addMember(res.data.members[i]));
            i++;
          } while (i < res.data.members.length);
        }
      });
    }, 500);
  };

  const getMember = (memberData, groupCode) => {
    const data = [];
    allMembersData.groupes[groupCode].map((member) => {
      if (member.utilisateurId === memberData.utilisateurPosition) {
        data.push(member);
      }
    });

    return data[0].pseudo;
  };

  return {
    loadGroupsData,
    groupsData,
    findGroup,
    loadSelectGroup,
    membersData,
    allMembersData,
    createGroup,
    removeGroup,
    loadSelectGroup,
    selectedGroup,
    getMember,
    findMember,
    addMemberToGroup,
    reloadMember,
    removeMember,
  };
};

export default UseGroups;
