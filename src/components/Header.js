import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

function Header() {
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <div className="logo">Ai<span>Mentor</span></div>
      <nav>
        <ul>
          <li onClick={() => scrollToSection('what-we-do')} className="active">Home</li>
          <li onClick={() => navigate('/chat')}>Generate Image</li>
          <li onClick={() => scrollToSection('about-us')}>About Us</li>
          {/* <li onClick={() => navigate('/predict')}>Predict</li> ✅ New Menu Item */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
