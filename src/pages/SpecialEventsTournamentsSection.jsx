import React from 'react';
import '../styles/SpecialEventsTournamentsSection.css';
import tournamentImage1 from '../assets/tourn1.jpg';
import tournamentImage2 from '../assets/tourn2.webp';

export default function SpecialEventsTournamentsSection() {
  const features = [
    {
      title: 'Flexible Field and Lane Usage',
      description: 'Tailor the use of our indoor fields and lanes to match your tournament format.'
    },
    {
      title: 'Comprehensive Organizational Support',
      description: 'Including help with scheduling, umpiring, and logistics.'
    },
    {
      title: 'Player and Spectator Amenities',
      description: 'On-site refreshments and comfortable seating areas available.'
    }
  ];

  return (
    <section className="tournaments-section">
      <div className="tournaments-container">
        <div className="tournaments-image-wrapper">
          <img src={tournamentImage1} alt="Cricket Field Tournament" className="tournaments-image tournaments-image-1" />
          <img src={tournamentImage2} alt="Tournament Action" className="tournaments-image tournaments-image-2" />
        </div>
        
        <div className="tournaments-content">
          <h2 className="tournaments-title">Tournaments</h2>
          <p className="tournaments-description">
            Bring competitive spirit to life by hosting your cricket tournament at Crics 22Yards Columbus. Our facility supports various tournament formats and offers comprehensive organizational support.
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
      </div>
    </section>
  );
}
