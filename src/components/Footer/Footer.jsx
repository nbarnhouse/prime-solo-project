import React from 'react';
import '../App/App.css';

function Footer() {
  return (
    <footer>
      <p>Follow us:</p>
      <img
        className="logo"
        src="/public/images/facebook-logo.png"
        alt="Facebook"
      />
      <img
        className="logo"
        src="/public/images/insta-logo.png"
        alt="Instagram"
      />
      <img className="logo" src="/public/images/x-logo.png" alt="X" />
    </footer>
  );
}

export default Footer;
