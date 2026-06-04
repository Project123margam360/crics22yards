import React from 'react';
import '../styles/KeyFeaturesSection.css';
import bgImage from '../assets/10024.jpg';
import feature1 from '../assets/13001.webp';
import feature2 from '../assets/13000.jpg';
import feature3 from '../assets/10010.webp';

export default function KeyFeaturesSection() {
  const features = [
    {
      title: 'Smart Lane Technology',
      description: 'Utilize our state-of-the-art smart lane setup, providing instant feedback and detailed analytics to improve your game.',
      image: feature1
    },
    {
      title: 'Certified Coaches',
      description: 'Learn from some of the best in the field. Our coaches bring years of professional experience and a passion for mentoring young players.',
      image: feature2
    },
    {
      title: 'Flexible Scheduling',
      description: 'We offer various time slots throughout the week to accommodate your busy schedule.',
      image: feature3
    }
  ];

  return (
    <section className="key-features-section" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="key-features-container">
        <h2 className="key-features-title">Key Features Of Our Coaching</h2>
        <p className="key-features-description">
          At Crics 22Yards Columbus, our cricket coaching programs are renowned for their comprehensive approach and quality, tailored to enhance every player's game regardless of their skill level. Here are some standout features
        </p>

        <div className="key-features-grid">
          {features.map((feature, index) => (
            <div key={index} className="key-feature-card" style={{ '--bg-image': `url(${feature.image})` }}>
              <div className="key-feature-overlay"></div>
              <div className="key-feature-content">
                <h3 className="key-feature-title">{feature.title}</h3>
                <p className="key-feature-text">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
