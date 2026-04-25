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
      answer: 'Our standard coaching programs are structured as estimated 12-week courses. However, we also offer flexible scheduling to accommodate the needs of our players, including shorter clinics and extended training options.'
    },
    {
      question: 'What qualifications do your coaches have?',
      answer: 'Our coaching team is made up of experienced and certified cricket professionals, many of whom have played at competitive levels, including national and international arenas. They undergo regular training to stay updated with the latest coaching techniques and safety protocols'
    },
    {
      question: 'Do you offer trial sessions for new students?',
      answer: 'Yes, we offer trial sessions for new students so they can experience our coaching style and facilities before committing to a full program. These sessions are a great way to ensure our academy is the right fit for your cricket goals.'
    },
    {
      question: 'What equipment do I need to bring to training sessions?',
      answer: 'Beginners are advised to wear comfortable athletic clothing and bring a water bottle. For safety, we provide all necessary cricket equipment, including bats, balls, and protective gear, during introductory sessions. As players advance, they may choose to purchase their own equipment from our on-site pro shop.'
    },
    {
      question: 'Can parents watch their children during coaching sessions?',
      answer: 'Absolutely! We have designated viewing areas where parents can comfortably watch their children participate in the sessions. We believe in transparency and encourage parents to be involved in their child’s cricket development.'
    },
    {
      question: 'How are players assessed and moved to higher levels?',
      answer: 'Players are regularly assessed through both formal evaluations and ongoing observation during sessions. Advancements to higher levels are based on skill mastery, understanding of game tactics, and readiness to tackle more challenging aspects of cricket.'
    },
    { 
      question: 'Are there opportunities for competitive play at Crics 22Yards Columbus?',
      answer: 'Yes, we offer various competitive opportunities, including internal league matches, local tournaments, and inter-academy competitions. These events are designed to give players practical experience and exposure to competitive cricket.'
    },
    {
      question: 'What makes Crics 22Yards Columbus different from other cricket academies?',
      answer: 'Crics 22Yards Columbus stands out due to our comprehensive approach that integrates state-of-the-art training facilities, expert coaching staff, and a holistic training methodology that focuses on technical skills, mental strength, and strategic understanding of the game.'},
      {
      question: 'Is financial aid or scholarship available for talented players?',
      answer: 'We are committed to making cricket accessible to all. Financial aid and scholarships may be available for talented players facing financial barriers. Please contact our administration for more information about eligibility and application procedures.'
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
            <div key={index} className="coaching-faq-item">
              <button
                className={`coaching-faq-question ${expandedIndex === index ? 'active' : ''}`}
                onClick={() => toggleExpand(index)}
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
