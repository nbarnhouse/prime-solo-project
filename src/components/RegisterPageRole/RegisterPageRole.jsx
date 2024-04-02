import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import '../App/App.css';

export default function RegisterPageRole() {
  const dispatch = useDispatch();
  const history = useHistory();

  const user = useSelector((store) => store.user);
  const [role, setRole] = useState('');
  const [selectedButton, setSelectedButton] = useState('');

  const handleRoleSelection = (selectedRole) => {
    console.log('Selected Role:', selectedRole);
    setRole(selectedRole.toLowerCase()); // Convert to lowercase for consistency
    setSelectedButton(selectedRole); // Set the selected button
  };

  const handleSubmit = () => {
    console.log(`User ID:${user.id} set role to:${role}`);

    // Dispatch and hold user role.
    dispatch({
      type: 'UPDATE_ROLE',
      payload: {
        userId: user.id,
        type: role,
      },
    });

    // Navigate to the profile page depending on the selected role.
    // switch (role) {
    //   case 'teacher':
    //     history.push('/profileteacher');
    //     break;
    //   case 'substitute':
    //     history.push('/profilesub');
    //     break;
    //   default:
    //     history.push('/user'); // Default to a generic profile page
    //     break;
    // }
  };

  return (
    <div className="container roledisplay">
      <h2>What is your role?:</h2>
      <button
        className={`btn ${selectedButton === 'Teacher' ? 'selected' : ''}`}
        type="button"
        onClick={() => handleRoleSelection('Teacher')}
        aria-pressed={selectedButton === 'Teacher'}
      >
        Teacher
      </button>
      <button
        className={`btn ${selectedButton === 'Substitute' ? 'selected' : ''}`}
        type="button"
        onClick={() => handleRoleSelection('Substitute')}
        aria-pressed={selectedButton === 'Substitute'}
      >
        Substitute
      </button>
      <button className="btn" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}
