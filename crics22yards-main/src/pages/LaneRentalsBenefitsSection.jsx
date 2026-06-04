import React from 'react';
import '../styles/LaneRentalsBenefitsSection.css';
import img1 from '../assets/lr1.jpg';
import img2 from '../assets/lr2.webp';
import img3 from '../assets/lr3.jpg';

export default function LaneRentalsBenefitsSection() {
  const benefits = [
    {
      image: img1,
      title: 'Skill Improvement',
      description: 'Utilize our smart lanes to work on specific aspects of your game, from batting technique to bowling accuracy.'
    },
    {
      image: img2,
      title: 'Personalized Environment',
      description: 'Enjoy the privacy and focus of our partitioned lanes, ensuring a distraction-free practice session.'
    },
    {
      image: img3,
      title: 'Professional Coaching',
      description: 'Enhance your practice with guidance from experienced coaches who can provide real-time feedback and tips.'
    }
  ];

  return (
    <section className="lane-rentals-benefits-section">
      <div className="benefits-container">
        <p className="benefits-label">More Reasons to Choose <span className="benefits-label-highlight">US</span></p>
        <h2 className="benefits-title">Benefits of Practicing at Crics 22Yards Columbus</h2>
        
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card">
              <div className="benefit-image" style={{ backgroundImage: `url(${benefit.image})` }}>
                <div className="benefit-overlay"></div>
              </div>
              <div className="benefit-content">
                <h3 className="benefit-card-title">{benefit.title}</h3>
                <p className="benefit-card-description">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
