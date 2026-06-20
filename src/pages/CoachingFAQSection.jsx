import React, { useState } from 'react';
import '../styles/CoachingFAQSection.css';

export default function CoachingFAQSection() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const faqs = [
    {
      question: 'What types of cricket coaching programs are available at Crics 22Yards Columbus?',
      answer:
        'At Crics 22Yards Columbus, we offer professional cricket coaching programs for kids, youth players, beginners, intermediate cricketers, and advanced athletes. Our programs focus on batting, bowling, fielding, fitness, game awareness, and long-term player development.'
    },
    {
      question: 'How long does each coaching program last?',
      answer:
        'Our standard cricket coaching programs are structured as estimated 12-week courses. We also offer flexible training schedules, shorter clinics, private coaching options, and extended player development programs based on each player’s goals.'
    },
    {
      question: 'What qualifications do your coaches have?',
      answer:
        'Our coaching team includes experienced and certified cricket professionals with competitive playing and coaching backgrounds. They focus on modern coaching methods, player safety, skill development, and structured cricket training.'
    },
    {
      question: 'Do you offer trial sessions for new students?',
      answer:
        'Yes, we offer trial sessions for new students so players and parents can experience our coaching style, indoor cricket facility, and training environment before joining a full program.'
    },
    {
      question: 'What equipment do I need to bring to cricket training sessions?',
      answer:
        'Beginners should wear comfortable athletic clothing and bring a water bottle. For introductory sessions, basic cricket equipment may be provided. As players progress, they may choose to bring or purchase their own bat, protective gear, gloves, pads, and cricket accessories.'
    },
    {
      question: 'Can parents watch their children during coaching sessions?',
      answer:
        'Yes, parents can watch their children during coaching sessions from designated viewing areas. We encourage parents to stay involved in their child’s cricket development journey.'
    },
    {
      question: 'How are players assessed and moved to higher levels?',
      answer:
        'Players are assessed through coaching observations, skill evaluations, performance tracking, match awareness, fitness, and overall readiness. Advancement depends on skill mastery, consistency, attitude, and ability to handle more challenging cricket training.'
    },
    {
      question: 'Are there opportunities for competitive cricket?',
      answer:
        'Yes, Crics 22Yards Columbus provides competitive opportunities through internal matches, local tournaments, inter-academy games, and structured match practice to help players gain real-game experience.'
    },
    {
      question: 'What makes Crics 22Yards Columbus different from other cricket academies?',
      answer:
        'Crics 22Yards Columbus combines professional cricket coaching, indoor cricket nets, advanced training facilities, structured player development, fitness support, and a positive learning environment for players from Columbus, Plain City, Dublin, Hilliard, Powell, Marysville, and nearby Ohio communities.'
    },
    {
      question: 'Is financial aid or scholarship available for talented players?',
      answer:
        'Financial aid or scholarship support may be available for talented players facing financial barriers. Please contact the Crics 22Yards Columbus administration team for eligibility details and application information.'
    }
  ];

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  return (
    <section className="coaching-faq-section">
      <div className="coaching-faq-container">
        <h2 className="coaching-faq-heading">Cricket Coaching FAQs</h2>

        <h3 className="coaching-faq-subtitle">
          Frequently Asked Questions About Our Cricket Coaching Programs
        </h3>

        <p className="coaching-faq-description">
          Learn more about cricket coaching, player development programs,
          training schedules, coaching qualifications, cricket lessons, and
          youth cricket opportunities at Crics 22Yards Columbus. Below are
          answers to some of the most common questions parents and players ask
          before joining our academy.
        </p>

        <div className="coaching-faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="coaching-faq-item">
              <button
                className={`coaching-faq-question ${
                  expandedIndex === index ? 'active' : ''
                }`}
                onClick={() => toggleExpand(index)}
                aria-expanded={expandedIndex === index}
              >
                <span>{faq.question}</span>

                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="coaching-faq-icon"
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
                <div className="coaching-faq-answer">
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
