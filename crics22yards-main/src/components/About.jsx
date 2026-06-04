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
          <h1 className="about-heading">About Us</h1>
          <h2 className="about-subheading">Who We Are</h2>
          <p className="about-description">
            Established in 2026, Crics 22Yards Columbus is a cutting-edge cricket academy focused on nurturing talent with top-tier coaching and advanced training facilities. Our mission is to foster skilled, confident players ready to compete internationally.
          </p>
          <div className="about-accent-line"></div>
        </div>

        {/* Center Column - Image */}
        <div className="about-center">
          <div className="about-image-frame">
            <img src={cricketField} alt="Cricket Field" className="about-image" />
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
              At Crics 22Yards Columbus, we believe that cricket is more than a game—it's a journey that teaches invaluable life lessons. Our approach is centered around fostering a supportive environment where young athletes can grow both personally and professionally.
            </p>
            <p>
              We are committed to delivering a holistic cricketing experience through high-quality coaching, advanced facilities, and a vibrant community atmosphere.
            </p>
          </div>

          <Link to="/about" className="about-button">More About Us</Link>
        </div>
      </div>
    </section>
  );
}
