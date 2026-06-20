import React from 'react';
import '../styles/Services.css';
import facilityImage from '../assets/10031.webp';

const LANE_BOOKING_URL = 'https://axon22yards.com/book/columbus';
const COACHING_URL = 'https://www.crics22yards.com/coaching';

export default function Services() {
  const handleBookLane = () => {
    window.location.href = LANE_BOOKING_URL;
  };

  const handleEnrollCoaching = () => {
    window.location.href = COACHING_URL;
  };

  return (
    <section
      id="events"
      className="services-section"
      style={{ backgroundImage: `url(${facilityImage})` }}
    >
      <div className="services-overlay"></div>

      <div className="services-content">
        <h2>
          Cricket Coaching, Indoor Lane Rentals & Summer Camps in Columbus, OH
        </h2>

        <p>
          Join one of Ohio's leading indoor cricket facilities. Whether you're
          looking for professional cricket coaching, indoor cricket lane rentals,
          youth development programs, summer camps, batting practice, bowling
          training, or recreational cricket activities, Crics 22Yards Columbus
          provides the ideal environment to train, improve, and enjoy the game
          year-round.
        </p>

        <div className="services-buttons">
          <button
            className="btn btn-primary"
            onClick={handleBookLane}
            aria-label="Book an indoor cricket lane at Crics 22Yards Columbus"
          >
            BOOK A LANE +
          </button>

          <button
            className="btn btn-secondary"
            onClick={handleEnrollCoaching}
            aria-label="Enroll for cricket coaching at Crics 22Yards Columbus"
          >
            ENROLL FOR COACHING 📋
          </button>
        </div>
      </div>
    </section>
  );
}
