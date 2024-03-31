import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { DateTime } from 'luxon';

import SubLayout from '../../Layouts/SubLayout/SubLayout.jsx';
import RequestData from '../../Widgets/RequestData/RequestData.jsx';
//import BasicDateCalendar from '../../DateWidgets/DateCalendar/BasicDateCalendar.jsx';

export default function HomeSub() {
  const user = useSelector((store) => store.user);
  const acceptedRequests = useSelector((store) => store.acceptedRequest);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_REQUESTS' });
    dispatch({ type: 'FETCH_ACCEPTED_REQUESTS' });
  }, []);

  const handleAccept = (requestId) => {
    console.log(`Request ID:${requestId} accepted by User ID:${user.id}`);
    dispatch({
      type: 'ACCEPT_REQUEST',
      payload: { requestId, userId: user.id },
    });
  };

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

      <div className="frame">
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <Item>
              <div>
                <h4>Upcoming Assignments</h4>

                <div>
                  {acceptedRequests.length > 0 ? (
                    acceptedRequests.map((request) => (
                      <div key={request.id}>
                        {/* Add debugging statements */}
                        {console.log('Request:', request)}

                        {/* Render each accepted request content here */}
                        <p>
                          {' '}
                          {DateTime.fromISO(
                            request.request_start_date
                          ).toFormat('EEEE')}
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
              {/* <BasicDateCalendar assignments={acceptedRequests} /> */}
            </Item>
          </Grid>
          <Grid item xs={12}>
            <Item>
              <h4>Available Assignments</h4>
              <RequestData handleAccept={handleAccept} />
            </Item>
          </Grid>
        </Grid>
      </div>
    </SubLayout>
  );
}
