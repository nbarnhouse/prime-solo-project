import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  const [heading, setHeading] = useState('Welcome');
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  return (
    <>
      <div className="container"></div>

      <div className="title">
        <h1>Sub Scheduling</h1>
        <h3>Made Easy</h3>
      </div>

      <div className="info">
        <p>Paragraph description</p>
      </div>

      <div className="infotwo">
        <p>Paragraph two description</p>
      </div>

      <div className="questions">
        <h2>
          Questions? <br></br>We're here to help?
        </h2>
        <button
          className="btn"
          onClick={() => {
            history.push('/contact');
          }}
        >
          Contact
        </button>
      </div>
    </>
  );
}

export default LandingPage;
