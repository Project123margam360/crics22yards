import React, { useState, useEffect, useRef } from 'react';
import '../styles/Programs.css';
import programImage from '../assets/10010.webp';

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
        {/* Left Content */}
        <div className={`programs-left ${animate ? 'animate' : ''}`}>
          <h3 className="programs-subtitle">Our Programs</h3>
          <h2 className="programs-title">Elevate Your Game:<br />Junior and Senior<br />Training Programs</h2>
          
          <p className="programs-description">
            Discover tailored cricket training at Crics 22Yards Columbus with our distinct Junior and Senior Programs. Each program is meticulously crafted to meet the needs of players at different stages of their cricket journey. From foundational skills for our young enthusiasts to advanced tactics for seasoned players, our programs are designed to help every cricketer achieve their full potential.
          </p>

          <div className="programs-list">
            <div className="program-item">
              <div className="program-bullet"></div>
              <div>
                <h4 className="program-name">Junior Development Program</h4>
                <p className="program-text">
                  The Young Cricketers Initiative at Crics 22Yards Columbus is designed for players aged 6-16. This program focuses on instilling the fundamentals of cricket through a structured curriculum that emphasizes skill development, understanding of the game, and physical fitness. Our goal is to foster a love for the game and to build a strong foundation for future growth in the sport.
                </p>
              </div>
            </div>

            <div className="program-item">
              <div className="program-bullet"></div>
              <div>
                <h4 className="program-name">Senior Training Program</h4>
                <p className="program-text">
                  The Elite Cricketers Pathway is designed for players aged 17 and above, focusing on high-performance training intended to prepare athletes for competitive and professional levels of cricket. This program combines advanced coaching, mental conditioning, and exposure to higher levels of play.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className={`programs-right ${animate ? 'animate' : ''}`}>
          <div className="programs-image-wrapper">
            <img src={programImage} alt="Cricket Training Programs" className="programs-image" />
          </div>
        </div>
      </div>
    </section>
  );
}
