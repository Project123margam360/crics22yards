import React from 'react';
import '../styles/LaneRentalsHeroSection.css';
import bgImage from '../assets/10028.webp';

export default function LaneRentalsHeroSection() {
  return (
    <section className="lane-rentals-hero-section" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="lane-rentals-hero-overlay"></div>
      <div className="lane-rentals-hero-container">
        <h1 className="lane-rentals-hero-title">Cricket Lane Rental At Crics 22Yards Columbus</h1>
        <p className="lane-rentals-hero-subtitle">Elevate Your Game at Plain City, OH's Premier Indoor Cricket Facility</p>
        <p className="lane-rentals-hero-description">
          Welcome to Crics 22Yards Columbus, your go-to destination for top-tier cricket lane rentals. Whether you're a seasoned pro aiming to refine your skills or a newcomer eager to step onto the pitch for the first time, our fully equipped facility in Plain City, OH offers the perfect setting for you to practice and play.
        </p>
      </div>
    </section>
  );
}
