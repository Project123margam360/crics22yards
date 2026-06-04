import React from 'react';
import '../styles/SpecialEventsWorkshopsSection.css';
import workshopsImage1 from '../assets/pich.jpg';
import workshopsImage2 from '../assets/boy.jpg';

export default function SpecialEventsWorkshopsSection() {
  const features = [
    {
      title: 'Expert Coaching',
      description: 'Sessions led by experienced coaches and guest professionals.'
    },
    {
      title: 'Skill-Specific Training',
      description: 'Targeted workshops focusing on batting, bowling, and fielding.'
    },
    {
      title: 'Advanced Technology',
      description: 'Utilize smart lanes and video analysis for detailed feedback.'
    },
    {
      title: 'Interactive Environment',
      description: 'Small group sizes ensure personalized attention and better interaction.'
    },
    {
      title: 'Community Building',
      description: 'Connect with other cricket enthusiasts and expand your network.'
    }
  ];

  return (
    <section className="workshops-section">
      <div className="workshops-container">
        <div className="workshops-content">
          <h2 className="workshops-title">Workshops and Clinics</h2>
          <p className="workshops-description">
            Enhance your cricket skills at Crics 22Yards Columbus with our specialized workshops and clinics. Designed for players of all levels, these sessions provide expert coaching, focused skill development, and the use of advanced training tools in a dynamic learning environment.
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

        <div className="workshops-image-wrapper">
          <img src={workshopsImage1} alt="Cricket Field Workshop" className="workshops-image workshops-image-1" />
          <img src={workshopsImage2} alt="Cricket Training" className="workshops-image workshops-image-2" />
        </div>
      </div>
    </section>
  );
}
