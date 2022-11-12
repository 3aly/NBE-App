import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  proceedotp: false,
  proceedairpay: false,
};

export const router = createSlice({
  name: 'router',
  initialState,
  reducers: {
    proceedotptoggler: state => {
      console.log('lang toggled');
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.proceedotp = !state.proceedotp;
      console.log(state);
    },
  },
  proceedairpaytoggler: state => {
    console.log('lang toggled');
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes
    state.proceedairpay = !state.proceedairpay;
    console.log(state);
  },
});

// Action creators are generated for each case reducer function
export const {proceedotptoggler, proceedairpaytoggler} = router.actions;

export default router.reducer;
