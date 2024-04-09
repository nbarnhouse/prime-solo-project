import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

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
  Grid,
} from '@mui/material';

import TeacherLayout from '../../Layouts/TeacherLayout/TeacherLayout.jsx';
//import BasicTextInput from '../../Widgets/BasicTextInput/BasicTextInput.jsx';
//import BasicDatePicker from '../../DateWidgets/DatePicker/BasicDatePicker.jsx';
import '../../App/App.css';

export default function AbsenceTeacher() {
  const history = useHistory();
  const user = useSelector((store) => store.user);
  const submittedRequests = useSelector((store) => store.submittedRequest);

  //const errors = useSelector((store) => store.errors);

  const [date, setDate] = useState('');
  const [reason, setReason] = useState('');
  const [adminnote, setAdminnote] = useState('');
  const [subnote, setSubnote] = useState('');

  const dispatch = useDispatch();

  const createAbsence = (event) => {
    event.preventDefault();

    console.log(
      `Submit New Avaibility: User ID:${user.user_id} set setDate: ${date}, 
      setComments: ${reason}, admin note: ${adminnote}, sub note: ${subnote}
      `
    );

    dispatch({
      type: 'CREATE_ABSENCE',
      payload: {
        date: date,
        reason: reason,
        adminnote: adminnote,
        subnote: subnote,
        userId: user.teacher_id,
      },
    });

    setDate('');
    setReason('');
    setAdminnote('');
    setSubnote('');
  };

  const deleteRequestItem = () => {
    //removed requestId from input parameter to function
    //console.log('Deleting request with ID:', requestId); // Log the item ID before deletion
    //dispatch({ type: 'DELETE_REQUEST_ITEM', payload: requestId });
    history.push('/editabsenceteacher');
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
    <TeacherLayout>
      <div className="frame">
        <h2>Create Absence</h2>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Item>
              <h4>Substitute Required</h4>
              <div className="schedule-nav">
                <div className="nav-item">
                  <label htmlFor="myDateField">Date:</label>
                  &nbsp;&nbsp;&nbsp;
                  <input
                    type="date"
                    id="myDateField"
                    name="dateField"
                    value={date}
                    onChange={(event) => setDate(event.target.value)}
                  ></input>
                </div>
                <div className="nav-item">
                  <label htmlFor="myInputField">Reason:</label>
                  &nbsp;&nbsp;&nbsp;
                  <input
                    type="text"
                    id="myInputField"
                    name="inputField"
                    placeholder="Reason"
                    value={reason}
                    onChange={(event) => setReason(event.target.value)}
                  ></input>
                </div>
                <div className="nav-item">
                  <input
                    type="submit"
                    name="submit"
                    value="Submit"
                    onClick={createAbsence}
                  />
                </div>
              </div>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <div>
                <h4>Notes to Administrator</h4>
                <p>(not viewable by substitute)</p>
              </div>
              <div className="nav-item">
                <input
                  type="text"
                  id="myAdminComm"
                  name="myAdminComm"
                  value={adminnote}
                  style={{ width: '500px', height: '200px' }}
                  onChange={(event) => setAdminnote(event.target.value)}
                ></input>
              </div>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <h4>Notes to Substitute</h4>
              <br></br>
              <br></br>
              <div className="nav-item">
                <input
                  type="text"
                  id="mySubComm"
                  name="mySubComm"
                  value={subnote}
                  style={{ width: '500px', height: '200px' }}
                  onChange={(event) => setSubnote(event.target.value)}
                ></input>
              </div>
            </Item>
          </Grid>
          <Grid item xs={12}>
            <Item>
              <h4>Confirm Created Request</h4>
              <div className="request-container">
                <TableContainer component={Paper} className="request-table">
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Request ID</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>School</TableCell>
                        <TableCell>Sub Notes</TableCell>
                        <TableCell>Admin Notes</TableCell>
                        <TableCell>Action</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {submittedRequests.length > 0 ? (
                        submittedRequests.slice(0, 1).map((request) => (
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
                            <TableCell>{request.sub_notes}</TableCell>
                            <TableCell>{request.admin_notes}</TableCell>
                            <TableCell>
                              <button
                                className="btn-sm"
                                onClick={() => deleteRequestItem(request.id)}
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
