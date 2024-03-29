import React from 'react';
import { useHistory } from 'react-router-dom';
// import CalendarView from '../Dates/CalendarView/CalendarView.jsx';
// import DatePicker from '../Dates/DatePicker/DatePicker.jsx';
import TeacherLayout from '../../Layouts/TeacherLayout/TeacherLayout.jsx';

export default function ScheduleTeacher() {
  const history = useHistory();

  return (
    <TeacherLayout>
      <h1>Schedule</h1>
      <div className="container">Schedule For Teachers</div>
    </TeacherLayout>
  );
}
