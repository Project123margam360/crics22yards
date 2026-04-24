import React from 'react';
import CoachingHeroSection from './CoachingHeroSection';
import HPCProgramSection from './HPCProgramSection';
import KeyFeaturesSection from './KeyFeaturesSection';
import CoachingFAQSection from './CoachingFAQSection';

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
    </div>
  );
}
