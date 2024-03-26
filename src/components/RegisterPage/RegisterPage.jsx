import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function RegisterPage() {
  const history = useHistory();
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: 'REGISTER',
      payload: {
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
      },
    });
  }; // end registerUser

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
        <div className="formGroup">
          <label htmlFor="firstname">
            <input
              type="text"
              name="firstname"
              placeholder="First Name"
              value={firstname}
              required
              onChange={(event) => setFirstname(event.target.value)}
            />
          </label>
        </div>
        <div className="formGroup">
          <label htmlFor="lastname">
            <input
              type="text"
              name="lastname"
              placeholder="Last Name"
              value={lastname}
              required
              onChange={(event) => setLastname(event.target.value)}
            />
          </label>
        </div>
        <div className="formGroup">
          <label htmlFor="email">
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={email}
              required
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>
        </div>
        <div className="formGroup">
          <label htmlFor="password">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              required
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
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
      </form>
      <div className="center">
        <input
          className="btn fixed"
          type="submit"
          name="submit"
          value="Register"
        />
      </div>
    </>
  );
}

export default RegisterPage;
