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

import MonthFilter from '../../Widgets/MonthFilter/MonthFilter';

export default function AvailabilityData() {
  const availability = useSelector((store) => store.availability);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_AVAILABILITY' });
  }, [dispatch]);

  const deleteAvailabilityItem = (itemId) => {
    console.log('Deleting item with ID:', itemId); // Log the item ID before deletion
    dispatch({ type: 'DELETE_AVAILABILITY_ITEM', payload: itemId });
  };

  return (
    <>
      <div className="availability-container">
        <h4>Availability Data</h4>
        <MonthFilter />

        <div className="availability-container">
          <TableContainer component={Paper} className="availability-table">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Request #</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Day</TableCell>
                  <TableCell>Type</TableCell>
                  <TableCell>Comments</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {availability.map((item) => (
                  <TableRow key={item.id} className="availability-item">
                    <TableCell>{item.id}</TableCell>
                    <TableCell>
                      {DateTime.fromISO(item.date).toLocaleString(
                        DateTime.DATE_SHORT
                      )}
                    </TableCell>
                    <TableCell>
                      {DateTime.fromISO(item.date).toFormat('EEEE')}
                    </TableCell>
                    <TableCell>{item.type}</TableCell>
                    <TableCell>{item.comments}</TableCell>
                    <TableCell>
                      <button onClick={() => deleteAvailabilityItem(item.id)}>
                        Delete
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
