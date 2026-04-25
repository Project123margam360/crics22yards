import React from 'react';
import SpecialEventsHeroSection from './SpecialEventsHeroSection';
import SpecialEventsBirthdayPartiesSection from './SpecialEventsBirthdayPartiesSection';
import SpecialEventsCorporateEventsSection from './SpecialEventsCorporateEventsSection';
import Footer from '../components/Footer';
import BottomFooter from '../components/BottomFooter';

export default function SpecialEventsPage() {
  return (
    <div className="special-events-page">
      {/* Special Events Hero Section */}
      <SpecialEventsHeroSection />

      {/* Birthday Parties Section */}
      <SpecialEventsBirthdayPartiesSection />

      {/* Corporate Events Section */}
      <SpecialEventsCorporateEventsSection />

      {/* Registration Section */}
      <Footer />

      {/* Bottom Footer */}
      <BottomFooter />
    </div>
  );
}
