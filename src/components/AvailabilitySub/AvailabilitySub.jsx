import React from 'react';
import { useHistory } from 'react-router-dom';

import SideNavSub from '../Navigation/SideNavSub/SideNavSub.jsx';
//import TopLoginNav from '../Navigation/TopLoginNav/TopLoginNav.jsx';

export default function AvailabilitySub() {
  const history = useHistory();

  return (
    <>
      <SideNavSub />

      <h1>Availability</h1>
      <div className="container">Availability for Subs</div>
    </>
  );
}
