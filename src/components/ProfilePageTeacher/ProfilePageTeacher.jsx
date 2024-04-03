import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

export default function ProfilePageTeacher() {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((store) => store.user);
  const role = useSelector((store) => store.role);

  const [room, setRoom] = useState('');
  const [extension, setExtension] = useState('');
  const [grade, setGrade] = useState('');

  const handleBack = () => {
    // Navigate to Role when button is clicked
    history.push('/role');
  };

  const handleSubmit = () => {
    console.log(`User ID:${user.id} set role to:${role}`);

    // Dispatch and hold user role.
    dispatch({
      type: 'UPDATE_PROFILE',
      payload: {
        userId: user.id,
        type: role,
      },
    });
    history.push('/hometeacher');
  };

  return (
    <div className="roledisplay">
      <h2>Let's create a profile, so you can get started:</h2>
      <div className="formGroup">
        <input value={user.first_name} />
        <input value={user.last_name} />
        <input value={user.username} />

        <input
          type="text"
          id="roomField"
          name="roomField"
          placeholder="Room Number"
          value={room}
          onChange={(event) => setRoom(event.target.value)}
        ></input>

        <input
          placeholder="Extension"
          value={extension}
          onChange={(e) => setExtension(event.target.value)}
        />
        <input
          placeholder="Grade"
          value={grade}
          onChange={(e) => setGrade(event.target.value)}
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
