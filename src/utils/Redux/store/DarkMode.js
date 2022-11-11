import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  darkmode: false,
};

export const DarkModeSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    ThemeToggler: state => {
      console.log('theme toggled');
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.darkmode = !state.darkmode;
    },
  },
});

// Action creators are generated for each case reducer function
export const {ThemeToggler} = DarkModeSlice.actions;

export default DarkModeSlice.reducer;
