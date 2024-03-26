import React from 'react';
import { useHistory } from 'react-router-dom';

import SideNavSub from '../Navigation/SideNavSub/SideNavSub.jsx';

export default function AvailabilitySub() {
  const history = useHistory();

  return (
    <>
      <SideNavSub />
      <div className="container">Availability for Subs</div>
    </>
  );
}
