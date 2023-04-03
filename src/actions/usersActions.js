import axios from 'axios';
import {
  GET_USERS_ERROR,
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS
} from '../utils/constants';

export const getUsers = () => {
  return async (dispatch) => {
    try {
      dispatch(getUsersRequest());
      const { data } = await axios.get(
        'https://randomuser.me/api/?results=10&nat=us'
      );
      dispatch(getUsersSuccess(data.results));
    } catch (error) {
      console.log('error', error);
      dispatch(getUsersError());
    }
  };
};

export const getUsersRequest = () => ({
  type: GET_USERS_REQUEST
});

export const getUsersSuccess = (users) => ({
  type: GET_USERS_SUCCESS,
  payload: users
});

export const getUsersError = () => ({
  type: GET_USERS_ERROR
});
