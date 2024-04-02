import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function MonthFilter() {
  const calMonths = [
    { label: 'January', month: '1' },
    { label: 'February', month: '2' },
    { label: 'March', month: '3' },
    { label: 'April', month: '4' },
    { label: 'May', month: '5' },
    { label: 'June', month: '6' },
    { label: 'July', month: '7' },
    { label: 'August', month: '8' },
    { label: 'September', month: '9' },
    { label: 'October', month: '10' },
    { label: 'November', month: '11' },
    { label: 'December', month: '12' },
  ];
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={calMonths}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Month" />}
    />
  );
}
