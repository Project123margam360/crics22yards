import React from 'react';
import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>📍 9525 OH-161, Plain City, OH 43064</p>
          <p>📧 contact@crics22yards.com</p>
          <p>📱 (737) 323 0270</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#coaching">Coaching</a></li>
            <li><a href="#rentals">Lane Rentals</a></li>
            <li><a href="#registration">Registration</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="https://facebook.com/crics22yards/" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://instagram.com/crics22yards/" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Crics 22Yards Columbus. All rights reserved.</p>
      </div>
    </footer>
  );
}
