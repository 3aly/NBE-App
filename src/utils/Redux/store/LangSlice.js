import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  langArabic: false,
};

export const LangSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    toggler: state => {
      console.log('lang toggled');
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.langArabic = !state.langArabic;
      console.log(state);
    },
  },
});

// Action creators are generated for each case reducer function
export const {toggler} = LangSlice.actions;

export default LangSlice.reducer;
