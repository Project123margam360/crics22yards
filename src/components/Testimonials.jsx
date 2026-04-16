import React from 'react';
import '../styles/Testimonials.css';
import coachImage1 from '../assets/10011.jpg';
import coachImage2 from '../assets/10006.jpg';
import coachImage3 from '../assets/10041.png';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Amit Patel',
      title: 'Cricket Player',
      text: 'The facilities here are world-class and the coaching staff is incredibly knowledgeable. I\'ve improved my game significantly!',
      image: coachImage1
    },
    {
      name: 'Priya Singh',
      title: 'Parent',
      text: 'My son loves coming here. The coaches are patient and create a fun, engaging learning environment.',
      image: coachImage2
    },
    {
      name: 'Rajesh Kumar',
      title: 'Team Coach',
      text: 'Best cricket facility in Ohio. The equipment is top-notch and the staff is always helpful and professional.',
      image: coachImage3
    }
  ];

  return (
    <section className="testimonials-section">
      <h2>What Our Members Say</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
            <p className="testimonial-text">"{testimonial.text}"</p>
            <p className="testimonial-author">{testimonial.name}</p>
            <p className="testimonial-title">{testimonial.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
