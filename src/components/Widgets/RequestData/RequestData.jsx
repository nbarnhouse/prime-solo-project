import { useSelector } from 'react-redux';
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

import './RequestData.css';

export default function RequestData({ handleAccept }) {
  const request = useSelector((store) => store.request);

  return (
    <div className="request-container">
      <TableContainer component={Paper} className="request-table">
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
              request.map((request) => (
                <TableRow key={request.id}>
                  <TableCell>{request.id}</TableCell>
                  <TableCell>
                    {DateTime.fromISO(request.request_start_date).toFormat(
                      'MMMM dd'
                    )}
                    <div>
                      {DateTime.fromISO(request.request_start_date).toFormat(
                        'EEEE'
                      )}
                    </div>
                  </TableCell>
                  <TableCell>{request.school}</TableCell>
                  <TableCell>
                    {request.first_name} {request.last_name}
                  </TableCell>
                  <TableCell>
                    <button onClick={() => handleAccept(request.id)}>
                      Accept
                    </button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
