import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { DateTime } from 'luxon';

import SubLayout from '../../Layouts/SubLayout/SubLayout.jsx';
import RequestData from '../../DataComponents/RequestData/RequestData.jsx';
import '../../SubPages/SubCss.css';
//import BasicDateCalendar from '../../DateWidgets/DateCalendar/BasicDateCalendar.jsx';

export default function HomeSub() {
  const user = useSelector((store) => store.user);
  const acceptedRequests = useSelector((store) => store.acceptedRequest);
  const request = useSelector((store) => store.request);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_ACCEPTED_REQUESTS' });
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
    <SubLayout>
      <h2>Welcome, {user.first_name}!</h2>
      <h2>HOME SUB!</h2>
      <div className="frame">
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <Item>
              <div>
                <h4>Upcoming Assignments</h4>
                <div>
                  {acceptedRequests.length > 0 ? (
                    acceptedRequests.slice(0, 1).map((request) => (
                      <div key={request.id}>
                        {console.log('Request:', request)}
                        <p>
                          {DateTime.fromISO(
                            request.request_start_date
                          ).toFormat('EEEE')}{' '}
                          {DateTime.fromISO(
                            request.request_start_date
                          ).toFormat('MMMM dd')}
                        </p>
                        <p>{request.school}</p>
                        <p>
                          Sub for {request.first_name} {request.last_name}
                        </p>
                      </div>
                    ))
                  ) : (
                    <p>No Current Assignments</p>
                  )}
                </div>
              </div>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <DateCalendar />
            </Item>
          </Grid>
          <Grid item xs={12}>
            <Item>
              <h4>Available Assignments</h4>
              {/* <RequestData /> */}
            </Item>
          </Grid>
        </Grid>
      </div>
    </SubLayout>
  );
}
