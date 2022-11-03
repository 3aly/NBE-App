import {createSlice} from '@reduxjs/toolkit';
import {act} from 'react-test-renderer';

const initialState = {
  displayName: '',
  isLoggedIn: false,
  email: '',
  photoURL: '',
  phoneNumber: '',
};

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      console.log('iam in');
      console.log(action, 'action');
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.displayName = action.payload.displayName;
      state.isLoggedIn = action.payload.isLoggedIn;
      state.email = action.payload.email;
      state.photoURL = action.payload.photoURL;
      state.phoneNumber = action.payload.phoneNumber;
    },
    removeCurrentUser: state => {
      console.log('iam in');
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.displayName = '';
      state.isLoggedIn = false;
      state.email = '';
      state.photoURL = '';
      state.phoneNumber = '';
    },
  },
});

// Action creators are generated for each case reducer function
export const {setCurrentUser, removeCurrentUser} = UserSlice.actions;

export default UserSlice.reducer;
