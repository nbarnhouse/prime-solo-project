import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { DateTime } from 'luxon';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

// import CalendarView from '../Dates/CalendarView/CalendarView.jsx';
// import DatePicker from '../Dates/DatePicker/DatePicker.jsx';
import TeacherLayout from '../../Layouts/TeacherLayout/TeacherLayout.jsx';

export default function ScheduleTeacher() {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_SUBMITTED_REQUESTS' });
    dispatch({ type: 'FETCH_PAST_REQUESTS' });
  }, []);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
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
    <TeacherLayout>
      <h1>Schedule</h1>
      <div className="container">Schedule For Teachers</div>

      <div className="frame">
        <Grid container spacing={3}>
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
              <button
                type="button"
                className="btn btn_asLink black"
                onClick={() => {
                  history.push('/scheduletesubcal');
                }}
              >
                Calendar View
              </button>
              <button
                type="button"
                className="btn btn_asLink black"
                onClick={() => {
                  history.push('/scheduleteacher');
                }}
              >
                List View
              </button>
            </Item>
          </Grid>
          <Grid item xs={12}>
            <Item>
              <h4>Current & Upcoming Requests</h4>
            </Item>
          </Grid>
          <Grid item xs={12}>
            <Item>
              <h4>Past Requests</h4>
            </Item>
          </Grid>
        </Grid>
      </div>
    </TeacherLayout>
  );
}
