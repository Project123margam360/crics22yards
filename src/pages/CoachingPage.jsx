import React from 'react';
import CoachingHeroSection from './CoachingHeroSection';
import HPCProgramSection from './HPCProgramSection';
import KeyFeaturesSection from './KeyFeaturesSection';
import CoachingFAQSection from './CoachingFAQSection';
import Footer from '../components/Footer';
import BottomFooter from '../components/BottomFooter';

export default function CoachingPage() {
  return (
    <div className="coaching-page">
      {/* Coaching Hero Section */}
      <CoachingHeroSection />

      {/* HPC Program Section */}
      <HPCProgramSection />

      {/* Key Features Section */}
      <KeyFeaturesSection />

      {/* FAQ Section */}
      <CoachingFAQSection />

      {/* Registration Section */}
      <Footer />

      {/* Bottom Footer */}
      <BottomFooter />
    </div>
  );
}
