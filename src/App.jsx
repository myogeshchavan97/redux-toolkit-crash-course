import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import User from './components/Users';
import {
  getUsersError,
  getUsersRequest,
  getUsersSuccess
} from './redux/features/usersSlice';

function App() {
  const {
    isLoading,
    isError,
    data: users
  } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    const getUsers = async () => {
      try {
        dispatch(getUsersRequest());
        const { data } = await axios.get(
          'https://randomuser.me/api/?results=10&nat=us'
        );
        dispatch(getUsersSuccess(data.results));
      } catch (error) {
        dispatch(getUsersError());
      }
    };
    getUsers();
  }, []);

  if (isLoading) {
    return <p className='loading'>Loading...</p>;
  }
  if (isError) {
    return <p className='error'>Something went wrong. Try again later.</p>;
  }
  return (
    <div className='users-list'>
      {users.map((user) => (
        <User key={user.login.uuid} {...user} />
      ))}
    </div>
  );
}

export default App;
