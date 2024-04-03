import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import TeacherLayout from '../../Layouts/TeacherLayout/TeacherLayout.jsx';
import BasicTextInput from '../../Widgets/BasicTextInput/BasicTextInput.jsx';
//import BasicDatePicker from '../../DateWidgets/DatePicker/BasicDatePicker.jsx';
import '../../Layouts/MainLayout/Layout.css';

export default function AbsenceTeacher() {
  const user = useSelector((store) => store.user);
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
        userId: user.user_id,
      },
    });

    setDate('');
    setReason('');
    setAdminnote('');
    setSubnote('');
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
      <h2>Create Absence</h2>
      <div className="frame">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Item>
              <h4>Substitute Required</h4>
              <div className="schedule-nav">
                <div className="nav-item">
                  <input
                    type="date"
                    id="myDateField"
                    name="dateField"
                    value={date}
                    onChange={(event) => setDate(event.target.value)}
                  ></input>
                </div>
                <div className="nav-item">
                  <input
                    type="text"
                    id="myInputField"
                    name="inputField"
                    placeholder="Reason"
                    value={reason}
                    onChange={(event) => setReason(event.target.value)}
                  ></input>
                </div>
              </div>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <h4>Notes to Administrator</h4>
              <p>(not viewable by substitute)</p>
              <BasicTextInput
                label="Other"
                type="input"
                // value={username}
                multiline
                maxRows={8}
                //Onchange
              />

              <div className="nav-item">
                <input
                  type="text"
                  id="adminInputField"
                  name="adminInputField"
                  value={adminnote}
                  onChange={(event) => setReason(event.target.value)}
                ></input>
              </div>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <h4>Notes to Substitute</h4>
              <BasicTextInput className="para-input" type="input" />
            </Item>
          </Grid>
          <Grid item xs={12}>
            <Item>
              <h4>submit button</h4>

              <input
                className="btn"
                type="submit"
                name="submit"
                value="Submit"
                onClick={createAbsence}
              />
            </Item>
          </Grid>
        </Grid>
      </div>
    </TeacherLayout>
  );
}
