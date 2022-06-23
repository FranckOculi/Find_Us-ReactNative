import { createSlice } from '@reduxjs/toolkit';

export const userFriendsSlice = createSlice({
  name: 'friendsId',
  initialState: [],
  reducers: {
    setFriends: (state, { payload }) => {
      state.push(payload);
    },
    clearFriends: (state, { payload }) => {
      return state.filter(({ codeGroupe }) => codeGroupe === payload);
    },
  },
});

export const { setFriends, clearFriends } = userFriendsSlice.actions;
export default userFriendsSlice.reducer;
