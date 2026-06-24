import React from 'react';
import BottomFooter from '../components/BottomFooter';
import registrationImage from '../assets/unnamed.jpg';
import '../styles/RegistrationPage.css';

const RegistrationPage = () => {
  return (
    <div className="registration-page-wrapper">
      <div className="registration-page">
        <div className="registration-section">
          <div className="registration-content">
            <div className="registration-image-wrapper">
              <img src={registrationImage} alt="Registration" className="registration-image" />
            </div>
            <div className="registration-text-wrapper">
              <h1 className="registration-title">Join Our Academy</h1>
              <p className="registration-description">
                Every great cricketer's journey begins with a dream—a dream to hold the bat with confidence, to run in with fire, to wear discipline like a badge of honor.
                <br /><br />
                🏏 Super Kings Academy is now in Columbus! Where passion meets purpose, talent meets training, and young dreams are shaped into tomorrow's champions.
                <br /><br />
                Whether you're just picking up a bat for the first time or you're an aspiring athlete looking to refine your skills, our academy provides world-class coaching, state-of-the-art facilities, and a nurturing environment where excellence is cultivated every single day. Our experienced coaches are committed to unlocking your potential and helping you become the cricketer you're meant to be.
                <br /><br />
                This is more than just cricket training—it's about building character, developing resilience, and becoming part of a community that celebrates achievement and embraces the beautiful game.
              </p>
              <a href="https://axon22yards.com/join?location=columbus" className="register-now-button" target="_blank" rel="noopener noreferrer">
                Register Now
              </a>
            </div>
          </div>
        </div>
      </div>
      <BottomFooter />
    </div>
  );
};

export default RegistrationPage;
