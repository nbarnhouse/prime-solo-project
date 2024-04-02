import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import TeacherLayout from '../../Layouts/TeacherLayout/TeacherLayout.jsx';
import BasicTextInput from '../../Widgets/BasicTextInput/BasicTextInput.jsx';
import BasicDatePicker from '../../DateWidgets/DatePicker/BasicDatePicker.jsx';
import '../../Layouts/MainLayout/Layout.css';

export default function AbsenceTeacher() {
  const [date, setDate] = useState('');
  const [reason, setReason] = useState('');
  const [adminnote, setAdminnote] = useState('');
  const [subnote, setSubnote] = useState('');
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  const createAbsence = (event) => {
    event.preventDefault();

    dispatch({
      type: 'CREATE_ABSENCE',
      payload: {
        date: date,
        reason: reason,
      },
    });
    //history.push('/role');
  }; // end registerUser

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

              <BasicDatePicker />
              <BasicTextInput />
              <input
                className="btn"
                type="submit"
                name="submit"
                value="Submit"
                onClick={createAbsence}
              />
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
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <h4>Notes to Substitute</h4>
              <BasicTextInput className="para-input" type="input" />
            </Item>
          </Grid>
        </Grid>
      </div>
    </TeacherLayout>
  );
}
