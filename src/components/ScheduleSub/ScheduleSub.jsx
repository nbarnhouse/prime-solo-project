import React from 'react';
import { useHistory } from 'react-router-dom';

import SideNavSub from '../Navigation/SideNavSub/SideNavSub.jsx';

export default function ScheduleSub() {
  const history = useHistory();

  return (
    <>
      {/* <SideNavSub /> */}
      <h1>Schedule</h1>
      <div className="container">Schedule for Subs</div>
    </>
  );
}
