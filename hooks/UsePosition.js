import { useSelector, useDispatch } from 'react-redux';
import {
  addCurrentPosition,
  getGroupsPositions,
} from '../services/PositionApi';
import {
  addAllPositions,
  setStatus,
  setAllStatus,
} from '../redux/features/group/groupPositionsSlice';
import { setPosition } from '../redux/features/position/positionSlice';

const UsePosition = () => {
  const dispatch = useDispatch();
  const currentGroupsPositions = useSelector((state) => state.groupPositions);

  const savePosition = async (id, data, token) => {
    await addCurrentPosition(id, data, token).then((res) => {});
  };

  //Fetch and load friends current position
  const getMembersLastPositions = async (id, data, token) => {
    await getGroupsPositions(id, data, token).then((res) => {
      if (res.data.lastPositions) {
        for (let i = 0; i < res.data.lastPositions.length; i++) {
          dispatch(addAllPositions(res.data.lastPositions[i]));
        }
      }
    });
  };

  //Load user position
  const loadCurrentPosition = async (position) => {
    if (!currentPosition) dispatch(setPosition(position));
    else if (
      (position.latitude !== currentPosition.latitude) &
      (position.longitude !== currentPosition.longitude)
    ) {
      dispatch(setPosition(position));
    } else return;
  };

  const loadStatus = (id, status) => {
    const data = { id: id, status: status };
    dispatch(setStatus(data));
  };

  const loadAllStatus = (status) => {
    dispatch(setAllStatus(status));
  };

  return {
    savePosition,
    getMembersLastPositions,
    currentGroupsPositions,
    loadCurrentPosition,
    loadStatus,
    loadAllStatus,
  };
};

export default UsePosition;
