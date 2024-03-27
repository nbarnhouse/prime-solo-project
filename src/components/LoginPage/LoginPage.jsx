import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const userType = useSelector((store) => store.user.userType);
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();
  const history = useHistory();

  const login = (event) => {
    event.preventDefault();

    if (username && password) {
      dispatch({
        type: 'LOGIN',
        payload: {
          username: username,
          password: password,
        },
        //   callback: () => {
        //     // Redirect based on user type
        //     if (userType === 'teacher') {
        //       history.push('/hometeacher');
        //     } else if (userType === 'substitute') {
        //       history.push('/homesub');
        //     } else {
        //       history.push('/user'); // Default profile page
        //     }
        //   },
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
        <div className="formGroup">
          <label htmlFor="username">
            <input
              type="text"
              name="username"
              required
              placeholder="Username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </label>
        </div>
        <div className="formGroup">
          <label htmlFor="password">
            <input
              type="password"
              name="password"
              required
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
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
        <div>
          <input className="btn" type="submit" name="submit" value="Log In" />
        </div>
      </form>
    </>
  );
}

export default LoginPage;
