import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

export default function ProfilePageTeacher() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [room, setRoom] = useState('');
  const [extension, setExtension] = useState('');
  const [grade, setGrade] = useState('');

  const handleSubmit = () => {
    // Dispatch an action to submit the profile information
    //dispatch(submitProfile({ room, extension, grade }));
    // Navigate to the profile page
    history.push('/hometeacher');
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
          placeholder="Room"
          value={room}
          onChange={(e) => setRoom(e.target.value)}
        />
        <input
          placeholder="Extension"
          value={extension}
          onChange={(e) => setExtension(e.target.value)}
        />
        <input
          placeholder="Grade"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
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
