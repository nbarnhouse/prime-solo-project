import React from 'react';
import { useDispatch } from 'react-redux';

function LogOutButton(props) {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <button className={props.className} onClick={handleLogout}>
      Log Out
    </button>
  );
}

export default LogOutButton;
