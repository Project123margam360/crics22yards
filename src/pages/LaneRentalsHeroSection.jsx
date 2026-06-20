import React from 'react';
import '../styles/LaneRentalsHeroSection.css';
import bgImage from '../assets/10028.webp';

export default function LaneRentalsHeroSection() {
  return (
    <section
      className="lane-rentals-hero-section"
      style={{ backgroundImage: `url(${bgImage})` }}
      aria-label="Indoor cricket lane rentals at Crics 22Yards Columbus Ohio"
    >
      <div className="lane-rentals-hero-overlay"></div>

      <div className="lane-rentals-hero-container">
        <h1 className="lane-rentals-hero-title">
          Indoor Cricket Lane Rentals in Columbus, OH
        </h1>

        <p className="lane-rentals-hero-subtitle">
          Professional indoor cricket nets and batting practice lanes in Plain City, Ohio.
        </p>

        <p className="lane-rentals-hero-description">
          Crics 22Yards Columbus offers premium indoor cricket lane rentals for
          batting practice, bowling practice, team training, private coaching,
          and match preparation. Our indoor cricket facility serves players from
          Columbus, Plain City, Dublin, Hilliard, Powell, Marysville, and
          surrounding Ohio communities looking for high-quality cricket nets and
          year-round training opportunities.
        </p>
      </div>
    </section>
  );
}
