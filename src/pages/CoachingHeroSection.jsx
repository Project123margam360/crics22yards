import React from 'react';
import '../styles/CoachingHeroSection.css';
import bgImage from '../assets/12000.jpg';

export default function CoachingHeroSection() {
  return (
    <section
      className="coaching-hero-section"
      style={{ backgroundImage: `url(${bgImage})` }}
      aria-label="Cricket coaching and training programs at Crics 22Yards Columbus Ohio"
    >
      <div className="coaching-hero-overlay"></div>

      <div className="coaching-hero-content">
        <h1 className="coaching-hero-title">
          Cricket Coaching & Training Programs in Columbus, OH
        </h1>

        <p className="coaching-hero-subtitle">
          Professional cricket coaching for kids, youth players, beginners, and advanced cricketers in Plain City, Ohio.
        </p>

        <p className="coaching-hero-description">
          Crics 22Yards Columbus offers structured cricket coaching programs designed to improve batting, bowling, fielding, fitness, match awareness, and overall player development. Our indoor cricket academy serves players from Columbus, Plain City, Dublin, Hilliard, Powell, Marysville, and nearby Ohio communities.
        </p>
      </div>
    </section>
  );
}
