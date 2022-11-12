import {configureStore} from '@reduxjs/toolkit';
import DarkMode from './DarkMode';
import LangSlice from './LangSlice';
import PassValid from './PassValid';
import router from './router';
import UserSlice from './UserSlice';

export const store = configureStore({
  reducer: {
    user: UserSlice,
    lang: LangSlice,
    theme: DarkMode,
    passval: PassValid,
    router: router,
  },
});
