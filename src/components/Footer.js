
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
       
        <h3 className="section-title">Ai<span>Mentor</span></h3>
        <p>Copyright © 2025 AiMentor. All Rights Reserved.</p>
      </div>
      <div className="footer-section">
        <h4>About</h4>
        <ul>
          <li>Our Solutions</li>
          <li>Our Best Services</li>
          <li>Professional Team</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Address</h4>
        <p>Rawalpindi-Islamabad</p>
        <p>+92 336 0925493</p>
        <p>tehniathashir@gmail.com</p>
      </div>
      <div className="footer-section">
        <h4>Newsletter</h4>
        <input type="email" placeholder="Enter Your Email Address" />
        <button>Send</button>
      </div>
    </footer>
  );
}

export default Footer;
