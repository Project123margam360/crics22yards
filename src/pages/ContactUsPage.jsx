import React from 'react';
import ContactUsHeroSection from '../components/ContactUsHeroSection';
import ContactUsInfoSection from '../components/ContactUsInfoSection';
import ContactUsFormSection from '../components/ContactUsFormSection';
import BottomFooter from '../components/BottomFooter';

const ContactUsPage = () => {
  return (
    <div>
      <ContactUsHeroSection />
      <ContactUsInfoSection />
      <ContactUsFormSection />
      <BottomFooter />
    </div>
  );
};

export default ContactUsPage;
