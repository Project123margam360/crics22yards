import React from 'react';
import '../styles/VisionMissionSection.css';
import bgImage from '../assets/10023.webp';

export default function VisionMissionSection() {
  return (
    <section
      className="vision-mission-section"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="vision-mission-overlay"></div>

      <div className="vision-mission-container">
        {/* Left Column */}
        <div className="vision-mission-left">
          <h2 className="vision-mission-heading">
            Developing the Next Generation of Cricketers
          </h2>

          <p className="vision-mission-text">
            At Crics 22Yards Columbus, we are committed to growing the game of
            cricket across Ohio and the United States by providing professional
            cricket coaching, advanced indoor training facilities, youth
            development programs, and year-round opportunities for players of
            all ages. Our vision and mission reflect our dedication to building
            confident athletes, strong communities, and future cricket leaders.
          </p>
        </div>

        {/* Right Column */}
        <div className="vision-mission-right">
          {/* Vision Card */}
          <div className="vision-mission-card">
            <h3 className="card-heading">Our Vision</h3>

            <p className="card-text">
              Our vision is to become one of the leading cricket academies in
              the United States and a recognized center for cricket excellence
              in Ohio. We strive to create an environment where players can
              develop their skills, compete at higher levels, and build a
              lifelong passion for cricket through innovation, inclusivity, and
              continuous improvement.
            </p>
          </div>

          {/* Mission Card */}
          <div className="vision-mission-card">
            <h3 className="card-heading">Our Mission</h3>

            <p className="card-text">
              Our mission is to provide high-quality cricket coaching, indoor
              cricket training facilities, lane rentals, youth development
              programs, summer camps, and player support services. Through
              structured coaching, modern training technology, and experienced
              mentors, we help players improve their batting, bowling,
              fielding, fitness, confidence, and overall cricket performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
