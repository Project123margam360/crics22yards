import React from 'react';
import '../styles/Services.css';
import facilityImage1 from '../assets/10023.webp';
import facilityImage2 from '../assets/10026.jpg';
import facilityImage3 from '../assets/10021.jpeg';

export default function Services() {
  const services = [
    {
      title: 'Lane Rentals',
      description: 'Book a private or semi-private lane for your cricket practice sessions with full equipment access.',
      image: facilityImage1
    },
    {
      title: 'Professional Coaching',
      description: 'Learn from experienced cricket coaches in personalized 1-on-1 and group sessions.',
      image: facilityImage2
    },
    {
      title: 'Membership Programs',
      description: 'Get unlimited access to our facilities with flexible membership options for all levels.',
      image: facilityImage3
    }
  ];

  return (
    <section id="services" className="services-section">
      <h2>Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <img src={service.image} alt={service.title} className="service-image" />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
