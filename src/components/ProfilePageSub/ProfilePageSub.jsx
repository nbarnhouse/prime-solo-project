import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

import '../App/App.css';

export default function ProfilePageSub() {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((store) => store.user);

  const [number, setNumber] = useState('');

  const handleBack = () => {
    // Navigate to Role when button is clicked
    history.push('/role');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`SUB User ID:${user.id} set number to:${number}`);

    dispatch({
      type: 'UPDATE_PROFILE_SUB',
      payload: {
        userId: user.id,
        phone: number,
      },
    });
    history.push('/homesub');
  };

  return (
    <div className="formPanel">
      <h2>Let's create a profile, so you can get started:</h2>
      <div className="formGroup">
        <input value={user.first_name} onChange={() => {}} />
        <input value={user.last_name} onChange={() => {}} />
        <input value={user.username} onChange={() => {}} />
        <input
          placeholder="Phone"
          value={number}
          onChange={(event) => setNumber(event.target.value)}
        />
      </div>
      <div className="center">
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
