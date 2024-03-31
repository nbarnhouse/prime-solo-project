import React, { useEffect } from 'react';
import LogOutButton from '../../Widgets/LogOutButton/LogOutButton.jsx';
import { useSelector, useDispatch } from 'react-redux';

import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { Button, Link } from '@mui/material';

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { DateTime } from 'luxon';

import TeacherLayout from '../../Layouts/TeacherLayout/TeacherLayout.jsx';
//import BasicDateCalendar from '../../DateWidgets/DateCalendar/BasicDateCalendar.jsx';

export default function HomeTeacher() {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const submittedRequests = useSelector((store) => store.submittedRequest);

  useEffect(() => {
    dispatch({ type: 'FETCH_SUBMITTED_REQUESTS' });
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

  return (
    <TeacherLayout>
      <h2>Welcome, {user.first_name}!</h2>

      <div className="frame">
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Item>
              <div>CALENDAR</div>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>CALENDAR</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>CALENDAR</Item>
          </Grid>
          <Grid item xs={12}>
            <Item>
              <div>
                <h4>Upcoming Requests</h4>
                {submittedRequests.length > 0 ? (
                  submittedRequests.map((request) => (
                    <div key={request.id}>
                      {/* Add debugging statements */}
                      {console.log('Request:', request)}

                      {/* Render each accepted request content here */}
                      <p>
                        {' '}
                        {DateTime.fromISO(request.request_start_date).toFormat(
                          'EEEE'
                        )}
                        {DateTime.fromISO(request.request_start_date).toFormat(
                          'MMMM dd'
                        )}
                      </p>
                      <p>{request.school}</p>
                      <p>
                        Sub for {request.first_name} {request.last_name}
                      </p>
                    </div>
                  ))
                ) : (
                  <p>No Current Requests</p>
                )}
              </div>
            </Item>
          </Grid>
        </Grid>
      </div>
    </TeacherLayout>
  );
}
