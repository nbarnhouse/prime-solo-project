import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import BasicTextInput from '../Widgets/BasicTextInput/BasicTextInput';
import '../App/App.css';

function LoginPage() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector((store) => store.errors);

  const login = (event) => {
    event.preventDefault();

    if (username && password) {
      dispatch({
        type: 'LOGIN',
        payload: {
          username: username,
          password: password,
        },
      });

      history.push('/homesub');
    } else {
      dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  return (
    <>
      <form className="formPanel dark" onSubmit={login}>
        {errors.loginMessage && (
          <h3 className="alert" role="alert">
            {errors.loginMessage}
          </h3>
        )}
        <div>
          <BasicTextInput
            label="Username"
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

        <center className="light">
          Don't have an account?
          <button
            type="button"
            className="btn btn_asLink"
            onClick={() => {
              history.push('/registration');
            }}
          >
            <span className="boldText"> Register</span>
          </button>
        </center>
        <div className="center">
          <input className="btn" type="submit" name="submit" value="Log In" />
        </div>
      </form>
    </>
  );
}

export default LoginPage;
