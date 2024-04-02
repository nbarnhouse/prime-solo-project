import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import SideNavSub from '../../Navigation/SideNavSub/SideNavSub';
import TopLoginNav from '../../Navigation/TopLoginNav/TopLoginNav';
import WeatherData from '../../DataComponents/WeatherData/WeatherData.jsx';

import '../MainLayout/Layout.css';

export default function SubLayout({ children }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TopLoginNav />
      <SideNavSub />
      <WeatherData className="weather-layout" />
      <div>{children}</div>
    </LocalizationProvider>
  );
}
