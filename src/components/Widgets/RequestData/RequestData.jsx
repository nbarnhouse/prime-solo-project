import './RequestData.css';

import { useSelector } from 'react-redux';
import { DateTime } from 'luxon';

export default function RequestData() {
  const request = useSelector((store) => store.request);

  return (
    <>
      <div className="request-container">
        {request.map((request) => (
          <div key={request.id} className="request-item">
            <p>Request ID: {request.id}</p>
            <p>
              Start Date:{' '}
              {DateTime.fromISO(request.request_start_date).toLocaleString(
                DateTime.DATE_SHORT
              )}
            </p>
            <p>School: {request.school}</p>
            <p>Status: {request.status}</p>
            <p>Teacher ID: {request.teacher_id}</p>
          </div>
        ))}
      </div>
    </>
  );
}
