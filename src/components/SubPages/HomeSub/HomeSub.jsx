import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import SubLayout from '../../Layouts/SubLayout/SubLayout.jsx';

export default function HomeSub() {
  const user = useSelector((store) => store.user);
  const request = useSelector((store) => store.request);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch({ type: 'FETCH_REQUESTS' });
  // }, []);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 350,
  }));

  return (
    <SubLayout>
      <h2>Welcome, {user.first_name}!</h2>

      <p>working/{user.id} </p>
      <div className="frame">
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <Item>
              <div>
                <h4>Upcoming Assignments</h4>
                <div>
                  <p>
                    March 13, Tulsa Classical Academy, 5th Grade Teacher
                    Dissmiss <button className="btn-sm">Accept</button>
                  </p>
                </div>
              </div>
              {/* <div>
                {user.map((request) => {
                  return (
                    <div key={request.id}>
                      <p>{request.first_name}</p>
                      <p>{request.last_name}</p>
                    </div>
                  );
                })}
              </div> */}
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              {' '}
              <DateCalendar />
            </Item>
          </Grid>
          <Grid item xs={12}>
            <Item>
              <h4>Available Assignments</h4>
            </Item>
          </Grid>
        </Grid>
      </div>
    </SubLayout>
  );
}
