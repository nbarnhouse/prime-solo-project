import React from 'react';
import LogOutButton from '../Widgets/LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const userDetails = useSelector((store) => store.userDetails);

  const teacherId = userDetails.length > 0 ? userDetails[0].teacher_id : null;
  console.log('UserDetails Front End:', userDetails.teacher_id);

  return (
    <div className="container">
      <h2>Welcome, {user.first_name}!</h2>
      <p>Your User ID is: {user.id}</p>
      <p>Your Teacher ID is: {teacherId}</p>

      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
