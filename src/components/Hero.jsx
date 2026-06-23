import React from 'react';
import '../styles/Hero.css';
import facilityImage from '../assets/10021.jpeg';

export default function Hero() {
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

        <div className="hero-cta-group">
          <a
            href="https://axon22yards.com/book/columbus"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button cta-button-left"
            aria-label="Book an indoor cricket rental lane at Crics 22Yards Columbus"
          >
            Lane Rentals
          </a>

          <a
            href="https://axon22yards.com/login"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button cta-button-middle"
            aria-label="Crics 22Yards Columbus membership login"
          >
            Membership
          </a>

          <a
            href="https://axon22yards.com/join?location=columbus"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button cta-button-right"
            aria-label="Join Super Kings Academy at Crics 22Yards Columbus"
          >
            Super Kings Academy
          </a>
        </div>
      </div>
    </section>
  );
}
