import React from 'react';
import '../styles/AboutUsSection.css';
import logo from '../assets/10007.png';
import bgImage from '../assets/10022.jpg';

export default function AboutUsSection() {
  return (
    <section className="about-us-section" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="about-us-container">
        {/* Left Column */}
        <div className="about-us-left">
          <div className="about-us-logo">
            <img src={logo} alt="Crics 22 Yards Columbus" />
          </div>
          <h2 className="about-us-heading">About Us</h2>
          <h3 className="about-us-subheading">Who We Are</h3>
          <p className="about-us-text">
            Located right here in Plain City, OH, Texas, Crics 22Yards Columbus is more than just a cricket facility; it's a community where we nurture talent and celebrate the spirit of cricket. Established in 2026 by a group of cricket enthusiasts with extensive experience, our goal is simple: to offer top-notch cricket training for everyone, from young beginners to seasoned players.
          </p>
          <div className="about-us-accent-line"></div>
        </div>

        {/* Right Column */}
        <div className="about-us-right">
          {/* Quote Card */}
          <div className="about-us-quote-card">
            <p className="about-us-quote">
              "CRICKET IS NOT JUST A SPORT FOR ME; IT'S A WAY OF LIFE, IT'S A WAY OF THINKING, IT'S A WAY OF SEEING THE WORLD"
            </p>
            <p className="about-us-quote-author">Sachin Tendulkar</p>
          </div>

          {/* Content Card */}
          <div className="about-us-content-card">
            <h3 className="about-us-content-heading">Plain City, OH's Top Choice for Cricket Training</h3>
            <p className="about-us-content-text">
              At Crics 22Yards Columbus, we're all about cricket. Our facility is equipped with the latest gear and coached by some of the best in the game. We're here to help you hone your skills, understand the nuances of cricket, and enjoy every moment on the pitch.
            </p>
            <p className="about-us-content-text">
              Crics 22Yards Columbus represents a holistic cricket development center, engineered by experts passionate about the sport. Equipped with the latest in training technology and staffed by experienced coaches, we provide an unparalleled environment for learning and growth in cricket.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
