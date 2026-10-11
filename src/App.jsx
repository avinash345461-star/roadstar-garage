import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import Services from './components/Services';
import FeatureSection from './components/FeatureSection';
import WhyRoadstar from './components/WhyRoadstar';
import CustomerReviews from './components/CustomerReviews';
import SocialSection from './components/SocialSection';
import AboutSection from './components/AboutSection';
import LocationSection from './components/LocationSection';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const handleOpenBooking = (serviceName = '') => {
    setSelectedService(serviceName);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setSelectedService('');
  };

  return (
    <div className="bg-black text-neutral-100 min-h-screen font-sans selection:bg-amber-400/20 selection:text-amber-300 relative overflow-x-hidden">
      {/* Ambient background subtle lighting */}
      <div className="fixed inset-0 bg-ambient-glow pointer-events-none z-0"></div>

      {/* 1. Header Navigation */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      <main className="relative z-10">
        {/* 2. Hero Section */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* 3. Trust Ledger Strip */}
        <TrustStrip />

        {/* 4. Services Specification Table */}
        <Services onSelectService={(serviceName) => handleOpenBooking(serviceName)} />

        {/* 5. Brand Ethos & Standards */}
        <FeatureSection onOpenBooking={() => handleOpenBooking()} />

        {/* 6. Core Pillars */}
        <WhyRoadstar />

        {/* 7. Verified Customer Feedback */}
        <CustomerReviews />

        {/* 8. Digital Ecosystem & 10% Off Incentive */}
        <SocialSection />

        {/* 9. Studio Profile & Spec */}
        <AboutSection onOpenBooking={() => handleOpenBooking()} />

        {/* 10. Location Coordinates */}
        <LocationSection />

        {/* 11. Final Closing CTA */}
        <ContactCTA onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Booking Scheduling Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        selectedService={selectedService}
      />
    </div>
  );
}

