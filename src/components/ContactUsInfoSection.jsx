import React from 'react';
import '../styles/ContactUsInfoSection.css';
import logo from '../assets/10007.png';

const ContactUsInfoSection = () => {
  return (
    <section className="contact-us-info-section">
      <div className="contact-us-info-overlay"></div>
      <div className="contact-us-info-content">
        <div className="contact-us-info-left">
          <h2 className="contact-us-info-title">Get in touch with us</h2>
          <p className="contact-us-info-description">
            Whether you have questions about our programs, want to book a lane, or need information on events and facilities, we're here to help. At Crics 22Yards Columbus, we value communication with our clients and community. Below you'll find all the ways you can contact us.
          </p>

          <div className="contact-info-items">
            <div className="contact-info-item">
              <div className="contact-info-icon">📍</div>
              <div className="contact-info-text">
                <h3>OUR FACILITY</h3>
                <a href="https://maps.app.goo.gl/fAephk229JANruudA" target="_blank" rel="noopener noreferrer">9525 OH-161, Plain City, OH 43064</a>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon">📞</div>
              <div className="contact-info-text">
                <h3>PHONE NUMBER</h3>
                <a href="tel:+17373230270">(737) 323 0270</a>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon">✉</div>
              <div className="contact-info-text">
                <h3>EMAIL</h3>
                <a href="mailto:contact@crics22yards.com">contact@crics22yards.com</a>
              </div>
            </div>
          </div>

          <div className="contact-us-social">
            <p>Follow us on social media to stay updated on the latest news, events, and promotions:</p>
            <div className="social-icons">
              <a href="https://facebook.com/crics22yards" target="_blank" rel="noopener noreferrer" className="social-icon facebook">
                f
              </a>
              <a href="https://instagram.com/crics22yards" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12c0-3.403 2.759-6.162 6.162-6.162s6.162 2.759 6.162 6.162c0 3.403-2.759 6.162-6.162 6.162s-6.162-2.759-6.162-6.162zm2.889 0c0 1.821 1.452 3.273 3.273 3.273s3.273-1.452 3.273-3.273c0-1.82-1.452-3.273-3.273-3.273s-3.273 1.452-3.273 3.273zm8.719-6.378c0 .795.645 1.44 1.44 1.44s1.44-.645 1.44-1.44-.645-1.44-1.44-1.44-1.44.645-1.44 1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="contact-us-info-right">
          <img src={logo} alt="Crics 22Yards Columbus" className="contact-us-info-logo" />
        </div>
      </div>
    </section>
  );
};

export default ContactUsInfoSection;
