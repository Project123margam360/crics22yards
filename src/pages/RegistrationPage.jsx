import React from 'react';
import BottomFooter from '../components/BottomFooter';
import '../styles/RegistrationPage.css';

const RegistrationPage = () => {
  return (
    <div className="registration-page-wrapper">
      <div className="registration-page">
        <div className="registration-form-wrapper">
          <iframe
            title="Crics 22Yards Player Registration Form"
            src="https://docs.google.com/forms/d/e/1FAIpQLScUOL5Lg4pTO_6qFHUofafNmUP3JDDeVfMC3QoVWsBUkfTR_Q/viewform?embedded=true"
            width="100%"
            height="3650"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            scrolling="no"
            style={{ display: 'block' }}
          >
            Loading...
          </iframe>
        </div>
      </div>
      <BottomFooter />
    </div>
  );
};

export default RegistrationPage;
