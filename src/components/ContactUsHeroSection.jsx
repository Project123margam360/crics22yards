import React from 'react';
import '../styles/ContactUsHeroSection.css';
import bgImage from '../assets/set.webp';

const ContactUsHeroSection = () => {
  return (
    <section className="contact-us-hero" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="contact-us-hero-overlay"></div>
      <div className="contact-us-hero-content">
        <h1 className="contact-us-hero-title">Contact Us</h1>
        <p className="contact-us-hero-subtitle">
          Come see our facilities firsthand and speak with our staff. For immediate assistance or to speak with a member of our team, give us a call.
        </p>
      </div>
    </section>
  );
};

export default ContactUsHeroSection;
