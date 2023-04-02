import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    isLoading: false,
    isError: false,
    data: []
  },
  reducers: {
    getUsersRequest: (state, action) => {
      state.isLoading = true;
    },
    getUsersSuccess: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.data = action.payload;
    },
    getUsersError: (state, action) => {
      state.isLoading = false;
      state.isError = true;
    }
  }
});

console.log('usersSlice', usersSlice);

export const { getUsersRequest, getUsersSuccess, getUsersError } =
  usersSlice.actions;

export default usersSlice.reducer;
