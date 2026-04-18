import React, { useState, useEffect, useRef } from 'react';
import '../styles/Mission.css';
import backgroundImage from '../assets/10023.webp';

export default function Mission() {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="mission-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="mission-overlay"></div>
      <div className="mission-container">
        {/* Left Content */}
        <div className="mission-left">
          <h1 className="mission-title">Guiding Future Champion</h1>
          <p className="mission-description">
            At Crics 22Yards Columbus, we are dedicated to shaping the future of cricket by empowering young talent and setting new benchmarks in sports excellence. Our mission and vision reflect our commitment to nurture, inspire, and lead.
          </p>
        </div>

        {/* Right Cards */}
        <div className="mission-right">
          <div className="mission-card vision-card">
            <h2 className="card-title">Our Vision</h2>
            <p className="card-text">
              Leading with Innovation and Integrity: Our vision is to become a cornerstone of cricket in the United States and a beacon for sports excellence in Plain City, OH. We aim to lead by example, fostering a culture of innovation, integrity, and inclusivity. By continuously advancing our training methods and embracing cutting-edge technology, we envision setting new standards in cricket education and athlete development.
            </p>
          </div>

          <div className={`mission-card mission-card-item ${animate ? 'animate' : ''}`}>
            <h2 className="card-title">Our Mission</h2>
            <p className="card-text">
              Empower and Excel: At Crics 22Yards Columbus, our mission is to empower aspiring cricketers through comprehensive training and development programs. We strive to provide the highest standard of cricket coaching, facilities, and support services. Our goal is to nurture talent, build character, and develop the skills necessary for our athletes to excel both on and off the cricket field.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
