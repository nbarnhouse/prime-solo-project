import React from 'react';
import { useHistory } from 'react-router-dom';
import LogOutButton from '../Buttons/LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';

import SideNavTeacher from '../Navigation/SideNavTeacher/SideNavTeacher.jsx';

export default function HomeTeacher() {
  const history = useHistory();
  const user = useSelector((store) => store.user);

  return (
    <>
      <SideNavTeacher />
      <h1>Welcome, {user.first_name}!</h1>
      <div className="container">Home for Teachers</div>
      <LogOutButton className="btn" />
    </>
  );
}
