import React from 'react';
import '../styles/AboutUsSection.css';
import logo from '../assets/10007.png';
import bgImage from '../assets/10022.jpg';

export default function AboutUsSection() {
  return (
    <section
      className="about-us-section"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="about-us-container">
        {/* Left Column */}
        <div className="about-us-left">
          <div className="about-us-logo">
            <img
              src={logo}
              alt="Crics 22Yards Columbus Indoor Cricket Academy"
            />
          </div>

          <h2 className="about-us-heading">
            About Crics 22Yards Columbus
          </h2>

          <h3 className="about-us-subheading">
            Who We Are
          </h3>

          <p className="about-us-text">
            Located in Plain City, Ohio, Crics 22Yards Columbus is a premier
            indoor cricket academy dedicated to developing cricketers of all
            ages and skill levels. Established in 2026 by passionate cricket
            enthusiasts, our mission is to provide professional cricket
            coaching, indoor training facilities, lane rentals, youth
            development programs, and year-round cricket opportunities for the
            growing cricket community in Central Ohio.
          </p>

          <div className="about-us-accent-line"></div>
        </div>

        {/* Right Column */}
        <div className="about-us-right">
          <div className="about-us-quote-card">
            <p className="about-us-quote">
              "CRICKET IS NOT JUST A SPORT FOR ME; IT'S A WAY OF LIFE, IT'S A WAY OF THINKING, IT'S A WAY OF SEEING THE WORLD"
            </p>
            <p className="about-us-quote-author">
              Sachin Tendulkar
            </p>
          </div>

          <div className="about-us-content-card">
            <h3 className="about-us-content-heading">
              Columbus Ohio's Destination for Cricket Training & Development
            </h3>

            <p className="about-us-content-text">
              At Crics 22Yards Columbus, we provide a professional indoor
              cricket environment where players can improve batting, bowling,
              fielding, fitness, and overall game awareness. Our facility is
              designed to support beginners, youth players, competitive
              cricketers, and cricket enthusiasts looking to develop their
              skills year-round.
            </p>

            <p className="about-us-content-text">
              Serving players from Columbus, Plain City, Dublin, Hilliard,
              Powell, Marysville, and surrounding Ohio communities, our academy
              combines experienced coaching, modern cricket technology,
              structured development programs, indoor cricket nets, and a
              strong cricket community to help every player reach their full
              potential.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
