import React from 'react';
import '../styles/HPCProgramSection.css';
import hpcImage from '../assets/11000.webp';

export default function HPCProgramSection() {
  const programs = [
    {
      title: 'Quarterly Cricket Skill Assessments',
      description:
        'Receive detailed performance evaluations, video analysis, and personalized development reports reviewed by our coaching team to help track progress and identify improvement areas.'
    },
    {
      title: 'Customized Fitness & Conditioning Plans',
      description:
        'Improve strength, endurance, agility, mobility, and overall athletic performance through structured fitness programs designed specifically for cricket players.'
    },
    {
      title: 'Advanced Cricket Coaching',
      description:
        'Develop technical excellence in batting, bowling, fielding, match awareness, and game strategy through professional coaching and structured player development programs.'
    },
    {
      title: 'Specialized Batting Development',
      description:
        'Improve batting technique, shot selection, power hitting, range hitting, footwork, and match performance using side-arm specialists, bowling machines, and advanced drills.'
    },
    {
      title: 'Bowling Performance Program',
      description:
        'Enhance bowling mechanics, pace, control, consistency, fitness, and execution through customized coaching and targeted skill development sessions.'
    },
    {
      title: 'Professional Fielding Training',
      description:
        'Build agility, reaction time, catching ability, throwing accuracy, and match-ready fielding skills through dedicated indoor and outdoor training sessions.'
    }
  ];

  return (
    <section className="hpc-program-section">
      <div className="hpc-program-container">
        {/* Left Column */}
        <div className="hpc-program-left">
          <h3 className="hpc-program-label">
            Professional Cricket Coaching Programs
          </h3>

          <h2 className="hpc-program-title">
            High-Performance Cricket Training in Columbus, Ohio
          </h2>

          <div className="hpc-program-list">
            {programs.map((program, index) => (
              <div key={index} className="hpc-program-item">
                <div className="hpc-program-bullet"></div>

                <div className="hpc-program-content">
                  <h4 className="hpc-program-name">{program.title}</h4>
                  <p className="hpc-program-text">{program.description}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            className="hpc-schedule-btn"
            onClick={() =>
              (window.location.href =
                'https://www.crics22yards.com/contact-us')
            }
            aria-label="Schedule a tour of Crics 22Yards Columbus"
          >
            SCHEDULE A TOUR
          </button>
        </div>

        {/* Right Column */}
        <div className="hpc-program-right">
          <div className="hpc-program-image">
            <img
              src={hpcImage}
              alt="Professional cricket coaching and high performance training at Crics 22Yards Columbus Ohio"
            />
          </div>

          <div className="hpc-program-cta">
            <p>
              TRAIN SMARTER. PLAY HARDER. ACHIEVE MORE. Join one of the leading
              cricket coaching programs in Columbus, Ohio and take your game to
              the next level.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
