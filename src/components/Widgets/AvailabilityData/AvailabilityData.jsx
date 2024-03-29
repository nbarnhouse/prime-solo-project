import { useSelector } from 'react-redux';
import { DateTime } from 'luxon';

export default function AvailabilityData() {
  const availability = useSelector((store) => store.availability);

  return (
    <>
      <div className="availability-container">
        <p>Availability Data: </p>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Day</th>
              <th>Type</th>
              <th>Comments</th>
            </tr>
          </thead>
          <tbody>
            {availability.map((item) => (
              <tr key={item.id} className="availability-item">
                <td>
                  {DateTime.fromISO(item.date).toLocaleString(
                    DateTime.DATE_SHORT
                  )}
                </td>
                <td>{item.day}</td>
                <td>{item.type}</td>
                <td>{item.comments}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
