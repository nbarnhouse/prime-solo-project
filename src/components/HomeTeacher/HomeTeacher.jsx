import React from 'react';
import { useHistory } from 'react-router-dom';

import SideNavTeacher from '../Navigation/SideNavTeacher/SideNavTeacher.jsx';

export default function HomeTeacher() {
  const history = useHistory();

  return (
    <>
      <SideNavTeacher />
      <div className="container">Home for Teachers</div>
    </>
  );
}
