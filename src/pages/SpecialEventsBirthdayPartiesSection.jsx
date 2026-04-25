import React from 'react';
import '../styles/SpecialEventsBirthdayPartiesSection.css';
import birthdayImage from '../assets/10045.webp';

export default function SpecialEventsBirthdayPartiesSection() {
  const features = [
    {
      title: 'Tailored Cricket Activities',
      description: 'Activities are customized to suit the age and skill level of the birthday guest of honor.'
    },
    {
      title: 'Customizable Event Options',
      description: 'Include cricket games, personalized coaching sessions, and more.'
    },
    {
      title: 'Exclusive Facility Access',
      description: 'Full access to our cricket lanes and fields during your event.'
    },
    {
      title: 'Catering Flexibility',
      description: 'Choose from our on-site catering options or use designated areas to set up your own catering.'
    }
  ];

  return (
    <section className="birthday-parties-section">
      <div className="birthday-parties-container">
        <div className="birthday-image-wrapper">
          <img src={birthdayImage} alt="Birthday Party at Crics 22Yards" className="birthday-image" />
        </div>
        
        <div className="birthday-content">
          <h2 className="birthday-title">Birthday Parties</h2>
          <p className="birthday-description">
            Make your birthday celebration a hit with a cricket-themed party at Crics 22Yards Columbus! Our parties are perfect for cricket enthusiasts of all ages and offer a unique blend of fun and sport.
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
