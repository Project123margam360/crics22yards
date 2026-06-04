import React from 'react';
import '../styles/Testimonials.css';
import eventImage1 from '../assets/10045.webp';
import eventImage2 from '../assets/corporate.webp';
import eventImage3 from '../assets/10010.webp';

export default function Testimonials() {
  const events = [
    {
      title: 'Birthday Parties',
      description: 'Celebrate in style with a cricket-themed birthday party! Our facility is perfect for guests of all ages, offering fun cricket activities and games that make every birthday a hit.',
      image: eventImage1
    },
    {
      title: 'Corporate Events',
      description: 'Build team spirit with a corporate event at our cricket facility. Whether it\'s a team-building exercise or a company-wide outing, we provide a unique environment that fosters camaraderie and friendly competition.',
      image: eventImage2
    },
    {
      title: 'Tournaments',
      description: 'Host or participate in local and regional cricket tournaments at our state-of-the-art facility. Ideal for showcasing talent and competing at various levels, our tournaments are a thrilling experience for players and spectators alike.',
      image: eventImage3
    }
  ];

  return (
    <section id="special-events" className="testimonials-section">
      <h2>Special Events at Crics 22Yards Columbus</h2>
      <p className="events-subtitle">Prime Choice for Birthday Parties, Corporate Events, and Sporting Events!</p>
      <p className="events-description">Transform your celebrations and team-building events into unforgettable experiences at Crics 22Yards Columbus. Our facility provides a unique setting that combines sport and fun, making every event memorable. Here's what we offer:</p>
      <div className="testimonials-grid">
        {events.map((event, index) => (
          <div key={index} className="testimonial-card event-card">
            <img src={event.image} alt={event.title} className="testimonial-image" />
            <h3>{event.title}</h3>
            <p className="event-description">{event.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
