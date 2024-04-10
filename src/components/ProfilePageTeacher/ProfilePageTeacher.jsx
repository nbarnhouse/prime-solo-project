import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

export default function ProfilePageTeacher() {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((store) => store.user);

  const [room, setRoom] = useState('');
  const [extension, setExtension] = useState('');
  const [grade, setGrade] = useState('');

  const handleBack = () => {
    // Navigate to Role when button is clicked
    history.push('/role');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      `TEACHER User ID:${user.id} set room to:${room}, extension to ${extension}, and grade to ${grade}`
    );

    // Dispatch and hold user role.
    dispatch({
      type: 'UPDATE_PROFILE_TEACHER',
      payload: {
        userId: user.id,
        room: room,
        extension: extension,
        grade: grade,
      },
    });
    history.push('/hometeacher');
  };

  return (
    <div className="formPanel">
      <h2>Let's create a profile, so you can get started:</h2>
      <div className="formGroup">
        <input value={user.first_name} onChange={() => {}} />
        <input value={user.last_name} onChange={() => {}} />
        <input value={user.username} onChange={() => {}} />

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
          onChange={(event) => setExtension(event.target.value)}
        />
        <input
          placeholder="Grade"
          value={grade}
          onChange={(event) => setGrade(event.target.value)}
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
