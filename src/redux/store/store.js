import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../features/usersSlice';

const store = configureStore({
  reducer: {
    users: usersReducer
  }
});

export default store;
