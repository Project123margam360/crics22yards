import React, { useState } from 'react';
import '../styles/SpecialEventsFAQSection.css';

export default function SpecialEventsFAQSection() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const faqs = [
    {
      question: 'What types of events can I host at Crics 22Yards Columbus?',
      answer: 'You can host a variety of events at our facility, including birthday parties, corporate events, cricket tournaments, workshops, clinics, and private celebrations. Each event type can be customized to meet your specific needs and preferences.'
    },
    {
      question: 'How do I book an event at Crics 22Yards Columbus?',
      answer: 'To book an event, please visit our contact us page or contact our events coordinator directly at (737) 323 0270. We recommend booking your event well in advance to ensure availability.'
    },
    {
      question: 'What facilities are available for events at Crics 22Yards Columbus?',
      answer: 'Our facility includes cricket lanes, a full cricket field, meeting rooms, a dining area, and state-of-the-art training equipment. Specific facilities available may vary depending on the event type.'
    },
    {
      question: 'Can I bring my own food and beverages to the event?',
      answer: 'Yes, you are welcome to bring your own catering. We also offer on-site catering options with a variety of menus to choose from, which can be tailored to your event’s needs.'
    },
    {
      question: 'What equipment do I need to bring to training sessions?',
      answer: 'Beginners are advised to wear comfortable athletic clothing and bring a water bottle. For safety, we provide all necessary cricket equipment, including bats, balls, and protective gear, during introductory sessions. As players advance, they may choose to purchase their own equipment from our on-site pro shop.'
    },
    {
      question: 'Are there any age restrictions for participating in or attending events at Crics 22Yards Columbus?',
      answer: 'Events are open to all ages, but some specific programs and activities, especially competitive cricket matches and certain workshops, might have age or skill level requirements. Please check the specific event details or contact us for more information.'
    },
    {
      question: 'Do you provide event staff to assist during the event?',
      answer: 'Yes, our experienced staff will be on hand to assist with setting up, managing, and breaking down your event. If additional support is needed, such as coaching or umpiring, please let us know during the booking process.'
    },
    {
      question: 'What is the cancellation policy for events at Crics 22Yards Columbus?',
      answer: 'We require a notice of cancellation at least 14 days before the event for a full refund. Cancellations made less than 14 days in advance may incur a fee. For complete details, please refer to our Cancellation Policy.'
    },
    {
      question: 'Can I schedule a tour of the facilities before booking an event?',
      answer: 'Absolutely! We encourage you to schedule a tour to see our facilities firsthand and discuss your event needs with our staff. Please contact us to arrange a convenient time.'
    },
    {
      question: 'What happens in case of bad weather during an outdoor event?',
      answer: 'Most of our facilities are indoor, so weather is rarely an issue. For events planned to include outdoor activities, we have contingency plans in place, including moving activities indoors where possible.'
    }
  ];

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  return (
    <section className="special-events-faq-section">
      <div className="special-events-faq-container">
        <h2 className="special-events-faq-heading">Got Questions? We have answers</h2>
        <h3 className="special-events-faq-subtitle">Frequently Asked Questions</h3>
        <p className="special-events-faq-description">
          Have questions about hosting your event at Crics 22Yards Columbus? Our FAQ section provides quick answers to common queries, ensuring you have all the information you need to plan a successful and memorable event with us. From booking details to facilities and catering options, find out everything you need to know to make your special occasion perfect.
        </p>

        <div className="special-events-faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="special-events-faq-item">
              <button
                className={`special-events-faq-question ${expandedIndex === index ? 'active' : ''}`}
                onClick={() => toggleExpand(index)}
              >
                <span>{faq.question}</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="special-events-faq-icon"
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
                <div className="special-events-faq-answer">
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
