import React, { useState } from 'react';
import '../styles/FAQSection.css';

export default function FAQSection() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const faqs = [
    {
      question: 'What is Crics 22Yards Columbus?',
      answer:
        'Crics 22Yards Columbus is a premier indoor cricket academy and training facility located at 9525 OH-161, Plain City, OH 43064. We offer cricket coaching, indoor cricket nets, lane rentals, summer camps, youth development programs, and cricket events for players across Columbus and Central Ohio.'
    },
    {
      question: 'What cricket programs do you offer?',
      answer:
        'We offer beginner cricket coaching, youth cricket training, advanced coaching, private coaching sessions, indoor lane rentals, summer camps, competitive training programs, and special cricket events.'
    },
    {
      question: 'What facilities are available at Crics 22Yards Columbus?',
      answer:
        'Our facility includes indoor cricket nets, professional training lanes, bowling machines, coaching areas, fitness support, player development spaces, and cricket equipment access for training and practice.'
    },
    {
      question: 'Do you offer cricket coaching for kids?',
      answer:
        'Yes. We provide kids cricket coaching and youth development programs focused on batting, bowling, fielding, fitness, teamwork, discipline, and game awareness.'
    },
    {
      question: 'Can I rent indoor cricket lanes?',
      answer:
        'Yes. Players and teams can rent indoor cricket lanes for batting practice, bowling practice, private coaching, team sessions, and match preparation.'
    },
    {
      question: 'Do you host cricket events and parties?',
      answer:
        'Yes. Crics 22Yards Columbus hosts cricket events, tournaments, team gatherings, birthday parties, corporate events, and community cricket activities.'
    },
    {
      question: 'Where is Crics 22Yards Columbus located?',
      answer:
        'Crics 22Yards Columbus is located at 9525 OH-161, Plain City, OH 43064. We serve players from Columbus, Plain City, Dublin, Hilliard, Powell, Marysville, and nearby Ohio communities.'
    }
  ];

  const toggleFAQ = (index) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <h2 className="faq-title">Crics 22Yards Columbus FAQs</h2>

        <h3 className="faq-subtitle">
          Frequently Asked Questions About Our Indoor Cricket Facility
        </h3>

        <p className="faq-description">
          Learn more about our cricket coaching programs, indoor cricket lane
          rentals, youth training, summer camps, events, facilities, and location
          in Plain City near Columbus, Ohio.
        </p>

        <div className="faq-items">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button
                className={`faq-question ${
                  expandedIndex === index ? 'active' : ''
                }`}
                onClick={() => toggleFAQ(index)}
                aria-expanded={expandedIndex === index}
              >
                <span>{faq.question}</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="faq-icon"
                >
                  <path
                    d="M5 7.5L10 12.5L15 7.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {expandedIndex === index && faq.answer && (
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
