import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import SubLayout from '../../Layouts/SubLayout/SubLayout';
import AvailabilityData from '../../DataComponents/AvailabilityData/AvailabilityData.jsx';
// import BasicDatePicker from '../../DateWidgets/DatePicker/BasicDatePicker.jsx';
// import BasicTextInput from '../../Widgets/BasicTextInput/BasicTextInput.jsx';
// import BasicDropDown from '../../Widgets/BasicDropDown/BasicDropDown.jsx';
// import BasicButton from '../../Widgets/BasicButton/BasicButton.jsx';

export default function AvailabilitySub() {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const [type, setType] = useState('');
  const [date, setDate] = useState('');
  const [comments, setComments] = useState('');

  const createSingleAvailability = (event) => {
    event.preventDefault();

    console.log(
      `Submit New Avaibility: User ID:${user.id} set Type:${type}, setDate: ${date}, setComments: ${comments}`
    );

    dispatch({
      type: 'ADD_AVAILABILITY',
      payload: {
        userId: user.id,
        type: type,
        date: date,
        comments: comments,
      },
    });

    setType('');
    setDate('');
    setComments('');
  };

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
        <br></br>
        <br></br>
        <h2>Availability</h2>
        <br></br>
        <br></br>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Item>
                <h4>Recurring Availability</h4>
                <div className="schedule-nav">
                  <div className="nav-item">
                    <input
                      type="text"
                      id="myInputField"
                      name="inputField"
                      placeholder="Unavailability Day"
                    ></input>
                  </div>
                  <div className="nav-item">
                    <button type="submit" className="standard-button">
                      Submit
                    </button>
                  </div>
                </div>
              </Item>
            </Grid>
            <Grid item xs={12}>
              <Item>
                <h4>One-time event</h4>

                <form
                  onSubmit={createSingleAvailability}
                  className="schedule-nav"
                >
                  <div className="nav-item">
                    <select
                      id="myDropdown"
                      name="dropdown"
                      value={type}
                      onChange={(event) => setType(event.target.value)}
                    >
                      <option value="Available">Available</option>
                      <option value="Unavailable">Unavailable</option>
                    </select>
                  </div>
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
                      placeholder="Comments"
                      value={comments}
                      onChange={(event) => setComments(event.target.value)}
                    ></input>
                  </div>
                  <div className="nav-item">
                    <button type="submit" className="standard-button">
                      Submit
                    </button>
                  </div>
                </form>
              </Item>
            </Grid>
            <Grid item xs={12}>
              <Item>
                <div>
                  <AvailabilityData />
                </div>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </div>
    </SubLayout>
  );
}
