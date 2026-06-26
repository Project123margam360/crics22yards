import React, { useState, useEffect, useRef } from 'react';
import '../styles/Programs.css';
import programImage from '../assets/22Yards Columbus Cricket Training 2.jpeg';

export default function Programs() {
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
    <section ref={sectionRef} id="coaching" className="programs-section">
      <div className="programs-container">
        <div className={`programs-left ${animate ? 'animate' : ''}`}>
          <h3 className="programs-subtitle">Cricket Coaching Programs</h3>

          <h2 className="programs-title">
            Junior & Senior Cricket Training Programs in Columbus, OH
          </h2>

          <p className="programs-description">
            Crics 22Yards Columbus offers structured cricket coaching programs in Plain City, Ohio for kids, youth players, beginners, intermediate players, and advanced cricketers. Our training focuses on batting, bowling, fielding, fitness, match awareness, and long-term player development.
          </p>

          <div className="programs-list">
            <div className="program-item">
              <div className="program-bullet"></div>
              <div>
                <h4 className="program-name">Junior Development Program</h4>
                <p className="program-text">
                  Our junior cricket coaching program is designed for young players aged 6 to 16. It focuses on cricket fundamentals, hand-eye coordination, batting technique, bowling basics, fielding skills, fitness, teamwork, discipline, and confidence building in a safe and supportive indoor cricket environment.
                </p>
              </div>
            </div>

            <div className="program-item">
              <div className="program-bullet"></div>
              <div>
                <h4 className="program-name">Senior Training Program</h4>
                <p className="program-text">
                  Our senior cricket training program is designed for players aged 17 and above who want to improve performance for competitive cricket. Training includes advanced batting, bowling strategies, fielding drills, match scenarios, mental conditioning, fitness, and game awareness.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={`programs-right ${animate ? 'animate' : ''}`}>
          <div className="programs-image-wrapper">
            <img
              src={programImage}
              alt="Junior and senior cricket coaching programs at Crics 22Yards Columbus Ohio"
              className="programs-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
