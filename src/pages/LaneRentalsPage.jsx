import React from 'react';
import LaneRentalsHeroSection from './LaneRentalsHeroSection';
import LaneRentalsWhyChooseSection from './LaneRentalsWhyChooseSection';
import LaneRentalsBenefitsSection from './LaneRentalsBenefitsSection';
import LaneRentalsFAQSection from './LaneRentalsFAQSection';
import Footer from '../components/Footer';
import BottomFooter from '../components/BottomFooter';

export default function LaneRentalsPage() {
  return (
    <div className="lane-rentals-page">
      {/* Lane Rentals Hero Section */}
      <LaneRentalsHeroSection />

      {/* Why Choose Us Section */}
      <LaneRentalsWhyChooseSection />

      {/* Benefits Section */}
      <LaneRentalsBenefitsSection />

      {/* FAQ Section */}
      <LaneRentalsFAQSection />

      {/* Registration Section */}
      <Footer />

      {/* Bottom Footer */}
      <BottomFooter />
    </div>
  );
}
