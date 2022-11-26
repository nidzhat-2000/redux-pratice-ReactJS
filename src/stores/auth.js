import { createSlice } from '@reduxjs/toolkit';

export const auth = createSlice({
  name: 'auth',
  initialState: {
    user: localStorage.getItem('auth') ?? false,
  },
  reducers: {
    logIn: (state, action) => {
      state.user = action.payload;
      localStorage.setItem('auth', action.payload);
    },
    logOut: state => {
      state.user = false;
      localStorage.removeItem('auth');
    },
  },
});

export const { logIn, logOut } = auth.actions;

export default auth.reducer;
