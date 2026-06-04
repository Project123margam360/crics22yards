import React from 'react';
import '../styles/CoachingHeroSection.css';
import bgImage from '../assets/12000.jpg';

export default function CoachingHeroSection() {
  return (
    <section className="coaching-hero-section" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="coaching-hero-overlay"></div>
      <div className="coaching-hero-content">
        <h1 className="coaching-hero-title">Our Cricket Coaching & Training Programs At Crics 22Yards Columbus</h1>
        <p className="coaching-hero-subtitle">Develop Your Skills at Plain City, OH's Premier Cricket Academy</p>
        <p className="coaching-hero-description">
          Welcome to Crics 22Yards Columbus, where we provide professional cricket coaching and training tailored for every level of experience. Whether you're a beginner eager to learn the basics or an advanced player aiming to polish your skills, our diverse programs are designed to cater to all needs in Plain City, OH, TX.
        </p>
      </div>
    </section>
  );
}
