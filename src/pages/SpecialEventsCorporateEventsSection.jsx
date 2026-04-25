import React from 'react';
import '../styles/SpecialEventsCorporateEventsSection.css';
import corporateImage from '../assets/10043.jpg';

export default function SpecialEventsCorporateEventsSection() {
  const features = [
    {
      title: 'Team-Building Cricket Matches',
      description: 'Foster teamwork with cricket matches tailored to your company\'s dynamics.'
    },
    {
      title: 'Access to Professional Facilities',
      description: 'Use our cricket lanes and fields for friendly competitions and activities.'
    },
    {
      title: 'Versatile Meeting Spaces',
      description: 'Available for any corporate presentations or strategic discussions.'
    },
    {
      title: 'Tailored Catering Services',
      description: 'We offer a range of catering services to complement your event.'
    }
  ];

  return (
    <section className="corporate-events-section">
      <div className="corporate-events-container">
        <div className="corporate-content">
          <h2 className="corporate-title">Corporate Events</h2>
          <p className="corporate-description">
            Escape the office routine and engage in an exciting team-building experience with our corporate cricket events. Designed to enhance team spirit and camaraderie, our events provide a fun, active environment.
          </p>
          
          <h3 className="features-heading">Features include:</h3>
          <ul className="features-list">
            {features.map((feature, index) => (
              <li key={index}>
                <strong>{feature.title}:</strong> {feature.description}
              </li>
            ))}
          </ul>
        </div>

        <div className="corporate-image-wrapper">
          <img src={corporateImage} alt="Corporate Events at Crics 22Yards" className="corporate-image" />
        </div>
      </div>
    </section>
  );
}
