import React, { useState } from 'react';
import '../styles/FAQSection.css';

export default function FAQSection() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const faqs = [
    {
      question: 'What is Crics 22Yards Columbus?',
      answer: 'Crics 22Yards Columbus is a premier indoor cricket facility dedicated to providing top-tier cricket training and development for players of all ages and skill levels. We focus on nurturing young talent and offering comprehensive training programs in a state-of-the-art environment.'
    },
    {
      question: 'What programs do you offer?',
      answer: 'We offer a variety of cricket programs including beginner training, advanced coaching, personal coaching sessions, and competitive leagues. Each program is tailored to address the needs of different skill levels and age groups.'
    },
    {
      question: 'What facilities are available at Crics 22Yards Columbus?',
      answer: 'Our facility includes multiple cricket lanes with professional standard netting, advanced bowling machines, a dedicated fitness area, and a pro shop stocked with all necessary cricket gear. We also provide space for events and parties.'
    },
    {
      question: 'Do you host any special events?',
      answer: 'Yes, we host a range of special events throughout the year, including tournaments, corporate events, and birthday parties. These events are designed to promote cricket in the community and provide fun and competition for all attendees.'
    },
    {
      question: 'Can I rent the facility for private events?',
      answer: 'Yes, we host a range of special events throughout the year, including tournaments, corporate events, and birthday parties. These events are designed to promote cricket in the community and provide fun and competition for all attendees.'
    },
    {
      question: 'What safety measures are in place at Crics 22Yards Columbus?',
      answer: 'The safety of our participants and staff is our top priority. We adhere to strict safety protocols, including regular maintenance of equipment, training our staff in first aid, and ensuring all activities are supervised by qualified coaches.'
    }
  ];

  const toggleFAQ = (index) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <h2 className="faq-title">Got Questions? We have answers</h2>
        <h3 className="faq-subtitle">Frequently Asked Questions</h3>
        <p className="faq-description">
          Transform your celebrations and team-building events into unforgettable experiences at Crics 22Yards Columbus. Our facility provides a unique setting that combines sport and fun, making every event memorable. Here's what we offer:
        </p>

        <div className="faq-items">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button
                className={`faq-question ${expandedIndex === index ? 'active' : ''}`}
                onClick={() => toggleFAQ(index)}
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
