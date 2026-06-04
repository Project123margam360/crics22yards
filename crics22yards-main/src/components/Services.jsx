import React from 'react';
import '../styles/Services.css';
import facilityImage from '../assets/10031.webp';

export default function Services() {
  const handleBookLane = () => {
    document.getElementById('rentals')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleEnrollCoaching = () => {
    document.getElementById('coaching')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="events" className="services-section" style={{ backgroundImage: `url(${facilityImage})` }}>
      <div className="services-overlay"></div>
      <div className="services-content">
        <h2>Start Your Cricket Journey with Crics 22Yards Columbus</h2>
        <p>
          Whether you're looking to refine your skills in a professional setting or seeking expert guidance to take your game to the next level, Crics 22Yards Columbus has you covered. Choose from our tailored options to best suit your cricketing needs.
        </p>
        <div className="services-buttons">
          <button className="btn btn-primary" onClick={handleBookLane}>BOOK A LANE +</button>
          <button className="btn btn-secondary" onClick={handleEnrollCoaching}>ENROLL FOR COACHING 📋</button>
        </div>
      </div>
    </section>
  );
}
