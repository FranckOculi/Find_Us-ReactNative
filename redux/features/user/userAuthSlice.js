import { createSlice } from '@reduxjs/toolkit';

export const userAuthSlice = createSlice({
  name: 'useAuth',
  initialState: {
    token: null,
    isAuth: null,
    isTuto: null,
  },
  reducers: {
    setToken: (state, { payload }) => {
      state.token = payload;
    },
    setIsAuth: (state, { payload }) => {
      state.isAuth = payload;
    },
    setIsTuto: (state, { payload }) => {
      state.isTuto = payload;
    },
  },
});

export const { setToken, setIsAuth, setIsTuto } = userAuthSlice.actions;
export default userAuthSlice.reducer;
