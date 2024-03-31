import React from 'react';
import { useHistory } from 'react-router-dom';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import SubLayout from '../../Layouts/SubLayout/SubLayout';
import AvailabilityData from '../../Widgets/AvailabilityData/AvailabilityData.jsx';
//import BasicDatePicker from '../../Widgets/DatePicker/BasicDatePicker.jsx';
import BasicTextInput from '../../Widgets/BasicTextInput/BasicTextInput.jsx';

export default function AvailabilitySub() {
  const history = useHistory();

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

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
    <SubLayout>
      <div className="frame">
        <h2>Availability</h2>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Item>
                <h4>Recurring Availability</h4>
                {/* <BasicDatePicker /> */}
                <button className="btn-sm">Submit</button>
              </Item>
            </Grid>
            <Grid item xs={12}>
              <Item>
                <h4>One-time event</h4>
                <BasicTextInput />
                {/* <BasicDatePicker /> */}
                <BasicTextInput />
                <button className="btn-sm">Submit</button>
              </Item>
            </Grid>
            <Grid item xs={12}>
              <Item>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={calMonths}
                  sx={{ width: 300 }}
                  renderInput={(params) => (
                    <TextField {...params} label="Month" />
                  )}
                />

                <div>
                  <AvailabilityData />
                </div>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </div>
    </SubLayout>
  );
}
