import React from 'react';
import LogOutButton from '../Buttons/LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';

function DataTesting() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const request = useSelector((store) => store.request);

  return (
    <div className="container">
      <h2>Welcome, {user.first_name}!</h2>
      <p>Your ID is: {user.id}</p>
      <p>Your Request ID: {request.school}</p>

      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default DataTesting;
