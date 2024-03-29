import React from 'react';
import { useHistory } from 'react-router-dom';
import LogOutButton from '../../Widgets/LogOutButton/LogOutButton.jsx';
import { useSelector } from 'react-redux';

import TeacherLayout from '../../Layouts/TeacherLayout/TeacherLayout.jsx';

export default function HomeTeacher() {
  const history = useHistory();
  const user = useSelector((store) => store.user);

  return (
    <TeacherLayout>
      <h1>Welcome, {user.first_name}!</h1>
      <div className="container">Home for Teachers</div>
      <LogOutButton className="btn" />
    </TeacherLayout>
  );
}
