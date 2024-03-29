import { useHistory, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import '../App/App.css';
import './RegisterPageRole.css';

export default function RegisterPageRole() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [role, setRole] = useState('');
  const [selectedButton, setSelectedButton] = useState('');
  const { id } = useParams();

  const handleRoleSelection = (selectedRole) => {
    setRole(selectedRole);
    setSelectedButton(selectedRole); // Set the selected button

    console.log('Selected Role:', selectedRole);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Dispatch and hold user role.
    dispatch({
      type: 'SET_ROLE',
      payload: {
        type: role,
      },
    });

    // Log the dispatched action to the console
    console.log('Dispatched Action:', {
      type: 'SET_ROLE',
      payload: {
        type: role,
      },
    });

    // Navigate to the profile page depending on the selected role.
    switch (role) {
      case 'teacher':
        history.push('/profileteacher');
        break;
      case 'substitute':
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
        className={`btn ${selectedButton === 'teacher' ? 'selected' : ''}`}
        onClick={() => handleRoleSelection('teacher')}
      >
        Teacher
      </button>
      <button
        className={`btn ${selectedButton === 'substitute' ? 'selected' : ''}`}
        onClick={() => handleRoleSelection('substitute')}
      >
        Substitute
      </button>
      <button className="btn small" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}
