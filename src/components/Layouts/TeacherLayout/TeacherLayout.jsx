import React from 'react';
import { useSelector } from 'react-redux';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import SideNavTeacher from '../../Navigation/SideNavTeacher/SideNavTeacher';
import TopLoginNav from '../../Navigation/TopLoginNav/TopLoginNav';
import WeatherData from '../../DataComponents/WeatherData/WeatherData.jsx';
import '../MainLayout/Layout.css';
import '../../DataComponents/WeatherData/WeatherData.css';

export default function TeacherLayout({ children }) {
  const weather = useSelector((store) => store.weather);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="layout-container">
        <div className="weather-container">
          {weather &&
            weather.map((forecast) => (
              <div key={forecast.id} className="weather-item">
                <div>{forecast.name}</div>
                <div>
                  <img
                    className="weather-icon"
                    src={forecast.icon}
                    alt={forecast.name}
                  />
                </div>
                <div className="forecast-temp">{forecast.temp}°F</div>
              </div>
            ))}
        </div>
        {/* <div className="content">
          <TopLoginNav />
          <SideNavTeacher />
          <div className="main-content">{children}</div>
        </div> */}
      </div>
    </LocalizationProvider>
  );
}
