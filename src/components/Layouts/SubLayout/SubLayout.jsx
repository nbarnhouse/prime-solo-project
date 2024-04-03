import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import SideNavSub from '../../Navigation/SideNavSub/SideNavSub';
import TopLoginNav from '../../Navigation/TopLoginNav/TopLoginNav';
import WeatherData from '../../DataComponents/WeatherData/WeatherData.jsx';

import '../MainLayout/Layout.css';

export default function SubLayout({ children }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div>
        <WeatherData className="weather-layout" />
      </div>
      <TopLoginNav />
      <SideNavSub />

      <div>{children}</div>
    </LocalizationProvider>
  );
}
