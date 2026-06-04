import React, { useEffect, useRef, useState } from 'react';
import '../styles/Coaches.css';
import coach from '../assets/10002.jpg';

export default function Coaches() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  const coaches = [
    {
      image: coach,
      name: 'Phani Teja Simhadri',
      role: 'Coach'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="coaches-section">
      <div className="coaches-container">
        <div className={`coaches-content ${hasAnimated ? 'animate' : ''}`}>
          <h2 className="coaches-title">Meet Our Coaches at Crics 22Yards Columbus</h2>
          <h3 className="coaches-subtitle">Experience Excellence in Coaching</h3>
          <p className="coaches-description">
            At Crics 22Yards Columbus, we are proud to have Phani Teja Simhadri as our esteemed coach. With a rich background in cricket, Phani brings a wealth of experience and expertise to our team.
            <br/><br/>
            <strong>Summary</strong><br/>
            I am a professional cricketer specializing as a left-arm fast-medium bowler.<br/>
            Currently active in USA domestic and franchise cricket leagues.<br/>
            Known for disciplined bowling, consistency, and match impact.<br/>
            Passionate about contributing to team success and growing in competitive cricket.<br/>
            Active participant in Minor League Cricket (USA).<br/>
            Experience in high-intensity T20 competitions.
          </p>
        </div>

        <div className={`coaches-images ${hasAnimated ? 'animate' : ''}`}>
          {coaches.map((coach, index) => (
            <div key={index} className="coach-card">
              <img src={coach.image} alt={coach.name} className="coach-photo" />
              <div className="coach-overlay">
                <h3 className="coach-name">{coach.name}</h3>
                <p className="coach-role">{coach.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
