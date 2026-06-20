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
      <section
        className="about-banner"
        style={{ backgroundImage: `url(${bannerImage})` }}
        aria-label="About Crics 22Yards Columbus indoor cricket academy"
      >
        <div className="about-banner-overlay"></div>

        <div className="about-banner-content">
          <h1>About Crics 22Yards Columbus Indoor Cricket Academy</h1>

          <div className="breadcrumb">
            <span>Home</span>
            <span className="breadcrumb-separator">—</span>
            <span>About Us</span>
          </div>
        </div>
      </section>

      <AboutUsSection />
      <VisionMissionSection />
      <WhyJoinUsSection />
      <Coaches />
      <FAQSection />
      <Footer />
      <BottomFooter />
    </div>
  );
}
