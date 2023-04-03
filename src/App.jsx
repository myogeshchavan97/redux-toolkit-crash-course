import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import User from './components/Users';
import { getUsers } from './redux/features/usersSlice';

function App() {
  const {
    isLoading,
    isError,
    data: users
  } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getUsers({
        count: 15,
        nat: 'uk'
      })
    );
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
