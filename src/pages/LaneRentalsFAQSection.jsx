import React, { useState } from 'react';
import '../styles/LaneRentalsFAQSection.css';

export default function LaneRentalsFAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'Can I book an indoor cricket lane on short notice?',
      answer:
        'Yes. Same-day lane rentals may be available depending on schedule availability. We recommend booking in advance to secure your preferred time slot.'
    },
    {
      question: 'What should I bring for my cricket lane rental session?',
      answer:
        'Players should bring their cricket bat, protective gear, cricket shoes, and water bottle. If needed, additional equipment may be available at the facility.'
    },
    {
      question: 'What is the minimum lane rental duration?',
      answer:
        'The minimum booking duration is typically one hour. Longer sessions can be booked for individual practice, team training, coaching sessions, and match preparation.'
    },
    {
      question: 'Do you offer discounts for teams or frequent players?',
      answer:
        'Yes. Membership plans, group bookings, team training packages, and long-term rental options may qualify for discounted pricing. Contact our team for current offers.'
    },
    {
      question: 'Can I cancel or reschedule my booking?',
      answer:
        'Yes. Lane rental bookings can generally be rescheduled or cancelled with advance notice. Please contact the facility regarding current cancellation policies.'
    },
    {
      question: 'Can I book coaching together with a lane rental?',
      answer:
        'Absolutely. Players can combine lane rentals with professional cricket coaching sessions for batting, bowling, fielding, and overall skill development.'
    },
    {
      question: 'Are your indoor cricket nets suitable for beginners?',
      answer:
        'Yes. Our indoor cricket lanes are designed for players of all skill levels, from beginners learning the basics to advanced players preparing for competitive cricket.'
    },
    {
      question: 'Can teams rent multiple lanes for practice?',
      answer:
        'Yes. Teams can reserve multiple lanes simultaneously for batting practice, bowling drills, team training sessions, and match preparation.'
    },
    {
      question: 'What makes Crics 22Yards Columbus different from other indoor cricket facilities?',
      answer:
        'Crics 22Yards Columbus combines professional indoor cricket nets, quality training equipment, cricket coaching programs, flexible booking options, youth development programs, and a year-round indoor training environment.'
    },
    {
      question: 'Do you offer indoor cricket facilities year-round?',
      answer:
        'Yes. Our indoor cricket facility operates year-round, allowing players to train consistently regardless of weather conditions.'
    },
    {
      question: 'How do I get to Crics 22Yards Columbus?',
      answer:
        'Crics 22Yards Columbus is located at 9525 OH-161, Plain City, OH 43064. Our indoor cricket facility is easily accessible for players from Columbus, Dublin, Hilliard, Powell, Marysville, and nearby Ohio communities.'
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="lane-rentals-faq-section">
      <div className="faq-container">
        <p className="faq-label">Indoor Cricket Lane Rental FAQs</p>

        <h2 className="faq-title">
          Frequently Asked Questions About Indoor Cricket Lane Rentals
        </h2>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button
                className={`faq-question ${
                  activeIndex === index ? 'active' : ''
                }`}
                onClick={() => toggleAccordion(index)}
                aria-expanded={activeIndex === index}
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
