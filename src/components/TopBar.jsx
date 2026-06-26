import React from 'react';
import '../styles/TopBar.css';

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar-container">
        <div className="topbar-info">
          <div className="topbar-item">
            <a href="https://www.google.com/maps/place/22Yards+Columbus/@40.1043208,-83.2217742,334m/data=!3m1!1e3!4m6!3m5!1s0x8838956fe8aa76f9:0x19c328036559a482!8m2!3d40.1042396!4d-83.2210063!16s%2Fg%2F11yfcnnz5l?entry=ttu&g_ep=EgoyMDI2MDYxNi4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              >
                <i className="fa-solid fa-location-dot topbar-icon"></i>
            </a>
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
            <a href="https://www.facebook.com/people/Crics-22Yards-Columbus/61577612886478/" target="_blank" rel="noopener noreferrer">Facebook</a>
          </div>
          <div className="topbar-item">
            <svg className="topbar-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.07 1.645.07 4.849 0 3.205-.012 3.584-.07 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" fill="currentColor"/>
            </svg>
            <a href="https://www.instagram.com/crics22yardscolumbus?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
        <div className="topbar-phone">
          <a href="tel:+16149841453">
          <i className="fa-solid fa-phone"></i> </a>
          <a href="tel:+16149841453">+1 614-984-1453</a>
          <span className="topbar-phone-separator">|</span>
          <a href="tel:+17134982155">(713) 498 2155</a>
        </div>
      </div>
    </div>
  );
}
