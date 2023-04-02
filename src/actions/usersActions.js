import {
  GET_USERS_ERROR,
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS
} from '../utils/constants';

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
