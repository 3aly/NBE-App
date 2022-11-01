import {configureStore} from '@reduxjs/toolkit';
import LangSlice from './LangSlice';
import UserSlice from './UserSlice';

export const store = configureStore({
  reducer: {
    user: UserSlice,
    lang: LangSlice,
  },
});
