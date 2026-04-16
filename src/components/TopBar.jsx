import React from 'react';
import '../styles/TopBar.css';

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar-container">
        <div className="topbar-info">
          <div className="topbar-item">
            <svg className="topbar-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" fill="currentColor"/>
            </svg>
            <a href="https://maps.app.goo.gl/fAephk229JANruudA" target="_blank" rel="noopener noreferrer">9525 OH-161, Plain City, OH 43064</a>
          </div>
          <div className="topbar-item">
            <svg className="topbar-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor"/>
            </svg>
            <a href="mailto:contact@crics22yards.com">contact@crics22yards.com</a>
          </div>
          <div className="topbar-item">
            <svg className="topbar-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.35 1.47C15.68 1.03 13.99.8 12.19.8c-.91 0-1.78.06-2.65.18-7.99 1.12-14.06 7.94-14.06 16.18 0 1.03.1 2.04.29 3.02C.15 22.89 1.51 24 3.15 24H8v-7H5v-3h3V9.41c0-2.87 1.76-4.43 4.31-4.43.95 0 1.77.07 2.01.1v2.33h-1.38c-1.08 0-1.3.51-1.3 1.27V13h2.6l-.34 3h-2.26V24h4.42c1.64 0 3-1.11 3.35-2.59.19-.98.29-1.99.29-3.02 0-8.24-6.07-15.06-14.06-16.18z" fill="currentColor"/>
            </svg>
            <a href="https://facebook.com/crics22yards" target="_blank" rel="noopener noreferrer">Facebook</a>
          </div>
          <div className="topbar-item">
            <svg className="topbar-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.07 1.645.07 4.849 0 3.205-.012 3.584-.07 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" fill="currentColor"/>
            </svg>
            <a href="https://instagram.com/crics22yards" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
        <div className="topbar-phone">
          <svg className="topbar-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.92 7.02C17.45 6.18 16.38 5.85 15.55 6.5c-.77.59-1.05 1.48-.64 2.39.21.54.75 1.823 2.1 3.175 1.35 1.35 2.6 1.89 3.14 2.1.9.41 1.79.13 2.38-.64.65-.83-.02-1.9-.86-2.37-2.15-1.27-3.524-.645-4.14-1.015z" fill="currentColor"/>
            <path d="M6 16.5a1.5 1.5 0 0 0 1.5-1.5v-1.5h2V15c0 2.21-1.79 4-4 4H4c-1.1 0-2 .9-2 2v2h2v-2h2v-2h-1.5c-.28 0-.5-.22-.5-.5z" fill="currentColor"/>
            <path d="M6 8.5c1.93 0 3.5-1.57 3.5-3.5S7.93 1.5 6 1.5 2.5 3.07 2.5 5 4.07 8.5 6 8.5zm0-5c.83 0 1.5.67 1.5 1.5S6.83 6.5 6 6.5 4.5 5.83 4.5 5 5.17 3.5 6 3.5z" fill="currentColor"/>
            <path d="M15.5 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" fill="currentColor"/>
          </svg>
          <a href="tel:+17373230270">(737) 323 0270</a>
        </div>
      </div>
    </div>
  );
}
