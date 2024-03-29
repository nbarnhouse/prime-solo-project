import React from 'react';
import LogOutButton from '../Widgets/LogOutButton/LogOutButton.jsx';
import { useSelector } from 'react-redux';

//import WeatherData from '../Widgets/WeatherData/WeatherData.jsx';
//import AvailabilityData from '../Widgets/AvailabilityData/AvailabilityData.jsx';
import RequestData from '../Widgets/RequestData/RequestData.jsx';

function DataTesting() {
  const user = useSelector((store) => store.user);
  const request = useSelector((store) => store.request);
  const availability = useSelector((store) => store.availability);

  return (
    <>
      <div className="container">
        <h2>Welcome, {user.first_name}!</h2>
        <p>Your UserType is: {user.type}</p>
        <p>Your ID is: {user.id}</p>

        <p>Availability Data:</p>

        <div className="availability-container">
          {availability.map((item) => (
            <div key={item.id} className="availability-item">
              <p>ID: {item.id}</p>
            </div>
          ))}
        </div>

        {/* <p>Request Data:</p>

        <div className="request-container">
          {request.map((request) => (
            <div key={request.id} className="request-item">
              <p>Request ID: {request.id}</p>
            </div>
          ))}
        </div> */}

        {/* <WeatherData /> */}

        {/* <AvailabilityData /> */}

        <LogOutButton className="btn" />
        <p>Request Data:</p>
        {/* <RequestData /> */}
      </div>
    </>
  );
}

// this allows us to use <App /> in index.js
export default DataTesting;
