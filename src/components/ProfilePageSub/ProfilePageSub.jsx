import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

import '../App/App.css';

export default function ProfilePageSub() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [number, setNumber] = useState('');

  const handleSubmit = () => {
    // Dispatch an action to submit the profile information
    // dispatch(submitProfile({ firstName, lastName, email, room, extension, grade }));
    // Navigate to the home profile
    history.push('/homesub'); // Replace '/specific-page' with your desired route
  };

  const handleBack = () => {
    // Navigate to Role when button is clicked
    history.push('/role');
  };

  return (
    <div className="roledisplay">
      <h2>Let's create a profile, so you can get started:</h2>
      <div className="formGroup">
        <input placeholder="FirstName" />
        <input placeholder="LastName" />
        <input placeholder="Email" />
        <input
          placeholder="Phone"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>
      <div>
        <input
          className="btn"
          type="button"
          name="back"
          value="Back"
          onClick={handleBack}
        />
        <input
          className="btn"
          type="button"
          name="submit"
          value="Next"
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
}
