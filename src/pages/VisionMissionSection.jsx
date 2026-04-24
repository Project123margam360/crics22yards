import React from 'react';
import '../styles/VisionMissionSection.css';
import bgImage from '../assets/10023.webp';

export default function VisionMissionSection() {
  return (
    <section className="vision-mission-section" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="vision-mission-overlay"></div>
      <div className="vision-mission-container">
        {/* Left Column */}
        <div className="vision-mission-left">
          <h2 className="vision-mission-heading">Guiding Future Champion</h2>
          <p className="vision-mission-text">
            At Crics 22Yards Columbus, we are dedicated to shaping the future of cricket by empowering young talent and setting new benchmarks in sports excellence. Our mission and vision reflect our commitment to nurture, inspire, and lead.
          </p>
        </div>

        {/* Right Column */}
        <div className="vision-mission-right">
          {/* Vision Card */}
          <div className="vision-mission-card">
            <h3 className="card-heading">Our Vision</h3>
            <p className="card-text">
              Leading with Innovation and Integrity: Our vision is to become a cornerstone of cricket in the United States and a beacon for sports excellence in Plain City, OH. We aim to lead by example, fostering a culture of innovation, integrity, and inclusivity. By continuously advancing our training methods and embracing cutting-edge technology, we envision setting new standards in cricket education and athlete development.
            </p>
          </div>

          {/* Mission Card */}
          <div className="vision-mission-card">
            <h3 className="card-heading">Our Mission</h3>
            <p className="card-text">
              Empower and Excel: At Crics 22Yards Columbus, our mission is to empower aspiring cricketers through comprehensive training and development programs. We strive to provide the highest standard of cricket coaching, facilities, and support services. Our goal is to nurture talent, build character, and develop the skills necessary for our athletes to excel both on and off the cricket field.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
