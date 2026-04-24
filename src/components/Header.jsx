import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import logo from '../assets/10007.png';

export default function Header() {
  const [dropMenuOpen, setDropMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDrop = () => {
    setDropMenuOpen(!dropMenuOpen);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="site-header">
      <nav className="navbar">
        <Link to="/" className="logo-container" aria-label="Home">
          <img src={logo} alt="Crics 22 Yards" className="logo" />
        </Link>
        <button className="hamburger" onClick={toggleMobileMenu}>
          <span className={`hamburger-line ${mobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${mobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${mobileMenuOpen ? 'open' : ''}`}></span>
        </button>
        <div className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <Link to="/" onClick={closeMobileMenu}>Home</Link>
          <Link to="/about" onClick={closeMobileMenu}>About Us</Link>
          <Link to="/coaching" onClick={closeMobileMenu}>Coaching</Link>
          <a href="#gallery" onClick={closeMobileMenu}>Gallery</a>
          <a href="#events" onClick={closeMobileMenu}>Lane Rentals</a>
          <a href="#special-events" onClick={closeMobileMenu}>Special Events</a>
          <a href="#contact" onClick={closeMobileMenu}>Contact Us</a>
        </div>
        <div className="drop-wrap">
          <button className={`book-btn ${dropMenuOpen ? 'open' : ''}`} onClick={toggleDrop}>
            Book Now
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {dropMenuOpen && (
            <div className="drop-menu">
              <a href="https://app.glofox.com/portal/#/branch/69b47e4aed1ec1e3bf05b2fb/facilities" target="_blank">
                <svg width="15" height="15" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="1" y="6" width="5" height="7" rx="1" stroke="currentColor" strokeWidth="1.4"/>
                  <rect x="7" y="1" width="6" height="12" rx="1" stroke="currentColor" strokeWidth="1.4"/>
                </svg>
                Lane Rentals
              </a>
              <a href="https://app.glofox.com/portal/#/branch/69b47e4aed1ec1e3bf05b2fb/memberships" target="_blank">
                <svg width="15" height="15" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="7" cy="4.5" r="2.5" stroke="currentColor" strokeWidth="1.4"/>
                  <path d="M2 12.5c0-2.485 2.239-4.5 5-4.5s5 2.015 5 4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                </svg>
                Membership
              </a>
              <a href="https://app.glofox.com/portal/#/branch/69b47e4aed1ec1e3bf05b2fb/classes-day-view" target="_blank">
                <svg width="15" height="15" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="1" y="1" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.4"/>
                  <path d="M4 4.5h6M4 7h6M4 9.5h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                </svg>
                Classes & 1-on-1
              </a>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
