import React from 'react';
import '../styles/SpecialEventsHeroSection.css';
import bgImage from '../assets/10028.webp';

export default function SpecialEventsHeroSection() {
  return (
    <section className="special-events-hero-section" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="special-events-hero-overlay"></div>
      <div className="special-events-hero-container">
        <h1 className="special-events-hero-title">Special Events At Crics 22Yards Columbus</h1>
        <p className="special-events-hero-subtitle">Experience Cricket Like Never Before at Plain City, OH's Premier Indoor Cricket Facility</p>
        <p className="special-events-hero-description">
          Welcome to the Special Events section of Crics 22Yards Columbus, where we host a vibrant array of cricket activities designed to unite and thrill the cricketing community. From intense local tournaments to engaging workshops, corporate events, and lively community gatherings, we offer a diverse calendar that caters to all ages and interests.
        </p>
      </div>
    </section>
  );
}
