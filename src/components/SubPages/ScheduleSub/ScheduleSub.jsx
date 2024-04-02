import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { styled } from '@mui/material/styles';
import { DateTime } from 'luxon';

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Grid,
  TextField,
  Autocomplete,
} from '@mui/material';

import SubLayout from '../../Layouts/SubLayout/SubLayout.jsx';
import '../../SubPages/SubCss.css';

export default function ScheduleSub() {
  const history = useHistory();
  const acceptedRequests = useSelector((store) => store.acceptedRequest);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_PAST_REQUESTS' });
    dispatch({ type: 'FETCH_ACCEPTED_REQUESTS' });
  }, []);

  const handleCancel = (requestId) => {
    console.log(`Request ID:${requestId} accepted by User ID:${user.id}`);
    dispatch({
      type: 'CANCEL_REQUEST',
      payload: { requestId, userId: user.id },
    });
  };

  const handleAvailability = () => {
    history.push('/availabilitysub');
  };

  const pastAssignments = acceptedRequests.filter((requestId) => {
    const assignmentDate = DateTime.fromISO(requestId.request_start_date);
    const currentDate = DateTime.now();
    return assignmentDate < currentDate;
  });

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
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={calMonths}
                  sx={{ width: 300 }}
                  renderInput={(params) => (
                    <TextField {...params} label="Month" />
                  )}
                />
                <div className="schedule-nav">
                  <div className="nav-item">
                    <button className="btn" onClick={handleAvailability}>
                      Manage Availability
                    </button>
                  </div>
                  <div className="nav-item">
                    <svg
                      data-slot="icon"
                      fill="none"
                      stroke-width="1.5"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                      ></path>
                    </svg>
                    <button
                      type="button"
                      className="btn btn_asLink black"
                      onClick={() => {
                        history.push('/schedulesubcal');
                      }}
                    >
                      Calendar View
                    </button>

                    <svg
                      data-slot="icon"
                      fill="none"
                      stroke-width="1.5"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                      ></path>
                    </svg>

                    <button
                      type="button"
                      className="btn btn_asLink black"
                      onClick={() => {
                        history.push('/schedulesub');
                      }}
                    >
                      List View
                    </button>
                  </div>
                </div>
              </Item>
            </Grid>
            <Grid item xs={12}>
              <Item>
                <h4>Current & Upcoming Assignments</h4>
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
                        {acceptedRequests.length > 0 ? (
                          acceptedRequests.map((request) => (
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
                            <TableCell colSpan={5}>
                              No Current Assignments
                            </TableCell>
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </div>
              </Item>
            </Grid>
            <Grid item xs={12}>
              <Item>
                <h4>Past Assignments</h4>
                <div className="request-container">
                  <TableContainer component={Paper} className="request-table">
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell>Request ID</TableCell>
                          <TableCell>Date</TableCell>
                          <TableCell>School</TableCell>
                          <TableCell>Teacher</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {pastAssignments && pastAssignments.length > 0 ? (
                          pastAssignments.map((request) => (
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
                            </TableRow>
                          ))
                        ) : (
                          <TableRow>
                            <TableCell colSpan={4}>
                              No Past Assignments
                            </TableCell>
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </div>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </div>
    </SubLayout>
  );
}
