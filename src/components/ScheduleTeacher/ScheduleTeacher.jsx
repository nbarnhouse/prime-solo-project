import React from 'react';
import { useHistory } from 'react-router-dom';
// import CalendarView from '../Dates/CalendarView/CalendarView.jsx';
// import DatePicker from '../Dates/DatePicker/DatePicker.jsx';

export default function ScheduleTeacher() {
  const history = useHistory();

  return (
    <>
      <h1>Schedule</h1>
      <div className="container">Schedule For Teachers</div>
    </>
  );
}
