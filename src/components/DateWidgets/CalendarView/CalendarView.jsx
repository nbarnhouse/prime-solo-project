import React, { useState } from 'react';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

export default function BasicDateCalendar() {
  const currentDate = dayjs();
  const referenceDate = currentDate.add(1, 'month');

  //custom date in proper format dayjs('2022-04-17')
  console.log('Current Date format', dayjs());

  const [value, setValue] = useState(currentDate.add(7, 'day'));

  console.log('Reference Date', referenceDate);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
        value={value}
        onChange={(newValue) => setValue(newValue)}
        referenceDate={currentDate.add(2, 'month')}
      />
    </LocalizationProvider>
  );
}
