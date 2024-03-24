import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function RegisterForm() {
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
    <form className="formPanel" onSubmit={registerUser}>
      <h2>Register User</h2>
      {errors.registrationMessage && (
        <h3 className="alert" role="alert">
          {errors.registrationMessage}
        </h3>
      )}
      <div className="formGroup">
        <label htmlFor="firstname">
          First Name
          <input
            type="text"
            name="firstname"
            value={firstname}
            required
            onChange={(event) => setFirstname(event.target.value)}
          />
        </label>
      </div>
      <div className="formGroup">
        <label htmlFor="lastname">
          Last Name
          <input
            type="text"
            name="lastname"
            value={lastname}
            required
            onChange={(event) => setLastname(event.target.value)}
          />
        </label>
      </div>
      <div className="formGroup">
        <label htmlFor="email">
          Email
          <input
            type="text"
            name="email"
            value={email}
            required
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
      </div>
      <div className="formGroup">
        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            value={password}
            required
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
      </div>
      <div>
        <input className="btn" type="submit" name="submit" value="Register" />
      </div>
    </form>
  );
}

export default RegisterForm;
