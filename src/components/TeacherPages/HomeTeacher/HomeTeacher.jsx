import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { DateTime } from 'luxon';

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

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
            <Item>
              <h4>Upcoming Requests</h4>
              <div className="request-container">
                <TableContainer component={Paper} className="request-table">
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Request ID</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>School</TableCell>
                        <TableCell>Teacher</TableCell>
                        <TableCell>Action</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {submittedRequests.length > 0 ? (
                        submittedRequests.map((request) => (
                          <TableRow key={request.id}>
                            <TableCell>{request.id}</TableCell>
                            <TableCell>
                              {DateTime.fromISO(
                                request.request_start_date
                              ).toFormat('MMMM dd')}
                              <div>
                                {DateTime.fromISO(
                                  request.request_start_date
                                ).toFormat('EEEE')}
                              </div>
                            </TableCell>
                            <TableCell>{request.school}</TableCell>
                            <TableCell>
                              {request.first_name} {request.last_name}
                            </TableCell>
                            <TableCell>
                              <button
                                className="btn-sm"
                                onClick={handleAvailability}
                              >
                                Cancel
                              </button>
                            </TableCell>
                          </TableRow>
                        ))
                      ) : (
                        <TableRow>
                          <TableCell colSpan={5}>No Current Requests</TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            </Item>
          </Grid>
        </Grid>
      </div>
    </TeacherLayout>
  );
}
