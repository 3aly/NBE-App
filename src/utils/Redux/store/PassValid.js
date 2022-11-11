import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  min8: false,
  uppercase: false,
  lowercase: false,
  specialchar: false,
  onenumber: false,
  all: false,
};

export const PassValid = createSlice({
  name: 'language',
  initialState,
  reducers: {
    Chekcer: (state, action) => {
      console.log(state);
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes

      state.min8 = action.payload.min8;
      state.uppercase = action.payload.uppercase;
      state.lowercase = action.payload.lowercase;
      state.specialchar = action.payload.specialchar;
      state.onenumber = action.payload.onenumber;
      state.all =
        action.payload.min8 &&
        action.payload.onenumber &&
        action.payload.min8 &&
        action.payload.uppercase &&
        action.payload.lowercase &&
        action.payload.specialchar;
    },
  },
});

// Action creators are generated for each case reducer function
export const {Chekcer} = PassValid.actions;

export default PassValid.reducer;
