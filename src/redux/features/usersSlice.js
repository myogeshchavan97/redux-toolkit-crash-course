import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getUsers = createAsyncThunk(
  'users/getUsers',
  async ({ count, nat }, thunkAPI) => {
    console.log({ thunkAPI });
    const { data } = await axios.get(
      `https://randomuser.me/api/?results=${count}&nat=${nat}`
    );
    return data.results;
  }
);

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    isLoading: false,
    isError: false,
    data: []
  },
  reducers: {
    // getUsersRequest: (state, action) => {
    //   state.isLoading = true;
    // },
    // getUsersSuccess: (state, action) => {
    //   state.isLoading = false;
    //   state.isError = false;
    //   state.data = action.payload;
    // },
    // getUsersError: (state, action) => {
    //   state.isLoading = false;
    //   state.isError = true;
    // }
  },
  extraReducers: {
    [getUsers.pending]: (state) => {
      state.isLoading = true;
    },
    [getUsers.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.data = action.payload;
    },
    [getUsers.rejected]: (state) => {
      state.isLoading = false;
      state.isError = true;
    }
  }
});

export const { getUsersRequest, getUsersSuccess, getUsersError } =
  usersSlice.actions;

export default usersSlice.reducer;
