import axios from 'axios';
import { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import {
  getUsersRequest,
  getUsersSuccess,
  getUsersError
} from './actions/usersActions';
import User from './components/User';
import './App.css';

function App() {
  const { isLoading, isError, data: users } = useSelector((state) => state);
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
// const mapStateToProps = (state) => {
//   return {
//     isLoading: state.isLoading,
//     isError: state.isError,
//     users: state.data
//   };
// };

// export default connect(mapStateToProps)(App);
