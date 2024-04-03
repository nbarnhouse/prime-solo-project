import { useHistory } from 'react-router-dom';
import dayjs from 'dayjs';

import { styled } from '@mui/material/styles';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import CalendarView from '../../DateWidgets/CalendarView/CalendarView.jsx';
import SubLayout from '../../Layouts/SubLayout/SubLayout.jsx';

export default function ScheduleSub() {
  const history = useHistory();

  const handleAvailability = () => {
    // Navigate to Role when button is clicked
    history.push('/availabilitysub');
  };

  // Get today's date
  const today = new Date();

  // Initialize an array to store the dates
  const dates = [];

  // Loop through the next 12 months
  for (let i = 0; i < 12; i++) {
    // Create a new Date object by adding i months to today's date
    const date = new Date(
      today.getFullYear(),
      today.getMonth() + i,
      today.getDate()
    );

    // Push the date into the dates array
    dates.push(date);
  }

  // Console log the array
  console.log(dates);

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
                <button className="btn-sm" onClick={handleAvailability}>
                  Manage Availability
                </button>

                <button
                  type="button"
                  className="btn btn_asLink black"
                  onClick={() => {
                    history.push('/schedulesubcal');
                  }}
                >
                  Calendar View
                </button>

                <button
                  type="button"
                  className="btn btn_asLink black"
                  onClick={() => {
                    history.push('/schedulesub');
                  }}
                >
                  List View
                </button>
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                <DateCalendar />
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                <DateCalendar
                  referenceDate={dayjs('2024-05-1')}
                  views={['year', 'month', 'day']}
                />
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                <DateCalendar
                  referenceDate={dayjs('2024-06-1')}
                  views={['year', 'month', 'day']}
                />
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                <DateCalendar
                  referenceDate={dayjs('2024-07-1')}
                  views={['year', 'month', 'day']}
                />
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                <DateCalendar
                  referenceDate={dayjs('2024-08-1')}
                  views={['year', 'month', 'day']}
                />
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                <DateCalendar
                  referenceDate={dayjs('2024-09-1')}
                  views={['year', 'month', 'day']}
                />
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                <DateCalendar
                  referenceDate={dayjs('2024-10-1')}
                  views={['year', 'month', 'day']}
                />
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                <DateCalendar
                  referenceDate={dayjs('2024-11-1')}
                  views={['year', 'month', 'day']}
                />
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                <DateCalendar
                  referenceDate={dayjs('2024-12-1')}
                  views={['year', 'month', 'day']}
                />
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                <DateCalendar
                  referenceDate={dayjs('2025-01-1')}
                  views={['year', 'month', 'day']}
                />
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                <DateCalendar
                  referenceDate={dayjs('2025-02-1')}
                  views={['year', 'month', 'day']}
                />
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                <DateCalendar
                  referenceDate={dayjs('2025-03-1')}
                  views={['year', 'month', 'day']}
                />
              </Item>
            </Grid>
          </Grid>
        </Box>
      </div>
    </SubLayout>
  );
}
