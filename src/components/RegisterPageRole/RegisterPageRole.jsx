import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import '../App/App.css';
import './RegisterPageRole.css';

export default function RegisterPageRole() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [role, setRole] = useState('');
  const [selectedButton, setSelectedButton] = useState('');

  const handleRoleSelection = (selectedRole) => {
    setRole(selectedRole);
    setSelectedButton(selectedRole); // Set the selected button
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Dispatch and hold user role.
    dispatch({
      type: 'SET_ROLE',
      payload: {
        role: role,
      },
    });

    // Navigate to the profile page depending on the selected role.
    switch (role) {
      case 'Teacher':
        history.push('/profileteacher');
        break;
      case 'Substitute':
        history.push('/profilesub');
        break;
      default:
        history.push('/user'); // Default to a generic profile page
        break;
    }
  };

  return (
    <div className="container roledisplay">
      <h2>What is your role?:</h2>
      <button
        className={`btn ${selectedButton === 'Teacher' ? 'selected' : ''}`}
        onClick={() => handleRoleSelection('Teacher')}
      >
        Teacher
      </button>
      <button
        className={`btn ${selectedButton === 'Substitute' ? 'selected' : ''}`}
        onClick={() => handleRoleSelection('Substitute')}
      >
        Substitute
      </button>
      <button className="btn small" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}
