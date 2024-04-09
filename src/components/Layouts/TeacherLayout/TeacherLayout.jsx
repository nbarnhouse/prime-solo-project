import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import SideNavTeacher from '../../Navigation/SideNavTeacher/SideNavTeacher';
import TopLoginNav from '../../Navigation/TopLoginNav/TopLoginNav';
import WeatherData from '../../DataComponents/WeatherData/WeatherData.jsx';

import '../../App/App.css';

export default function TeacherLayout({ children }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div>
        <WeatherData className="weather-layout" />
      </div>
      <TopLoginNav />
      <SideNavTeacher />

      <div>{children}</div>
    </LocalizationProvider>
  );
}
