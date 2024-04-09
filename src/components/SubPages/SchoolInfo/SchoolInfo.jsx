import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import SubLayout from '../../Layouts/SubLayout/SubLayout.jsx';

import '../../App/App.css';

import { styled } from '@mui/material/styles';

export default function SchoolInfo() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: '340px',
  }));

  return (
    <SubLayout>
      <h2>School Info</h2>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Item>
            <div className="textLeft">
              <h2>Location</h2>
              <p>9815 S. Sheridan, Tulsa, OK 74133</p>
              <h2>Contact Information</h2>
              <p>Phone: (918) 346-6730</p>
              <p>Email: info@tulsaclassical.org</p>
              <h2>Office Hours</h2>
              <p>Monday - Friday: 7:30 AM - 4:00 PM</p>
              <h2>About Us</h2>
              <p>
                A Hillsdale Member K-12 School, Tulsa Classical Academy provides
                a tuition-free, classical liberal arts education in the Tulsa
                area for grades K-8.
              </p>
            </div>
          </Item>
        </Grid>
      </Grid>
    </SubLayout>
  );
}
