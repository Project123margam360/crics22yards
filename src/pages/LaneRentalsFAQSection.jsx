import React, { useState } from 'react';
import '../styles/LaneRentalsFAQSection.css';

export default function LaneRentalsFAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'Can I book a lane on short notice?',
      answer: 'Yes, you can book lanes on short notice depending on availability. However, we recommend booking in advance to ensure your preferred time slot is available.'
    },
    {
      question: 'What should I bring to my lane rental session?',
      answer: 'For your session, you should bring your cricket gear, including a bat, appropriate shoes, and protective equipment.'
    },
    {
      question: 'Is there a minimum or maximum time I can book a lane?',
      answer: 'The minimum booking time for a lane is one hour. There is no maximum time limit; however, extended sessions will depend on lane availability. We accommodate full-day rentals for intensive training or special events.'
    },
    {
      question: 'Do you offer discounts for group bookings or long-term rentals?',
      answer: 'Yes, we offer discounted rates for group bookings and long-term rentals. Contact our customer service for more details and to discuss potential savings.'
    },
    {
      question: 'Can I cancel or reschedule my booking?',
      answer: 'Yes, bookings can be canceled or rescheduled. We ask that you notify us at least 24 hours in advance to avoid cancellation fees. For more information on our cancellation policy, please visit our website or contact us directly.'
    },
    {
      question: 'Are coaching services available during the lane rental?',
      answer: 'Yes, we offer coaching services during lane rentals. You can book sessions with our experienced coaches to enhance your training experience. Please mention your interest in coaching services when booking your lane so we can ensure a coach is available.'
    },
    {
      question: 'Is the facility equipped to handle special needs or accessibility requirements?',
      answer: 'Absolutely, our facility is designed to be inclusive and accessible. If you have any specific needs or requirements, please let us know in advance so we can make the necessary arrangements to accommodate you comfortably.'
    },
    {
      question: 'Are there facilities available for teams to practice together?',
      answer: 'Yes, our facility can accommodate team practices. Multiple lanes can be booked simultaneously, and we offer the use of our team meeting rooms and analysis areas as part of the rental if needed.'
    },
    {
      question: 'How do I get to Crics 22Yards Columbus?',
      answer: 'Crics 22Yards Columbus is located at 14929, Westpark DR, STE 300, Plain City, OH, TX 77082. We offer ample parking, and our facility is easily accessible via public transportation. For detailed directions, please check our website or contact us.'
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="lane-rentals-faq-section">
      <div className="faq-container">
        <p className="faq-label">Got Questions? We have answers</p>
        <h2 className="faq-title">Frequently Asked Questions</h2>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button
                className={`faq-question ${activeIndex === index ? 'active' : ''}`}
                onClick={() => toggleAccordion(index)}
              >
                <span>{faq.question}</span>
                <span className="faq-icon">
                  {activeIndex === index ? '−' : '+'}
                </span>
              </button>
              {activeIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
