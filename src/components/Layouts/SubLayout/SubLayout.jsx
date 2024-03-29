import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import SideNavSub from '../../Navigation/SideNavSub/SideNavSub';

import './SubLayout.css';
import TopLoginNav from '../../Navigation/TopLoginNav/TopLoginNav';

export default function SubLayout({ children }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TopLoginNav />
      <SideNavSub />
      <div>{children}</div>
    </LocalizationProvider>
  );
}
