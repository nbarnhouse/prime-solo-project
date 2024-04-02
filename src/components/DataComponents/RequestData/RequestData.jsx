import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import { DateTime } from 'luxon';

//import MonthFilter from '../../Widgets/MonthFilter/MonthFilter';

export default function AvailabilityData() {
  const request = useSelector((store) => store.request);
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_REQUESTS' });
  }, [dispatch]);

  const handleAccept = (requestId) => {
    console.log(`Request ID:${requestId} accepted by User ID:${user.id}`);
    dispatch({
      type: 'ACCEPT_REQUEST',
      payload: { requestId, userId: user.id },
    });
  };

  return (
    <>
      <div className="availability-container">
        {/* <MonthFilter /> */}

        <div className="availability-container">
          <TableContainer component={Paper} className="availability-table">
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
                {request &&
                  request.map((item) => (
                    <TableRow key={item.id} className="availability-item">
                      <TableCell>{item.id}</TableCell>
                      <TableCell>
                        {DateTime.fromISO(
                          item.request_start_date
                        ).toLocaleString(DateTime.DATE_SHORT)}
                      </TableCell>
                      <TableCell>{item.school}</TableCell>
                      <TableCell>
                        {item.first_name} {item.last_name}
                      </TableCell>
                      <TableCell>
                        <button onClick={() => handleAccept(item.id, user.id)}>
                          Accept
                        </button>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </>
  );
}
