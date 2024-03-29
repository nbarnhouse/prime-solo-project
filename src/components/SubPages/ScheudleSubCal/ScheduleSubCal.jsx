import React from 'react';
import { useHistory } from 'react-router-dom';
import SubLayout from '../../Layouts/SubLayout/SubLayout.jsx';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { Button, Link } from '@mui/material';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

export default function ScheduleSub() {
  const history = useHistory();

  const handleAvailability = () => {
    // Navigate to Role when button is clicked
    history.push('/availabilitysub');
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <SubLayout>
      <div className="frame">
        <h2>Schedule</h2>

        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Item>
                <button className="btn-sm" onClick={handleAvailability}>
                  Manage Availability
                </button>

                <button
                  type="button"
                  className="btn btn_asLink black"
                  onClick={() => {
                    history.push('/schedulesubcal');
                  }}
                >
                  Calendar View
                </button>

                <button
                  type="button"
                  className="btn btn_asLink black"
                  onClick={() => {
                    history.push('/schedulesub');
                  }}
                >
                  List View
                </button>
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                {' '}
                <DateCalendar />
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                {' '}
                <DateCalendar />
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                {' '}
                <DateCalendar />
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                {' '}
                <DateCalendar />
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                {' '}
                <DateCalendar />
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                {' '}
                <DateCalendar />
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                {' '}
                <DateCalendar />
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                {' '}
                <DateCalendar />
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                {' '}
                <DateCalendar />
              </Item>
            </Grid>
          </Grid>
        </Box>
      </div>
    </SubLayout>
  );
}
