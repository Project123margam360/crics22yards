import React from 'react';
import '../styles/HPCProgramSection.css';
import hpcImage from '../assets/11000.webp';

export default function HPCProgramSection() {
  const programs = [
    {
      title: 'Quarterly Skill Assessments',
      description: 'Get in-depth video analysis and a personalized performance report every quarter, reviewed by our Head Coach, Harmeet.'
    },
    {
      title: 'Customized Fitness Plans',
      description: 'Benefit from professional fitness assessments and personalized training programs designed to enhance your athletic performance.'
    },
    {
      title: 'Elite Skill-Based Coaching',
      description: 'Take your game to the next level with advanced coaching focused on technical mastery and tactical excellence.'
    },
    {
      title: 'Specialized Batting Training',
      description: 'Develop power hitting and range-hitting techniques. Train at high intensity with side-arm specialists and bowling machines'
    },
    {
      title: 'Bowling Excellence Program',
      description: 'Refine your bowling technique with customized drills. Improve your running technique and sharpen your execution skills.'
    },
    {
      title: 'Dynamic Fielding Sessions',
      description: 'Dedicated fielding practice every Friday. Outdoor sessions prioritized; indoor training when necessary.'
    }
  ];

  return (
    <section className="hpc-program-section">
      <div className="hpc-program-container">
        {/* Left Column */}
        <div className="hpc-program-left">
          <h3 className="hpc-program-label">Our Programs</h3>
          <h2 className="hpc-program-title">Unlock Your Potential with Our High-Performance Center (HPC) Program!</h2>
          
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

          <button className="hpc-schedule-btn">SCHEDULE A TOUR</button>
        </div>

        {/* Right Column */}
        <div className="hpc-program-right">
          <div className="hpc-program-image">
            <img src={hpcImage} alt="Coach training young cricket player" />
          </div>
          <div className="hpc-program-cta">
            <p>TRAIN SMARTER. PLAY HARDER. ACHIEVE MORE. Join the HPC program and experience the difference!</p>
          </div>
        </div>
      </div>
    </section>
  );
}
