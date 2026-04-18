import React, { useEffect, useRef, useState } from 'react';
import '../styles/Coaches.css';
import coach1 from '../assets/10002.jpg';
import coach2 from '../assets/10011.jpg';

export default function Coaches() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  const coaches = [
    {
      image: coach1,
      name: 'Kamal Passi',
      role: 'Coach'
    },
    {
      image: coach2,
      name: 'Harmeet Singh',
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
            At Crics 22Yards Columbus, our coaching team is the backbone of our training programs. Comprised of former professional players and certified coaching experts, our staff brings a wealth of knowledge and experience to every session. Meet the dedicated professionals committed to transforming your cricketing potential into excellence.
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
