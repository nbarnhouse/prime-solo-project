import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function AbsenceTeacher() {
  const [date, setDate] = useState('');
  const [reason, setReason] = useState('');
  const [adminnote, setAdminnote] = useState('');
  const [subnote, setSubnote] = useState('');
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  const createAbsence = (event) => {
    event.preventDefault();

    dispatch({
      type: 'CREATE_ABSENCE',
      payload: {
        date: date,
        reason: reason,
      },
    });
    //history.push('/role');
  }; // end registerUser

  return (
    <>
      <h1>Create Absence</h1>
      <div className="container">
        <div>
          <h2>Substitute Required</h2>
          <div className="formGroup">
            <label htmlFor="date">
              <input
                type="date"
                name="date"
                placeholder="Date Picker"
                value={date}
                required
                onChange={(event) => setDate(event.target.value)}
              />
            </label>
          </div>
        </div>
        <div>Notes to Administrator</div>
        <div>Notes to Substitute</div>
        <div>
          <input className="btn" type="submit" name="submit" value="Submit" />
        </div>
      </div>
    </>
  );
}
