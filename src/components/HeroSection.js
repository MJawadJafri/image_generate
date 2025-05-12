
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HeroSection.css';

function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Your <span className="highlight">Imagination</span> Now in Hign Resolution</h1>
        <p>Revolutionizing the way visuals are created—just describe what you imagine, and let AI bring it to life.</p>
        <button className="get-started" onClick={() => navigate('/chat')}>Get Started</button>
      </div>
      <div className="hero-image">
        <img src="image1.png" alt="AI Bird" />
      </div>
    </section>
  );
}

export default HeroSection;
