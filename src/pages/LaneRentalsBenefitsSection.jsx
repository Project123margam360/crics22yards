import React from 'react';
import '../styles/LaneRentalsBenefitsSection.css';
import img1 from '../assets/lr1.jpg';
import img2 from '../assets/lr2.webp';
import img3 from '../assets/lr3.jpg';

export default function LaneRentalsBenefitsSection() {
  const benefits = [
    {
      image: img1,
      title: 'Improve Batting & Bowling Skills',
      description:
        'Use our indoor cricket nets to focus on batting technique, bowling accuracy, footwork, shot selection, timing, and match preparation in a controlled training environment.'
    },
    {
      image: img2,
      title: 'Private & Focused Practice Environment',
      description:
        'Practice in dedicated indoor cricket lanes designed to reduce distractions and help players, coaches, and teams get more productive training sessions.'
    },
    {
      image: img3,
      title: 'Coaching Support Available',
      description:
        'Enhance your lane rental session with guidance from experienced cricket coaches who can provide feedback on batting, bowling, fielding, and overall technique.'
    }
  ];

  return (
    <section className="lane-rentals-benefits-section">
      <div className="benefits-container">
        <p className="benefits-label">
          More Reasons to Choose <span className="benefits-label-highlight">US</span>
        </p>

        <h2 className="benefits-title">
          Benefits of Indoor Cricket Lane Rentals at Crics 22Yards Columbus
        </h2>

        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card">
              <div
                className="benefit-image"
                style={{ backgroundImage: `url(${benefit.image})` }}
                role="img"
                aria-label={`${benefit.title} at Crics 22Yards Columbus Ohio`}
              >
                <div className="benefit-overlay"></div>
              </div>

              <div className="benefit-content">
                <h3 className="benefit-card-title">{benefit.title}</h3>
                <p className="benefit-card-description">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
