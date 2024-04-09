import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import SubLayout from '../../Layouts/SubLayout/SubLayout';
import AvailabilityData from '../../DataComponents/AvailabilityData/AvailabilityData.jsx';

export default function AvailabilitySub() {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const [type, setType] = useState('');
  //const [type2, setType2] = useState('');
  const [date, setDate] = useState('');
  //const [day, setDay] = useState('');
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

  // const createMultipleAvailability = (event) => {
  //   event.preventDefault();

  //   console.log(
  //     `Submit Reoccuring Avaibility: User ID:${user.id} set Day:${day}`
  //   );

  //   dispatch({
  //     type: 'ADD_REC_AVAILABILITY',
  //     payload: {
  //       userId: user.id,
  //       type: type,
  //       day: day,
  //     },
  //   });

  //   setDay('');
  // };

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
        <h2>Availability</h2>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={3}>
            {/* <Grid item xs={12}>
              <Item>
                <h4>Recurring Availability</h4>
                <form
                  className="schedule-nav"
                  onSubmit={createMultipleAvailability}
                >
                  <div className="nav-item">
                    <select
                      id="myDropdown"
                      name="dropdown"
                      value={type}
                      onChange={(event) => setType(event.target.value)}
                    >
                      <option value="Default">SELECT A TYPE</option>
                      <option value="Available">Available</option>
                      <option value="Unavailable">Unavailable</option>
                    </select>
                  </div>

                  <div className="nav-item">
                    <select
                      id="myDayDropdown"
                      name="daydropdown"
                      value={day}
                      onChange={(event) => setDay(event.target.value)}
                    >
                      <option value="Default">SELECT A DAY</option>
                      <option value="1">Monday</option>
                      <option value="2">Tuesday</option>
                      <option value="2">Wedsday</option>
                      <option value="2">Thursday</option>
                      <option value="2">Friday</option>
                    </select>
                  </div>

                  <div className="nav-item">
                    <button type="submit" className="standard-button">
                      Submit
                    </button>
                  </div>
                </form>
              </Item>
            </Grid> */}
            <Grid item xs={12}>
              <Item>
                <h4>One-time event</h4>

                <form
                  onSubmit={createSingleAvailability}
                  className="schedule-nav"
                >
                  <div className="nav-item">
                    <select
                      id="myTypeDropdown"
                      name="typedropdown"
                      value={type}
                      onChange={(event) => setType(event.target.value)}
                    >
                      <option value="Default">SELECT A TYPE</option>
                      <option value="Available">Available</option>
                      <option value="Unavailable">Unavailable</option>
                    </select>
                  </div>
                  <div className="nav-item">
                    <label htmlFor="comments">Date:</label>
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
                    <label htmlFor="comments">Comments:</label>
                    &nbsp;&nbsp;&nbsp;
                    <input
                      type="text"
                      id="comments"
                      name="comments"
                      placeholder="Comments"
                      value={comments}
                      style={{ width: '200px' }}
                      onChange={(event) => setComments(event.target.value)}
                    />
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
