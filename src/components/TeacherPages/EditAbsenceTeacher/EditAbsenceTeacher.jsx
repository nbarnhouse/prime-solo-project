import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { styled } from '@mui/material/styles';
import { Paper, Grid } from '@mui/material';

import TeacherLayout from '../../Layouts/TeacherLayout/TeacherLayout.jsx';
import '../../App/App.css';

export default function EditAbsenceTeacher() {
  const user = useSelector((store) => store.user);
  const submittedRequests = useSelector((store) => store.submittedRequest);

  //const errors = useSelector((store) => store.errors);

  const [date, setDate] = useState('');
  const [reason, setReason] = useState('');
  const [adminnote, setAdminnote] = useState('');
  const [subnote, setSubnote] = useState('');

  const dispatch = useDispatch();

  const updateAbsence = (event) => {
    event.preventDefault();

    console.log(
      `UPDATE A REQUEST: User ID:${user.user_id} set setDate: ${date}, 
      setComments: ${reason}, admin note: ${adminnote}, sub note: ${subnote}
      `
    );

    dispatch({
      type: 'UPDATE_ABSENCE',
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

  const deleteRequestItem = (requestId) => {
    console.log('Deleting request with ID:', requestId); // Log the item ID before deletion
    dispatch({ type: 'DELETE_REQUEST_ITEM', payload: requestId });
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
        <br></br>
        <br></br>
        <h2>Edit Absence</h2>
        <br></br>
        <br></br>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Item>
              <h4>Update Request</h4>
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
                    value="Update"
                    onClick={updateAbsence}
                  />
                </div>
                <div className="nav-item">
                  <button
                    className="btn-sm"
                    onClick={() => deleteRequestItem(submittedRequests.id)}
                  >
                    Delete
                  </button>
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
        </Grid>
      </div>
    </TeacherLayout>
  );
}
