import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

export default function RegisterPageRole() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [role, setRole] = useState('');

  const handleInputChange = (event) => {
    setRole(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Dispatch and hold user role.
    dispatch({
      type: 'SUBMIT_Role',
      payload: {
        role,
      },
    });
    // Navigate to the profile page depending on button seleted. Navigate to teacher profile, it teacher selects and substitiute if substitute selects.
    history.push('/profile');
    setRole('');
  };
  return (
    <>
      <h1>What is your role?:</h1>
      <button>Administrator</button>
      <button>Teacher</button>
      <button>Substitute</button>
    </>
  );
}
