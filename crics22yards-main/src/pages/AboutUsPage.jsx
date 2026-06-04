import React from 'react';
import '../styles/AboutUsPage.css';
import bannerImage from '../assets/10099.webp';
import AboutUsSection from './AboutUsSection';
import VisionMissionSection from './VisionMissionSection';
import WhyJoinUsSection from './WhyJoinUsSection';
import Coaches from '../components/Coaches';
import FAQSection from './FAQSection';
import Footer from '../components/Footer';
import BottomFooter from '../components/BottomFooter';

export default function AboutUsPage() {
  return (
    <div className="about-us-page">
      {/* Hero Banner */}
      <section className="about-banner" style={{ backgroundImage: `url(${bannerImage})` }}>
        <div className="about-banner-overlay"></div>
        <div className="about-banner-content">
          <h1>About Crics 22Yards Academy In Columbus Ohio</h1>
          <div className="breadcrumb">
            <span>Home</span>
            <span className="breadcrumb-separator">—</span>
            <span>About Us</span>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <AboutUsSection />

      {/* Vision & Mission Section */}
      <VisionMissionSection />

      {/* Why Join Us Section */}
      <WhyJoinUsSection />

      {/* Coaches Section */}
      <Coaches />

      {/* FAQ Section */}
      <FAQSection />

      {/* Contact Us Section */}
      <Footer />

      {/* Bottom Footer */}
      <BottomFooter />
    </div>
  );
}
