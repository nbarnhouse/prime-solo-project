import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <div>Follow us:</div>
      <div>
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
      </div>
    </footer>
  );
}

export default Footer;
