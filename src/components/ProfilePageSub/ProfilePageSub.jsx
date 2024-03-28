import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

import '../App/App.css';

export default function ProfilePageSub() {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((store) => store.user);

  const [number, setNumber] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch({
      type: 'PROFILE_SUB',
      payload: {
        phone: number,
      },
    });
    history.push('/homesub');
  }; // end register Flow

  const handleBack = () => {
    // Navigate to Role when button is clicked
    history.push('/role');
  };

  return (
    <div className="roledisplay">
      <h2>Let's create a profile, so you can get started:</h2>
      <div className="formGroup">
        <input value={user.first_name} />
        <input value={user.last_name} />
        <input value={user.username} />
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
