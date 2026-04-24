import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/BottomFooter.css';
import logo from '../assets/10007.png';

export default function BottomFooter() {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <footer className="bottom-footer">
      <div className="footer-content">
        <div className="footer-section footer-about">
          <div className="footer-logo">
            <img src={logo} alt="Crics 22Yards" />
          </div>
          <p className="footer-description">22Yards Columbus – Your premier destination for indoor cricket excellence.</p>
          
          <div className="footer-contact">
            <div className="contact-item">
              <span className="contact-icon">✉</span>
              <a href="mailto:contact@crics22yards.com">contact@crics22yards.com</a>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <a href="tel:+17373230270">(737) 323 0270</a>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <a href="https://maps.app.goo.gl/fAephk229JANruudA" target="_blank" rel="noopener noreferrer">9525 OH-161, Plain City, OH 43064</a>
            </div>
          </div>
        </div>

        <div className="footer-section footer-links">
          <div className="links-column">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/coaching">Coaching</Link></li>
              <li><a href="#events">Lane Rentals</a></li>
              <li><a href="#special-events">Special Events</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>

          <div className="links-column">
            <h3>Legal</h3>
            <ul>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms of Use</a></li>
              <li><a href="#disclaimer">Disclaimer</a></li>
              <li><a href="#waiver">Waiver & Cancellations Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-section footer-newsletter">
          <h3>Subscribe Newsletter</h3>
          <p>Signup our newsletter to get update information, news, insight or promotions.</p>
          
          <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="signup-btn">SIGN UP</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-credit">Managed by Next Wave Engage LLC</p>
        <p className="footer-copyright">Copyright © 2023. All rights reserved</p>
        <div className="social-icons">
          <a href="https://facebook.com/crics22yards" target="_blank" rel="noopener noreferrer" className="social-icon facebook" aria-label="Facebook">
            <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.35 1.47C15.68 1.03 13.99.8 12.19.8c-.91 0-1.78.06-2.65.18-7.99 1.12-14.06 7.94-14.06 16.18 0 1.03.1 2.04.29 3.02C.15 22.89 1.51 24 3.15 24H8v-7H5v-3h3V9.41c0-2.87 1.76-4.43 4.31-4.43.95 0 1.77.07 2.01.1v2.33h-1.38c-1.08 0-1.3.51-1.3 1.27V13h2.6l-.34 3h-2.26V24h4.42c1.64 0 3-1.11 3.35-2.59.19-.98.29-1.99.29-3.02 0-8.24-6.07-15.06-14.06-16.18z"/>
            </svg>
          </a>
          <a href="https://instagram.com/crics22yards" target="_blank" rel="noopener noreferrer" className="social-icon instagram" aria-label="Instagram">
            <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.07 1.645.07 4.849 0 3.205-.012 3.584-.07 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
