import React from 'react';
import { useHistory } from 'react-router-dom';

import SubLayout from '../../Layouts/SubLayout/SubLayout';

export default function AvailabilitySub() {
  const history = useHistory();

  return (
    <SubLayout>
      <h1>Availability</h1>
      <div className="container">Availability for Subs</div>
    </SubLayout>
  );
}
