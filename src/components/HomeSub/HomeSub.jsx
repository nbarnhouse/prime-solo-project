import React from 'react';
import { useHistory } from 'react-router-dom';

import SideNavSub from '../Navigation/SideNavSub/SideNavSub.jsx';

export default function HomeSub() {
  const history = useHistory();

  return (
    <>
      <SideNavSub />
      <div className="container">Home for Subs</div>
    </>
  );
}
