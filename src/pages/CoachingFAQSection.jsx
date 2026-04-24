import React, { useState } from 'react';
import '../styles/CoachingFAQSection.css';

export default function CoachingFAQSection() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const faqs = [
    {
      question: 'What types of coaching programs are available at Crics 22Yards Columbus?',
      answer: 'At Crics 22Yards Columbus, we offer a variety of coaching programs tailored to different skill levels and age groups, including:\n• Beginner Programs: Focus on introducing the fundamentals of cricket.\n• Intermediate Programs: Designed to refine skills and introduce more complex aspects of the game.\n• Advanced Programs: Target those preparing for competitive play with high-intensity training.\n• Personalized Coaching: One-on-one sessions that focus on specific areas of improvement.'
    },
    {
      question: 'How long does each coaching program last?',
      answer: ''
    },
    {
      question: 'What qualifications do your coaches have?',
      answer: ''
    },
    {
      question: 'Do you offer trial sessions for new students?',
      answer: ''
    },
    {
      question: 'What equipment do I need to bring to training sessions?',
      answer: ''
    }
  ];

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  return (
    <section className="coaching-faq-section">
      <div className="coaching-faq-container">
        <h2 className="coaching-faq-heading">Got Questions? We have answers</h2>
        <h3 className="coaching-faq-subtitle">Frequently Asked Questions</h3>
        <p className="coaching-faq-description">
          Transform your celebrations and team-building events into unforgettable experiences at Crics 22Yards Columbus. Our facility provides a unique setting that combines sport and fun, making every event memorable. Here's what we offer:
        </p>

        <div className="coaching-faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className={`coaching-faq-item ${expandedIndex === index ? 'expanded' : ''}`}>
              <button
                className="coaching-faq-question"
                onClick={() => toggleExpand(index)}
              >
                <span>{faq.question}</span>
                <span className="coaching-faq-icon">
                  {expandedIndex === index ? '▲' : '▼'}
                </span>
              </button>
              {expandedIndex === index && (
                <div className="coaching-faq-answer">
                  {faq.answer.split('\n').map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
