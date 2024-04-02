import React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import SideNavTeacher from '../../Navigation/SideNavTeacher/SideNavTeacher';
import TopLoginNav from '../../Navigation/TopLoginNav/TopLoginNav';
import WeatherData from '../../Widgets/WeatherData/WeatherData.jsx';
import '../MainLayout/Layout.css';

export default function TeacherLayout({ children }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="layout-container">
        <WeatherData className="weather-layout" />
        <div className="content">
          <TopLoginNav />
          <SideNavTeacher />
          <div className="main-content">{children}</div>
        </div>
      </div>
    </LocalizationProvider>
  );
}
