import React, { useState, useEffect, useRef } from 'react';
import '../styles/Stats.css';

export default function Stats() {
  const [counts, setCounts] = useState({ lanes: 0, bowling: 0, shop: 0, box: 0 });
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animateNumbers();
        }
      },
      { threshold: 0.5 }
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

  const animateNumbers = () => {
    const duration = 2000; // 2 seconds
    const startTime = Date.now();
    const targets = { lanes: 8, bowling: 2, shop: 1, box: 2 };

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      setCounts({
        lanes: Math.floor(targets.lanes * progress),
        bowling: Math.floor(targets.bowling * progress),
        shop: Math.floor(targets.shop * progress),
        box: Math.floor(targets.box * progress),
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  };

  return (
    <section ref={sectionRef} className="stats-section">
      <div className="stats-container">
        <div className="stat-item">
          <div className="stat-number">{counts.lanes}</div>
          <div className="stat-label">Lanes</div>
        </div>

        <div className="stat-item dark">
          <div className="stat-number">{counts.bowling}</div>
          <div className="stat-label">Bowling Machines</div>
        </div>

        <div className="stat-item">
          <div className="stat-number">{counts.shop}</div>
          <div className="stat-label">Pro Shop</div>
        </div>

        <div className="stat-item dark">
          <div className="stat-number">{counts.box}</div>
          <div className="stat-label">Box Cricket</div>
        </div>
      </div>
    </section>
  );
}
