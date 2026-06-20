import React from 'react';
import '../styles/KeyFeaturesSection.css';
import bgImage from '../assets/10024.jpg';
import feature1 from '../assets/13001.webp';
import feature2 from '../assets/13000.jpg';
import feature3 from '../assets/10010.webp';

export default function KeyFeaturesSection() {
  const features = [
    {
      title: 'Advanced Indoor Cricket Training Technology',
      description:
        'Train using modern cricket technology, performance tracking tools, bowling machines, and structured coaching methods designed to accelerate player development and improve match performance.',
      image: feature1
    },
    {
      title: 'Experienced & Certified Cricket Coaches',
      description:
        'Learn from qualified coaches with extensive playing and coaching experience. Our coaching team focuses on technical development, game awareness, confidence building, and long-term player growth.',
      image: feature2
    },
    {
      title: 'Flexible Coaching Schedules',
      description:
        'Choose from multiple coaching sessions and training schedules designed to fit school, work, and family commitments while maintaining consistent player development.',
      image: feature3
    }
  ];

  return (
    <section
      className="key-features-section"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="key-features-container">
        <h2 className="key-features-title">
          Why Choose Our Cricket Coaching Programs?
        </h2>

        <p className="key-features-description">
          Crics 22Yards Columbus provides one of the most comprehensive cricket coaching experiences in Ohio. Our programs are designed for kids, youth players, beginners, intermediate cricketers, and advanced athletes looking to improve batting, bowling, fielding, fitness, and overall match performance.
        </p>

        <div className="key-features-grid">
          {features.map((feature, index) => (
            <div
              key={index}
              className="key-feature-card"
              style={{ '--bg-image': `url(${feature.image})` }}
            >
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
