import React from 'react';
import '../styles/WhyJoinUsSection.css';
import coachImage from '../assets/11000.webp';

export default function WhyJoinUsSection() {
  return (
    <section className="why-join-us-section">
      <div className="why-join-us-container">
        <div className="why-join-us-left">
          <div className="why-join-us-image">
            <img
              src={coachImage}
              alt="Cricket coach training young player at Crics 22Yards Columbus Ohio"
            />
          </div>
        </div>

        <div className="why-join-us-right">
          <h2 className="why-join-heading">
            Why Join Crics 22Yards Columbus?
          </h2>

          <h3 className="why-join-subheading">
            Cricket Coaching, Indoor Nets & Player Development
          </h3>

          <p className="why-join-description">
            Crics 22Yards Columbus helps players of all ages improve through
            professional cricket coaching, indoor cricket nets, structured
            training programs, fitness development, and a supportive cricket
            community in Plain City, Ohio.
          </p>

          <div className="why-join-features">
            <div className="feature-box">
              <h4 className="feature-title">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 8L18 14L8 20" stroke="#00529C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Training for All Skill Levels
              </h4>
              <p className="feature-text">
                Programs for beginners, youth players, intermediate cricketers,
                and advanced athletes.
              </p>
            </div>

            <div className="feature-box">
              <h4 className="feature-title">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 8L18 14L8 20" stroke="#00529C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Supportive Cricket Community
              </h4>
              <p className="feature-text">
                A positive environment where players build confidence,
                discipline, teamwork, and love for cricket.
              </p>
            </div>

            <div className="feature-box">
              <h4 className="feature-title">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 8L18 14L8 20" stroke="#00529C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Advanced Indoor Training Facility
              </h4>
              <p className="feature-text">
                Indoor cricket nets, bowling machines, coaching tools, and
                year-round practice opportunities.
              </p>
            </div>

            <div className="feature-box">
              <h4 className="feature-title">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 8L18 14L8 20" stroke="#00529C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Complete Skill Development
              </h4>
              <p className="feature-text">
                Coaching covers batting, bowling, fielding, fitness, game
                awareness, match preparation, and mental strength.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
