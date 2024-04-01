import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import BasicTextInput from '../Widgets/BasicTextInput/BasicTextInput';
import BasicButton from '../Widgets/BasicButton/BasicButton';
import '../App/App.css';

function RegistrationPage() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector((store) => store.errors);

  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: 'REGISTER',
      payload: {
        first_name: firstname,
        last_name: lastname,
        username: username,
        password: password,
      },
    });
    history.push('/role');
  };

  return (
    <>
      <div className="center">
        <h1>sign up</h1>
      </div>
      <form className="formPanel dark" onSubmit={registerUser}>
        {errors.registrationMessage && (
          <h3 className="alert" role="alert">
            {errors.registrationMessage}
          </h3>
        )}
        <div>
          <BasicTextInput
            label="First Name"
            type="input"
            value={firstname}
            onChange={(event) => setFirstname(event.target.value)}
          />
        </div>

        <div>
          <BasicTextInput
            label="Last Name"
            type="input"
            value={lastname}
            onChange={(event) => setLastname(event.target.value)}
          />
        </div>

        <div>
          <BasicTextInput
            label="Email"
            type="input"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>

        <div>
          <BasicTextInput
            label="Password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <div className="center light">
          Already have an account?
          <button
            type="button"
            className="btn btn_asLink"
            onClick={() => {
              history.push('/login');
            }}
          >
            <span className="boldText"> Log in</span>
          </button>
        </div>
        <div>
          <BasicButton buttonText="Register" value="register" type="submit" />
        </div>
      </form>
    </>
  );
}

export default RegistrationPage;
