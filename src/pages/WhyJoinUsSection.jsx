import React from 'react';
import '../styles/WhyJoinUsSection.css';
import coachImage from '../assets/11000.webp';

export default function WhyJoinUsSection() {
  return (
    <section className="why-join-us-section">
      <div className="why-join-us-container">
        {/* Left Column - Image */}
        <div className="why-join-us-left">
          <div className="why-join-us-image">
            <img src={coachImage} alt="Coach training young cricket player" />
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="why-join-us-right">
          <h2 className="why-join-heading">Why You Should Join Us</h2>
          <h3 className="why-join-subheading">What We Offer</h3>
          <p className="why-join-description">
            Here at Crics 22Yards Columbus, we believe that everyone has the potential to excel in cricket. Our training programs are designed to boost your physical fitness, enhance your understanding of the game, and build important life skills like teamwork and discipline.
          </p>

          {/* Features Grid */}
          <div className="why-join-features">
            <div className="feature-box">
              <h4 className="feature-title">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 8L18 14L8 20" stroke="#00529C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Tailored Training for All
              </h4>
              <p className="feature-text">Our programs adapt to suit your skill level, from beginners to advanced players, ensuring personalized progress.</p>
            </div>

            <div className="feature-box">
              <h4 className="feature-title">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 8L18 14L8 20" stroke="#00529C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                A Welcoming Atmosphere
              </h4>
              <p className="feature-text">We provide personalized coaching in a supportive environment, focusing on individual growth and a sense of community.</p>
            </div>

            <div className="feature-box">
              <h4 className="feature-title">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 8L18 14L8 20" stroke="#00529C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Advanced Training Technology
              </h4>
              <p className="feature-text">Utilize cutting-edge technology for precise analytics and feedback, enhancing both understanding and performance.</p>
            </div>

            <div className="feature-box">
              <h4 className="feature-title">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 8L18 14L8 20" stroke="#00529C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Comprehensive Skill Development
              </h4>
              <p className="feature-text">Our training covers technical, physical, and mental aspects of cricket, preparing players for all levels of competition.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
