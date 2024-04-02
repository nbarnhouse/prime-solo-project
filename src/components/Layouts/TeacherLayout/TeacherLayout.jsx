import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import SideNavTeacher from '../../Navigation/SideNavTeacher/SideNavTeacher';
import TopLoginNav from '../../Navigation/TopLoginNav/TopLoginNav';
import WeatherData from '../../DataComponents/WeatherData/WeatherData.jsx';

import '../MainLayout/Layout.css';

export default function TeacherLayout({ children }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TopLoginNav />
      <SideNavTeacher />
      <WeatherData className="weather-layout" />
      <div>{children}</div>
    </LocalizationProvider>
  );
}
