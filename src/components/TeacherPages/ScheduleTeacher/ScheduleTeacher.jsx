import React from 'react';
import { useHistory } from 'react-router-dom';

import TeacherLayout from '../../Layouts/TeacherLayout/TeacherLayout.jsx';

import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { Button, Link } from '@mui/material';

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { DateTime } from 'luxon';

export default function ScheduleTeacher() {
  const history = useHistory();

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

  return (
    <TeacherLayout>
      <h2>Schedule</h2>
      <div className="container">Schedule For Teachers</div>

      <div className="frame">
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Item>
              <div>
                <DateCalendar />
              </div>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <DateCalendar />
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <DateCalendar />
            </Item>
          </Grid>
          <Grid item xs={12}>
            <Item></Item>
          </Grid>
        </Grid>
      </div>
    </TeacherLayout>
  );
}
