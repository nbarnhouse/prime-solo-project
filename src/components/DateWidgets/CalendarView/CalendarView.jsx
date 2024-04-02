import * as React from 'react';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

export default function DateCalendarReferenceDate({ referenceDates }) {
  const [value, setValue] = React.useState(dayjs('2024-04-15'));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div>
        <DateCalendar
          referenceDate={referenceDates}
          views={['year', 'month', 'day']}
          value={value}
          onChange={(newValue) => setValue(newValue)}
        />
      </div>
    </LocalizationProvider>
  );
}
