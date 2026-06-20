import React from 'react';
import '../styles/Hero.css';
import facilityImage from '../assets/10021.jpeg';

const laneRentalBookingUrl = 'https://axon22yards.com/book/columbus';

export default function Hero() {
  const handleBookLane = () => {
    window.location.href = laneRentalBookingUrl;
  };

  return (
    <section
      id="home"
      className="hero-section"
      style={{ backgroundImage: `url(${facilityImage})` }}
      aria-label="Crics 22Yards indoor cricket facility in Columbus Ohio"
    >
      <div className="hero-content">
        <div className="badge">Welcome to Crics 22Yards Columbus</div>

        <h1>
          Indoor Cricket Nets, Coaching & Summer Camps in Columbus, OH
        </h1>

        <p>
          Train, play, and book indoor cricket lanes at Crics 22Yards in Plain City, OH — serving Columbus, Dublin, Hilliard, Powell, Marysville, and nearby areas.
        </p>

        <button
          className="cta-button"
          onClick={handleBookLane}
          aria-label="Book an indoor cricket rental lane at Crics 22Yards Columbus"
        >
          Book a Rental Lane
        </button>
      </div>
    </section>
  );
}
