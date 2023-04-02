import {
  GET_USERS_ERROR,
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS
} from '../utils/constants';

const initialState = {
  isLoading: false,
  isError: false,
  data: []
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload
      };
    case GET_USERS_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true
      };
    default:
      return state;
  }
};

export default usersReducer;
