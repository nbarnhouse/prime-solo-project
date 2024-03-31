import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import SideNavTeacher from '../../Navigation/SideNavTeacher/SideNavTeacher';
import TopLoginNav from '../../Navigation/TopLoginNav/TopLoginNav';
import WeatherData from '../../Widgets/WeatherData/WeatherData.jsx';
import '../MainLayout/Layout.css';

export default function TeacherLayout({ children }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {/* <WeatherData /> */}
      <TopLoginNav />
      <SideNavTeacher />
      <div>{children}</div>
    </LocalizationProvider>
  );
}
