import { createSlice } from '@reduxjs/toolkit';

export const webSets = createSlice({
  name: 'web',
  initialState: {
    dark: false,
    lang: localStorage.getItem('webSet') ?? 'tr',
  },
  reducers: {
    setMode: state => {
      state.dark = !state.dark;
    },
    setLanguage: (state, action) => {
      state.lang = action.payload;
      localStorage.setItem('webSet', action.payload);
    },
  },
});

export const { setMode, setLanguage } = webSets.actions;

export default webSets.reducer;
