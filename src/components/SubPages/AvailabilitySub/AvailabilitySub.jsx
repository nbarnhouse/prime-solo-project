import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import SubLayout from '../../Layouts/SubLayout/SubLayout';
import AvailabilityData from '../../DataComponents/AvailabilityData/AvailabilityData.jsx';
import BasicDatePicker from '../../DateWidgets/DatePicker/BasicDatePicker.jsx';
import BasicTextInput from '../../Widgets/BasicTextInput/BasicTextInput.jsx';
import BasicDropDown from '../../Widgets/BasicDropDown/BasicDropDown.jsx';
import BasicButton from '../../Widgets/BasicButton/BasicButton.jsx';

export default function AvailabilitySub() {
  const dispatch = useDispatch();

  const [type, setType] = useState('');
  const [date, setDate] = useState('');
  const [comments, setComments] = useState('');

  const createSingleAvailability = (event) => {
    event.preventDefault();

    console.log(
      `Submit New Avaibility: User ID:${user.id} set Type:${type}, Date:${type}`
    );

    // dispatch({
    //   type: 'ADD_AVAILABILITY',
    //   payload: {
    //     type: type,
    //     date: date,
    //     comments: comments,
    //   },
    // });

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
        <h2>Availability</h2>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Item>
                <h4>Recurring Availability</h4>
                <div className="schedule-nav">
                  <div className="nav-item">
                    <BasicTextInput
                      label="Unavability Day"
                      onChange={(event) => setComments(event.target.value)}
                    />
                  </div>
                  <div className="nav-item">
                    <BasicButton
                      buttonText="Submit"
                      value="register"
                      type="submit"
                    />
                  </div>
                </div>
              </Item>
            </Grid>
            <Grid item xs={12}>
              <Item>
                <h4>One-time event</h4>
                <div className="schedule-nav">
                  <form onSubmit={createSingleAvailability}>
                    <div className="nav-item">
                      <BasicDropDown
                        label="Type"
                        onChange={(event) => setType(event.target.value)}
                      />
                    </div>
                    <div className="nav-item">
                      <BasicDatePicker
                        onChange={(event) => setDate(event.target.value)}
                      />
                    </div>
                    {/* <div className="nav-item">
                    <BasicTextInput
                      label="Comments"
                      onChange={(event) => setComments(event.target.value)}
                    />
                  </div> */}
                    <div className="nav-item">
                      <BasicButton
                        buttonText="Submit"
                        value="register"
                        type="submit"
                      />
                    </div>
                  </form>
                </div>
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
