import React from 'react';
import '../App/App.css';

function Footer() {
  return (
    <footer>
      <p>Follow us:</p>
      <div>
        <img className="logo" src="/public/facebook-logo.png" alt="Facebook" />
        <img className="logo" src="/public/insta-logo.png" alt="Instagram" />
        <img className="logo" src="/public/x-logo.png" alt="X" />
      </div>
    </footer>
  );
}

export default Footer;
