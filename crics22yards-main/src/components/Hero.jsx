import React from 'react';
import '../styles/Hero.css';
import facilityImage from '../assets/10021.jpeg';

export default function Hero() {
  const handleBookLane = () => {
    document.getElementById('rentals')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero-section" style={{ backgroundImage: `url(${facilityImage})` }}>
      <div className="hero-content">
        <div className="badge">Welcome to Crics 22Yards Columbus!</div>
        <h1>Your Premier Indoor Cricket Destination <br></br>In Plain City, OH</h1>
        <p>Join Plain City, OH's leading cricket academy, where champions are made.</p>
        <button className="cta-button" onClick={handleBookLane}>Book a Rental Lane</button>
      </div>
    </section>
  );
}
