import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import SideNavSub from '../../Navigation/SideNavSub/SideNavSub';

import '../MainLayout/Layout.css';
import TopLoginNav from '../../Navigation/TopLoginNav/TopLoginNav';
import WeatherData from '../../Widgets/WeatherData/WeatherData.jsx';

export default function SubLayout({ children }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {/* <WeatherData /> */}
      <TopLoginNav />

      <SideNavSub />
      <div>{children}</div>
    </LocalizationProvider>
  );
}
