import React from 'react';
import '../styles/About.css';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2>About Crics 22Yards Columbus</h2>
        <div className="about-content">
          <p>
            At Crics 22Yards Columbus, we believe that cricket is more than a game—it's a journey that teaches invaluable life lessons. Our approach is centered around fostering a supportive environment where young athletes can grow both personally and professionally.
          </p>
          <p>
            We are committed to delivering a holistic cricketing experience through high-quality coaching, advanced facilities, and a vibrant community atmosphere.
          </p>
        </div>
        <div className="stats">
          <div className="stat">
            <h3>500+</h3>
            <p>Active Members</p>
          </div>
          <div className="stat">
            <h3>20+</h3>
            <p>Professional Coaches</p>
          </div>
          <div className="stat">
            <h3>10</h3>
            <p>Premium Lanes</p>
          </div>
        </div>
      </div>
    </section>
  );
}
