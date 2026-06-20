import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/About.css';
import cricketField from '../assets/10008.webp';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Left Column */}
        <div className="about-left">
          <h2 className="about-heading">About Crics 22Yards Columbus</h2>
          <h3 className="about-subheading">Who We Are</h3>

          <p className="about-description">
            Established in 2026, Crics 22Yards Columbus is a premier indoor cricket academy in Plain City, Ohio, dedicated to developing young cricketers through professional coaching, advanced training programs, indoor cricket nets, and year-round player development opportunities.
          </p>

          <div className="about-accent-line"></div>
        </div>

        {/* Center Column - Image */}
        <div className="about-center">
          <div className="about-image-frame">
            <img
              src={cricketField}
              alt="Indoor cricket training facility at Crics 22Yards Columbus Ohio"
              className="about-image"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="about-right">
          <div className="about-quote-card">
            <p className="about-quote">
              "Cricket is not just a sport for me; it's a way of life, it's a way of thinking, it's a way of seeing the world"
            </p>
            <p className="about-quote-author">Sachin Tendulkar</p>
          </div>

          <div className="about-content">
            <p>
              At Crics 22Yards Columbus, we believe cricket is more than a sport. Our academy provides a supportive environment where players of all ages can improve their skills, build confidence, and compete at higher levels through structured coaching and competitive training.
            </p>

            <p>
              Serving players from Columbus, Plain City, Dublin, Hilliard, Powell, Marysville, and surrounding Ohio communities, we offer high-quality coaching, indoor lane rentals, summer camps, youth development programs, and special cricket events.
            </p>
          </div>

          <Link to="/about" className="about-button">
            More About Us
          </Link>
        </div>
      </div>
    </section>
  );
}
