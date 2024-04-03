import React from 'react';
import LogOutButton from '../Widgets/LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const request = useSelector((store) => store.request);

  return (
    <div className="container">
      <h2>Welcome, {user.first_name}!</h2>
      <p>Your User ID is: {user.id}</p>
      <p>Your Teacher ID is: {request.teacher_id}</p>
      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
