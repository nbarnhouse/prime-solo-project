import React from 'react';
import { useHistory } from 'react-router-dom';
// import CalendarView from '../Dates/CalendarView/CalendarView.jsx';
// import DatePicker from '../Dates/DatePicker/DatePicker.jsx';
import SubLayout from '../../Layouts/SubLayout/SubLayout.jsx';

export default function ScheduleSub() {
  const history = useHistory();

  return (
    <SubLayout>
      {/* <SideNavSub /> */}
      <h1>Schedule</h1>
      <div className="container">Schedule for Subs</div>
    </SubLayout>
  );
}
