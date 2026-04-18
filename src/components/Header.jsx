import React, { useState } from 'react';
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

  return (
    <header className="site-header">
      <nav className="navbar">
        <div className="logo-container">
          <img src={logo} alt="Crics 22 Yards" className="logo" />
        </div>
        <button className="hamburger" onClick={toggleMobileMenu}>
          <span className={`hamburger-line ${mobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${mobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${mobileMenuOpen ? 'open' : ''}`}></span>
        </button>
        <div className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <a href="#home">Home</a>
          <a href="#gallery">Gallery</a>
          <a href="#about">About Us</a>
          <a href="#coaching">Coaching</a>
          <a href="#events">Lane Rentals</a>
          <a href="#special-events">Special Events</a>
          <a href="#contact">Contact Us</a>
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
